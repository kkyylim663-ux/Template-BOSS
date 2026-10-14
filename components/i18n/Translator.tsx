"use client";
import { useEffect, useRef } from "react";
import { useLanguage, type Lang } from "@/context/LanguageContext";
import { EN_DICT } from "@/lib/i18n/dict";
import { EXTRA_DICT, EXACT_DICT } from "@/lib/i18n/dict-extra";

const DICT: Record<string, string> = { ...EN_DICT, ...EXTRA_DICT };

// Longest-first so compound phrases are matched before their shorter
// sub-strings (e.g. "+ 添加新账户" before "添加").
const ZH_KEYS = Object.keys(DICT).sort((a, b) => b.length - a.length);
const HAS_CJK = /[一-鿿]/;

function translateString(src: string): string {
  if (!HAS_CJK.test(src)) return src;
  const trimmed = src.trim();
  if (EXACT_DICT[trimmed] !== undefined) return src.replace(trimmed, EXACT_DICT[trimmed]);
  let out = src;
  for (const key of ZH_KEYS) {
    if (out.indexOf(key) !== -1) out = out.split(key).join(DICT[key]);
  }
  return out;
}

// The true Chinese source text for each live Text node.
const ORIGINAL = new WeakMap<Text, string>();
// What we last wrote into that node, so the mutation observer can tell our
// own echo apart from a genuine re-render by React with new Chinese content.
const LAST_WRITTEN = new WeakMap<Text, string>();

// Re-applies translation for a node we already know about (or are seeing for
// the first time). Always writes the correct text for `lang` — used both for
// an explicit language switch and for freshly-seen nodes.
function translateNode(node: Text, lang: Lang) {
  let original = ORIGINAL.get(node);
  if (original === undefined) {
    original = node.nodeValue ?? "";
    ORIGINAL.set(node, original);
  }
  const target = lang === "en" ? translateString(original) : original;
  if (node.nodeValue !== target) node.nodeValue = target;
  LAST_WRITTEN.set(node, target);
}

function acceptNode(n: Node): number {
  const p = (n as Text).parentElement;
  if (!p) return NodeFilter.FILTER_REJECT;
  if (p.closest("script,style,textarea")) return NodeFilter.FILTER_REJECT;
  if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT;
}

function forEachTextNode(root: Node, fn: (t: Text) => void) {
  if (root.nodeType === Node.TEXT_NODE) {
    if (acceptNode(root) === NodeFilter.FILTER_ACCEPT) fn(root as Text);
    return;
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode });
  let n: Node | null;
  while ((n = walker.nextNode())) fn(n as Text);
}

// Full deliberate re-translation, e.g. right after the user flips the toggle.
function translateAll(root: Node, lang: Lang) {
  forEachTextNode(root, t => translateNode(t, lang));
}

// Mutation-observer path: only react to content React itself changed (not
// our own writes echoing back), then translate it for the current language.
function handleMutated(node: Text, lang: Lang) {
  const current = node.nodeValue ?? "";
  if (LAST_WRITTEN.get(node) === current) return; // our own echo, ignore
  ORIGINAL.set(node, current); // genuine new zh source text from React
  translateNode(node, lang);
}

function walkMutated(root: Node, lang: Lang) {
  forEachTextNode(root, t => handleMutated(t, lang));
}

// Attribute text (placeholder / aria-label / title / alt) is translated too.
const ATTRS = ["placeholder", "aria-label", "title", "alt"];
const ATTR_ORIG = new WeakMap<Element, Record<string, string>>();
const ATTR_LAST = new WeakMap<Element, Record<string, string>>();

function translateAttrs(el: Element, lang: Lang) {
  for (const a of ATTRS) {
    const cur = el.getAttribute(a);
    if (cur === null) continue;
    const orig = ATTR_ORIG.get(el) ?? {};
    const last = ATTR_LAST.get(el) ?? {};
    if (orig[a] === undefined || last[a] !== cur) orig[a] = cur; // genuine new source value
    const target = lang === "en" ? translateString(orig[a]) : orig[a];
    if (cur !== target) el.setAttribute(a, target);
    last[a] = target;
    ATTR_ORIG.set(el, orig);
    ATTR_LAST.set(el, last);
  }
}

function translateAttrTree(root: Node, lang: Lang) {
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const el = root as Element;
  translateAttrs(el, lang);
  el.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach(e => translateAttrs(e, lang));
}

export default function Translator() {
  const { lang } = useLanguage();
  const langRef = useRef(lang);
  langRef.current = lang;

  useEffect(() => {
    translateAll(document.body, lang);
    translateAttrTree(document.body, lang);
  }, [lang]);

  useEffect(() => {
    const obs = new MutationObserver(records => {
      const l = langRef.current;
      for (const rec of records) {
        if (rec.type === "characterData") {
          walkMutated(rec.target, l);
        } else if (rec.type === "attributes") {
          translateAttrs(rec.target as Element, l);
        } else {
          rec.addedNodes.forEach(node => { walkMutated(node, l); translateAttrTree(node, l); });
        }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    return () => obs.disconnect();
  }, []);

  return null;
}

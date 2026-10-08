"use client";
import { useEffect, useRef } from "react";
import { useLanguage, type Lang } from "@/context/LanguageContext";
import { EN_DICT } from "@/lib/i18n/dict";

// Longest-first so compound phrases are matched before their shorter
// sub-strings (e.g. "+ 添加新账户" before "添加").
const ZH_KEYS = Object.keys(EN_DICT).sort((a, b) => b.length - a.length);
const HAS_CJK = /[一-鿿]/;

function translateString(src: string): string {
  if (!HAS_CJK.test(src)) return src;
  let out = src;
  for (const key of ZH_KEYS) {
    if (out.indexOf(key) !== -1) out = out.split(key).join(EN_DICT[key]);
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

export default function Translator() {
  const { lang } = useLanguage();
  const langRef = useRef(lang);
  langRef.current = lang;

  useEffect(() => {
    translateAll(document.body, lang);
  }, [lang]);

  useEffect(() => {
    const obs = new MutationObserver(records => {
      const l = langRef.current;
      for (const rec of records) {
        if (rec.type === "characterData") {
          walkMutated(rec.target, l);
        } else {
          rec.addedNodes.forEach(node => walkMutated(node, l));
        }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => obs.disconnect();
  }, []);

  return null;
}

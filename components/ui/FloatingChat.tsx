"use client";
import Link from "next/link";
import { SOCIALS, SocialCircle } from "@/components/ui/SocialIcons";
import { MessageCircle, X, ChevronRight, ChevronLeft, Ticket, Mail, Disc3, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function SideSocial() {
  const [open, setOpen] = useState(false);
  const links = SOCIALS;
  return (
    <div className="side-social fixed z-[55] flex items-center" style={{ left: 0, top: "40%", transform: `translateX(${open ? 0 : -64}px)`, transition: "transform .25s" }}>
      <div className="flex flex-col" style={{ background: "var(--bg)", borderRadius: "0 12px 12px 0", padding: 12, gap: 12, border: "0.8px solid var(--solid)", borderLeft: 0 }}>
        {links.map(item => (
          <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="flex items-center justify-center">
            <SocialCircle item={item} size={40} />
          </a>
        ))}
      </div>
      <button onClick={() => setOpen(v => !v)} className="flex items-center justify-center" style={{ width: 25, height: 50, background: "var(--gold)", color: "#000", borderRadius: "0 8px 8px 0" }} aria-label="社交">
        {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </div>
  );
}

const FABS = [
  { Icon: Ticket, label: "Scratch", href: "/minigame/scratchcard", bg: "linear-gradient(180deg,#b01f8f,#5a1a8a)" },
  { Icon: Mail, label: "Angpao Rain", href: "/minigame/angpaorain", bg: "linear-gradient(180deg,#ff5b5b,#c4161c)" },
  { Icon: Disc3, label: "Lucky Wheel", href: "/minigame/luckywheel", bg: "linear-gradient(180deg,#2f63f0,#16308f)" },
  { Icon: Target, label: "Mission", href: "/zh-my/mission", bg: "linear-gradient(180deg,#ff9a1f,#c4620c)" },
];

export default function FloatingChat() {
  const [closed, setClosed] = useState(false);
  const [idx, setIdx] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % FABS.length), 3000);
    return () => clearInterval(t);
  }, []);
  const cur = FABS[idx];
  return (
    <>
      {!closed && (
        <div className="fixed z-50 gift-fab" style={{ right: 10, bottom: 150, width: 90, height: 90 }}>
          <div role="button" tabIndex={0} aria-label={cur.label} onClick={() => router.push(cur.href)} className="flex flex-col items-center justify-center cursor-pointer" style={{ width: 90, height: 90, borderRadius: 16, background: cur.bg, color: "#ffd66b", gap: 2, transition: "background .3s" }}>
            <cur.Icon size={40} strokeWidth={1.6} />
            <span style={{ fontSize: 10, fontWeight: 700 }}>{cur.label}</span>
          </div>
          <button onClick={() => setClosed(true)} className="absolute flex items-center justify-center" style={{ top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: "var(--solid)" }} aria-label="关闭">
            <X size={12} />
          </button>
        </div>
      )}
      <Link href="/zh-my/contact-us" className="fixed z-50 flex items-center justify-center chat-fab" style={{ right: 19, bottom: 10, width: 60, height: 60, borderRadius: "50%", background: "var(--gold)", color: "#000", boxShadow: "0 4px 16px rgba(0,0,0,.4)" }} aria-label="在线客服">
        <MessageCircle size={28} />
        <span className="absolute flex items-center justify-center" style={{ top: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: "var(--red)", color: "#fff", fontSize: 10, fontWeight: 700 }}>1</span>
      </Link>
    </>
  );
}

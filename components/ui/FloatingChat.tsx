"use client";
import Link from "next/link";
import { Gift, MessageCircle, X, Facebook, Instagram, Send, Music2, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

export function SideSocial() {
  const [open, setOpen] = useState(false);
  const links = [
    { Icon: Facebook, href: "https://www.facebook.com/BO55official" },
    { Icon: Instagram, href: "https://www.instagram.com/bo55_official" },
    { Icon: Music2, href: "https://www.tiktok.com/@bo55official" },
    { Icon: MessageCircle, href: "https://wa.me/" },
    { Icon: Send, href: "https://t.me/BO55VIP" },
  ];
  return (
    <div className="side-social fixed z-[55] flex items-center" style={{ left: 0, top: "40%", transform: `translateX(${open ? 0 : -64}px)`, transition: "transform .25s" }}>
      <div className="flex flex-col" style={{ background: "var(--bg)", borderRadius: "0 12px 12px 0", padding: 12, gap: 12, border: "0.8px solid var(--solid)", borderLeft: 0 }}>
        {links.map(({ Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--solid)" }}>
            <Icon size={18} />
          </a>
        ))}
      </div>
      <button onClick={() => setOpen(v => !v)} className="flex items-center justify-center" style={{ width: 25, height: 50, background: "var(--gold)", color: "#000", borderRadius: "0 8px 8px 0" }} aria-label="社交">
        {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </div>
  );
}

export default function FloatingChat() {
  const [closed, setClosed] = useState(false);
  return (
    <>
      {!closed && (
        <div className="fixed z-50 float-up" style={{ right: 10, bottom: 150, width: 90, height: 90 }}>
          <div className="flex items-center justify-center" style={{ width: 90, height: 90, borderRadius: 16, background: "linear-gradient(180deg,#ff5b5b,#c4161c)", color: "#ffd66b" }}>
            <Gift size={44} strokeWidth={1.6} />
          </div>
          <button onClick={() => setClosed(true)} className="absolute flex items-center justify-center" style={{ top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: "var(--solid)" }} aria-label="关闭">
            <X size={12} />
          </button>
        </div>
      )}
      <Link href="/zh-my/contact-us" className="fixed z-50 flex items-center justify-center float-up" style={{ right: 19, bottom: 10, width: 60, height: 60, borderRadius: "50%", background: "var(--gold)", color: "#000", boxShadow: "0 4px 16px rgba(0,0,0,.4)" }} aria-label="在线客服">
        <MessageCircle size={28} />
        <span className="absolute flex items-center justify-center" style={{ top: 2, right: 2, width: 18, height: 18, borderRadius: "50%", background: "var(--red)", color: "#fff", fontSize: 10, fontWeight: 700 }}>1</span>
      </Link>
    </>
  );
}

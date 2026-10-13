"use client";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Info, Maximize, RotateCw, X, Gift } from "lucide-react";

const GAMES: Record<string, { title: string; sub: string; bg: string; accent: string }> = {
  scratchcard: { title: "SCRATCH TO WIN", sub: "Scratch & win instant prizes", bg: "linear-gradient(180deg,#b01f8f 0%,#5a1a8a 55%,#2b0f55 100%)", accent: "#ffc233" },
  angpaorain: { title: "ANGPAO RAIN", sub: "Catch the red packets", bg: "linear-gradient(180deg,#d8283c 0%,#b01a2e 60%,#f3a39a 100%)", accent: "#ffd56b" },
  luckywheel: { title: "LUCKY WHEEL", sub: "Spin the wheel to win", bg: "linear-gradient(180deg,#1f4fd8 0%,#16308f 60%,#0b1445 100%)", accent: "#ffc233" },
};

export default function MiniGamePage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = use(params);
  const g = GAMES[game];
  const router = useRouter();
  const [sheet, setSheet] = useState<null | "prize" | "winner">(null);
  const [toast, setToast] = useState("");

  if (!g) {
    return (
      <div className="flex items-center justify-center" style={{ minHeight: "100dvh" }}>
        <span style={{ fontSize: 20, fontWeight: 600 }}>Page Not Found</span>
      </div>
    );
  }

  const play = () => {
    setToast("You have 0 game(s) available");
    setTimeout(() => setToast(""), 1800);
  };
  const IconBtn = ({ children, onClick, label }: { children: React.ReactNode; onClick?: () => void; label: string }) => (
    <button aria-label={label} onClick={onClick} className="flex items-center justify-center" style={{ width: 32, height: 32, color: "#fff" }}>{children}</button>
  );

  return (
    <div className="fixed inset-0 flex flex-col" style={{ zIndex: 2000, background: "#090c1e" }}>
      <div className="flex items-center justify-between flex-shrink-0" style={{ height: 75, padding: "0 20px", background: "#050a1c" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Logo" style={{ height: 80, width: "auto", margin: "-10px 0 -10px -16px" }} />
        <div className="flex items-center" style={{ gap: 8 }}>
          <IconBtn label="规则" onClick={() => setSheet("prize")}><Info size={20} /></IconBtn>
          <IconBtn label="全屏" onClick={() => document.documentElement.requestFullscreen?.().catch(() => {})}><Maximize size={20} /></IconBtn>
          <IconBtn label="刷新" onClick={() => router.refresh()}><RotateCw size={20} /></IconBtn>
          <IconBtn label="关闭" onClick={() => router.push("/zh-my")}><X size={22} /></IconBtn>
        </div>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center" style={{ background: g.bg, overflow: "hidden" }}>
        <Gift size={90} strokeWidth={1.2} style={{ color: g.accent, opacity: 0.35, position: "absolute", top: "10%", left: "8%", transform: "rotate(-20deg)" }} />
        <Gift size={110} strokeWidth={1.2} style={{ color: g.accent, opacity: 0.3, position: "absolute", bottom: "8%", right: "6%", transform: "rotate(18deg)" }} />
        <h1 style={{ fontSize: "clamp(36px,9vw,64px)", fontWeight: 900, textAlign: "center", color: g.accent, textShadow: "0 4px 0 rgba(0,0,0,.35)", lineHeight: 1.05, padding: "0 16px" }}>{g.title}</h1>
        <p style={{ fontSize: 14, marginTop: 8, opacity: 0.85 }}>{g.sub}</p>

        <button onClick={play} style={{ marginTop: 56, width: "min(78%,360px)", height: 56, borderRadius: 28, background: "linear-gradient(180deg,#ff6a6a,#d8283c)", border: "2px solid rgba(255,214,107,.8)", fontSize: 20, fontWeight: 800 }}>
          PLAY NOW
        </button>
        <span style={{ marginTop: 10, fontSize: 14 }}>You have 0 game(s) available</span>

        <div className="absolute flex justify-between" style={{ left: 16, right: 16, bottom: 20 }}>
          <button onClick={() => setSheet("prize")} style={{ padding: "6px 18px", borderRadius: 14, background: "rgba(0,0,0,.35)", border: "1px solid rgba(255,214,107,.7)", color: g.accent, fontSize: 12, fontWeight: 700 }}>PRIZE LIST</button>
          <button onClick={() => setSheet("winner")} style={{ padding: "6px 18px", borderRadius: 14, background: "rgba(0,0,0,.35)", border: "1px solid rgba(255,214,107,.7)", color: g.accent, fontSize: 12, fontWeight: 700 }}>WINNER PRIZE</button>
        </div>

        {toast && <div style={{ position: "absolute", top: 24, padding: "8px 16px", borderRadius: 8, background: "rgba(0,0,0,.75)", fontSize: 13 }}>{toast}</div>}

        {sheet && (
          <div className="absolute inset-0 flex items-end" style={{ background: "rgba(0,0,0,.55)" }} onClick={() => setSheet(null)}>
            <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxHeight: "70%", overflowY: "auto", background: "var(--bg)", borderRadius: "16px 16px 0 0", padding: 16 }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                <span style={{ fontSize: 16, fontWeight: 700 }}>{sheet === "prize" ? "PRIZE LIST" : "WINNER PRIZE"}</span>
                <button onClick={() => setSheet(null)}><X size={18} /></button>
              </div>
              {(sheet === "prize" ? ["MYR 1,000", "MYR 100", "MYR 38", "MYR 8", "MYR 3"] : ["+60******123 · MYR 38", "+60******457 · MYR 8", "+60******981 · MYR 100"]).map(r => (
                <div key={r} style={{ padding: "10px 12px", marginBottom: 6, borderRadius: 8, background: "var(--card)", fontSize: 14, fontWeight: 600 }}>{r}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

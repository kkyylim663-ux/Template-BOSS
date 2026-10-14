"use client";
import { useEffect, useState } from "react";
import { X, ChevronRight, Bitcoin, Zap, Users } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

// Layout measured on public/popup/v2/frame.webp (1024x1536); all boxes below are % of that canvas.
const W = 1024, H = 1536;
const px = (l: number, t: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: `${(l / W) * 100}%`, top: `${(t / H) * 100}%`, width: `${(w / W) * 100}%`, height: `${(h / H) * 100}%`,
});

const COLS = [99, 517];
const ROWS = [407, 661, 910];
const CARD_W = 398, CARD_H = 226;

// Logo is a 889x253 trimmed PNG; its glyph centre sits at 44.97% of its width, so align that to the nameplate centre.
const PLATE_CX = 507, PLATE_CY = 170, LOGO_W = 370, LOGO_H = LOGO_W * (253 / 889), GLYPH_CX = 0.4497;

const tiles = [
  { icon: "cashback", n: 15.5, dec: 1, suf: "%", title: "Weekly Cashback" },
  { icon: "rebate", n: 1.4, dec: 1, suf: "%", title: "Daily Turnover Rebate" },
  { icon: "slot", n: 300, dec: 0, suf: "%", title: "Welcome Slot Bonus" },
  { icon: "mall", big: "Reward Mall", title: "Earn Points & Redeem Rewards" },
  { icon: "daily", big: "Daily Rewards", title: "Missions · Minigames · Deposit Streak · Angpau" },
  { icon: "vip", big: "VIP Upgrade Bonus", title: "Exclusive 1-to-1 Telegram Group" },
] as const;

const strip = [
  { Icon: Bitcoin, a: "Crypto / USDT", b: "Accepted" },
  { Icon: Zap, a: "Quick", b: "Online Payment" },
  { Icon: Users, a: "Referral Bonus", b: "88 or 38 + 0.2% Rebate" },
];

const shadow = "0 1px 2px rgba(0,0,0,.9), 0 0 8px rgba(0,0,0,.6)";

function CountUp({ to, dec, suf, delay }: { to: number; dec: number; suf: string; delay: number }) {
  const [v, setV] = useState(to);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now() + delay;
    setV(0);
    const tick = (now: number) => {
      const p = Math.min(Math.max((now - start) / 900, 0), 1);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, delay]);
  return <>{v.toFixed(dec)}{suf}</>;
}

export default function RewardsModalV2() {
  const { closeModal, openLogin } = useModal();
  const { user } = useAuth();
  const router = useRouter();
  const [closing, setClosing] = useState(false);

  const close = () => { setClosing(true); setTimeout(closeModal, 220); };
  const explore = () => {
    closeModal();
    if (user) router.push("/zh-my/promotion");
    else setTimeout(openLogin, 100);
  };

  return (
    <div className={`modal-backdrop rv2-backdrop${closing ? " rv2-out" : ""}`} onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <div className="rv2-canvas relative" style={{ aspectRatio: `${W} / ${H}`, containerType: "inline-size" }}>
        <button
          onClick={close}
          aria-label="关闭"
          className="absolute flex items-center justify-center"
          style={{ top: "0.6%", right: "0.2%", width: 30, height: 30, borderRadius: "50%", background: "rgba(8,18,52,.92)", border: "1px solid rgba(255,200,80,.6)", zIndex: 5 }}
        >
          <X size={15} />
        </button>

        {/* frame */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/popup/v2/frame.webp" alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

        {/* logo, optically centred on the nameplate */}
        <div
          className="rv2-logo"
          style={{ ...px(PLATE_CX - GLYPH_CX * LOGO_W, PLATE_CY - LOGO_H / 2, LOGO_W, LOGO_H) }}
        >
          <span className="rv2-shine" aria-hidden />
        </div>

        {/* title */}
        <div className="flex items-center justify-center" style={{ ...px(120, 238, 780, 66), fontSize: "5.2cqw", fontWeight: 900, fontStyle: "italic", lineHeight: 1, whiteSpace: "nowrap", color: "#fff", textShadow: "0 2px 0 #06122e, 0 0 14px rgba(70,150,255,.6)" }}>
          REWARDS&nbsp;<span style={{ color: "#ffb21a" }}>UPDATE</span>
        </div>
        <div className="flex items-center justify-center" style={{ ...px(190, 312, 645, 48), fontSize: "2.3cqw", fontWeight: 800, whiteSpace: "nowrap", textShadow: shadow }}>
          MORE REWARDS.&nbsp;<span style={{ color: "#ffb21a" }}>MORE VALUE.</span>&nbsp;EVERY DAY.
        </div>

        {/* cards */}
        {tiles.map((t, i) => {
          const isNum = "n" in t;
          return (
            <button key={t.icon} onClick={explore} className="rv2-card flex items-center" style={{ ...px(COLS[i % 2], ROWS[Math.floor(i / 2)], CARD_W, CARD_H), animationDelay: `${0.35 + i * 0.08}s`, textAlign: "left", cursor: "pointer" }} aria-label={isNum ? `${t.n}% ${t.title}` : t.big}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/popup/v2/icon-${t.icon}.webp`} alt="" draggable={false} style={{ position: "absolute", left: "3%", top: "50%", transform: "translateY(-50%)", width: "37%", height: "auto" }} />
              <div style={{ marginLeft: "41%", width: "46%", minWidth: 0 }}>
                <div style={{ fontSize: isNum ? "5.4cqw" : "2.7cqw", fontWeight: 900, lineHeight: 1.05, color: isNum ? "#ffc533" : "#fff", textShadow: shadow }}>
                  {isNum ? <CountUp to={t.n} dec={t.dec} suf={t.suf} delay={450 + i * 80} /> : t.big}
                </div>
                <div style={{ fontSize: "1.9cqw", lineHeight: 1.2, color: "#dfe6ff", marginTop: isNum ? 0 : "0.4cqw", textShadow: shadow }}>{t.title}</div>
              </div>
              <span className="flex items-center justify-center" style={{ position: "absolute", right: "3.5%", top: "50%", transform: "translateY(-50%)", width: "4.2cqw", height: "4.2cqw", borderRadius: "50%", border: "1px solid #ffb21a", background: "rgba(10,20,60,.7)", color: "#ffb21a" }}>
                <ChevronRight size={11} />
              </span>
            </button>
          );
        })}

        {/* info bar */}
        <div className="flex items-center justify-around" style={{ ...px(160, 1164, 693, 83), padding: "0 1.5%" }}>
          {strip.map(({ Icon, a, b }) => (
            <div key={a} className="flex items-center" style={{ gap: "0.8cqw", minWidth: 0 }}>
              <Icon style={{ width: "3.2cqw", height: "3.2cqw", color: "#ffb21a", flexShrink: 0 }} />
              <div style={{ fontSize: "1.8cqw", lineHeight: 1.15, textShadow: shadow, whiteSpace: "nowrap" }}>
                <div style={{ fontWeight: 800 }}>{a}</div>
                <div style={{ color: "#c9d3f5" }}>{b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button onClick={explore} className="rv2-cta flex items-center justify-center" style={{ ...px(274, 1276, 465, 126), gap: "1cqw", color: "#2a1400", fontSize: "2.6cqw", fontWeight: 900, whiteSpace: "nowrap", cursor: "pointer", borderRadius: 999 }}>
          EXPLORE YOUR REWARDS
          <span className="flex items-center justify-center" style={{ width: "3.6cqw", height: "3.6cqw", borderRadius: "50%", background: "#2a1400", color: "#ffc533" }}><ChevronRight size={12} /></span>
        </button>
        <div className="flex items-center justify-center" style={{ ...px(250, 1410, 524, 36), fontSize: "1.6cqw", color: "#e8edff", textShadow: shadow, whiteSpace: "nowrap" }}>
          Log in and see what&apos;s waiting for you today.
        </div>
      </div>
    </div>
  );
}

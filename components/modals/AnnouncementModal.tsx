"use client";
import { X, ChevronRight, Bitcoin, Zap, Users } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

// Layout is measured on the 1199x1312 artwork (public/popup/rewards.webp); all boxes are % of the image.
const COLS = [{ l: 14.7, w: 34.7 }, { l: 50.8, w: 34.5 }];
const ROWS = [32.7, 47.5, 62.1];
const PANEL_H = 13.4;

const tiles = [
  { big: "15.5%", title: "Weekly Cashback", num: true },
  { big: "1.4%", title: "Daily Turnover Rebate", num: true },
  { big: "300%", title: "Welcome Slot Bonus", num: true },
  { big: "Reward Mall", title: "Earn Points & Redeem Rewards" },
  { big: "Daily Rewards", title: "Missions · Minigames · Deposit Streak · Angpau" },
  { big: "VIP Upgrade Bonus", title: "Exclusive 1-to-1 Telegram Group" },
];

const strip = [
  { Icon: Bitcoin, a: "Crypto / USDT", b: "Accepted" },
  { Icon: Zap, a: "Quick", b: "Online Payment" },
  { Icon: Users, a: "Referral Bonus", b: "88 or 38 + 0.2% Rebate" },
];

const abs = (l: number, t: number, w: number, h: number): React.CSSProperties => ({ position: "absolute", left: `${l}%`, top: `${t}%`, width: `${w}%`, height: `${h}%` });
const shadow = "0 1px 2px rgba(0,0,0,.9), 0 0 8px rgba(0,0,0,.6)";

export default function AnnouncementModal() {
  const { closeModal, openLogin } = useModal();
  const { user } = useAuth();
  const router = useRouter();

  const explore = () => {
    closeModal();
    if (user) router.push("/zh-my/promotion");
    else setTimeout(openLogin, 100);
  };

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className="relative" style={{ width: "100%", maxWidth: 520, aspectRatio: "1199 / 1312", containerType: "inline-size" }}>
        <button
          onClick={closeModal}
          aria-label="关闭"
          className="absolute flex items-center justify-center"
          style={{ top: -6, right: -4, width: 28, height: 28, borderRadius: "50%", background: "rgba(20,24,58,.9)", border: "1px solid rgba(255,255,255,.25)", zIndex: 3 }}
        >
          <X size={14} />
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/popup/rewards.webp" alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

        {/* logo removed (absolutely positioned, no layout impact) */}

        {/* title */}
        <div className="flex items-center justify-center" style={{ ...abs(20.8, 16, 58.3, 9.9), fontSize: "5.1cqw", fontWeight: 900, fontStyle: "italic", letterSpacing: ".01em", lineHeight: 1, whiteSpace: "nowrap", textShadow: "0 2px 0 #06122e, 0 0 14px rgba(70,150,255,.55)", color: "#fff" }}>
          REWARDS&nbsp;<span style={{ color: "#ffb21a" }}>UPDATE</span>
        </div>
        <div className="flex items-center justify-center" style={{ ...abs(22.5, 26.9, 55, 4), fontSize: "1.9cqw", fontWeight: 800, whiteSpace: "nowrap", textShadow: shadow }}>
          MORE REWARDS.&nbsp;<span style={{ color: "#ffb21a" }}>MORE VALUE.</span>&nbsp;EVERY DAY.
        </div>

        {/* tiles */}
        {tiles.map((t, i) => {
          const c = COLS[i % 2];
          return (
            <button key={t.big} onClick={explore} className="flex items-center" style={{ ...abs(c.l, ROWS[Math.floor(i / 2)], c.w, PANEL_H), textAlign: "left", cursor: "pointer" }} aria-label={t.big}>
              <div style={{ marginLeft: "43%", width: "44%", minWidth: 0 }}>
                <div style={{ fontSize: t.num ? "4.3cqw" : "2.2cqw", fontWeight: 900, lineHeight: 1.05, color: t.num ? "#ffc533" : "#fff", textShadow: shadow }}>{t.big}</div>
                <div style={{ fontSize: "1.65cqw", lineHeight: 1.2, color: "#dfe6ff", marginTop: t.num ? 0 : "0.4cqw", textShadow: shadow }}>{t.title}</div>
              </div>
              <span className="flex items-center justify-center" style={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", width: "4.4cqw", height: "4.4cqw", borderRadius: "50%", border: "1px solid #ffb21a", background: "rgba(10,20,60,.7)", color: "#ffb21a" }}>
                <ChevronRight size={11} />
              </span>
            </button>
          );
        })}

        {/* info bar */}
        <div className="flex items-center justify-around" style={{ ...abs(23.8, 77.3, 52, 4.9), padding: "0 1.2%" }}>
          {strip.map(({ Icon, a, b }) => (
            <div key={a} className="flex items-center" style={{ gap: "0.8cqw", minWidth: 0 }}>
              <Icon style={{ width: "3cqw", height: "3cqw", color: "#ffb21a", flexShrink: 0 }} />
              <div style={{ fontSize: "1.35cqw", lineHeight: 1.1, textShadow: shadow }}>
                <div style={{ fontWeight: 800 }}>{a}</div>
                <div style={{ color: "#c9d3f5" }}>{b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button onClick={explore} className="flex items-center justify-center" style={{ ...abs(31.2, 83.7, 37.7, 8.8), gap: "1cqw", color: "#1a0d00", fontSize: "2.35cqw", fontWeight: 900, whiteSpace: "nowrap", cursor: "pointer" }}>
          EXPLORE YOUR REWARDS
          <span className="flex items-center justify-center" style={{ width: "3.4cqw", height: "3.4cqw", borderRadius: "50%", background: "#1a0d00", color: "#ffc533" }}><ChevronRight size={12} /></span>
        </button>
        <div className="flex items-center justify-center" style={{ ...abs(26, 92.6, 48, 3), fontSize: "1.45cqw", color: "#e8edff", textShadow: shadow, whiteSpace: "nowrap" }}>
          Log in and see what&apos;s waiting for you today.
        </div>
      </div>
    </div>
  );
}

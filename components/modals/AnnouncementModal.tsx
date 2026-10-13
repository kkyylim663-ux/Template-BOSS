"use client";
import { X, ChevronRight, Coins, Percent, Gift, Crown, ClipboardCheck, Cpu, Bitcoin, Zap, Users } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const tiles = [
  { Icon: Coins, big: "15.5%", title: "Weekly Cashback" },
  { Icon: Percent, big: "1.4%", title: "Daily Turnover Rebate" },
  { Icon: Cpu, big: "300%", title: "Welcome Slot Bonus" },
  { Icon: Gift, big: "Reward Mall", title: "Earn Points & Redeem Rewards", small: true },
  { Icon: ClipboardCheck, big: "Daily Rewards", title: "Missions · Minigames · Deposit Streak · Angpau", small: true },
  { Icon: Crown, big: "VIP Upgrade Bonus", title: "Exclusive 1-to-1 Telegram Group", small: true },
];

const strip = [
  { Icon: Bitcoin, a: "Crypto / USDT", b: "Accepted" },
  { Icon: Zap, a: "Quick", b: "Online Payment" },
  { Icon: Users, a: "Referral Bonus", b: "88 or 38 + 0.2% Rebate" },
];

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
      <div className="relative" style={{ width: "100%", maxWidth: 480 }}>
        <button
          onClick={closeModal}
          aria-label="关闭"
          className="absolute flex items-center justify-center"
          style={{ top: -14, right: -6, width: 28, height: 28, borderRadius: "50%", background: "var(--solid)", zIndex: 2 }}
        >
          <X size={14} />
        </button>

        <div style={{ background: "linear-gradient(180deg,#14183a 0%,#0b0e22 100%)", border: "1px solid rgba(255,173,0,.35)", borderRadius: 20, padding: "20px 16px 18px", boxShadow: "0 0 40px rgba(255,140,0,.25)" }}>
          <div className="text-center" style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 26, fontWeight: 900, fontStyle: "italic", letterSpacing: 1 }}>BO55</div>
            <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.05, color: "#fff" }}>
              REWARDS <span style={{ color: "var(--gold)" }}>UPDATE</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4 }}>
              MORE REWARDS. <span style={{ color: "var(--gold)" }}>MORE VALUE.</span> EVERY DAY.
            </div>
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>Enjoy more benefits every time you play.</div>
          </div>

          <div className="grid grid-cols-2" style={{ gap: 8 }}>
            {tiles.map(({ Icon, big, title, small }) => (
              <div key={big} className="flex items-center" style={{ gap: 8, padding: "8px 10px", borderRadius: 12, background: "rgba(57,59,86,.55)", border: "1px solid rgba(255,173,0,.25)", minHeight: 60 }}>
                <Icon size={30} strokeWidth={1.6} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <div className="flex-1" style={{ minWidth: 0 }}>
                  <div style={{ fontSize: small ? 13 : 20, fontWeight: 800, lineHeight: 1.1, color: small ? "#fff" : "var(--gold)" }}>{big}</div>
                  <div style={{ fontSize: 10, lineHeight: 1.2, color: "var(--muted)" }}>{title}</div>
                </div>
                <ChevronRight size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between" style={{ gap: 6, marginTop: 8, padding: "8px 10px", borderRadius: 12, background: "rgba(57,59,86,.55)", border: "1px solid rgba(255,173,0,.25)" }}>
            {strip.map(({ Icon, a, b }) => (
              <div key={a} className="flex items-center" style={{ gap: 6 }}>
                <Icon size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <div style={{ fontSize: 9, lineHeight: 1.2 }}>
                  <div style={{ fontWeight: 700 }}>{a}</div>
                  <div style={{ color: "var(--muted)" }}>{b}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center" style={{ marginTop: 12, gap: 4 }}>
            <button onClick={explore} className="flex items-center justify-center" style={{ gap: 6, width: "78%", height: 40, borderRadius: 20, background: "linear-gradient(180deg,#ffc233,#ff8a00)", color: "#000", fontSize: 14, fontWeight: 800 }}>
              EXPLORE YOUR REWARDS <ChevronRight size={16} />
            </button>
            <div style={{ fontSize: 10, color: "var(--muted)" }}>Log in and see what&apos;s waiting for you today.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

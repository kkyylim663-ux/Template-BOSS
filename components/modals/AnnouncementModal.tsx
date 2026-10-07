"use client";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const steps = [
  { num: 1, icon: "🎁", title: "查看", desc: "免费积分、促销活动、任务和红包" },
  { num: 2, icon: "🎮", title: "游玩", desc: "存款（如有需要）并游玩合资格游戏" },
  { num: 3, icon: "💰", title: "领取", desc: "5% 现金返水、任务奖励及红包" },
  { num: 4, icon: "⭐", title: "收集", desc: "赚取积分（1 积分 = SGD 1）" },
  { num: 5, icon: "👑", title: "兑换", desc: "使用奖励并享受 VIP 专属福利" },
];

export default function AnnouncementModal() {
  const { closeModal } = useModal();

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className="modal-box p-0" style={{ maxWidth: 520 }}>
        {/* Header */}
        <div
          className="p-6 text-center"
          style={{ background: "linear-gradient(135deg, #1a0a40 0%, #2a1060 100%)", borderRadius: "14px 14px 0 0" }}
        >
          <div className="text-2xl font-black mb-1" style={{ color: "var(--gold)" }}>BO55</div>
          <div className="text-base font-bold mb-0.5" style={{ color: "var(--text-primary)" }}>HOW TO ENJOY</div>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>Check Rewards · Play Smart · Claim More</div>
        </div>

        {/* Steps */}
        <div className="p-6 grid grid-cols-5 gap-3">
          {steps.map(s => (
            <div key={s.num} className="flex flex-col items-center text-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-main)" }}
              >
                {s.icon}
              </div>
              <div className="text-xs font-bold" style={{ color: "var(--gold-text)" }}>{s.title}</div>
              <div className="text-[10px] leading-tight" style={{ color: "var(--text-muted)" }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="px-6 pb-5 text-center">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Play More · Earn More · Be VIP ❤
          </p>
          <button className="btn-primary mt-4 w-full" onClick={closeModal}>
            开始游玩
          </button>
        </div>

        <button className="absolute top-4 right-4 btn-ghost" onClick={closeModal}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

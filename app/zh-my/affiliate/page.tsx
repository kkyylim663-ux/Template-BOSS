"use client";
import { Users, TrendingUp, Wallet, BarChart3, ImageIcon } from "lucide-react";
import { Ph } from "@/components/ui/bo";
import { useModal } from "@/context/ModalContext";

const perks = [
  { Icon: Users, t: "客户推荐", d: "分享专属链接，邀请新玩家加入" },
  { Icon: TrendingUp, t: "高额被动收入", d: "按下线净盈利获得持续佣金" },
  { Icon: Wallet, t: "快速结算", d: "佣金每月准时结算到账" },
  { Icon: BarChart3, t: "实时报表", d: "随时查看推荐人数与收益" },
];

export default function AffiliatePage() {
  const { openLogin, openRegister } = useModal();
  return (
    <div className="flex flex-col" style={{ gap: 16, marginBottom: 16 }}>
      <Ph radius={16} style={{ height: 306 }} iconSize={56}>
        <div className="absolute flex flex-col" style={{ left: 48, top: "50%", transform: "translateY(-50%)", gap: 12 }}>
          <span style={{ fontSize: 28, fontWeight: 800, color: "#fff" }}>BO55 代理计划</span>
          <span style={{ fontSize: 16, color: "rgba(255,255,255,.8)" }}>高额被动收入，从今天开始</span>
          <div className="flex" style={{ gap: 10 }}>
            <button className="btn-dark" style={{ width: 96 }} onClick={openLogin}>登录</button>
            <button className="btn-gold" style={{ width: 96 }} onClick={openRegister}>注册</button>
          </div>
        </div>
      </Ph>
      <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 12 }}>
        {perks.map(({ Icon, t, d }) => (
          <div key={t} className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: 20, gap: 8 }}>
            <Icon size={32} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: 18, fontWeight: 600 }}>{t}</span>
            <span style={{ fontSize: 14, color: "var(--muted-3)" }}>{d}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 12 }}>
        {["老虎机", "真人娱乐场", "体育"].map(p => (
          <div key={p} className="ph flex-col" style={{ height: 180, borderRadius: 12, gap: 8 }}>
            <ImageIcon size={28} strokeWidth={1.4} />
            <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.5)" }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

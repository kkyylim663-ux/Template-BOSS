"use client";
import Link from "next/link";
import { Search, Banknote } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { REWARD_ITEMS } from "@/lib/mock/rewards";
import { Ph } from "@/components/ui/bo";

export default function RewardPage() {
  const { user, isLoggedIn } = useAuth();
  const { openLogin } = useModal();

  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <div className="flex items-center justify-between" style={{ background: "var(--card)", padding: 8, minHeight: 76 }}>
        <div className="flex flex-col">
          <span style={{ fontSize: 20, fontWeight: 600 }}>我的积分</span>
          <span style={{ fontSize: 18, fontWeight: 600, color: "var(--gold)" }}>{(user?.points ?? 0).toFixed(2)}</span>
        </div>
        <Link href="/zh-my/mission" className="btn-dark" style={{ width: 100, height: 40 }}>赚取积分</Link>
      </div>

      <div className="flex flex-col" style={{ background: "var(--card)", padding: 8, gap: 8 }}>
        <div className="relative">
          <Search size={18} className="absolute" style={{ left: 9, top: 9, color: "var(--muted-2)" }} />
          <input className="input" placeholder="搜索商品" style={{ paddingLeft: 34 }} />
        </div>
        <div className="flex items-center" style={{ height: 40 }}>
          <input className="input flex-1" placeholder="最低积分" />
          <span style={{ fontSize: 12, fontWeight: 600, padding: "0 4px" }}>到</span>
          <input className="input flex-1" placeholder="最高积分" />
        </div>
        <button className="btn-gold btn-lg">搜索</button>
      </div>

      <Link href="/zh-my/account/mypromo" className="flex items-center" style={{ background: "var(--card)", borderRadius: 8, padding: "20px 28px", gap: 28 }}>
        <span className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 12, background: "var(--gold)", color: "#000", flexShrink: 0 }}>
          <Banknote size={28} />
        </span>
        <span className="flex flex-col" style={{ gap: 4 }}>
          <span style={{ fontSize: 16, fontWeight: 600 }}>兑换积分</span>
          <span style={{ fontSize: 14, color: "var(--muted-3)" }}>将您的积分兑换成现金</span>
        </span>
      </Link>

      <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 5 }}>
        {REWARD_ITEMS.map(item => (
          <div key={item.id} className="flex flex-col" style={{ background: "var(--card)", borderRadius: 8, padding: 8 }}>
            <Ph style={{ aspectRatio: "257 / 231" }} radius={8} />
            <span style={{ fontSize: 14, fontWeight: 600, height: 45, marginTop: 8, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
              {item.name}
            </span>
            <span className="flex items-baseline" style={{ height: 29, gap: 4 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "var(--gold)" }}>{item.points.toLocaleString()}</span>
              <span style={{ fontSize: 12, fontWeight: 600 }}>积分</span>
            </span>
            <button className="btn-dark btn-lg" onClick={() => { if (!isLoggedIn) openLogin(); }}>兑换</button>
          </div>
        ))}
      </div>
    </div>
  );
}

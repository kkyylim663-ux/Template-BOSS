"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, ChevronsUpDown } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { REWARD_ITEMS, REWARD_CATEGORIES } from "@/lib/mock/rewards";

export default function RewardPage() {
  const { user, isLoggedIn } = useAuth();
  const { openLogin } = useModal();

  const [lo, setLo] = useState("");
  const [hi, setHi] = useState("");
  const [cat, setCat] = useState("全部");
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState({ lo: 0, hi: Infinity, cat: "全部" });
  const items = REWARD_ITEMS.filter(i => i.points >= q.lo && i.points <= q.hi && (q.cat === "全部" || i.category === q.cat));
  const num = (v: string, d: number) => (v.trim() === "" || isNaN(+v) ? d : +v);

  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <div className="flex items-center justify-between" style={{ background: "rgba(57,59,86,.22)", padding: 8, minHeight: 76 }}>
        <div className="flex items-center" style={{ gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mission/avatar.webp" alt="" draggable={false} style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover" }} />
          <div className="flex flex-col">
            <span style={{ fontSize: 20, fontWeight: 600, lineHeight: "30px" }}>我的积分</span>
            <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px" }}>{(user?.points ?? 0).toFixed(2)}</span>
          </div>
        </div>
        <Link href="/zh-my/mission" className="btn-dark" style={{ width: 100, height: 40 }}>赚取积分</Link>
      </div>

      <div className="flex flex-col" style={{ background: "rgba(57,59,86,.22)", padding: 8, gap: 8 }}>
        <div className="relative">
          <button type="button" className="input flex items-center justify-between" style={{ textAlign: "left", cursor: "pointer" }} onClick={() => setOpen(v => !v)}>
            <span style={{ color: cat === "全部" ? "var(--muted-2)" : "#fff" }}>{cat}</span>
            <ChevronsUpDown size={16} style={{ color: "var(--muted-2)" }} />
          </button>
          {open && (
            <div className="absolute" style={{ left: 0, right: 0, top: 42, zIndex: 20, background: "var(--solid)", borderRadius: 8, padding: 4, boxShadow: "0 8px 24px rgba(0,0,0,.5)" }}>
              {REWARD_CATEGORIES.map(c => (
                <button key={c} type="button" className="flex items-center" onClick={() => { setCat(c); setOpen(false); }} style={{ width: "100%", height: 38, padding: "0 12px", borderRadius: 6, fontSize: 14, fontWeight: 600, textAlign: "left", background: c === cat ? "rgba(255,255,255,.12)" : "transparent" }}>{c}</button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center" style={{ height: 36 }}>
          <input className="input flex-1" inputMode="numeric" placeholder="最低" value={lo} onChange={e => setLo(e.target.value)} />
          <span style={{ fontSize: 12, fontWeight: 600, padding: "0 4px" }}>到</span>
          <input className="input flex-1" inputMode="numeric" placeholder="最高" value={hi} onChange={e => setHi(e.target.value)} />
        </div>
        <button className="btn-gold btn-lg" onClick={() => { setQ({ lo: num(lo, 0), hi: num(hi, Infinity), cat }); setOpen(false); }}>搜索</button>
      </div>

      <Link href="/zh-my/account/mypromo" className="flex items-center justify-between" style={{ background: "rgba(57,59,86,.22)", borderRadius: 8, padding: "18px 16px 18px 16px", minHeight: 76 }}>
        <span className="flex items-center" style={{ gap: 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/reward/redeem-points-icon.svg" alt="" width={40} height={40} style={{ width: 40, height: 40, marginLeft: 8 }} />
          <span className="flex flex-col" style={{ gap: 4 }}>
            <span style={{ fontSize: 18, fontWeight: 500, lineHeight: "22px" }}>兑换积分</span>
            <span style={{ fontSize: 14, lineHeight: "18px" }}>将您的积分兑换成现金</span>
          </span>
        </span>
        <ChevronRight size={18} />
      </Link>

      <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 5 }}>
        {items.length === 0 && <div className="col-span-2 lg:col-span-4 flex items-center justify-center" style={{ height: 160, fontSize: 14 }}>未找到记录</div>}
        {items.map(item => (
          <div key={item.id} className="flex flex-col" style={{ background: "rgba(57,59,86,.22)", borderRadius: 8, padding: 8 }}>
            <div style={{ aspectRatio: "178 / 159", borderRadius: 8, overflow: "hidden", backgroundImage: "url(/reward/bg.webp)", backgroundSize: "cover" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/reward/${item.id}.webp`} alt={item.name} draggable={false} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <span style={{ fontSize: 16, fontWeight: 600, height: 45, lineHeight: "22.5px", marginTop: 8, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
              {item.name}
            </span>
            <span className="flex items-baseline" style={{ height: 29, gap: 4, marginTop: 8 }}>
              <span style={{ fontSize: 20, fontWeight: 600 }}>{item.points.toLocaleString()}</span>
              <span style={{ fontSize: 12, fontWeight: 600 }}>积分</span>
            </span>
            <button className="btn-dark btn-lg" style={{ marginTop: 8 }} onClick={() => { if (!isLoggedIn) openLogin(); }}>兑换</button>
          </div>
        ))}
      </div>
    </div>
  );
}

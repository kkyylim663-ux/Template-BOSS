"use client";
import { useState } from "react";
import { Crown, ChevronLeft, ChevronRight, Wallet, TrendingUp, Gem, ArrowDownUp, Banknote, Percent, Sparkles } from "lucide-react";
import { VIP_LEVELS } from "@/lib/mock/vip";
import { Seg } from "@/components/ui/bo";
import { useAuth } from "@/context/AuthContext";

const CATS: [string, keyof (typeof VIP_LEVELS)[number] | null][] = [
  ["老虎机", "rebateSlot"], ["真人娱乐场", "rebateLive"], ["体育", "rebateSport"], ["电子竞技", "rebateEsport"],
  ["捕鱼", "rebateFishing"], ["彩票", null], ["快速游戏", "rebateSlot"], ["电子游戏", "rebateArcade"],
  ["扑克", "rebatePoker"], ["弹珠", "rebatePlinko"], ["斗鸡", "rebateCockfight"], ["赛马", null], ["热门活动", null],
];

const fmt = (n: number) => n.toLocaleString("en-US");

// Muted bronze -> gold -> platinum progression, keeping the same dark-navy/gold
// mood as the real site instead of a full rainbow hue rotation.
const LEVEL_TINTS = [
  "#5a4a2e", "#6b4f2a", "#7a5c2e", "#8a6a2e", "#9c7a2e",
  "#ad8a2e", "#c0982e", "#d4a62e", "#e0b23a", "#f0c04a",
];

function HeaderDeco({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center" style={{ gap: 12, height: 16, fontSize: 16, fontWeight: 600 }}>
      <span style={{ width: 85, height: 2, background: "linear-gradient(90deg, transparent, var(--gold))" }} />
      {children}
      <span style={{ width: 85, height: 2, background: "linear-gradient(90deg, var(--gold), transparent)" }} />
    </div>
  );
}

export default function VipPage() {
  const { user } = useAuth();
  const [idx, setIdx] = useState(0);
  const [tab, setTab] = useState<"rebate" | "limit">("rebate");
  const lv = VIP_LEVELS[idx];
  const cur = user?.vipLevel ?? "PREMIUM";

  const LevelCard = ({ i, big }: { i: number; big?: boolean }) => {
    const l = VIP_LEVELS[(i + VIP_LEVELS.length) % VIP_LEVELS.length];
    return (
      <div className="flex flex-col justify-between flex-shrink-0" style={{
        width: big ? "42%" : "33%", aspectRatio: "2 / 1", borderRadius: 12, padding: "23px 28px",
        background: `linear-gradient(135deg, ${LEVEL_TINTS[(i + VIP_LEVELS.length) % VIP_LEVELS.length]}, #0f1225)`,
        border: big ? "1px solid rgba(255,196,64,.4)" : "1px solid transparent",
        opacity: big ? 1 : 0.55,
      }}>
        <span style={{ fontSize: big ? 28 : 22, fontWeight: 800, fontStyle: "italic" }}>{l.name}</span>
        <div className="flex" style={{ gap: 24 }}>
          <div><div style={{ fontSize: 14, fontWeight: 700 }}>0 / {fmt(l.turnoverReq)}</div><div style={{ fontSize: 12 }}>流水要求</div></div>
          <div><div style={{ fontSize: 14, fontWeight: 700 }}>0 / {fmt(l.depositReq)}</div><div style={{ fontSize: 12 }}>存款要求</div></div>
        </div>
      </div>
    );
  };

  const Stat = ({ Icon, v, l }: { Icon: React.ElementType; v: string; l: string }) => (
    <div className="flex items-center" style={{ background: "var(--card)", borderRadius: 12, padding: 8, gap: 8 }}>
      <Icon size={28} style={{ color: "var(--gold)", flexShrink: 0 }} />
      <div style={{ fontSize: 14 }}><div style={{ fontWeight: 700 }}>{v}</div><div>{l}</div></div>
    </div>
  );
  const Benefit = ({ Icon, v, l }: { Icon: React.ElementType; v: string; l: string }) => (
    <div className="flex items-center" style={{ gap: 8 }}>
      <Icon size={28} style={{ color: "var(--gold)", flexShrink: 0 }} />
      <div style={{ fontSize: 14 }}><div style={{ fontWeight: 700 }}>{v}</div><div style={{ fontSize: 12 }}>{l}</div></div>
    </div>
  );

  return (
    <div className="flex flex-col" style={{ gap: 16, marginBottom: 16 }}>
      <div style={{ background: "var(--card)", borderRadius: 12, padding: "12px 0" }}>
        <div className="flex items-center justify-center" style={{ gap: 12 }}>
          <button onClick={() => setIdx(i => (i + 9) % 10)} aria-label="上一级" className="flex items-center" style={{ color: "var(--gold)" }}><ChevronLeft size={28} /></button>
          <div className="flex items-center justify-center flex-1 overflow-hidden" style={{ gap: 12 }}>
            <LevelCard i={idx - 1} />
            <LevelCard i={idx} big />
            <LevelCard i={idx + 1} />
          </div>
          <button onClick={() => setIdx(i => (i + 1) % 10)} aria-label="下一级" className="flex items-center" style={{ color: "var(--gold)" }}><ChevronRight size={28} /></button>
        </div>
        <div className="flex justify-center" style={{ gap: 8, marginTop: 12 }}>
          {VIP_LEVELS.map((_, i) => (
            <span key={i} style={{ width: i === idx ? 16 : 4, height: 4, borderRadius: 8, background: "#fff", opacity: i === idx ? 1 : 0.5 }} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 12 }}>
        <div className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: 12, gap: 12 }}>
          <HeaderDeco>当前级别 <span style={{ color: "var(--gold)" }}>{cur}</span></HeaderDeco>
          <div className="grid grid-cols-2" style={{ gap: 12 }}>
            <Stat Icon={Wallet} v="0.00" l="累计存款" />
            <Stat Icon={TrendingUp} v="0.00" l="实际投注流水" />
          </div>
        </div>
        <div className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: 12, gap: 12 }}>
          <HeaderDeco>{lv.name} 福利</HeaderDeco>
          <div className="grid grid-cols-2" style={{ gap: 12 }}>
            <Benefit Icon={ArrowDownUp} v={fmt(lv.turnoverReq)} l="流水要求" />
            <Benefit Icon={Banknote} v={fmt(lv.depositReq)} l="存款要求" />
            <Benefit Icon={Gem} v={fmt(lv.dailyWithdrawLimit)} l="每日提款限制" />
            <Benefit Icon={Percent} v="0.2 %" l="流水返水积分" />
          </div>
        </div>
      </div>

      <div className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: 12, gap: 12 }}>
        <div className="flex items-center" style={{ gap: 8, fontSize: 16, fontWeight: 600 }}>
          <Sparkles size={20} style={{ color: "var(--gold)" }} /> VIP特权
        </div>
        <Seg style={{ width: "50%", minWidth: 280 }} value={tab} onChange={setTab} items={[{ key: "rebate", label: "现金返水" }, { key: "limit", label: "交易限制" }]} />
        <div className="overflow-x-auto" style={{ borderRadius: 12 }}>
          <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 12, minWidth: 900 }}>
            <thead>
              <tr style={{ background: "var(--card)", height: 37, fontSize: 14 }}>
                <th style={{ textAlign: "left", padding: "0 12px", fontWeight: 600 }}>等级</th>
                {VIP_LEVELS.map(l => (
                  <th key={l.name} style={{ fontWeight: 600, color: l.name === cur ? "var(--gold)" : "#fff" }}>{l.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tab === "rebate"
                ? CATS.map(([label, key], r) => (
                    <tr key={label} style={{ height: 37, background: r % 2 ? "var(--card)" : "transparent", textAlign: "center" }}>
                      <td style={{ textAlign: "left", padding: "0 12px", fontWeight: 600 }}>{label}</td>
                      {VIP_LEVELS.map(l => <td key={l.name}>{key ? `${l[key]}%` : "0%"}</td>)}
                    </tr>
                  ))
                : [
                    ["流水要求", (l: (typeof VIP_LEVELS)[number]) => fmt(l.turnoverReq)],
                    ["存款要求", (l: (typeof VIP_LEVELS)[number]) => fmt(l.depositReq)],
                    ["每日提款限制", (l: (typeof VIP_LEVELS)[number]) => fmt(l.dailyWithdrawLimit)],
                    ["返现", (l: (typeof VIP_LEVELS)[number]) => `${l.cashbackRate}%`],
                  ].map(([label, f], r) => (
                    <tr key={label as string} style={{ height: 37, background: r % 2 ? "var(--card)" : "transparent", textAlign: "center" }}>
                      <td style={{ textAlign: "left", padding: "0 12px", fontWeight: 600 }}>{label as string}</td>
                      {VIP_LEVELS.map(l => <td key={l.name}>{(f as (l: (typeof VIP_LEVELS)[number]) => string)(l)}</td>)}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

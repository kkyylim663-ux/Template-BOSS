"use client";
import { Target, Gift, CheckCircle2, Coins, Star, Search, ClipboardList, User } from "lucide-react";
import { MISSIONS } from "@/lib/mock/missions";
import { useAuth } from "@/context/AuthContext";
import { Ph, SectionTitle, CtrlPair, useScroller } from "@/components/ui/bo";
import RequireAuth from "@/components/ui/RequireAuth";

const groups = Array.from(new Set(MISSIONS.map(m => m.group)));

function Group({ name }: { name: string }) {
  const { ref, prev, next } = useScroller();
  const items = MISSIONS.filter(m => m.group === name);
  return (
    <section className="flex flex-col" style={{ gap: 12, marginTop: 16 }}>
      <div className="flex items-center justify-between" style={{ height: 30 }}>
        <SectionTitle icon={ClipboardList}>{name}</SectionTitle>
        <CtrlPair square onPrev={prev} onNext={next} />
      </div>
      <div ref={ref} className="scroll-x flex" style={{ gap: 12 }}>
        {items.map(m => {
          const pct = Math.min(100, (m.current / m.target) * 100);
          return (
            <div key={m.id} className="flex flex-col flex-shrink-0" style={{ width: 200, height: 355, background: "var(--card)", borderRadius: 12 }}>
              <Ph style={{ height: 105, borderRadius: "12px 12px 0 0", flexShrink: 0 }} iconSize={24} />
              <div className="flex" style={{ height: 56, padding: "0 8px", marginTop: 7 }}>
                <span style={{ paddingTop: 4 }}><Target size={16} style={{ color: "var(--gold)" }} /></span>
                <div className="flex flex-col" style={{ padding: "0 12px", minWidth: 0 }}>
                  <span style={{ fontSize: 16, fontWeight: 600, lineHeight: "24px" }}>任务</span>
                  <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 0", color: "var(--muted-3)", lineHeight: "14px" }}>{m.label}</span>
                </div>
              </div>
              <div className="flex" style={{ height: 56, padding: "0 8px" }}>
                <span style={{ paddingTop: 4 }}><Gift size={16} style={{ color: "var(--gold)" }} /></span>
                <div className="flex flex-col" style={{ padding: "0 12px" }}>
                  <span style={{ fontSize: 16, fontWeight: 600, lineHeight: "24px" }}>奖励</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--gold)" }}>{m.reward} <span style={{ fontSize: 12, color: "#fff" }}>{m.unit}</span></span>
                </div>
              </div>
              <div style={{ padding: "0 8px", marginTop: "auto", marginBottom: 12 }}>
                <div className="flex justify-between" style={{ fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                  <span>{pct.toFixed(2)}%</span>
                  <span style={{ color: "var(--muted-3)" }}>({m.current.toFixed(2)}/{m.target.toFixed(2)})</span>
                </div>
                <div style={{ height: 6, borderRadius: 6, background: "var(--solid)", overflow: "hidden", marginBottom: 10 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: "var(--gold)" }} />
                </div>
                <button className="btn-dark w-full" disabled={pct < 100}>兑换</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Mission() {
  const { user } = useAuth();
  const stats = [
    { Icon: Coins, t: "积分奖励", v: (user?.points ?? 0).toFixed(2) },
    { Icon: CheckCircle2, t: "已完成任务", v: "0" },
    { Icon: Star, t: "免费积分奖励", v: "0" },
  ];
  return (
    <div style={{ marginBottom: 16 }}>
      <div className="flex" style={{ minHeight: 162, background: "var(--card)", borderRadius: 12 }}>
        <div className="flex flex-col items-center justify-center" style={{ width: 166, padding: 12, flexShrink: 0 }}>
          <span className="flex items-center justify-center" style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#ffd66b,#f28c00)", color: "#000" }}>
            <User size={36} />
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, paddingTop: 4 }}>{user?.username}</span>
        </div>
        <div className="grid grid-cols-3 flex-1" style={{ padding: "16px 0" }}>
          {stats.map(({ Icon, t, v }, i) => (
            <div key={t} className="flex flex-col" style={{ padding: 12, borderLeft: i ? "0.8px solid var(--solid)" : "0.8px solid var(--solid)" }}>
              <Icon size={24} style={{ color: "var(--gold)" }} />
              <span style={{ fontSize: 12, fontWeight: 600, paddingTop: 12 }}>{t}</span>
              <span style={{ fontSize: 20, fontWeight: 600, paddingTop: 8 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center flex-wrap" style={{ gap: 5, marginTop: 16, minHeight: 48 }}>
        <div className="relative" style={{ flex: "1 1 60%" }}>
          <input className="input" placeholder="搜索任务" style={{ paddingRight: 34 }} />
          <Search size={18} className="absolute" style={{ right: 9, top: 9, color: "var(--muted-2)" }} />
        </div>
        <div className="flex" style={{ gap: 5, flex: "1 1 35%" }}>
          <button className="btn-dark flex-1">领取所有积分</button>
          <button className="btn-gold flex-1">领取所有积分</button>
        </div>
      </div>

      {groups.map(g => <Group key={g} name={g} />)}
    </div>
  );
}

export default function MissionPage() {
  return <RequireAuth><Mission /></RequireAuth>;
}

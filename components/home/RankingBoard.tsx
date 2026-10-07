"use client";
import { BarChart3, Gamepad2, User } from "lucide-react";
import { RANKING } from "@/lib/mock/home";
import { SectionTitle } from "@/components/ui/bo";

const cols = "repeat(5, minmax(0, 1fr))";

export default function RankingBoard() {
  return (
    <section style={{ marginTop: 32 }}>
      <SectionTitle icon={BarChart3}>排名</SectionTitle>
      <div style={{ marginTop: 12, background: "var(--card)", borderRadius: 12, padding: 20, border: "0.8px solid var(--card)" }}>
        <div className="grid" style={{ gridTemplateColumns: cols, height: 28, background: "var(--card)", borderRadius: 4, padding: "5px 8px", fontSize: 14, fontWeight: 600, textAlign: "center" }}>
          {["游戏", "玩家", "倍数", "投注金额", "派彩"].map(h => <span key={h}>{h}</span>)}
        </div>
        <div className="overflow-hidden" style={{ height: 360, marginTop: 6 }}>
          <div className="marquee-y" style={{ gap: 16, animationDuration: "30s" }}>
            {[...RANKING, ...RANKING].map((r, i) => (
              <div key={i} className="grid items-center flex-shrink-0" style={{ gridTemplateColumns: cols, height: 55, background: "var(--card)", borderRadius: 8, padding: "5px 8px", textAlign: "center" }}>
                <span className="flex items-center justify-center" style={{ gap: 8, fontSize: 14, fontWeight: 600 }}>
                  <span className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--solid)", flexShrink: 0 }}><Gamepad2 size={16} /></span>
                  <span className="truncate">{r.game}</span>
                </span>
                <span className="flex items-center justify-center" style={{ gap: 8, fontSize: 14, fontWeight: 600 }}>
                  <span className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--solid)", flexShrink: 0 }}><User size={16} /></span>
                  <span className="truncate">{r.player}</span>
                </span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{r.mul}</span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>MYR {r.bet}</span>
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--gold)" }}>MYR {r.pay}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

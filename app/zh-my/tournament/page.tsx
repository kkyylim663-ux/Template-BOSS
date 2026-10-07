"use client";
import { Clock } from "lucide-react";
import { TOURNAMENTS } from "@/lib/mock/tournaments";
import { Ph } from "@/components/ui/bo";

export default function TournamentPage() {
  return (
    <div className="flex flex-col" style={{ gap: 16, marginBottom: 16 }}>
      {TOURNAMENTS.map(t => (
        <div key={t.id} style={{ background: "var(--card)" }}>
          <Ph style={{ aspectRatio: "1108 / 277" }} iconSize={40} />
          <div style={{ padding: "0 16px" }}>
            <div className="flex flex-col" style={{ gap: 8, paddingTop: 8 }}>
              <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "28px" }}>{t.title}</span>
              <div className="flex items-center justify-between" style={{ paddingBottom: 12 }}>
                <span className="flex items-center" style={{ gap: 6, fontSize: 14, fontWeight: 600, color: "var(--muted-3)" }}>
                  <Clock size={14} /> {t.status === "active" ? "进行中" : "即将开始"} · {t.provider}
                </span>
                <div className="flex" style={{ gap: 10 }}>
                  <button className="btn-dark" style={{ width: 96 }}>申请</button>
                  <button className="btn-gold" style={{ width: 96 }}>详情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";
import { Clock } from "lucide-react";
import { useState } from "react";
import DetailSheet, { PROMO_TERMS, type DetailData } from "@/components/ui/DetailSheet";
import { TOURNAMENTS } from "@/lib/mock/tournaments";

export default function TournamentPage() {
  const [detail, setDetail] = useState<DetailData | null>(null);
  return (
    <div className="flex flex-col" style={{ gap: 16, marginBottom: 16 }}>
      {TOURNAMENTS.map(t => (
        <div key={t.id} style={{ background: "var(--card)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/tournament/${t.id}.webp`} alt={t.title} draggable={false} style={{ display: "block", width: "100%", aspectRatio: "1108 / 277", objectFit: "cover" }} />
          <div style={{ padding: "0 16px" }}>
            <div className="flex flex-col" style={{ gap: 8, paddingTop: 8 }}>
              <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "28px" }}>{t.title}</span>
              <div className="flex items-center justify-between" style={{ paddingBottom: 12 }}>
                <span className="flex items-center" style={{ gap: 6, fontSize: 14, fontWeight: 600, color: "var(--muted-3)" }}>
                  <Clock size={14} /> {t.status === "active" ? "进行中" : "即将开始"} · {t.provider}
                </span>
                <div className="flex" style={{ gap: 10 }}>
                  <button className="btn-dark" style={{ width: 96 }}>申请</button>
                  <button className="btn-gold" style={{ width: 96 }} onClick={() => setDetail({
                    title: t.title, img: `/tournament/${t.id}.webp`, period: t.status === "active" ? "进行中" : "即将开始",
                    intro: `${t.title}（${t.provider}）：在指定游戏中累积有效投注与倍数，按排行榜名次瓜分奖池。名次与奖励以活动页面公布为准。`,
                    rules: ["点击“申请”报名参加本次比赛。", `仅限 ${t.provider} 指定游戏的有效投注计入排名。`, "排名按活动规则统计，奖励在比赛结束后派发。", "奖励须完成相应流水后方可提款。"],
                    terms: PROMO_TERMS,
                  })}>详情</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <DetailSheet data={detail} onClose={() => setDetail(null)} />
    </div>
  );
}

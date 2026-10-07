"use client";
import { Info, ImageIcon } from "lucide-react";
import { PageBanner } from "@/components/ui/bo";

const boxes = [
  ["2,663+", "赌场评论", "完整且公正的报告，涵盖您需要了解的顶级在线赌场的一切信息"],
  ["8,100$", "独家奖金", "在哪里以及如何领取价值数千的在线赌场巨额奖金"],
  ["1,881+", "游戏评论", "深入了解当今最热门的在线老虎机和桌上游戏"],
  ["3,437+", "支付与软件评论", "全面分析各种支付方式和软件，包括安全性评估"],
  ["7,033+", "行业文章", "深入了解博彩行业的运作方式及当前趋势"],
  ["1,662+", "精彩赠品活动", "通过精彩的赠品优惠赢取丰厚奖品和诱人奖金"],
];

const article = [
  ["关于我们", "这是一份为您量身定制的 BO55 “关于我们” (About Us) 的介绍。"],
  ["欢迎来到 BO55：简单、快捷、稳定", "BO55 致力于为马来西亚玩家提供安全、公平、流畅的在线娱乐体验。"],
  ["我们的使命", "以玩家为中心，提供丰富游戏、优质优惠与 24/7 专业客服。"],
  ["为什么选择我们", "持牌经营、独立认证、快速存取款，让每一位会员安心游戏。"],
];

export default function AboutUs() {
  return (
    <div style={{ marginBottom: 16 }}>
      <PageBanner title="关于我们" icon={Info} />
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 12, marginBottom: 16 }}>
        {boxes.map(([amt, t, d]) => (
          <div key={t} className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: 20, minHeight: 311 }}>
            <div className="ph" style={{ height: 160, borderRadius: 12, marginBottom: 16 }}><ImageIcon size={32} strokeWidth={1.4} /></div>
            <span style={{ fontSize: 20, fontWeight: 600, color: "var(--gold)" }}>{amt}</span>
            <span style={{ fontSize: 18, fontWeight: 600 }}>{t}</span>
            <span style={{ fontSize: 14, color: "var(--muted-3)" }}>{d}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col" style={{ padding: "4px 8px", gap: 16 }}>
        <span style={{ fontSize: 24, fontWeight: 600 }}>关于BO55</span>
        <div style={{ fontSize: 14 }}>
          {article.map(([h, p]) => (
            <div key={h}>
              <h2 style={{ fontSize: 21, fontWeight: 600, margin: "12px 0" }}>{h}</h2>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "12px 0" }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

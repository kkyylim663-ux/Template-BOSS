"use client";
import { ShieldCheck, BadgeCheck, Zap } from "lucide-react";

const boxes = [
  ["2,663+", "赌场评论", "完整且公正的报告，涵盖您需要了解的顶级在线赌场的一切信息"],
  ["8,100$", "独家奖金", "在哪里以及如何领取价值数千的在线赌场巨额奖金"],
  ["1,881+", "游戏评论", "深入了解当今最热门的在线老虎机和桌上游戏"],
  ["3,437+", "支付与软件评论", "全面分析各种支付方式和软件，包括安全性评估"],
  ["7,033+", "行业文章", "深入了解博彩行业的运作方式及当前趋势"],
  ["1,662+", "精彩赠品活动", "通过精彩的赠品优惠赢取丰厚奖品和诱人奖金"],
];

const article = [
  ["关于我们", "这是一份为您量身定制的 Test123 “关于我们” (About Us) 的介绍。"],
  ["欢迎来到 Test123：简单、快捷、稳定", "Test123 致力于为马来西亚玩家提供安全、公平、流畅的在线娱乐体验。"],
  ["我们的使命", "以玩家为中心，提供丰富游戏、优质优惠与 24/7 专业客服。"],
  ["为什么选择我们", "持牌经营、独立认证、快速存取款，让每一位会员安心游戏。"],
];

export default function AboutUs() {
  return (
    <div style={{ marginBottom: 16 }}>
      <div className="relative overflow-hidden ab-hero" style={{ borderRadius: 16, marginBottom: 16, aspectRatio: "2204 / 608", background: "#060b20", containerType: "inline-size" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/about/banner.webp" alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="absolute flex flex-col justify-center ab-text" style={{ left: "4.5%", top: 0, bottom: 0, width: "46%", gap: "1.6cqw" }}>
          <h1 style={{ margin: 0, fontSize: "5.4cqw", fontWeight: 900, fontStyle: "italic", lineHeight: 1.05, background: "linear-gradient(180deg,#ffffff 0%,#cfe4ff 45%,#7fb6ff 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", filter: "drop-shadow(0 2px 0 rgba(6,20,60,.9)) drop-shadow(0 0 12px rgba(60,150,255,.55))" }}>关于我们</h1>
          <p style={{ margin: 0, fontSize: "2.1cqw", fontWeight: 700, color: "#ffc533", textShadow: "0 1px 6px rgba(0,0,0,.8)" }}>简单 · 快捷 · 稳定</p>
          <div className="flex flex-wrap" style={{ gap: "0.9cqw" }}>
            {[[ShieldCheck, "持牌经营"], [BadgeCheck, "独立认证"], [Zap, "快速存取款"]].map(([Ic, t]) => { const I = Ic as typeof ShieldCheck; return (
              <span key={t as string} className="inline-flex items-center" style={{ gap: "0.5cqw", padding: "0.5cqw 1.2cqw", borderRadius: 999, fontSize: "1.45cqw", fontWeight: 700, background: "rgba(8,20,60,.62)", border: "1px solid rgba(90,170,255,.45)", backdropFilter: "blur(2px)" }}>
                <I style={{ width: "1.8cqw", height: "1.8cqw", color: "#5ec1ff" }} />{t as string}
              </span>); })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 ab-grid" style={{ gap: 12, marginBottom: 16 }}>
        {boxes.map(([amt, t, d], i) => (
          <div key={t} className="flex flex-col items-center text-center ab-card" style={{ background: "rgba(57,59,86,.22)", borderRadius: 12, padding: 20, minHeight: 310 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/about/${i + 1}.webp`} alt={t} draggable={false} className="ab-ico" style={{ width: 150, height: 150, objectFit: "contain", marginBottom: 12 }} />
            <span style={{ fontSize: 20, fontWeight: 600 }}>{amt}</span>
            <span style={{ fontSize: 18, fontWeight: 600, margin: "4px 0 8px" }}>{t}</span>
            <span style={{ fontSize: 14, fontWeight: 400 }}>{d}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col" style={{ padding: "4px 8px", gap: 16 }}>
        <span style={{ fontSize: 24, fontWeight: 600 }}>关于Test123</span>
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

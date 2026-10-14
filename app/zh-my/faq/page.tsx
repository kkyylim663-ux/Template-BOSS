"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, UserPlus, Wallet, Gift, ShieldCheck } from "lucide-react";

const faqs = [
  ["1. 什么是 TitanX？", "TitanX 是面向马来西亚玩家的在线娱乐平台，提供老虎机、真人娱乐场、体育等多种游戏。"],
  ["2. 如何下载 TitanX App？", "使用手机浏览器打开官网，选择“添加到主屏幕”即可。"],
  ["3. 如何联系客户支持？", "可通过在线客服、WhatsApp、Telegram 或电子邮件 24/7 联系我们。"],
  ["4. 我可以使用哪些支付方式进行存款和提款？", "支持 Quick Pay、银行转账、电子钱包、加密货币及话费充值。"],
  ["5. 如何注册？", "点击右上角“注册”，填写用户名、手机号码与密码即可。"],
  ["6. 如何重置密码？", "在登录窗口点击“忘记密码”，或联系在线客服协助。"],
  ["7. 什么是可证明公平 (Provably Fair)？", "一种让玩家可以独立验证每局结果公平性的技术。"],
  ["8. 我注册帐号后多久可以开始游戏？", "注册并完成首次存款后即可立即开始游戏。"],
  ["9. 我的帐号与个人资料安全吗？", "我们采用加密技术与多重安全措施保护您的数据。"],
  ["10. 我可以在这个平台玩到哪些游戏供应商的产品？", "包括 Pragmatic Play、Evolution、JILI、Spadegaming 等 100+ 供应商。"],
];

const CATS: [string, React.ElementType, number[]][] = [
  ["全部", Search, []],
  ["注册与登录", UserPlus, [1, 4, 5, 7]],
  ["存款与提款", Wallet, [3]],
  ["优惠与活动", Gift, [0, 9]],
  ["账户与安全", ShieldCheck, [2, 5, 6, 8]],
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState(0);
  const [kw, setKw] = useState("");
  const shown = faqs.map((f, i) => [f, i] as const).filter(([f, i]) => (cat === 0 || CATS[cat][2].includes(i)) && (!kw.trim() || (f[0] + f[1]).toLowerCase().includes(kw.trim().toLowerCase())));
  return (
    <div style={{ marginBottom: 16 }}>
      <div className="relative overflow-hidden ab-hero" style={{ borderRadius: 16, marginBottom: 16, aspectRatio: "2204 / 608", background: "#060b20", containerType: "inline-size" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/about/help.webp" alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="absolute flex flex-col justify-center ab-text" style={{ left: "4.5%", top: 0, bottom: 0, width: "46%", gap: "1.6cqw" }}>
          <h1 style={{ margin: 0, fontSize: "5.4cqw", fontWeight: 900, fontStyle: "italic", lineHeight: 1.05, background: "linear-gradient(180deg,#ffffff 0%,#cfe4ff 45%,#7fb6ff 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", filter: "drop-shadow(0 2px 0 rgba(6,20,60,.9)) drop-shadow(0 0 12px rgba(60,150,255,.55))" }}>常见问题</h1>
          <p style={{ margin: 0, fontSize: "2cqw", fontWeight: 700, color: "#ffc533", textShadow: "0 1px 6px rgba(0,0,0,.8)" }}>不知道流程？在这里自己就能找到答案</p>
          <div className="flex flex-wrap" style={{ gap: "0.9cqw" }}>
            {["注册", "存取款", "账户"].map(t => (
              <span key={t} className="inline-flex items-center" style={{ padding: "0.5cqw 1.4cqw", borderRadius: 999, fontSize: "1.45cqw", fontWeight: 700, background: "rgba(8,20,60,.62)", border: "1px solid rgba(90,170,255,.45)" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative" style={{ marginBottom: 12 }}>
        <Search size={18} className="absolute" style={{ left: 14, top: 13, color: "var(--muted-2)" }} />
        <input className="input" style={{ paddingLeft: 42, height: 44, borderRadius: 12 }} placeholder="搜索问题，例如：注册、存款、密码" value={kw} onChange={e => { setKw(e.target.value); setOpen(null); }} />
      </div>
      <div className="scroll-x flex" style={{ gap: 8, marginBottom: 12 }}>
        {CATS.map(([label, Ic], i) => { const I = Ic as typeof Search; return (
          <button key={label} onClick={() => { setCat(i); setOpen(null); }} className="inline-flex items-center flex-shrink-0" style={{ gap: 6, height: 36, padding: "0 14px", borderRadius: 12, fontSize: 14, fontWeight: 600, background: cat === i ? "var(--solid)" : "var(--card)", border: `0.8px solid ${cat === i ? "#fff" : "var(--solid)"}` }}>
            <I size={15} style={{ color: cat === i ? "var(--gold)" : "inherit" }} />{label}
          </button>); })}
      </div>
      <div className="flex flex-col lg:flex-row items-start" style={{ gap: 20 }}>
        <div className="flex-1 w-full" style={{ padding: "4px 8px" }}>
          {shown.length === 0 && <div className="flex items-center justify-center" style={{ height: 120, fontSize: 14, color: "var(--muted-3)" }}>没有找到相关问题</div>}
          {shown.map(([[q, a], i]) => (
            <div key={q} style={{ background: "var(--card)", borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
              <button className="w-full flex items-center justify-between text-left" style={{ minHeight: 42, padding: "10px 16px", fontSize: 14, fontWeight: 600 }} onClick={() => setOpen(open === i ? null : i)}>
                {q}
                <ChevronDown size={16} style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }} />
              </button>
              {open === i && <div style={{ padding: "0 16px 12px", fontSize: 14, color: "var(--muted-3)" }}>{a}</div>}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[368px] flex-shrink-0">
          <div className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: 24, gap: 8 }}>
            <span style={{ fontSize: 20, fontWeight: 600 }}>没有找到您想要的内容</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>别犹豫，联系我们吧！我们会为您找到答案</span>
            <Link href="/zh-my/contact-us" className="btn-gold" style={{ height: 38, marginTop: 8 }}>联系我们</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { PageBanner } from "@/components/ui/bo";

const faqs = [
  ["1. 什么是 BO55？", "BO55 是面向马来西亚玩家的在线娱乐平台，提供老虎机、真人娱乐场、体育等多种游戏。"],
  ["2. 如何下载 BO55 App？", "使用手机浏览器打开官网，选择“添加到主屏幕”即可。"],
  ["3. 如何联系客户支持？", "可通过在线客服、WhatsApp、Telegram 或电子邮件 24/7 联系我们。"],
  ["4. 我可以使用哪些支付方式进行存款和提款？", "支持 Quick Pay、银行转账、电子钱包、加密货币及话费充值。"],
  ["5. 如何注册？", "点击右上角“注册”，填写用户名、手机号码与密码即可。"],
  ["6. 如何重置密码？", "在登录窗口点击“忘记密码”，或联系在线客服协助。"],
  ["7. 什么是可证明公平 (Provably Fair)？", "一种让玩家可以独立验证每局结果公平性的技术。"],
  ["8. 我注册帐号后多久可以开始游戏？", "注册并完成首次存款后即可立即开始游戏。"],
  ["9. 我的帐号与个人资料安全吗？", "我们采用加密技术与多重安全措施保护您的数据。"],
  ["10. 我可以在这个平台玩到哪些游戏供应商的产品？", "包括 Pragmatic Play、Evolution、JILI、Spadegaming 等 100+ 供应商。"],
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ marginBottom: 16 }}>
      <PageBanner title="常见问题" icon={HelpCircle} />
      <div className="flex flex-col lg:flex-row items-start" style={{ gap: 20 }}>
        <div className="flex-1 w-full" style={{ padding: "4px 8px" }}>
          {faqs.map(([q, a], i) => (
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

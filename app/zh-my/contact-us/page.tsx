"use client";
import { Headset, MessageCircle, Briefcase, Send, Mail, Facebook, Instagram, Music2, Clock, ShieldCheck, Zap } from "lucide-react";
import InfoHero from "@/components/ui/InfoHero";

const items = [
  { Icon: Headset, label: "在线客服", href: "#" },
  { Icon: MessageCircle, label: "通过 WhatsApp 联系我们", href: "#" },
  { Icon: Briefcase, label: "Message us on WhatsApp Business", href: "#" },
  { Icon: Send, label: "通过 Telegram 联系我们", href: "#" },
  { Icon: Mail, label: "发送电子邮件给我们", href: "#" },
  { Icon: Facebook, label: "脸书", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Music2, label: "TikTok", href: "#" },
];

export default function ContactUsPage() {
  return (
    <div style={{ marginBottom: 16 }}>
      <InfoHero src="/info/contact.webp" title="联系我们" sub="24 小时在线 · 随时为您服务" chips={[[Clock, "全天候客服"], [Zap, "快速响应"], [ShieldCheck, "专业可靠"]]} />
      <div className="flex flex-col" style={{ gap: 12 }}>
        {items.map(({ Icon, label, href }) => (
          <a key={label} href={href} onClick={e => e.preventDefault()} className="flex items-center" style={{ height: 72, background: "var(--card)", borderRadius: 20, padding: 12, gap: 12 }}>
            <span className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: 24, background: "var(--solid)", flexShrink: 0 }}>
              <Icon size={20} />
            </span>
            <span className="flex flex-col" style={{ gap: 4 }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>{label}</span>
              <span style={{ fontSize: 14, color: "var(--gold)" }}>点击这里</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

"use client";
import { Headset, MessageCircle, Briefcase, Send, Mail, Facebook, Instagram, Music2, Phone } from "lucide-react";
import { PageBanner } from "@/components/ui/bo";

const items = [
  { Icon: Headset, label: "在线客服", href: "#" },
  { Icon: MessageCircle, label: "通过 WhatsApp 联系我们", href: "https://wa.me/" },
  { Icon: Briefcase, label: "Message us on WhatsApp Business", href: "https://wa.me/" },
  { Icon: Send, label: "通过 Telegram 联系我们", href: "https://t.me/BO55VIP" },
  { Icon: Mail, label: "发送电子邮件给我们", href: "mailto:support@bo55.com" },
  { Icon: Facebook, label: "脸书", href: "https://www.facebook.com/BO55official" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bo55_official" },
  { Icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@bo55official" },
];

export default function ContactUsPage() {
  return (
    <div style={{ marginBottom: 16 }}>
      <PageBanner title="联系我们" icon={Phone} />
      <div className="flex flex-col" style={{ gap: 12 }}>
        {items.map(({ Icon, label, href }) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center" style={{ height: 72, background: "var(--card)", borderRadius: 20, padding: 12, gap: 12 }}>
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

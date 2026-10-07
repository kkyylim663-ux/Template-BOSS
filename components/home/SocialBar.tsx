import { Facebook, Instagram, MessageCircle, Send, Music2 } from "lucide-react";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/BO55official", Icon: Facebook, color: "#1877f2" },
  { label: "Instagram", href: "https://www.instagram.com/bo55_official", Icon: Instagram, color: "#e1306c" },
  { label: "TikTok", href: "https://www.tiktok.com/@bo55official", Icon: Music2, color: "#ffffff" },
  { label: "Whatsapp", href: "https://wa.me/", Icon: MessageCircle, color: "#25d366" },
  { label: "Telegram", href: "https://t.me/BO55VIP", Icon: Send, color: "#229ed9" },
];

export default function SocialBar() {
  return (
    <div className="flex" style={{ marginTop: 8, gap: 12, height: 46 }}>
      {socials.map(({ label, href, Icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
          style={{ flex: 1, minWidth: 0, background: "var(--card)", borderRadius: 12, padding: "8px 12px", gap: 12 }}
        >
          <span className="flex items-center justify-center" style={{ width: 30, height: 30, borderRadius: "50%", background: color, color: color === "#ffffff" ? "#000" : "#fff", flexShrink: 0 }}>
            <Icon size={16} />
          </span>
          <span className="only-desktop" style={{ fontSize: 18, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
        </a>
      ))}
    </div>
  );
}

import type { CSSProperties } from "react";

type P = { size?: number; style?: CSSProperties };
// viewBox origin is offset per icon so each glyph's measured bounding box is centred.
const base = (size = 16, style?: CSSProperties, vb = "0 0 24 24") => ({ width: size, height: size, viewBox: vb, style });

export const FacebookIcon = ({ size, style }: P) => (
  <svg {...base(size, style)} fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
);

export const InstagramIcon = ({ size, style }: P) => (
  <svg {...base(size, style)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

export const TikTokIcon = ({ size, style }: P) => (
  <svg {...base(size, style, "0.75 -1.1 24 24")} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.2 3.5v11.2a3.6 3.6 0 1 1-3.6-3.6" />
    <path d="M14.2 3.5c.3 2.4 1.9 4 4.3 4.2" />
  </svg>
);

export const WhatsappIcon = ({ size, style }: P) => (
  <svg {...base(size, style, "0.36 -0.1 24 24")} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20l1.3-4.2A8.2 8.2 0 1 1 8.4 19z" />
    <path d="M9.3 8.8c.2 2.7 2.7 5.2 5.4 5.4l1-1.3-1.9-1-.8.7a4.2 4.2 0 0 1-2.1-2.1l.7-.8-1-1.9z" fill="currentColor" stroke="none" />
  </svg>
);

export const TelegramIcon = ({ size, style }: P) => (
  <svg {...base(size, style, "0.27 0.4 24 24")} fill="currentColor"><path d="M20.6 4.4 3.4 11.1c-.7.3-.7.8-.1 1l4.3 1.4 1.7 5.2c.2.6.4.7.9.4l2.3-1.9 4.5 3.3c.8.5 1.4.2 1.6-.8l3-14.2c.3-1.2-.4-1.7-1-1.2zM9 13.1l8.6-5.4c.4-.3.8-.1.5.2l-7 6.4-.3 3z" /></svg>
);

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/BO55official", Icon: FacebookIcon, bg: "transparent", fg: "#fff", full: true },
  { label: "Instagram", href: "https://www.instagram.com/bo55_official", Icon: InstagramIcon, bg: "transparent", fg: "#fff" },
  { label: "TikTok", href: "https://www.tiktok.com/@bo55official", Icon: TikTokIcon, bg: "transparent", fg: "#fff" },
  { label: "Whatsapp", href: "https://wa.me/", Icon: WhatsappIcon, bg: "transparent", fg: "#fff" },
  { label: "Telegram", href: "https://t.me/BO55VIP", Icon: TelegramIcon, bg: "transparent", fg: "#fff" },
];

type Item = (typeof SOCIALS)[number];

// Circle badge: outlined circle + glyph; Facebook's glyph is already a full disc.
export function SocialCircle({ item, size, border = 1.5, glyph }: { item: Item; size: number; border?: number; glyph?: number }) {
  const { Icon, fg, bg } = item;
  const full = "full" in item && item.full;
  return (
    <span className="flex items-center justify-center" style={{ width: size, height: size, borderRadius: "50%", background: bg, color: fg, border: full ? 0 : `${border}px solid #fff`, flexShrink: 0 }}>
      <Icon size={full ? size : glyph ?? Math.round(size * 0.53)} />
    </span>
  );
}

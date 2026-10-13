import type { CSSProperties } from "react";

type P = { size?: number; style?: CSSProperties };
const base = (size = 16, style?: CSSProperties) => ({ width: size, height: size, viewBox: "0 0 24 24", style });

export const FacebookIcon = ({ size, style }: P) => (
  <svg {...base(size, style)} fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.4V21h3.1z" /></svg>
);

export const InstagramIcon = ({ size, style }: P) => (
  <svg {...base(size, style)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

export const TikTokIcon = ({ size, style }: P) => (
  <svg {...base(size, style)} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.2 3.5v11.2a3.6 3.6 0 1 1-3.6-3.6" />
    <path d="M14.2 3.5c.3 2.4 1.9 4 4.3 4.2" />
  </svg>
);

export const WhatsappIcon = ({ size, style }: P) => (
  <svg {...base(size, style)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20l1.3-4.2A8.2 8.2 0 1 1 8.4 19z" />
    <path d="M9.3 8.8c.2 2.7 2.7 5.2 5.4 5.4l1-1.3-1.9-1-.8.7a4.2 4.2 0 0 1-2.1-2.1l.7-.8-1-1.9z" fill="currentColor" stroke="none" />
  </svg>
);

export const TelegramIcon = ({ size, style }: P) => (
  <svg {...base(size, style)} fill="currentColor"><path d="M20.6 4.4 3.4 11.1c-.7.3-.7.8-.1 1l4.3 1.4 1.7 5.2c.2.6.4.7.9.4l2.3-1.9 4.5 3.3c.8.5 1.4.2 1.6-.8l3-14.2c.3-1.2-.4-1.7-1-1.2zM9 13.1l8.6-5.4c.4-.3.8-.1.5.2l-7 6.4-.3 3z" /></svg>
);

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/BO55official", Icon: FacebookIcon, bg: "#1877f2", fg: "#fff" },
  { label: "Instagram", href: "https://www.instagram.com/bo55_official", Icon: InstagramIcon, bg: "linear-gradient(45deg,#f9a825,#e1306c 50%,#833ab4)", fg: "#fff" },
  { label: "TikTok", href: "https://www.tiktok.com/@bo55official", Icon: TikTokIcon, bg: "#ffffff", fg: "#000" },
  { label: "Whatsapp", href: "https://wa.me/", Icon: WhatsappIcon, bg: "#25d366", fg: "#fff" },
  { label: "Telegram", href: "https://t.me/BO55VIP", Icon: TelegramIcon, bg: "#229ed9", fg: "#fff" },
];

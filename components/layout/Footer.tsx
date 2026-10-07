"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Send, MessageCircle, Music2, ShieldCheck, BadgeCheck, Lock, Fingerprint, HeartHandshake, Ban, CreditCard } from "lucide-react";
import { SEO_HEADINGS } from "@/lib/mock/home";
import { GAME_PROVIDERS } from "@/lib/mock/games";

function SeoArticle() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: "4px 8px", marginBottom: 8 }}>
      <div style={{ maxHeight: open ? "none" : 100, overflow: "hidden", position: "relative", fontSize: 14 }}>
        <h1 style={{ fontSize: 21, fontWeight: 600, margin: "12px 0" }}>BO55 官方网站 马来西亚 2026 最新入口</h1>
        <p style={{ fontSize: 14, fontWeight: 500, margin: "12px 0" }}>
          BO55 是面向马来西亚玩家的在线游戏平台之一，为会员提供多元化的在线娱乐体验。通过 BO55 官方网站，玩家可以轻松进入游戏、查看优惠活动并管理个人账户。
        </p>
        {SEO_HEADINGS.map(s => (
          <div key={s.h}>
            <h2 style={{ fontSize: 21, fontWeight: 600, margin: "12px 0" }}>{s.h}</h2>
            <p style={{ fontSize: 14, fontWeight: 500, margin: "12px 0" }}>{s.p}</p>
          </div>
        ))}
        {!open && <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 40, background: "linear-gradient(transparent, var(--bg))" }} />}
      </div>
      <div className="flex justify-center" style={{ marginTop: 12 }}>
        <button onClick={() => setOpen(v => !v)} style={{ height: 40, minWidth: 90, padding: "7px 12px", borderRadius: 24, background: "var(--bg)", border: "0.8px solid var(--solid)", fontSize: 12, fontWeight: 600 }}>
          {open ? "显示更少" : "显示更多"}
        </button>
      </div>
    </div>
  );
}

const Title = ({ children }: { children: React.ReactNode }) => (
  <span style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 12, lineHeight: "12px" }}>{children}</span>
);

const Logo = ({ w = 20, label, Icon }: { w?: number; label?: string; Icon?: React.ElementType }) => (
  <span className="flex items-center gap-1" style={{ height: 20, minWidth: w, color: "var(--muted-3)", fontSize: 11, fontWeight: 700 }}>
    {Icon && <Icon size={18} strokeWidth={1.6} />}
    {label}
  </span>
);

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/BO55official" },
  { Icon: Instagram, href: "https://www.instagram.com/bo55_official" },
  { Icon: Music2, href: "https://www.tiktok.com/@bo55official" },
  { Icon: MessageCircle, href: "https://wa.me/" },
  { Icon: Send, href: "https://t.me/BO55VIP" },
];

export default function Footer() {
  const pathname = usePathname();
  const showSeo = !pathname.startsWith("/zh-my/account") && !pathname.startsWith("/zh-my/tournament");
  const providers = Object.values(GAME_PROVIDERS).flat().map(p => p.name);

  return (
    <div style={{ marginTop: 16 }}>
      {showSeo && <SeoArticle />}
      <footer className="app-footer" style={{ background: "var(--card)", borderRadius: 20 }}>
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ marginBottom: 24, rowGap: 24 }}>
          <div>
            <Title>认证</Title>
            <div className="flex items-center" style={{ gap: 20 }}>
              <Logo Icon={BadgeCheck} /><Logo label="bmm" w={53} /><Logo label="iTech Labs" w={83} />
            </div>
          </div>
          <div>
            <Title>安全</Title>
            <div className="flex items-center" style={{ gap: 20 }}>
              <Logo Icon={Fingerprint} label="iovation" w={80} /><Logo Icon={Lock} label="ThreatMetrix" w={80} />
            </div>
          </div>
          <div>
            <Title>负责任博彩</Title>
            <div className="flex items-center" style={{ gap: 20 }}>
              <Logo Icon={Ban} /><Logo Icon={ShieldCheck} /><Logo Icon={HeartHandshake} label="GambleAware" w={90} />
            </div>
          </div>
          <div>
            <Title>关注我们</Title>
            <div className="flex items-center" style={{ gap: 8 }}>
              {socials.map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--solid)" }}>
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <Title>支付方式</Title>
            <div className="flex items-center flex-wrap" style={{ gap: 12 }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="flex items-center justify-center" style={{ width: 20, height: 20, borderRadius: 4, background: "var(--solid)", color: "var(--muted-3)" }}>
                  <CreditCard size={12} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <span style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 12 }}>游戏供应商</span>
          <div className="overflow-hidden" style={{ height: 24 }}>
            <div className="marquee-x" style={{ gap: 12, animationDuration: "90s" }}>
              {[...providers, ...providers].map((p, i) => (
                <span key={i} className="flex items-center" style={{ height: 24, padding: "0 10px", borderRadius: 12, background: "var(--solid)", fontSize: 11, fontWeight: 600, color: "var(--muted-3)", whiteSpace: "nowrap" }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span style={{ display: "block", fontSize: 12, lineHeight: "12px" }}>版权所有  @ 2026。保留所有权利。</span>
      </footer>
    </div>
  );
}

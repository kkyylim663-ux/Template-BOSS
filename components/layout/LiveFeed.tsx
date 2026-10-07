"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpFromLine, Tag, User, ImageIcon } from "lucide-react";
import { DEPOSIT_FEED, WITHDRAW_FEED } from "@/lib/mock/live-feed";
import { PROMOTIONS } from "@/lib/mock/promotions";

function FeedCard({ title, Icon, rows }: { title: string; Icon: React.ElementType; rows: { id: number; phone: string; amount: number }[] }) {
  return (
    <div className="flex flex-col" style={{ flex: 1, minHeight: 0, background: "var(--card)", borderRadius: 16, padding: 20 }}>
      <div className="flex items-center" style={{ height: 48, background: "var(--solid)", borderRadius: 16, padding: "12px 8px", gap: 12, flexShrink: 0 }}>
        <Icon size={20} />
        <span style={{ fontSize: 14, fontWeight: 600 }}>{title}</span>
        <span className="flex items-center" style={{ marginLeft: "auto", height: 24, background: "var(--red)", borderRadius: 20, padding: "2px 8px", gap: 8, fontSize: 14, fontWeight: 600 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />
          LIVE
        </span>
      </div>
      <div className="overflow-hidden" style={{ flex: 1, marginTop: 8 }}>
        <div className="marquee-y" style={{ gap: 16, animationDuration: "45s" }}>
          {[...rows, ...rows].map((r, i) => (
            <div key={i} className="flex items-center" style={{ height: 58, background: "var(--card)", borderRadius: 16, padding: 8, gap: 12, flexShrink: 0 }}>
              <span className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--solid)", flexShrink: 0 }}>
                <User size={18} />
              </span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, lineHeight: "22px" }}>{r.phone}</div>
                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: "22px" }}>
                  MYR <span>{r.amount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PromoFeed() {
  const list = PROMOTIONS.slice(0, 10);
  return (
    <div className="flex flex-col" style={{ height: "100%", background: "var(--card)", borderRadius: 16, padding: 20 }}>
      <div className="flex items-center" style={{
        height: 45, borderRadius: 16, padding: "12px 8px", gap: 12, marginBottom: 8, flexShrink: 0,
        background: "linear-gradient(90deg, rgba(255,255,255,.4) 0px, rgba(255,255,255,.04) 60%)",
      }}>
        <Tag size={20} />
        <span style={{ fontSize: 14, fontWeight: 600 }}>促销</span>
      </div>
      <div className="overflow-hidden" style={{ flex: 1 }}>
        <div className="marquee-y" style={{ gap: 16, animationDuration: "60s" }}>
          {[...list, ...list].map((p, i) => (
            <Link key={i} href="/zh-my/promotion" className="ph" style={{ height: 119, borderRadius: 12, flexShrink: 0, flexDirection: "column", gap: 6 }}>
              <ImageIcon size={22} strokeWidth={1.5} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.55)", padding: "0 12px", textAlign: "center" }}>{p.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LiveFeed() {
  const pathname = usePathname();
  const promo = pathname.startsWith("/zh-my/account/") && !pathname.startsWith("/zh-my/account/referral");
  return (
    <aside className="app-right">
      {promo ? (
        <PromoFeed />
      ) : (
        <>
          <FeedCard title="存款" Icon={ArrowDownToLine} rows={DEPOSIT_FEED} />
          <FeedCard title="提款" Icon={ArrowUpFromLine} rows={WITHDRAW_FEED} />
        </>
      )}
    </aside>
  );
}

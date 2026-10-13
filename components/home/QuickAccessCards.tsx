"use client";
import Link from "next/link";

const cards = [
  {
    img: "/icons/entry-1.png", title: "推荐奖金", sub: "Invite friend & Earn 38 MYR", href: "/zh-my/account/referral",
    bg: "linear-gradient(0deg, rgba(255,204,0,.1), rgba(255,204,0,.1)), linear-gradient(0deg, rgba(220,82,28,.1), rgba(220,82,28,.1)), linear-gradient(259.41deg, rgb(241,119,12), rgba(255,158,30,.1))",
  },
  {
    img: "/icons/entry-2.png", title: "福利商城", sub: "Login & Earn Points", href: "/zh-my/reward",
    bg: "linear-gradient(0deg, rgba(133,27,253,.1), rgba(133,27,253,.1)), linear-gradient(79.41deg, rgba(133,27,253,0), rgb(133,27,253)), linear-gradient(0deg, rgba(249,42,90,.1), rgba(249,42,90,.1)), linear-gradient(79.41deg, rgba(249,42,90,0), rgb(249,42,90))",
  },
  {
    img: "/icons/entry-3.png", title: "任务", sub: "Daily & Weekly", href: "/zh-my/mission",
    bg: "linear-gradient(0deg, rgba(0,98,255,.1), rgba(0,98,255,.1)), linear-gradient(0deg, rgba(133,27,253,.1), rgba(133,27,253,.1)), linear-gradient(79.41deg, rgba(133,27,253,0), rgb(133,27,253))",
  },
  {
    img: "/icons/entry-4.png", title: "优惠", sub: "Claim your bonus now!", href: "/zh-my/promotion",
    bg: "linear-gradient(0deg, rgba(21,255,0,.1), rgba(21,255,0,.1)), linear-gradient(0deg, rgba(0,98,255,.1), rgba(0,98,255,.1)), linear-gradient(79.41deg, rgba(0,98,255,0), rgb(0,98,255))",
  },
];

export default function QuickAccessCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4" style={{ marginTop: 12, gap: 12 }}>
      {cards.map(({ img, title, sub, href, bg }, i) => (
        <Link key={href} href={href} className="flex items-center qa-card" style={{ minHeight: 85, borderRadius: 12, padding: 8, gap: 8, background: bg }}>
          <span className="flex items-center justify-center qa-icon" style={{ width: 64, height: 64, flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt="" draggable={false} className="qa-img" style={{ width: "100%", height: "100%", objectFit: "contain", animationDelay: `${i * -0.7}s` }} />
          </span>
          <span className="flex flex-col min-w-0">
            <span style={{ fontSize: 16, fontWeight: 700, lineHeight: "24px" }}>{title}</span>
            <span className="qa-sub" style={{ fontSize: 16, fontWeight: 400, lineHeight: "22px" }}>{sub}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

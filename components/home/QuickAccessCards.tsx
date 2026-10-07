"use client";
import Link from "next/link";
import { Users, ShoppingBag, Target, Gift } from "lucide-react";

const cards = [
  {
    Icon: Users, title: "推荐奖金", sub: "Invite friend & Earn 38 MYR", href: "/zh-my/account/referral",
    bg: "linear-gradient(0deg, rgba(255,204,0,.1), rgba(255,204,0,.1)), linear-gradient(0deg, rgba(220,82,28,.1), rgba(220,82,28,.1)), linear-gradient(259.41deg, rgb(241,119,12), rgba(255,158,30,.1))",
  },
  {
    Icon: ShoppingBag, title: "福利商城", sub: "Login & Earn Points", href: "/zh-my/reward",
    bg: "linear-gradient(0deg, rgba(133,27,253,.1), rgba(133,27,253,.1)), linear-gradient(79.41deg, rgba(133,27,253,0), rgb(133,27,253)), linear-gradient(0deg, rgba(249,42,90,.1), rgba(249,42,90,.1)), linear-gradient(79.41deg, rgba(249,42,90,0), rgb(249,42,90))",
  },
  {
    Icon: Target, title: "任务", sub: "Daily & Weekly", href: "/zh-my/mission",
    bg: "linear-gradient(0deg, rgba(0,98,255,.1), rgba(0,98,255,.1)), linear-gradient(0deg, rgba(133,27,253,.1), rgba(133,27,253,.1)), linear-gradient(79.41deg, rgba(133,27,253,0), rgb(133,27,253))",
  },
  {
    Icon: Gift, title: "优惠", sub: "Claim your bonus now!", href: "/zh-my/promotion",
    bg: "linear-gradient(0deg, rgba(21,255,0,.1), rgba(21,255,0,.1)), linear-gradient(0deg, rgba(0,98,255,.1), rgba(0,98,255,.1)), linear-gradient(79.41deg, rgba(0,98,255,0), rgb(0,98,255))",
  },
];

export default function QuickAccessCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4" style={{ marginTop: 12, gap: 12 }}>
      {cards.map(({ Icon, title, sub, href, bg }) => (
        <Link key={href} href={href} className="flex items-center" style={{ minHeight: 85, borderRadius: 12, padding: 8, gap: 8, background: bg }}>
          <span className="flex items-center justify-center" style={{ width: 64, height: 64, flexShrink: 0, color: "rgba(255,255,255,.9)" }}>
            <Icon size={40} strokeWidth={1.5} />
          </span>
          <span className="flex flex-col min-w-0">
            <span style={{ fontSize: 16, fontWeight: 700, lineHeight: "24px" }}>{title}</span>
            <span style={{ fontSize: 16, fontWeight: 400, lineHeight: "22px" }}>{sub}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

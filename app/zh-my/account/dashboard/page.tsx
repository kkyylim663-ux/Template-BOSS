"use client";
import Link from "next/link";
import { UserRound, Lock, ClipboardList, Landmark, ShieldCheck, ChevronRight, BadgePercent, Wallet, CreditCard, Users } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import VipCardBox from "@/components/account/VipCardBox";

const QUICK = [
  { label: "我的促销", href: "/zh-my/account/mypromo", Icon: BadgePercent },
  { label: "存款", href: "/zh-my/account/deposit", Icon: Wallet },
  { label: "提款", href: "/zh-my/account/withdraw", Icon: CreditCard },
  { label: "推荐", href: "/zh-my/referral", Icon: Users },
];
const ITEMS = [
  { label: "个人资料", href: "/zh-my/account/profile", Icon: UserRound },
  { label: "更改密码", href: "/zh-my/account/changepassword", Icon: Lock },
  { label: "历史记录", href: "/zh-my/account/history", Icon: ClipboardList },
  { label: "Banking", href: "/zh-my/account/bank", Icon: Landmark },
  { label: "身份验证", href: "/zh-my/account/kyc", Icon: ShieldCheck },
];

export default function DashboardPage() {
  const { user } = useAuth();
  if (!user) return null;
  const card = { background: "rgba(57,59,86,.22)", borderRadius: 8 } as const;
  return (
    <div className="flex flex-col" style={{ gap: 8, marginBottom: 16 }}>
      <div className="flex items-center" style={{ height: 48, gap: 8 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mission/avatar.webp" alt="" draggable={false} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }} />
        <div className="flex flex-col">
          <span style={{ fontSize: 18, fontWeight: 600, lineHeight: "26px" }}>{user.username}</span>
          <span style={{ fontSize: 14, lineHeight: "14px", color: "var(--muted-3)" }}>ID :2000</span>
        </div>
      </div>
      <VipCardBox />
      <div className="flex" style={{ ...card, height: 60, padding: 4 }}>
        {QUICK.map(({ label, href, Icon }) => (
          <Link key={href} href={href} className="flex flex-col items-center flex-1" style={{ height: 52 }}>
            <Icon size={32} strokeWidth={1.3} style={{ color: "#ffd66b" }} />
            <span style={{ fontSize: 14, lineHeight: "20px", fontWeight: 500 }}>{label}</span>
          </Link>
        ))}
      </div>
      <div style={{ ...card, padding: 4 }}>
        {ITEMS.map(({ label, href, Icon }) => (
          <Link key={href} href={href} className="flex items-center justify-between" style={{ height: 40, padding: "0 8px" }}>
            <span className="flex items-center" style={{ gap: 8, fontSize: 16, fontWeight: 600 }}>
              <Icon size={20} strokeWidth={1.5} style={{ color: "#5aa8ff" }} />{label}
            </span>
            <ChevronRight size={14} />
          </Link>
        ))}
      </div>
    </div>
  );
}

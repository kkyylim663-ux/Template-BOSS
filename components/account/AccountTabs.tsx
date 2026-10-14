"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, Wallet, CreditCard, BadgePercent, FileText } from "lucide-react";

const TABS = [
  { href: "/zh-my/account/deposit", label: "存款", Icon: Wallet },
  { href: "/zh-my/account/withdraw", label: "提款", Icon: CreditCard },
  { href: "/zh-my/account/mypromo", label: "我的优惠", Icon: BadgePercent },
  { href: "/zh-my/account/history", label: "记录", Icon: FileText },
];

export default function AccountTabs() {
  const pathname = usePathname();
  const router = useRouter();
  if (!TABS.some(t => pathname.startsWith(t.href))) return null;
  return (
    <div className="only-mobile items-center" style={{ gap: 8, marginBottom: 12 }}>
      <button onClick={() => router.back()} aria-label="返回" className="flex items-center justify-center" style={{ width: 28, height: 40, flexShrink: 0 }}><ChevronLeft size={24} /></button>
      <div className="flex flex-1" style={{ background: "rgba(57,59,86,.22)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, padding: 4, gap: 2 }}>
        {TABS.map(({ href, label, Icon }) => {
          const on = pathname.startsWith(href);
          return (
            <Link key={href} href={href} className="flex items-center justify-center flex-1" style={{ height: 40, gap: 6, borderRadius: 10, fontSize: 13, fontWeight: 700, background: on ? "rgba(255,255,255,.4)" : "transparent", whiteSpace: "nowrap" }}>
              <Icon size={16} />{label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

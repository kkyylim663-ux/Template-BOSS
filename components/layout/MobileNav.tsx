"use client";
import { usePathname, useRouter } from "next/navigation";
import { Home, Wallet, UserRound, Tag, Headset } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

const items = [
  { label: "主页", href: "/zh-my", Icon: Home, auth: false },
  { label: "存款", href: "/zh-my/account/deposit", Icon: Wallet, auth: true },
  { label: "账户", href: "/zh-my/account/profile", Icon: UserRound, auth: true },
  { label: "促销", href: "/zh-my/promotion", Icon: Tag, auth: false },
  { label: "在线客服", href: "/zh-my/contact-us", Icon: Headset, auth: false },
];

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { openLogin } = useModal();

  return (
    <nav
      className="only-mobile fixed bottom-0 left-0 right-0 z-50 items-center justify-around"
      style={{ height: "var(--mobilenav-h)", background: "var(--solid)", borderRadius: "12px 12px 0 0" }}
    >
      {items.map(({ label, href, Icon, auth }) => {
        const active = href === "/zh-my" ? pathname === href : pathname.startsWith(href);
        return (
          <button
            key={href}
            onClick={() => { if (auth && !isLoggedIn) { openLogin(); return; } router.push(href); }}
            className="flex flex-col items-center justify-center"
            style={{ flex: 1, height: "100%", gap: 2, color: active ? "var(--gold)" : "#fff" }}
          >
            <Icon size={22} strokeWidth={1.7} />
            <span style={{ fontSize: 11, fontWeight: 600 }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

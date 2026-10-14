"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, Wallet, UserRound, Tag, Headset } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

const items = [
  { label: "主页", art: "nav-1", href: "/zh-my", Icon: Home, auth: false },
  { label: "存款", art: "nav-2", href: "/zh-my/account/deposit", Icon: Wallet, auth: true },
  { label: "账户", art: "nav-3", href: "/zh-my/account/profile", Icon: UserRound, auth: true },
  { label: "促销", art: "nav-4", href: "/zh-my/promotion", Icon: Tag, auth: false },
  { label: "在线客服", art: "nav-5", href: "/zh-my/contact-us", Icon: Headset, auth: false },
];

function NavIcon({ art, Icon, active, i }: { art: string; Icon: typeof Home; active: boolean; i: number }) {
  const [bad, setBad] = useState(false);
  return (
    <span className={`mnav-ico mnav-${i} ${active ? "on" : ""}`}>
      {bad ? (
        <Icon size={22} strokeWidth={1.7} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/nav/${art}.webp`} alt="" draggable={false} width={30} height={30} ref={el => { if (el && el.complete && el.naturalWidth === 0) setBad(true); }} onError={() => setBad(true)} style={{ width: 30, height: 30, objectFit: "contain", display: "block" }} />
      )}
    </span>
  );
}

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
      {items.map(({ label, href, Icon, auth, art }, i) => {
        const active = href === "/zh-my" ? pathname === href : pathname.startsWith(href);
        return (
          <button
            key={href}
            onClick={() => { if (auth && !isLoggedIn) { openLogin(); return; } router.push(href); }}
            className={`flex flex-col items-center justify-center mnav-btn ${active ? "on" : ""}`}
            style={{ flex: 1, height: "100%", gap: 2, color: active ? "var(--gold)" : "#fff" }}
          >
            <NavIcon art={art} Icon={Icon} active={active} i={i} />
            <span style={{ fontSize: 11, fontWeight: 600 }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}

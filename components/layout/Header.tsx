"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RefreshCw, Plus, ChevronDown, Mail, Target, Menu, X, Gift, Landmark, History } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { MenuGroups } from "./Sidebar";

function Logo({ small }: { small?: boolean }) {
  return (
    <Link href="/zh-my" className="flex items-center" style={{ width: small ? 84 : 200, height: small ? 40 : 50 }}>
      <span style={{
        fontSize: small ? 22 : 34, fontWeight: 900, fontStyle: "italic", letterSpacing: -1,
        background: "linear-gradient(180deg,#ffe08a,#ffad00 60%,#c97a00)", WebkitBackgroundClip: "text", color: "transparent",
      }}>
        BO55
      </span>
    </Link>
  );
}

const pill: React.CSSProperties = {
  background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, height: 36,
};

export default function Header() {
  const { user, isLoggedIn, logout, refreshBalance } = useAuth();
  const { openLogin, openRegister } = useModal();
  const router = useRouter();
  const [balOpen, setBalOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const close = () => { setBalOpen(false); setLangOpen(false); };

  const balance = (
    <div className="relative">
      <div className="flex items-center gap-1" style={{ ...pill, padding: 6, width: 245 }}>
        <button
          onClick={refreshBalance}
          className="flex items-center justify-center"
          style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--btn-dark)" }}
          aria-label="刷新余额"
        >
          <RefreshCw size={10} />
        </button>
        <button className="flex items-center gap-1 flex-1" style={{ height: 22, borderRadius: 12 }} onClick={() => { setBalOpen(v => !v); setLangOpen(false); }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted-3)" }}>MYR</span>
          <span style={{ fontSize: 16, fontWeight: 700 }}>{user?.balance.toFixed(2)}</span>
          <ChevronDown size={14} style={{ marginLeft: "auto", color: "var(--muted-3)" }} />
        </button>
        <Link href="/zh-my/account/deposit" aria-label="存款">
          <span className="flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: 8, background: "var(--gold)", color: "#000" }}>
            <Plus size={18} strokeWidth={2.5} />
          </span>
        </Link>
      </div>
      {balOpen && (
        <div className="absolute left-0 z-[70]" style={{ top: 42, width: 245, background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, padding: 6 }}>
          {[
            { label: "我的促销", href: "/zh-my/account/mypromo", Icon: Gift },
            { label: "提款", href: "/zh-my/account/withdraw", Icon: Landmark },
            { label: "历史记录", href: "/zh-my/account/history", Icon: History },
          ].map(({ label, href, Icon }) => (
            <button
              key={href}
              onClick={() => { close(); router.push(href); }}
              className="w-full flex items-center gap-2"
              style={{ height: 36, padding: "0 10px", borderRadius: 8, fontSize: 14, fontWeight: 600 }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--card)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const iconPill = (
    <div className="flex items-center" style={{ ...pill, padding: "6px 8px", gap: 12 }}>
      <Link href="/zh-my/account/message" className="relative" aria-label="消息">
        <Mail size={22} strokeWidth={1.6} />
        <span className="absolute" style={{ top: -2, right: -2, width: 7, height: 7, borderRadius: "50%", background: "var(--red)" }} />
      </Link>
      <span style={{ width: 1, height: 24, background: "var(--solid)" }} />
      <Link href="/zh-my/mission" aria-label="任务">
        <Target size={22} strokeWidth={1.6} />
      </Link>
    </div>
  );

  const lang = (
    <div className="relative">
      <button className="flex items-center gap-2" style={{ height: 32 }} onClick={() => { setLangOpen(v => !v); setBalOpen(false); }}>
        <span className="flex items-center justify-center" style={{
          width: 32, height: 32, borderRadius: "50%", fontSize: 10, fontWeight: 800,
          background: "linear-gradient(180deg,#cc0001 0 14%,#fff 14% 28%,#cc0001 28% 42%,#fff 42% 56%,#cc0001 56% 70%,#fff 70% 84%,#cc0001 84%)",
          boxShadow: "inset 13px 0 0 0 #010066", color: "#ffcc00",
        }}>
          MY
        </span>
        <ChevronDown size={12} />
      </button>
      {langOpen && (
        <div className="absolute right-0 z-[70]" style={{ top: 40, width: 190, background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, padding: 8 }}>
          {[{ c: "Malaysia", l: ["English", "中文", "Malay"] }, { c: "Singapore", l: ["English", "中文"] }].map(g => (
            <div key={g.c} style={{ marginBottom: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-3)", padding: "4px 8px" }}>{g.c}</div>
              {g.l.map(l => (
                <button key={l} onClick={close} className="w-full text-left" style={{ fontSize: 14, fontWeight: 600, padding: "6px 8px", borderRadius: 8 }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--card)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                  {l}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <header className="app-header">
        {/* mobile: hamburger */}
        <button className="only-mobile items-center" style={{ width: 38, height: 55, paddingLeft: 8 }} onClick={() => setDrawer(true)} aria-label="菜单">
          <Menu size={24} />
        </button>

        <div className="only-desktop"><Logo /></div>
        <div className="only-mobile"><Logo small /></div>

        <div className="flex items-center header-right">
          {isLoggedIn && user ? (
            <>
              <div className="only-desktop">{balance}</div>
              <div className="only-desktop">{iconPill}</div>
              <Link href="/zh-my/account/profile" className="only-desktop">
                <span className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: 50, background: "linear-gradient(135deg,#ffd66b,#f28c00)", color: "#000", fontWeight: 800 }}>
                  {user.username[0]?.toUpperCase()}
                </span>
              </Link>
              <button className="btn-gold only-desktop" style={{ width: 96 }} onClick={logout}>登出</button>

              {/* mobile balance */}
              <Link href="/zh-my/account/deposit" className="only-mobile items-center gap-1" style={{ background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, padding: 4, height: 40 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-3)", paddingLeft: 4 }}>MYR</span>
                <span style={{ fontSize: 14, fontWeight: 700 }}>{user.balance.toFixed(2)}</span>
                <span className="flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: 8, background: "var(--gold)", color: "#000", marginLeft: 4 }}>
                  <Plus size={16} strokeWidth={2.5} />
                </span>
              </Link>
              <div className="only-mobile items-center" style={{ gap: 8, padding: "4px 8px" }}>
                <Link href="/zh-my/account/message" aria-label="消息"><Mail size={20} strokeWidth={1.6} /></Link>
                <Link href="/zh-my/mission" aria-label="任务"><Target size={20} strokeWidth={1.6} /></Link>
              </div>
            </>
          ) : (
            <>
              <button className="btn-dark" style={{ width: 96 }} onClick={openLogin}>登录</button>
              <button className="btn-gold" style={{ width: 96 }} onClick={openRegister}>注册</button>
            </>
          )}
          <div className="only-desktop">{lang}</div>
        </div>

        {(balOpen || langOpen) && <div className="fixed inset-0 z-[65]" onClick={close} />}
      </header>

      {/* mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-[90]" style={{ background: "rgba(0,0,0,.6)" }} onClick={() => setDrawer(false)}>
          <div
            className="h-full overflow-y-auto"
            style={{ width: 280, background: "var(--bg)", padding: 12 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
              <Logo small />
              <button onClick={() => setDrawer(false)} aria-label="关闭"><X size={22} /></button>
            </div>
            <MenuGroups onNavigate={() => setDrawer(false)} />
            {isLoggedIn && <button className="btn-gold btn-lg" onClick={() => { logout(); setDrawer(false); }}>登出</button>}
          </div>
        </div>
      )}
    </>
  );
}

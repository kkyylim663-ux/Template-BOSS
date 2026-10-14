"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RefreshCw, Plus, ChevronDown, Mail, Target, Menu, X, Gift, Landmark, History, Check, Globe, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { MenuGroups } from "./Sidebar";
import AccountDrawer from "./AccountDrawer";

function Logo({ small, compact }: { small?: boolean; compact?: boolean }) {
  return (
    <Link href="/zh-my" className="flex items-center" style={{ width: compact ? 124 : small ? 140 : 200, height: compact ? 34 : small ? 40 : 50, justifyContent: small ? "center" : undefined }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-h.png" alt="Logo" style={{ height: compact ? 34 : small ? 40 : 50, width: "auto", maxWidth: "none", objectFit: "contain" }} />
    </Link>
  );
}

const pill: React.CSSProperties = {
  background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, height: 36,
};

export default function Header() {
  const { user, isLoggedIn, logout, refreshBalance } = useAuth();
  const { openLogin, openRegister } = useModal();
  const { lang, setLang } = useLanguage();
  const router = useRouter();
  const [balOpen, setBalOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [acct, setAcct] = useState(false);
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
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted-3)", lineHeight: "22px" }}>MYR</span>
          <span style={{ fontSize: 16, fontWeight: 700, lineHeight: "22px" }}>{user?.balance.toFixed(2)}</span>
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

  const langMenu = (
    <div className="relative">
      <button className="flex items-center gap-2" style={{ height: 32 }} onClick={() => { setLangOpen(v => !v); setBalOpen(false); }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/flag-my.png" alt="MY" draggable={false} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
        <ChevronDown size={12} />
      </button>
      {langOpen && (
        <div className="absolute right-0 z-[70]" style={{ top: 40, width: 190, background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, padding: 8 }}>
          {[{ c: "Malaysia", l: ["English", "中文", "Malay"] }, { c: "Singapore", l: ["English", "中文"] }].map(g => (
            <div key={g.c} style={{ marginBottom: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-3)", padding: "4px 8px" }}>{g.c}</div>
              {g.l.map(l => {
                const code = l === "English" ? "en" : l === "中文" ? "zh" : null;
                const active = code === lang;
                const disabled = code === null;
                return (
                  <button
                    key={l}
                    onClick={() => { if (code) setLang(code); close(); }}
                    disabled={disabled}
                    className="w-full text-left flex items-center justify-between"
                    style={{
                      fontSize: 14, fontWeight: 600, padding: "6px 8px", borderRadius: 8,
                      color: disabled ? "var(--muted-2)" : active ? "var(--gold)" : "#fff",
                      cursor: disabled ? "default" : "pointer",
                    }}
                    onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = "var(--card)"; }}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    {l}
                    {active && <Check size={14} />}
                    {disabled && <span style={{ fontSize: 10 }}>Soon</span>}
                  </button>
                );
              })}
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
        <button className="only-mobile items-center" style={{ width: 38, height: 67, paddingLeft: 8 }} onClick={() => setDrawer(true)} aria-label="菜单">
          <Menu size={24} />
        </button>

        <div className="only-desktop"><Logo /></div>
        {isLoggedIn
          ? <div className="only-mobile items-center" style={{ marginLeft: 4 }}><Logo small compact /></div>
          : <div className="only-mobile" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}><Logo small /></div>}

        <div className="flex items-center header-right">
          {isLoggedIn && user ? (
            <>
              <div className="only-desktop">{balance}</div>
              <div className="only-desktop">{iconPill}</div>
              <button className="only-desktop" onClick={() => setAcct(true)} aria-label="账户">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mission/avatar.webp" alt="" draggable={false} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", display: "block" }} />
              </button>
              <button className="btn-gold only-desktop" style={{ width: 96 }} onClick={logout}>登出</button>

              {/* mobile balance */}
              <Link href="/zh-my/account/deposit" className="only-mobile items-center gap-1" style={{ background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, padding: 4, height: 40 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--muted-3)", paddingLeft: 4, lineHeight: "20px" }}>MYR</span>
                <span style={{ fontSize: 14, fontWeight: 700, lineHeight: "20px" }}>{user.balance.toFixed(2)}</span>
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
              <button className="btn-dark only-desktop" style={{ width: 96 }} onClick={openLogin}>登录</button>
              <button className="btn-gold only-desktop" style={{ width: 96 }} onClick={openRegister}>注册</button>
            </>
          )}
          <div className="only-desktop">{langMenu}</div>
        </div>

        {(balOpen || langOpen) && <div className="fixed inset-0 z-[65]" onClick={close} />}
      </header>

      <AccountDrawer open={acct} onClose={() => setAcct(false)} />

      {/* mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-[90]" style={{ background: "rgba(0,0,0,.6)" }} onClick={() => setDrawer(false)}>
          <div className="h-full flex flex-col" style={{ width: "85%", maxWidth: 320, background: "#03091c" }} onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between" style={{ padding: "12px 12px 8px", flexShrink: 0 }}>
              {isLoggedIn && user ? (
                <div className="flex items-center" style={{ gap: 10 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mission/avatar.webp" alt="" draggable={false} style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }} />
                  <div className="flex flex-col">
                    <span style={{ fontSize: 16, fontWeight: 600 }}>{user.username}</span>
                    <span style={{ fontSize: 14, color: "var(--muted-3)" }}>{user.vipLevel}</span>
                  </div>
                </div>
              ) : <Logo small />}
              <button onClick={() => setDrawer(false)} aria-label="关闭"><X size={22} /></button>
            </div>
            <div className="flex-1 overflow-y-auto" style={{ padding: "0 12px 12px" }}>
              <MenuGroups onNavigate={() => setDrawer(false)} />
            </div>
            <div className="relative flex" style={{ height: 56, flexShrink: 0, background: "#050d26", borderTop: "1px solid rgba(255,255,255,.06)" }}>
              {langOpen && (
                <div className="absolute" style={{ left: 8, bottom: 62, width: 190, background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 12, padding: 8 }}>
                  {[["English", "en"], ["中文", "zh"]].map(([l, c]) => (
                    <button key={c} onClick={() => { setLang(c as "en" | "zh"); setLangOpen(false); }} className="w-full text-left flex items-center justify-between" style={{ fontSize: 14, fontWeight: 600, padding: "8px", borderRadius: 8, color: lang === c ? "var(--gold)" : "#fff" }}>
                      {l}{lang === c && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
              <button className="flex items-center justify-center flex-1" style={{ gap: 10, fontSize: 14, fontWeight: 600 }} onClick={() => setLangOpen(v => !v)}>
                <Globe size={22} strokeWidth={1.5} /> 语言
              </button>
              {isLoggedIn && (
                <>
                  <span style={{ width: 1, background: "rgba(255,255,255,.08)", margin: "8px 0" }} />
                  <button className="flex items-center justify-center flex-1" style={{ gap: 10, fontSize: 14, fontWeight: 600 }} onClick={() => { logout(); setDrawer(false); }}>
                    <LogOut size={22} strokeWidth={1.8} /> 登出
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

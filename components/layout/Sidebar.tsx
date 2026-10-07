"use client";
import { usePathname, useRouter } from "next/navigation";
import { sidebarGroups } from "@/lib/nav";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export function MenuGroups({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { openLogin } = useModal();

  const go = (href: string, requireAuth?: boolean) => {
    onNavigate?.();
    if (requireAuth && !isLoggedIn) { openLogin(); return; }
    router.push(href);
  };

  return (
    <>
      {sidebarGroups.map((group, gi) => (
        <div key={gi} style={{ background: "var(--card)", borderRadius: 16, marginBottom: 12 }}>
          {group.items.map(item => {
            const Icon = item.icon;
            const active = item.href === "/zh-my" ? pathname === "/zh-my" : pathname.startsWith(item.href);
            return (
              <button
                key={item.href}
                onClick={() => go(item.href, item.requireAuth)}
                className="w-full flex items-center text-left"
                style={{
                  height: 45, padding: 12, borderRadius: 16,
                  background: active ? "var(--solid)" : "transparent",
                  transition: "background .15s",
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(57,59,86,0.45)"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
              >
                <Icon size={20} strokeWidth={1.8} style={{ marginRight: 12, flexShrink: 0, color: active ? "var(--gold)" : "#fff" }} />
                <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {item.label}
                </span>
                {item.badge && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 6,
                    background: item.badge === "NEW" ? "var(--gold)" : "var(--red)",
                    color: item.badge === "NEW" ? "#000" : "#fff",
                  }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
}

export default function Sidebar() {
  return (
    <aside className="app-menu">
      <MenuGroups />
    </aside>
  );
}

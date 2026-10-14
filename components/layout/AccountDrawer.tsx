"use client";
import Link from "next/link";
import { UserRound, Lock, ClipboardList, Landmark, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import VipCardBox from "@/components/account/VipCardBox";

const ITEMS = [
  { label: "个人资料", href: "/zh-my/account/profile", Icon: UserRound },
  { label: "更改密码", href: "/zh-my/account/changepassword", Icon: Lock },
  { label: "历史记录", href: "/zh-my/account/history", Icon: ClipboardList },
  { label: "Banking", href: "/zh-my/account/bank", Icon: Landmark },
  { label: "身份验证", href: "/zh-my/account/kyc", Icon: ShieldCheck },
];

export default function AccountDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { user } = useAuth();
  if (!open || !user) return null;
  return (
    <div className="fixed inset-0" style={{ zIndex: 95, background: "rgba(0,0,0,.55)" }} onClick={onClose}>
      <aside onClick={e => e.stopPropagation()} className="absolute right-0 top-0 h-full overflow-y-auto" style={{ width: 320, background: "#090c1e", padding: 12 }}>
        <div className="flex flex-col items-center" style={{ height: 153, padding: "16px 11px 16px 16px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mission/avatar.webp" alt="" draggable={false} style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", display: "block" }} />
          <span style={{ fontSize: 20, fontWeight: 600, color: "#e2e1e2", marginTop: 12, lineHeight: "29px" }}>{user.username}</span>
        </div>
        <div style={{ marginTop: 12 }}><VipCardBox desktop onNavigate={onClose} /></div>
        <div style={{ fontSize: 18, fontWeight: 500, color: "#e2e1e2", margin: "12px 0 8px", lineHeight: "27px" }}>账户</div>
        <div style={{ background: "rgba(57,59,86,.22)", borderRadius: 8, padding: 12 }}>
          {ITEMS.map(({ label, href, Icon }) => (
            <Link key={href} href={href} onClick={onClose} className="flex items-center" style={{ height: 40, gap: 12, padding: "0 8px", borderRadius: 8, fontSize: 16, fontWeight: 600 }}>
              <Icon size={20} strokeWidth={1.5} style={{ color: "#5aa8ff", flexShrink: 0 }} />{label}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}

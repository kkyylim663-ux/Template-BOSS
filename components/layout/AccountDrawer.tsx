"use client";
import Link from "next/link";
import { UserRound, Lock, ClipboardList, Landmark, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { VIP_LEVELS } from "@/lib/mock/vip";

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
  const idx = Math.max(0, VIP_LEVELS.findIndex(l => l.name === user.vipLevel));
  const cur = VIP_LEVELS[idx];
  const next = VIP_LEVELS[Math.min(idx + 1, VIP_LEVELS.length - 1)];
  const pct = Math.min(100, (user.turnover / cur.turnoverReq) * 100);
  return (
    <div className="fixed inset-0" style={{ zIndex: 95, background: "rgba(0,0,0,.55)" }} onClick={onClose}>
      <aside onClick={e => e.stopPropagation()} className="absolute right-0 top-0 h-full overflow-y-auto" style={{ width: 320, background: "#090c1e", padding: 12 }}>
        <div className="flex flex-col items-center" style={{ paddingTop: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mission/avatar.webp" alt="" draggable={false} style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontSize: 20, fontWeight: 600, color: "#e2e1e2", marginTop: 12, lineHeight: "30px" }}>{user.username}</span>
        </div>

        <div className="relative" style={{ marginTop: 24, borderRadius: 12, overflow: "hidden", aspectRatio: "370 / 186", containerType: "inline-size" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/vip/vip-${idx + 1}.webp`} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div className="absolute" style={{ left: 12, bottom: 12, right: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 600, lineHeight: "24px", marginBottom: 6 }}>{cur.name}</div>
            <div className="flex items-center" style={{ gap: 0, marginBottom: 6 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#000", background: "rgba(255,255,255,.55)", borderRadius: 12, padding: "3px 8px" }}>{cur.name}</span>
              <span style={{ flex: 1, height: 6, background: "rgba(255,255,255,.55)", position: "relative", margin: "0 -2px" }}>
                <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pct}%`, background: "#fff" }} />
              </span>
              <span style={{ fontSize: 10, fontWeight: 600, color: "#000", background: "#fff", borderRadius: 12, padding: "3px 10px" }}>{next.name}</span>
            </div>
            <div style={{ fontSize: 10, fontWeight: 600, lineHeight: "15px" }}>{user.turnover}/{cur.turnoverReq} <span style={{ opacity: .7 }}>流水</span></div>
            <div style={{ fontSize: 10, fontWeight: 600, lineHeight: "15px" }}>0/{cur.depositReq} <span style={{ opacity: .7 }}>存款</span></div>
          </div>
          <Link href="/zh-my/vip" onClick={onClose} className="absolute" style={{ right: 12, bottom: 38, fontSize: 10, fontWeight: 600, color: "#000", background: "rgba(255,255,255,.7)", borderRadius: 12, padding: "3px 10px" }}>VIP俱乐部 &gt;</Link>
        </div>

        <div style={{ fontSize: 18, fontWeight: 500, color: "#e2e1e2", margin: "16px 0 8px 0" }}>账户</div>
        <div style={{ background: "rgba(57,59,86,.22)", borderRadius: 12, padding: 8 }}>
          {ITEMS.map(({ label, href, Icon }) => (
            <Link key={href} href={href} onClick={onClose} className="flex items-center" style={{ height: 50, gap: 16, padding: "0 12px", borderRadius: 8, fontSize: 16, fontWeight: 600 }}>
              <Icon size={22} strokeWidth={1.5} style={{ color: "#5aa8ff" }} />{label}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}

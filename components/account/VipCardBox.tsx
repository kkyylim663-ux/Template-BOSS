"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { VIP_LEVELS } from "@/lib/mock/vip";

export default function VipCardBox({ onNavigate, desktop }: { onNavigate?: () => void; desktop?: boolean }) {
  const { user } = useAuth();
  if (!user) return null;
  const idx = Math.max(0, VIP_LEVELS.findIndex(l => l.name === user.vipLevel));
  const cur = VIP_LEVELS[idx];
  const next = VIP_LEVELS[Math.min(idx + 1, VIP_LEVELS.length - 1)];
  const pct = Math.min(100, (user.turnover / cur.turnoverReq) * 100);
  const pill: React.CSSProperties = { height: 22, borderRadius: 16, padding: "0 4px", fontSize: 10, fontWeight: 600, color: "#000", display: "flex", alignItems: "center", flexShrink: 0 };
  const req: React.CSSProperties = { fontSize: desktop ? 10.368 : 11.238, fontWeight: 600, lineHeight: 1.45, whiteSpace: "nowrap" };
  return (
    <div className="relative flex" style={{ aspectRatio: "2 / 1", borderRadius: 8, padding: 4, overflow: "hidden", containerType: "inline-size", background: "#0b1230" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/vip/vip-${idx + 1}.webp`} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div className="relative flex flex-col justify-end" style={{ width: "70%", padding: "0 8px 8px" }}>
        <div style={{ fontSize: "7cqw", fontWeight: 600, lineHeight: 1.4, color: "#fff", marginBottom: 8 }}>{cur.name}</div>
        <div className="flex items-center" style={{ height: 22, marginBottom: 8 }}>
          <span style={{ ...pill, background: "rgba(255,255,255,.5)", padding: "0 4px" }}>{cur.name}</span>
          <span style={{ flex: 1, height: 8, background: "rgba(255,255,255,.5)", borderRadius: 4, position: "relative", overflow: "hidden" }}>
            <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${pct}%`, background: "#fff" }} />
          </span>
          <span style={{ ...pill, background: "#fff", padding: desktop ? "0 11px" : "0 9.5px", marginLeft: desktop ? -10 : -11, position: "relative" }}>{next.name}</span>
        </div>
        <div style={req}><span>{user.turnover}</span><span> / </span><span style={{ color: "rgba(255,255,255,.7)" }}>{cur.turnoverReq} 流水</span></div>
        <div style={req}><span>0</span><span> / </span><span style={{ color: "rgba(255,255,255,.7)" }}>{cur.depositReq} 存款</span></div>
      </div>
      <div className="relative flex items-center justify-end" style={{ width: "30%", paddingRight: 8 }}>
        <Link href="/zh-my/vip" onClick={onNavigate} style={{ ...pill, height: desktop ? 21 : 22, background: "rgba(255,255,255,.5)", padding: desktop ? "0 7px" : "0 8.5px", whiteSpace: "nowrap" }}>VIP俱乐部 &gt;</Link>
      </div>
    </div>
  );
}

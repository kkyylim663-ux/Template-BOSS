"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronLeft, Share2, Clock } from "lucide-react";

export interface DetailData {
  title: string;
  img: string;
  period: string;
  intro: string;
  rules: string[];
  terms: string[];
}

export const PROMO_TERMS = [
  "本优惠仅限 Test123 注册会员，每位玩家、每个家庭、每个 IP 地址及每台设备仅限参与一次。",
  "红利及相关赢利须完成指定流水要求后方可提款，具体倍数以活动说明为准。",
  "同一笔存款不可同时参与多项存款类优惠，除非活动另有说明。",
  "若发现任何套利、对冲投注或滥用优惠的行为，Test123 有权取消红利及赢利，并关闭相关账户。",
  "Test123 保留随时修改、暂停或终止本活动的权利，恕不另行通知。",
];

export default function DetailSheet({ data, onClose }: { data: DetailData | null; onClose: () => void }) {
  useEffect(() => {
    if (!data) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", esc); };
  }, [data, onClose]);
  if (!data || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center detail-wrap" style={{ zIndex: 200, background: "rgba(3,6,20,.72)" }} onClick={onClose}>
      <div className="flex flex-col detail-sheet" onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: 760, height: "100%", maxHeight: "100%", background: "var(--bg)", overflow: "hidden" }}>
        <div className="flex items-center justify-between" style={{ height: 56, padding: "0 16px", flexShrink: 0, background: "var(--solid)" }}>
          <button onClick={onClose} aria-label="返回" className="flex items-center justify-center" style={{ width: 32, height: 32 }}><ChevronLeft size={26} /></button>
          <span className="truncate" style={{ fontSize: 16, fontWeight: 600, padding: "0 12px" }}>{data.title}</span>
          <button aria-label="分享" className="flex items-center justify-center" style={{ width: 32, height: 32 }}><Share2 size={20} /></button>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.img} alt={data.title} draggable={false} style={{ display: "block", width: "100%", aspectRatio: "2048 / 762", objectFit: "cover" }} />
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "rgba(57,59,86,.22)", borderRadius: 16, padding: 16 }}>
              <div className="text-center" style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>描述</div>
              <p style={{ margin: "0 0 12px", fontSize: 14, lineHeight: "22px" }}>{data.intro}</p>
              <div className="flex items-center" style={{ gap: 8, fontSize: 14, fontWeight: 600, color: "var(--gold)", marginBottom: 12 }}><Clock size={16} /> {data.period}</div>
              <ol style={{ margin: 0, paddingLeft: 20, listStyle: "decimal", fontSize: 14, lineHeight: "22px" }}>
                {data.rules.map(r => <li key={r} style={{ marginBottom: 6 }}>{r}</li>)}
              </ol>
            </div>
            <div style={{ background: "rgba(57,59,86,.22)", borderRadius: 16, padding: 16 }}>
              <div className="text-center" style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>条款与条件</div>
              <ol style={{ margin: 0, paddingLeft: 20, listStyle: "decimal", fontSize: 13, lineHeight: "20px", color: "#d7daf0" }}>
                {data.terms.map(r => <li key={r} style={{ marginBottom: 6 }}>{r}</li>)}
              </ol>
            </div>
          </div>
        </div>
        <div style={{ padding: 12, flexShrink: 0, background: "var(--solid)" }}>
          <Link href="/zh-my/contact-us" onClick={onClose} className="btn-dark btn-lg" style={{ width: "100%", background: "var(--card)" }}>联系我们</Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}

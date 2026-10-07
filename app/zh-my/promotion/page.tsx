"use client";
import { useState } from "react";
import { Clock } from "lucide-react";
import { PROMO_TABS, PROMOTIONS } from "@/lib/mock/promotions";
import { Ph } from "@/components/ui/bo";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function PromotionPage() {
  const [tab, setTab] = useState<(typeof PROMO_TABS)[number]>("全部");
  const { isLoggedIn } = useAuth();
  const { openLogin } = useModal();
  const list = tab === "全部" ? PROMOTIONS : PROMOTIONS.filter(p => p.tab === tab);

  return (
    <div>
      <div className="scroll-x" style={{ margin: "10px 0" }}>
        <div className="inline-flex" style={{ background: "var(--card)", borderRadius: 16, padding: 4 }}>
          {PROMO_TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                margin: 8, height: 45, padding: "12px 16px", borderRadius: 16, fontSize: 14, fontWeight: 600, whiteSpace: "nowrap",
                background: tab === t ? "var(--solid)" : "transparent",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 && (
        <div className="flex items-center justify-center" style={{ height: 200, fontSize: 14, color: "var(--muted-3)" }}>未找到记录</div>
      )}

      {list.map(p => (
        <div key={p.id} style={{ background: "var(--card)", marginBottom: 16 }}>
          <Ph style={{ aspectRatio: "1110 / 397" }} iconSize={40}>
            <span style={{ position: "absolute", bottom: 16, left: 16, fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,.35)" }}>{p.title}</span>
          </Ph>
          <div style={{ padding: "0 16px 16px" }}>
            <span className="block" style={{ fontSize: 18, fontWeight: 600, margin: "12px 0 8px" }}>{p.title}</span>
            <div className="flex items-center justify-between" style={{ height: 32 }}>
              <span className="flex items-center" style={{ gap: 6, fontSize: 14, fontWeight: 600, color: "var(--muted-3)" }}>
                <Clock size={14} /> {p.period}
              </span>
              <div className="flex" style={{ gap: 10 }}>
                {p.apply && (
                  <button className="btn-dark" style={{ width: 96 }} onClick={() => { if (!isLoggedIn) openLogin(); }}>申请</button>
                )}
                <button className="btn-gold" style={{ width: 96 }}>详情</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

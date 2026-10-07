"use client";
import { useState } from "react";
import { ChevronDown, Tag } from "lucide-react";
import { BalanceWallet, Field } from "@/components/ui/bo";
import { PROMOTIONS } from "@/lib/mock/promotions";

export default function MyPromoPage() {
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState<string | null>(null);
  const options = PROMOTIONS.filter(p => p.apply);

  return (
    <div className="flex flex-col" style={{ gap: 8, marginBottom: 16 }}>
      <BalanceWallet promo />
      <div className="relative" style={{ background: "var(--card)", borderRadius: 12, padding: 8 }}>
        <div style={{ height: 25, fontSize: 14, fontWeight: 600 }}>选择您的促销</div>
        <button className="w-full flex items-center justify-between" style={{ height: 37, background: "var(--card)", borderRadius: 4, padding: "8px 12px", fontSize: 14, fontWeight: 600, color: sel ? "#fff" : "var(--muted-2)" }} onClick={() => setOpen(o => !o)}>
          {sel ?? "请选择促销"} <ChevronDown size={16} />
        </button>
        {open && (
          <div className="absolute left-2 right-2 z-10" style={{ top: 74, background: "var(--pill)", border: "0.8px solid var(--solid)", borderRadius: 8, padding: 4, maxHeight: 260, overflowY: "auto" }}>
            {options.map(o => (
              <button key={o.id} className="w-full text-left" style={{ padding: "8px 10px", borderRadius: 6, fontSize: 14, fontWeight: 600 }} onClick={() => { setSel(o.title); setOpen(false); }}>
                {o.title}
              </button>
            ))}
          </div>
        )}
      </div>
      <Field label="金额"><input className="input" placeholder="0.00" inputMode="decimal" /></Field>
      <button className="btn-dark btn-lg" disabled>提交（前端骨架）</button>
      <div style={{ marginTop: 12 }}>
        <div className="flex items-center" style={{ gap: 6, fontSize: 14, fontWeight: 600, height: 21 }}>
          <Tag size={18} /> 您的活跃促销
        </div>
        <span style={{ display: "block", fontSize: 14, marginTop: 8 }}>未找到记录</span>
      </div>
    </div>
  );
}

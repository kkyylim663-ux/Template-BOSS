"use client";
import { ChevronLeft, ChevronRight, RefreshCw, ImageIcon } from "lucide-react";
import { useRef, type ReactNode, type ElementType, type CSSProperties } from "react";
import { useAuth } from "@/context/AuthContext";

export function SectionTitle({ icon: Icon, children }: { icon: ElementType; children: ReactNode }) {
  return (
    <div className="sec-title">
      <Icon strokeWidth={2} />
      <span>{children}</span>
    </div>
  );
}

export function useScroller(step = 0.8) {
  const ref = useRef<HTMLDivElement>(null);
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * step, behavior: "smooth" });
  };
  return { ref, prev: () => go(-1), next: () => go(1) };
}

export function CtrlPair({ onPrev, onNext, square }: { onPrev: () => void; onNext: () => void; square?: boolean }) {
  return (
    <div className="ctrl-pair">
      <button className={`ctrl-btn ${square ? "sq" : "l"}`} onClick={onPrev} aria-label="上一页">
        <ChevronLeft size={20} />
      </button>
      <button className={`ctrl-btn ${square ? "sq" : "r"}`} onClick={onNext} aria-label="下一页">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export function Ph({
  icon: Icon = ImageIcon, radius = 0, style, className = "", iconSize = 28, children,
}: {
  icon?: ElementType; radius?: number; style?: CSSProperties; className?: string; iconSize?: number; children?: ReactNode;
}) {
  return (
    <div className={`ph ${className}`} style={{ borderRadius: radius, ...style }}>
      <Icon size={iconSize} strokeWidth={1.5} />
      {children}
    </div>
  );
}

export function Seg<T extends string>({ items, value, onChange, style }: {
  items: { key: T; label: string }[]; value: T; onChange: (v: T) => void; style?: CSSProperties;
}) {
  return (
    <div className="seg" style={style}>
      {items.map(i => (
        <button key={i.key} className={value === i.key ? "on" : ""} onClick={() => onChange(i.key)}>
          {i.label}
        </button>
      ))}
    </div>
  );
}

export function Field({ label, required, children }: { label?: string; required?: boolean; children: ReactNode }) {
  return (
    <div className="field">
      {label && <label className="field-label">{label}{required && " *"}</label>}
      {children}
    </div>
  );
}

export function Notes({ title = "重要提示", children }: { title?: string; children: ReactNode }) {
  return (
    <div className="notes">
      <span className="notes-title">{title}</span>
      <span className="notes-msg">{children}</span>
    </div>
  );
}

export function BalanceWallet({ promo }: { promo?: boolean }) {
  const { user, refreshBalance } = useAuth();
  const bal = (user?.balance ?? 0).toFixed(2);
  const Box = ({ label, value, border }: { label: string; value: string; border?: boolean }) => (
    <div style={{ flex: 1, padding: 8, borderLeft: border ? "0.8px solid rgba(0,0,0,0.15)" : undefined }}>
      <div className="flex items-center gap-2" style={{ fontSize: 12, fontWeight: 600, color: "#1a1d3c", height: 18 }}>
        {label}
        {!promo && (
          <button onClick={refreshBalance} className="flex items-center" style={{ color: "#1a1d3c" }} aria-label="刷新">
            <RefreshCw size={12} />
          </button>
        )}
      </div>
      <div className="flex items-baseline gap-1" style={{ height: 34, color: "#090c1e" }}>
        <span style={{ fontSize: 14, fontWeight: 700 }}>MYR</span>
        <span style={{ fontSize: 24, fontWeight: 700 }}>{value}</span>
      </div>
    </div>
  );
  return (
    <div style={{ marginBottom: 8 }}>
      <div
        className="flex"
        style={{
          height: 79, borderRadius: 12, padding: 4, marginBottom: 8,
          background: "linear-gradient(100deg, #ffd66b 0%, #ffad00 45%, #f28c00 100%)",
        }}
      >
        {promo ? (
          <>
            <Box label="主钱包" value={bal} />
            <Box label="促销钱包" value={(user?.promotionBalance ?? 0).toFixed(2)} border />
          </>
        ) : (
          <div style={{ width: "70%" }}><Box label="主钱包" value={bal} /></div>
        )}
      </div>
      <div className="flex items-center gap-1" style={{ fontSize: 12, fontWeight: 600, height: 18 }}>
        <span>流水:</span>
        <span>{(user?.turnover ?? 0).toFixed(2)}</span>
        <span>/</span>
        <span>{(user?.turnoverRequired ?? 0).toFixed(2)}</span>
      </div>
    </div>
  );
}

export function PageBanner({ title, icon }: { title: string; icon?: ElementType }) {
  return (
    <Ph icon={icon} radius={16} iconSize={64} style={{ height: 306, marginBottom: 16 }}>
      <span style={{ position: "absolute", left: 48, top: "50%", transform: "translateY(-50%)", fontSize: 24, fontWeight: 600, color: "#fff" }}>
        {title}
      </span>
    </Ph>
  );
}

export const txTile = (on: boolean): CSSProperties => ({
  minHeight: 80, borderRadius: 8, padding: "20px 4px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
  background: on ? "rgba(255,255,255,.4)" : "var(--card)", border: on ? "0.8px solid #fff" : "0.8px solid transparent",
});

export function TxTitle({ children }: { children: ReactNode }) {
  return <span style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{children}</span>;
}

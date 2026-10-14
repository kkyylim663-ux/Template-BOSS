"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Russo_One } from "next/font/google";

const display = Russo_One({ weight: "400", subsets: ["latin"], display: "swap" });

// Shared chrome for the login / register popups: hero banner, tab bar, animated body.
// One instance stays mounted while switching tabs, so only the body cross-fades and the height eases.
// Hero art: public/popup/v2/login-hero.webp (1200x570), left ~45% is intentionally empty for the overlaid text.

export function AuthPanel({ children }: { children: React.ReactNode }) {
  return <div style={{ marginTop: 10, background: "#0d1230", borderRadius: 12, padding: 16 }}>{children}</div>;
}

function AnimatedBody({ k, children }: { k: string; children: React.ReactNode }) {
  const inner = useRef<HTMLDivElement>(null);
  const [h, setH] = useState<number | undefined>();
  // Measure synchronously on every tab swap (so the new body is never clipped), then follow later size changes.
  useLayoutEffect(() => {
    if (inner.current) setH(Math.ceil(inner.current.getBoundingClientRect().height));
  }, [k]);
  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setH(Math.ceil(el.getBoundingClientRect().height)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className="auth-body" style={{ height: h }}>
      <div ref={inner} style={{ display: "flow-root" }}>
        <div key={k} className="auth-swap">{children}</div>
      </div>
    </div>
  );
}

export default function AuthShell({
  active, onClose, onSwitch, children,
}: {
  active: "login" | "register";
  onClose: () => void;
  onSwitch: () => void;
  children: React.ReactNode;
}) {
  const tab = (on: boolean): React.CSSProperties => ({
    flex: 1, height: 44, fontSize: 15, fontWeight: 600, color: on ? "#fff" : "rgba(255,255,255,.65)", transition: "color .25s",
  });

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box" style={{ maxWidth: 420, padding: 0 }}>
        {/* hero */}
        <div style={{ position: "relative", aspectRatio: "1200 / 570", background: "#0a1030" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/popup/v2/login-hero.webp" alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,10,35,.55) 0%, transparent 55%), linear-gradient(to bottom, transparent 78%, var(--bg) 100%)" }} />
          <button onClick={onClose} aria-label="关闭" className="flex items-center justify-center" style={{ position: "absolute", left: 10, top: 10, width: 28, height: 28, color: "#fff", zIndex: 2 }}>
            <X size={20} />
          </button>

          <div className={display.className} style={{ position: "absolute", left: "6%", bottom: "21%" }}>
            <div className="auth-headline">
              <span>LET&apos;S MAKE</span>
              <span className="auth-gold">YOU RICH</span>
            </div>
            <div className="auth-sub">Rise higher. Win bigger.</div>
          </div>
        </div>

        <div style={{ padding: "0 14px 20px" }}>
          {/* tabs */}
          <div className="flex items-center" style={{ background: "var(--btn-dark)", borderRadius: 10, position: "relative" }}>
            <button type="button" style={tab(active === "login")} onClick={active === "login" ? undefined : onSwitch}>登录</button>
            <span style={{ width: 2, height: 16, background: "#fff", borderRadius: 1 }} />
            <button type="button" style={tab(active === "register")} onClick={active === "register" ? undefined : onSwitch}>注册</button>
            <span className="auth-ind" style={{ transform: active === "login" ? "translateX(0)" : "translateX(100%)" }}><i /></span>
          </div>

          <AnimatedBody k={active}>{children}</AnimatedBody>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function JackpotBanner() {
  const [v, setV] = useState(179138979.9);
  useEffect(() => {
    const t = setInterval(() => setV(x => x + Math.random() * 12), 120);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden flex items-center justify-center" style={{
      marginTop: 32, aspectRatio: "1110 / 249", borderRadius: 20, containerType: "inline-size",
      background: "radial-gradient(ellipse at 50% 60%, rgba(255,173,0,.35), transparent 60%), linear-gradient(180deg,#3a1d07,#130a24)",
    }}>
      <div className="flex items-baseline" style={{ gap: 8, marginTop: "6%", fontSize: "clamp(24px, 4.7cqw, 52px)", fontWeight: 400, fontVariantNumeric: "tabular-nums" }}>
        <span style={{ fontSize: "1em" }}>MYR</span>
        <span>{v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function JackpotBanner() {
  const [v, setV] = useState(179138979.9);
  useEffect(() => {
    const t = setInterval(() => setV(x => x + Math.random() * 12), 120);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden flex items-center justify-center jp-sec" style={{
      marginTop: 32, aspectRatio: "1110 / 249", containerType: "inline-size",
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <picture>
        <source media="(max-width:1024px)" srcSet="/jackpot/jp-m.webp" />
        <img src="/jackpot/jp-d.webp" alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
      </picture>
      <div className="relative flex items-baseline" style={{ gap: 8, marginTop: "6%", fontSize: "clamp(24px, 4.7cqw, 52px)", fontWeight: 400, fontVariantNumeric: "tabular-nums", textShadow: "0 2px 10px rgba(0,0,0,.6)" }}>
        <span style={{ fontSize: "1em" }}>MYR</span>
        <span>{v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
    </section>
  );
}

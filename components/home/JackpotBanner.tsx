"use client";
import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

const led = Orbitron({ subsets: ["latin"], weight: ["800"], display: "swap" });

export default function JackpotBanner() {
  const [v, setV] = useState(179138979.9);
  useEffect(() => {
    const t = setInterval(() => setV(x => x + Math.random() * 12), 120);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden jp-sec" style={{ marginTop: 32, aspectRatio: "1110 / 249", containerType: "inline-size" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <picture>
        <source media="(max-width:1024px)" srcSet="/jackpot/jp-m.webp" />
        <img src="/jackpot/jp-d.webp" alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
      </picture>

      <div className="jp-title">PROGRESSIVE JACKPOT</div>

      {/* marquee-bulb frame around an LED readout */}
      <div className="jp-bulbs">
        <div className="jp-screen">
          <span className={`jp-led ${led.className}`}>
            MYR {v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </section>
  );
}

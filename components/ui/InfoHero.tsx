import type { ElementType } from "react";

export default function InfoHero({ src, title, sub, chips }: { src: string; title: string; sub: string; chips: [ElementType, string][] }) {
  return (
    <div className="relative overflow-hidden ab-hero" style={{ borderRadius: 16, marginBottom: 16, aspectRatio: "2204 / 608", background: "#060b20", containerType: "inline-size" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div className="absolute flex flex-col justify-center ab-text" style={{ left: "4.5%", top: 0, bottom: 0, width: "46%", gap: "1.6cqw" }}>
        <h1 style={{ margin: 0, fontSize: "5.4cqw", fontWeight: 900, fontStyle: "italic", lineHeight: 1.05, background: "linear-gradient(180deg,#ffffff 0%,#cfe4ff 45%,#7fb6ff 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", filter: "drop-shadow(0 2px 0 rgba(6,20,60,.9)) drop-shadow(0 0 12px rgba(60,150,255,.55))" }}>{title}</h1>
        <p style={{ margin: 0, fontSize: "2.1cqw", fontWeight: 700, color: "#ffc533", textShadow: "0 1px 6px rgba(0,0,0,.8)" }}>{sub}</p>
        <div className="flex flex-wrap" style={{ gap: "0.9cqw" }}>
          {chips.map(([I, t]) => (
            <span key={t} className="inline-flex items-center" style={{ gap: "0.5cqw", padding: "0.5cqw 1.2cqw", borderRadius: 999, fontSize: "1.45cqw", fontWeight: 700, background: "rgba(8,20,60,.62)", border: "1px solid rgba(90,170,255,.45)", backdropFilter: "blur(2px)" }}>
              <I style={{ width: "1.8cqw", height: "1.8cqw", color: "#5ec1ff" }} />{t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

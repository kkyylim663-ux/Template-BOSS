"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { BANNERS } from "@/lib/mock/home";

export default function HomeBanner() {
  const [cur, setCur] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCur(v => (v + 1) % BANNERS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-hidden home-banner" style={{ borderRadius: 16 }}>
      <div className="flex h-full" style={{ transform: `translateX(-${cur * 100}%)`, transition: "transform .5s ease" }}>
        {BANNERS.map((b, i) => (
          <Link
            key={i}
            href={b.href}
            target={b.href.startsWith("http") ? "_blank" : undefined}
            className="ph h-full flex-col"
            style={{ flex: "0 0 100%", gap: 10, background: `linear-gradient(135deg, hsl(${230 + i * 12} 45% 22%), #0d1028)` }}
          >
            <ImageIcon size={36} strokeWidth={1.4} />
            <span className="home-banner-title" style={{ fontWeight: 800, color: "rgba(255,255,255,.5)", textAlign: "center", padding: "0 24px" }}>{b.title}</span>
          </Link>
        ))}
      </div>
      <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: 12, gap: 8 }}>
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            aria-label={`第 ${i + 1} 张`}
            style={{ width: 25, height: 5, borderRadius: 32, background: "#fff", opacity: i === cur ? 1 : 0.4, transition: "opacity .2s" }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { Flame, ImageIcon } from "lucide-react";
import { HOT_EVENT_PROVIDERS, HOT_ART } from "@/lib/mock/home";
import { CtrlPair, SectionTitle, useScroller } from "@/components/ui/bo";

export function EventCard({ name, art, w = 148, h = 197 }: { name: string; art?: number; w?: number | string; h?: number | string }) {
  return (
    <Link href="/zh-my/event" className="relative flex-shrink-0 block ev-card" style={{ width: w, height: h === "auto" ? undefined : h, aspectRatio: h === "auto" ? "148 / 197" : undefined }}>
      <span className="ph flex-col" style={{ width: "100%", height: "100%", borderRadius: 12, gap: 8 }}>
        <ImageIcon size={26} strokeWidth={1.4} />
        <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.45)", textAlign: "center", padding: "0 8px" }}>{name}</span>
        {art !== undefined && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/games/home/${art}.webp`} alt={name} loading="lazy" draggable={false} onError={e => { e.currentTarget.style.display = "none"; }} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />
        )}
      </span>
      <span className="absolute flex items-center justify-center ev-ribbon" style={{
        left: 12, right: 12, bottom: 0, height: 21, borderRadius: "6px 6px 0 0",
        background: "linear-gradient(180deg,#ffe08a,#ffad00)", color: "#000", fontSize: 14, fontWeight: 500,
      }}>
        活动
      </span>
    </Link>
  );
}

export default function HotEventsSection() {
  const { ref, prev, next } = useScroller();
  return (
    <section className="flex flex-col hot-sec" style={{ marginTop: 16, background: "var(--card)", borderRadius: 20, padding: 12, gap: 12 }}>
      <div className="flex items-center justify-between" style={{ height: 32, gap: 12 }}>
        <SectionTitle icon={Flame}>热门活动</SectionTitle>
        <div className="flex items-center" style={{ gap: 20 }}>
          <Link href="/zh-my/event" style={{ fontSize: 16, fontWeight: 600 }}>查看全部</Link>
          <CtrlPair onPrev={prev} onNext={next} />
        </div>
      </div>
      <div ref={ref} className="scroll-x flex" style={{ gap: 12 }}>
        {HOT_EVENT_PROVIDERS.map((p, i) => <EventCard key={p} name={p} art={HOT_ART[i]} />)}
      </div>
    </section>
  );
}

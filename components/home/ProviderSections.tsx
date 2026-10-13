"use client";
import Link from "next/link";
import { Gamepad2, Tv2, Trophy, Fish, Ticket, Rocket, Joystick, Spade, CircleDot, ImageIcon, Flame } from "lucide-react";
import { PROVIDER_SECTIONS, HOME_ART } from "@/lib/mock/home";
import { CtrlPair, SectionTitle, useScroller } from "@/components/ui/bo";

const ICONS = [Gamepad2, Tv2, Trophy, Fish, Ticket, Rocket, Joystick, Spade, CircleDot];

export function ProviderCard({ name, href, art, w = 180, h = 240 }: { name: string; href: string; art?: number; w?: number | string; h?: number | string }) {
  return (
    <Link href={href} className="relative flex-shrink-0 block" style={{ width: w, height: h === "auto" ? undefined : h, aspectRatio: h === "auto" ? "3 / 4" : undefined }}>
      <span className="ph flex-col" style={{ width: "100%", height: "100%", borderRadius: 16, gap: 8 }}>
        <ImageIcon size={28} strokeWidth={1.4} />
        <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,.5)", textAlign: "center", padding: "0 10px" }}>{name}</span>
        {art !== undefined && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/games/home/${art}.webp`} alt={name} loading="lazy" draggable={false} onError={e => { e.currentTarget.style.display = "none"; }} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: 16 }} />
        )}
      </span>
      <span className="absolute flex items-center justify-center" style={{ top: 6, right: 6, width: 36, height: 36, borderRadius: "50%", background: "rgba(245,78,81,.9)" }}>
        <Flame size={18} />
      </span>
    </Link>
  );
}

function Row({ title, href, providers, Icon }: { title: string; href: string; providers: string[]; Icon: React.ElementType }) {
  const { ref, prev, next } = useScroller();
  const slug = (n: string) => `${href}?provider=${encodeURIComponent(n.toLowerCase().replace(/\s+/g, ""))}`;
  return (
    <section className="flex flex-col prov-sec" style={{ marginTop: 32, gap: 16 }}>
      <div className="flex items-center justify-between" style={{ height: 32 }}>
        <Link href={href}><SectionTitle icon={Icon}>{title}</SectionTitle></Link>
        <div className="only-desktop"><CtrlPair square onPrev={prev} onNext={next} /></div>
      </div>
      <div ref={ref} className="scroll-x flex prov-row" style={{ gap: 12 }}>
        {providers.map((p, i) => <ProviderCard key={p} name={p} href={slug(p)} art={HOME_ART[href]?.[i]} />)}
      </div>
    </section>
  );
}

export default function ProviderSections() {
  return (
    <>
      {PROVIDER_SECTIONS.map((s, i) => (
        <Row key={s.href} title={s.title} href={s.href} providers={s.providers} Icon={ICONS[i]} />
      ))}
    </>
  );
}

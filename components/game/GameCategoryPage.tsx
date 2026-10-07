"use client";
import { Suspense, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { LayoutGrid, ChevronLeft, ChevronRight, Search, ImageIcon, User, type LucideIcon } from "lucide-react";
import { GAME_PROVIDERS } from "@/lib/mock/games";
import { SectionTitle, useScroller } from "@/components/ui/bo";
import { ProviderCard } from "@/components/home/ProviderSections";
import { sidebarGroups } from "@/lib/nav";

interface Props {
  category: string;
  empty?: boolean;
}

function GameCard({ i }: { i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ padding: "4px 0" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="relative" style={{ aspectRatio: "1 / 1", borderRadius: 16, overflow: "hidden" }}>
        <div className="ph w-full h-full"><ImageIcon size={28} strokeWidth={1.4} /></div>
        <span className="absolute flex items-center" style={{ top: 8, left: 8, height: 22, borderRadius: 20, padding: "4px 8px", gap: 2, background: "rgba(0,0,0,.5)", fontSize: 12, fontWeight: 600 }}>
          <User size={12} /> {40 + i * 7}
        </span>
        {hover && (
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ gap: 8, background: "rgba(9,12,30,.7)" }}>
            <button className="btn-dark" style={{ width: "60%" }}>游戏</button>
            <button className="btn-gold" style={{ width: "60%" }}>试玩</button>
          </div>
        )}
      </div>
      <span className="block truncate" style={{ fontSize: 12, fontWeight: 600, padding: "4px 8px 0" }}>占位游戏 {i + 1}</span>
    </div>
  );
}

function Inner({ category, empty }: Props) {
  const nav = sidebarGroups[1].items.find(i => i.href === `/zh-my/${category}`);
  const title = nav?.label ?? category;
  const icon = (nav?.icon ?? LayoutGrid) as LucideIcon;
  const badge = nav?.badge;
  const providers = GAME_PROVIDERS[category] ?? [];
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = params.get("provider");
  const [sub, setSub] = useState("全部");
  const { ref, prev, next } = useScroller(0.6);

  const pick = (key: string | null) => router.replace(key ? `${pathname}?provider=${key}` : pathname, { scroll: false });
  const arrowBtn: React.CSSProperties = { width: 32, height: 50, borderRadius: 4, padding: 6, background: "var(--btn-dark)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" };
  const tile = (on: boolean): React.CSSProperties => ({
    width: 50, height: 50, borderRadius: 8, padding: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
    background: on ? "rgba(255,255,255,.4)" : "var(--card)",
  });

  if (empty) {
    return (
      <div className="flex items-center" style={{ gap: 8 }}>
        <SectionTitle icon={icon}>{title}</SectionTitle>
        {badge && <span style={{ fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 6, background: "var(--gold)", color: "#000" }}>{badge}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col" style={{ gap: 12 }}>
      <SectionTitle icon={icon}>{title}</SectionTitle>

      <div style={{ background: "var(--card)", borderRadius: 8, padding: 8, border: "0.8px solid var(--solid)" }}>
        <div className="flex items-center" style={{ height: 50 }}>
          <button style={arrowBtn} onClick={prev} aria-label="上一页"><ChevronLeft size={20} /></button>
          <div ref={ref} className="scroll-x flex flex-1" style={{ padding: "0 12px", gap: 12 }}>
            <button style={tile(!active)} onClick={() => pick(null)} title="全部"><LayoutGrid size={24} /></button>
            {providers.map(p => (
              <button key={p.key} style={tile(active === p.key)} onClick={() => pick(p.key)} title={p.name}>
                <span style={{ fontSize: 9, fontWeight: 700, lineHeight: "11px", textAlign: "center", color: "rgba(255,255,255,.7)", overflow: "hidden", maxHeight: 34 }}>{p.name}</span>
              </button>
            ))}
          </div>
          <button style={arrowBtn} onClick={next} aria-label="下一页"><ChevronRight size={20} /></button>
        </div>
      </div>

      {active && (
        <div className="flex items-center justify-between flex-wrap" style={{ minHeight: 48, gap: 12 }}>
          <div className="flex" style={{ gap: 8 }}>
            {["全部", "Hot", "New"].map(s => (
              <button key={s} onClick={() => setSub(s)} style={{
                width: 90, height: 35, borderRadius: 8, padding: 8, fontSize: 12, fontWeight: 600, background: "var(--card)",
                border: `0.8px solid ${sub === s ? "#fff" : "var(--solid)"}`,
              }}>{s}</button>
            ))}
          </div>
          <div className="relative" style={{ width: 222 }}>
            <Search size={18} className="absolute" style={{ left: 9, top: 9, color: "var(--muted-2)" }} />
            <input className="input" style={{ paddingLeft: 34 }} placeholder="搜索游戏" />
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 lg:grid-cols-6" style={{ gap: 10, marginBottom: 16 }}>
        {active
          ? [0, 1].map(i => <GameCard key={i} i={i} />)
          : providers.slice(0, 2).map(p => (
              <ProviderCard key={p.key} name={p.name} href={`${pathname}?provider=${p.key}`} w="100%" h="auto" />
            ))}
      </div>
    </div>
  );
}

export default function GameCategoryPage(props: Props) {
  return (
    <Suspense>
      <Inner {...props} />
    </Suspense>
  );
}

"use client";
import { Star, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/bo";
import { EventCard } from "@/components/home/HotEventsSection";
import { HOT_EVENT_PROVIDERS } from "@/lib/mock/home";

export default function EventPage() {
  const arrow: React.CSSProperties = { width: 32, height: 50, borderRadius: 4, padding: 6, background: "#8f92bd", color: "var(--muted)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 };
  return (
    <div className="flex flex-col" style={{ gap: 12 }}>
      <SectionTitle icon={Star}>热门活动</SectionTitle>
      <div style={{ background: "var(--card)", borderRadius: 8, padding: 8, border: "0.8px solid var(--solid)" }}>
        <div className="flex items-center" style={{ height: 50 }}>
          <button style={arrow} aria-label="上一页"><ChevronLeft size={20} /></button>
          <div className="flex flex-1" style={{ padding: "0 12px" }}>
            <span className="flex items-center justify-center" style={{ width: 50, height: 50, borderRadius: 8, background: "rgba(255,255,255,.4)" }}>
              <LayoutGrid size={24} />
            </span>
          </div>
          <button style={arrow} aria-label="下一页"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6" style={{ gap: 10, marginBottom: 16 }}>
        {HOT_EVENT_PROVIDERS.map(p => <EventCard key={p} name={p} w="100%" h="auto" />)}
      </div>
    </div>
  );
}

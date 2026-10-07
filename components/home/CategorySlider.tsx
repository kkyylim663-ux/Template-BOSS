"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sidebarGroups } from "@/lib/nav";
import { useScroller } from "@/components/ui/bo";

const cats = sidebarGroups[1].items;

export default function CategorySlider() {
  const { ref, prev, next } = useScroller(0.6);
  const arrow: React.CSSProperties = { width: 40, height: 40, borderRadius: "50%", padding: 6, flexShrink: 0 };

  return (
    <div style={{ marginTop: 12, padding: "12px 0" }}>
      <div className="flex items-center" style={{ height: 85 }}>
        <button onClick={prev} className="flex items-center justify-center" style={{ ...arrow, color: "var(--muted)" }} aria-label="上一页">
          <ChevronLeft size={24} />
        </button>
        <div ref={ref} className="scroll-x flex flex-1" style={{ padding: "0 12px", gap: 12 }}>
          {cats.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center flex-shrink-0" style={{ width: 196, height: 85, borderRadius: 30, padding: "10px 8px" }}>
              <span className="flex items-center w-full h-full" style={{ borderRadius: 30, background: "linear-gradient(90deg, rgba(57,59,86,.6), rgba(57,59,86,.18))", padding: "0 14px", gap: 12 }}>
                <span className="flex items-center justify-center" style={{ width: 52, height: 52, color: "var(--gold)", flexShrink: 0 }}>
                  <Icon size={36} strokeWidth={1.5} />
                </span>
                <span style={{ fontSize: 18, fontWeight: 500, lineHeight: "27px" }}>{label}</span>
              </span>
            </Link>
          ))}
        </div>
        <button onClick={next} className="flex items-center justify-center" style={{ ...arrow, color: "#fff" }} aria-label="下一页">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

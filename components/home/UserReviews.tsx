"use client";
import { MessageSquareQuote, ChevronLeft, ChevronRight, User } from "lucide-react";
import { REVIEWS } from "@/lib/mock/home";
import { SectionTitle, useScroller } from "@/components/ui/bo";

export default function UserReviews() {
  const { ref, prev, next } = useScroller(1);
  const btn: React.CSSProperties = { width: 32, height: 32, background: "var(--card)", display: "flex", alignItems: "center", justifyContent: "center" };
  return (
    <section className="flex flex-col" style={{ marginTop: 16, gap: 12 }}>
      <div className="flex items-center justify-between" style={{ height: 32 }}>
        <SectionTitle icon={MessageSquareQuote}>用户评价</SectionTitle>
        <div className="flex" style={{ gap: 8 }}>
          <button onClick={prev} style={{ ...btn, borderRadius: "50% 4px 4px 50%", color: "var(--muted)" }} aria-label="上一页"><ChevronLeft size={20} /></button>
          <button onClick={next} style={{ ...btn, borderRadius: "4px 50% 50% 4px" }} aria-label="下一页"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div ref={ref} className="scroll-x flex" style={{ gap: 12 }}>
        {REVIEWS.map(r => (
          <div key={r.name} className="flex flex-col flex-shrink-0" style={{ width: "calc((100% - 24px) / 3)", minWidth: 260, height: 156, background: "var(--card)", borderRadius: 20, padding: 12, gap: 12 }}>
            <div className="flex items-center" style={{ height: 30, gap: 8 }}>
              <span className="flex items-center justify-center" style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--solid)" }}><User size={16} /></span>
              <span style={{ fontSize: 18, fontWeight: 600, color: "#e2e1e2" }}>{r.name}</span>
            </div>
            <div style={{ flex: 1, background: "var(--card)", borderRadius: 8, padding: "6px 12px" }}>
              <span style={{ fontSize: 18, fontWeight: 600 }}>{r.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

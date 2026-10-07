"use client";
import Link from "next/link";
import { Shield } from "lucide-react";
import { MATCHES } from "@/lib/mock/home";
import { CtrlPair, useScroller } from "@/components/ui/bo";

function Team({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center" style={{ width: 70, gap: 4 }}>
      <span className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--solid)" }}>
        <Shield size={18} />
      </span>
      <span style={{ fontSize: 11, fontWeight: 600, textAlign: "center", lineHeight: "14px", maxWidth: 70, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
    </div>
  );
}

export default function UpcomingMatches() {
  const { ref, prev, next } = useScroller();
  return (
    <section style={{
      marginTop: 16, borderRadius: 16, padding: "18px 30px",
      background: "radial-gradient(ellipse at 50% 120%, rgba(30,140,90,.55), transparent 60%), linear-gradient(180deg,#0f2a5c,#0b1a3d)",
    }}>
      <div className="flex items-center justify-between" style={{ height: 32 }}>
        <span style={{ fontSize: 20, fontWeight: 600 }}>足球比赛</span>
        <CtrlPair square onPrev={prev} onNext={next} />
      </div>
      <div ref={ref} className="scroll-x flex" style={{ gap: 12, marginTop: 27 }}>
        {MATCHES.map((m, i) => (
          <div key={i} className="flex flex-col flex-shrink-0" style={{
            width: 307, height: 155, background: "rgba(0,0,0,.5)", borderRadius: 12, padding: "16px 14px", border: "2.4px solid var(--solid)",
          }}>
            <div className="flex items-start justify-between">
              <Team name={m.home} />
              <div className="flex flex-col items-center" style={{ flex: 1, gap: 2, paddingTop: 2 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: "var(--muted-3)", textAlign: "center" }}>{m.league}</span>
                <span style={{ fontSize: 12, fontWeight: 700 }}>{m.date}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: "var(--muted-3)" }}>{m.time}</span>
              </div>
              <Team name={m.away} />
            </div>
            <div className="flex items-center justify-between" style={{ marginTop: "auto", gap: 8 }}>
              <span className="flex items-center justify-center" style={{ width: 56, height: 26, borderRadius: 6, background: "var(--solid)", fontSize: 12, fontWeight: 700 }}>{m.h}</span>
              <Link href="/zh-my/sport" className="btn-gold" style={{ height: 26, flex: 1 }}>Join Now</Link>
              <span className="flex items-center justify-center" style={{ width: 56, height: 26, borderRadius: 6, background: "var(--solid)", fontSize: 12, fontWeight: 700 }}>{m.a}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

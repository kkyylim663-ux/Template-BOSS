"use client";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";
import { MATCHES } from "@/lib/mock/home";
import { CtrlPair, useScroller } from "@/components/ui/bo";

function Logo({ file, name }: { file: string; name: string }) {
  return (
    <span className="mt-logo">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/games/teams/${file}`} alt={name} draggable={false} onError={e => { e.currentTarget.style.display = "none"; }} />
    </span>
  );
}

const narrow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

export default function UpcomingMatches() {
  const { ref, prev, next } = useScroller();
  return (
    <section className="mt-sec">
      <div className="mt-head">
        <span style={{ fontSize: 20, fontWeight: 600 }}>足球比赛</span>
        <CtrlPair square onPrev={prev} onNext={next} />
      </div>
      <div ref={ref} className={`scroll-x flex mt-scroll ${narrow.className}`} style={{ gap: 12 }}>
        {MATCHES.map((m, i) => (
          <div key={i} className="flex-shrink-0 mt-card">
            <div className="mt-wrap">
              <div className="mt-left">
                <Logo file={m.ha} name={m.home} />
                <div className="mt-name"><span className="mt-team">{m.home}</span></div>
              </div>
              <div className="mt-center">
                <span className="mt-league">{m.league}</span>
                <span className="mt-dash">-</span>
                <span className="mt-date">{m.date}</span>
                <span className="mt-time">{m.time}</span>
              </div>
              <div className="mt-right">
                <Logo file={m.hb} name={m.away} />
                <div className="mt-name"><span className="mt-team">{m.away}</span></div>
              </div>
            </div>
            <div className="mt-bottom">
              <span className="mt-odds">{m.h}</span>
              <Link href="/zh-my/sport" className="mt-join">Join Now</Link>
              <span className="mt-odds">{m.a}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

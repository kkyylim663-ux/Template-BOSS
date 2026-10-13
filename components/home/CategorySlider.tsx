"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sidebarGroups } from "@/lib/nav";
import { useScroller } from "@/components/ui/bo";

const cats = sidebarGroups[1].items;
const IMG = (i: number) => `/icons/cat-${i + 1}.png`;

// `art[i]` is true when public/icons/cat-<i+1>.png exists; otherwise the lucide icon is shown.
export default function CategorySlider({ art = [] }: { art?: boolean[] }) {
  const { ref, prev, next } = useScroller(0.6);
  const pathname = usePathname();

  return (
    <div className="cat-wrap">
      <div className="flex items-center cat-row" style={{ height: 85 }}>
        <button onClick={prev} className="cat-arrow flex items-center justify-center" style={{ color: "var(--muted)" }} aria-label="上一页">
          <ChevronLeft size={24} />
        </button>
        <div ref={ref} className="scroll-x flex flex-1 cat-scroll">
          {cats.map(({ href, label, icon: Icon }, i) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={`cat-card${active ? " active" : ""}`}>
                <span className="cat-shape" />
                <span className="cat-ico">
                  {art[i] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={IMG(i)} alt="" draggable={false} />
                  ) : (
                    <Icon size={30} strokeWidth={1.6} />
                  )}
                </span>
                <span className="cat-label">{label}</span>
              </Link>
            );
          })}
        </div>
        <button onClick={next} className="cat-arrow flex items-center justify-center" style={{ color: "#fff" }} aria-label="下一页">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

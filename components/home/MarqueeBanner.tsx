import { Volume2 } from "lucide-react";
import { RUNNING_TEXT } from "@/lib/mock/home";

export default function MarqueeBanner() {
  return (
    <div className="flex items-center" style={{ marginTop: 4, height: 34, background: "var(--card)", borderRadius: 8, padding: 8 }}>
      <span className="flex" style={{ width: 28, flexShrink: 0 }}>
        <Volume2 size={16} style={{ color: "var(--gold)" }} />
      </span>
      <div className="overflow-hidden flex-1">
        <div className="marquee-x" style={{ gap: 16, animationDuration: "50s" }}>
          {[0, 1].map(i => (
            <span key={i} style={{ fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", lineHeight: "18px" }}>{RUNNING_TEXT}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

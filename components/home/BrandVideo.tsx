import { Play } from "lucide-react";

export default function BrandVideo() {
  return (
    <section style={{ marginTop: 32, background: "var(--card)", borderRadius: 20, padding: 40 }}>
      <div style={{ background: "var(--bg)", borderRadius: 40, border: "3.2px solid #fff", overflow: "hidden" }}>
        <div className="ph" style={{ aspectRatio: "16 / 9" }}>
          <span className="flex items-center justify-center" style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,.12)", color: "#fff" }}>
            <Play size={32} fill="#fff" />
          </span>
        </div>
      </div>
    </section>
  );
}

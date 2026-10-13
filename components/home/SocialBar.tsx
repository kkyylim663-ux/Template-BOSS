import { SOCIALS, SocialCircle } from "@/components/ui/SocialIcons";

export default function SocialBar() {
  return (
    <div className="flex social-row" style={{ marginTop: 8, gap: 12, height: 46 }}>
      {SOCIALS.map(item => { const { label, href } = item; return (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="social-btn flex items-center justify-center"
          style={{ flex: 1, minWidth: 0, background: "var(--card)", borderRadius: 12, padding: "8px 12px", gap: 12 }}
        >
          <SocialCircle item={item} size={30} />
          <span className="only-desktop" style={{ fontSize: 18, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
        </a>
      ); })}
    </div>
  );
}

import { SOCIALS } from "@/components/ui/SocialIcons";

export default function SocialBar() {
  return (
    <div className="flex" style={{ marginTop: 8, gap: 12, height: 46 }}>
      {SOCIALS.map(({ label, href, Icon, bg, fg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="social-btn flex items-center justify-center"
          style={{ flex: 1, minWidth: 0, background: "var(--card)", borderRadius: 12, padding: "8px 12px", gap: 12 }}
        >
          <span className="flex items-center justify-center" style={{ width: 30, height: 30, borderRadius: "50%", background: bg, color: fg, flexShrink: 0 }}>
            <Icon size={17} />
          </span>
          <span className="only-desktop" style={{ fontSize: 18, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
        </a>
      ))}
    </div>
  );
}

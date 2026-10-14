"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SEO_CONTENT, type SeoContent } from "@/lib/mock/seo";
import { FOOTER_PROVIDERS } from "@/lib/mock/footer-providers";

function SeoArticle({ content }: { content: SeoContent }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: "4px 8px", marginBottom: 8 }}>
      <div style={{ maxHeight: open ? "none" : 100, overflow: "hidden", position: "relative", fontSize: 14 }}>
        <h1 style={{ fontSize: 21, fontWeight: 600, margin: "12px 0" }}>{content.h1}</h1>
        <p style={{ fontSize: 14, fontWeight: 500, margin: "12px 0" }}>
          {content.intro}
        </p>
        {content.sections.map(s => (
          <div key={s.h}>
            <h2 style={{ fontSize: 21, fontWeight: 600, margin: "12px 0" }}>{s.h}</h2>
            <p style={{ fontSize: 14, fontWeight: 500, margin: "12px 0" }}>{s.p}</p>
          </div>
        ))}
        {!open && <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 40, background: "linear-gradient(transparent, var(--bg))" }} />}
      </div>
      <div className="flex justify-center" style={{ marginTop: 12 }}>
        <button onClick={() => setOpen(v => !v)} style={{ height: 40, minWidth: 90, padding: "7px 12px", borderRadius: 24, background: "var(--bg)", border: "0.8px solid var(--solid)", fontSize: 12, fontWeight: 600 }}>
          {open ? "显示更少" : "显示更多"}
        </button>
      </div>
    </div>
  );
}

const Title = ({ children }: { children: React.ReactNode }) => (
  <span style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 12, lineHeight: "12px" }}>{children}</span>
);

const FImg = ({ src, w }: { src: string; w: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={`/footer/${src}.png`} alt="" draggable={false} style={{ width: w, height: 26, objectFit: "contain", display: "block" }} />
);


export default function Footer() {
  const pathname = usePathname();
  const seoKey = pathname.replace(/^\/zh-my\/?/, "").split("/")[0];
  const seoContent = SEO_CONTENT[seoKey];

  return (
    <div style={{ marginTop: 16 }}>
      {seoContent && <SeoArticle content={seoContent} />}
      <footer className="app-footer" style={{ background: "var(--card)", borderRadius: 20 }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 foot-grid" style={{ marginBottom: 24, rowGap: 24 }}>
          <div className="foot-sec">
            <Title>认证</Title>
            <div className="flex items-center" style={{ gap: 20 }}>
              <FImg src="c1" w={26} /><FImg src="c2" w={50} /><FImg src="c3" w={50} />
            </div>
          </div>
          <div className="foot-sec">
            <Title>支付方式</Title>
            <div className="flex items-center flex-wrap" style={{ gap: 12 }}>
              {Array.from({ length: 9 }).map((_, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={`/footer/pay${i + 1}.png`} alt="" draggable={false} style={{ width: 20, height: 20, borderRadius: 2, objectFit: "cover", display: "block" }} />
              ))}
            </div>
          </div>
          <div className="foot-sec">
            <Title>安全</Title>
            <div className="flex items-center" style={{ gap: 20 }}>
              <FImg src="s1" w={90} /><FImg src="s2" w={90} />
            </div>
          </div>
          <div className="foot-sec">
            <Title>负责任博彩</Title>
            <div className="flex items-center" style={{ gap: 20 }}>
              <FImg src="r1" w={27} /><FImg src="r2" w={26} /><FImg src="r3" w={123} />
            </div>
          </div>
          <div className="foot-sec">
            <Title>关注我们</Title>
            <div className="flex items-center" style={{ gap: 8 }}>
              {["Facebook", "Instagram", "TikTok", "Telegram", "Whatsapp"].map((l, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={l} src={`/footer/soc${i + 1}.png`} alt={l} draggable={false} style={{ width: 20, height: 20, borderRadius: 4, objectFit: "cover", display: "block" }} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <span style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 12 }}>游戏供应商</span>
          <div className="overflow-hidden" style={{ height: 24 }}>
            <div className="marquee-x" style={{ gap: 12, animationDuration: "180s" }}>
              {[...FOOTER_PROVIDERS, ...FOOTER_PROVIDERS].map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={`/footer/prov/${p}.png`} alt="" draggable={false} style={{ width: 24, height: 24, flexShrink: 0, display: "block" }} />
              ))}
            </div>
          </div>
        </div>

        <span style={{ display: "block", fontSize: 12, lineHeight: "12px" }}>版权所有  @ 2026。保留所有权利。</span>
      </footer>
    </div>
  );
}

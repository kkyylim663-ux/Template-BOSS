"use client";
import { useState } from "react";
import { BookOpen } from "lucide-react";
import { SectionTitle } from "@/components/ui/bo";

const tabs = ["全部", "新闻", "攻略", "活动"];

export default function BlogPage() {
  const [tab, setTab] = useState("全部");
  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <SectionTitle icon={BookOpen}>博客</SectionTitle>
      <div className="inline-flex self-start" style={{ background: "var(--card)", borderRadius: 16, padding: 4 }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ margin: 4, height: 41, padding: "8px 16px", borderRadius: 12, fontSize: 14, fontWeight: 600, background: tab === t ? "var(--solid)" : "transparent" }}>
            {t}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center" style={{ height: 240, background: "var(--card)", borderRadius: 12, fontSize: 14, color: "var(--muted-3)" }}>
        暂无记录
      </div>
    </div>
  );
}

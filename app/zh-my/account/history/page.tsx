"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Calendar } from "lucide-react";

const types = ["投注", "提款", "存款", "优惠", "兑换", "回扣", "任务", "返现", "Minigame"];
const quick = ["今天", "昨天", "7 天", "14 天", "30 天"];

const chip = (on: boolean): React.CSSProperties => ({
  height: 38, minWidth: 46, borderRadius: 8, padding: 8, fontSize: 14, fontWeight: 600, whiteSpace: "nowrap",
  border: `0.8px solid ${on ? "#fff" : "var(--solid)"}`, background: on ? "var(--solid)" : "transparent",
});

export default function HistoryPage() {
  const [t, setT] = useState("投注");
  const [q, setQ] = useState("今天");
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <div className="flex items-center" style={{ background: "var(--card)", borderRadius: 20, padding: 16, gap: 12 }}>
        <Link href="/zh-my" aria-label="返回"><ChevronLeft size={20} /></Link>
        <span style={{ fontSize: 20, fontWeight: 600 }}>历史记录</span>
      </div>
      <div className="flex flex-col" style={{ background: "var(--card)", borderRadius: 20, padding: 12, gap: 12 }}>
        <div className="flex items-center flex-wrap" style={{ gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600, width: 56 }}>历史记录</span>
          <div className="flex flex-wrap" style={{ gap: 8 }}>
            {types.map(x => <button key={x} style={chip(t === x)} onClick={() => setT(x)}>{x}</button>)}
          </div>
        </div>
        <div className="flex items-center flex-wrap" style={{ gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600, width: 28 }}>日期</span>
          <div className="relative" style={{ width: 278 }}>
            <input className="input" style={{ height: 46 }} readOnly value={`${today} ~ ${today}`} />
            <Calendar size={18} className="absolute" style={{ right: 12, top: 14, color: "var(--muted-2)" }} />
          </div>
          <div className="flex flex-wrap" style={{ gap: 8 }}>
            {quick.map(x => <button key={x} style={{ ...chip(q === x), height: 46 }} onClick={() => setQ(x)}>{x}</button>)}
          </div>
          <button className="btn-gold" style={{ width: 96, height: 46 }}>提交</button>
        </div>
        <div className="flex items-center justify-center" style={{ height: 186 }}>
          <span style={{ fontSize: 14 }}>未找到记录</span>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Copy, Gift, Trophy, Facebook, Send, MessageCircle, UserPlus, Award, Coins, Share2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Seg, Ph } from "@/components/ui/bo";

type Tab = "refer" | "reward" | "tnc";

const Title = ({ Icon, children }: { Icon: React.ElementType; children: React.ReactNode }) => (
  <div className="flex items-center" style={{ gap: 8, height: 24, fontSize: 16, fontWeight: 600 }}>
    <Icon size={20} style={{ color: "var(--gold)" }} /> {children}
  </div>
);

export default function AccountReferralPage() {
  const { user } = useAuth();
  const [tab, setTab] = useState<Tab>("refer");
  const [copied, setCopied] = useState(false);
  const url = user?.referralUrl ?? "";
  const copy = () => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1500); };

  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <Seg value={tab} onChange={setTab} items={[{ key: "refer", label: "推荐好友" }, { key: "reward", label: "我的奖励" }, { key: "tnc", label: "条款与细则" }]} />

      {tab === "refer" && (
        <>
          <div className="flex flex-col lg:flex-row" style={{ background: "var(--card)", borderRadius: 12, padding: "12px 20px", gap: 24 }}>
            <Ph radius={20} style={{ width: "100%", maxWidth: 450, height: 145, flexShrink: 0 }}>
              <span className="absolute" style={{ left: 24, top: 30, fontSize: 14, fontWeight: 600, color: "#fff" }}>已发放奖金总额</span>
              <span className="absolute" style={{ left: 24, top: 56, fontSize: 36.8, fontWeight: 700, color: "var(--gold)" }}>MYR 0.00</span>
            </Ph>
            <div className="flex flex-col justify-center flex-1" style={{ gap: 10 }}>
              <span style={{ fontSize: 16, fontWeight: 600 }}>邀请好友，赚取奖励</span>
              <div className="flex" style={{ gap: 8 }}>
                <input className="input flex-1" readOnly value={url} />
                <button className="btn-gold" style={{ height: 36, width: 96 }} onClick={copy}><Copy size={14} />{copied ? "已复制" : "复制网址"}</button>
              </div>
              <div className="flex" style={{ gap: 8 }}>
                {[Facebook, Send, MessageCircle].map((I, i) => (
                  <span key={i} className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--solid)" }}><I size={16} /></span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: "12px 16px", gap: 8 }}>
            <Title Icon={Gift}>奖金</Title>
            <span style={{ fontSize: 14 }}>公司已将全部奖金总额分发给所有玩家 :</span>
            <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 8 }}>
              {[{ I: UserPlus, t: "邀请奖励" }, { I: Award, t: "成就奖励" }, { I: Coins, t: "投注奖励" }].map(({ I, t }) => (
                <div key={t} className="flex flex-col" style={{ background: "var(--card)", borderRadius: 8, padding: 8, gap: 8, minHeight: 153 }}>
                  <I size={32} style={{ color: "var(--gold)" }} />
                  <span style={{ fontSize: 16, fontWeight: 600 }}>{t}</span>
                  <span style={{ fontSize: 20, fontWeight: 700, color: "var(--gold)" }}>MYR 0.00</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: "12px 16px", gap: 12 }}>
            <Title Icon={Trophy}>排行榜</Title>
            <div className="flex flex-col lg:flex-row" style={{ gap: 12 }}>
              <div className="flex flex-col" style={{ flex: "0 0 33%", gap: 8 }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <div key={n} className="flex items-center justify-between" style={{ height: 44, background: "var(--card)", borderRadius: 8, padding: "0 12px", fontSize: 14, fontWeight: 600 }}>
                    <span>#{n} &nbsp;+60******{100 + n * 37}</span>
                    <span style={{ color: "var(--gold)" }}>{(20 - n * 3)} 人</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center flex-1" style={{ background: "var(--card)", borderRadius: 8, minHeight: 264, gap: 12 }}>
                <span style={{ fontSize: 14 }}>您的邀请结果</span>
                <span style={{ fontSize: 28, fontWeight: 700, color: "var(--gold)" }}>0</span>
                <button className="btn-gold" style={{ width: 120 }}>领取奖励</button>
              </div>
            </div>
          </div>

          <Ph radius={32} style={{ height: 227 }} iconSize={40} />

          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 12 }}>
            {[{ I: Share2, t: "分享链接" }, { I: UserPlus, t: "好友注册" }, { I: Coins, t: "赚取奖励" }].map(({ I, t }, i) => (
              <div key={t} className="flex items-center" style={{ background: "var(--card)", borderRadius: 12, padding: 16, gap: 12 }}>
                <span className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gold)", color: "#000", fontWeight: 800 }}>{i + 1}</span>
                <I size={22} /> <span style={{ fontSize: 16, fontWeight: 600 }}>{t}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "reward" && (
        <div className="flex items-center justify-center" style={{ height: 240, background: "var(--card)", borderRadius: 12, fontSize: 14 }}>未找到记录</div>
      )}

      {tab === "tnc" && (
        <div style={{ background: "var(--card)", borderRadius: 12, padding: 16, fontSize: 14, lineHeight: 1.8 }}>
          1. 被推荐人须为新注册会员并完成首次存款。<br />2. 每位成功推荐可获得 MYR 38 奖励。<br />3. 奖励须完成 1 倍流水方可提款。<br />4. 任何违规行为将导致奖励被取消。
        </div>
      )}
    </div>
  );
}

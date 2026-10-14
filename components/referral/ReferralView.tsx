"use client";
import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";
import QRCode from "qrcode";
import { Coins, Share2, ChevronRight, Send, MessageCircle, MessagesSquare, Phone, Facebook, Mail, Twitter } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Seg } from "@/components/ui/bo";

const orb = Orbitron({ subsets: ["latin"], weight: ["500", "700"] });

type Tab = "refer" | "reward" | "tnc";

const BONUS = [
  { img: "bonus-1", t: "邀请奖励", amt: "641,740.00", n: "8,441" },
  { img: "bonus-2", t: "成就奖励", amt: "234,364.00", n: "2,947" },
  { img: "bonus-3", t: "投注奖励", amt: "115,457.00", n: "1,173" },
];
const TOP3 = [
  { x: "15%", y: 77, no: "+60******131", amt: "680.00" },
  { x: "50%", y: 58, no: "+60******257", amt: "710.00" },
  { x: "85%", y: 77, no: "+60******278", amt: "540.00" },
];
const ROWS = [["+60******549", "30.00"], ["+60******903", "70.00"], ["+60******247", "50.00"], ["+60******856", "20.00"], ["+60******711", "80.00"]];
const SHARE: [typeof Send, string][] = [
  [Send, "#2aabee"], [MessageCircle, "#06c755"], [MessagesSquare, "#0084ff"], [Phone, "#25d366"], [Facebook, "#1877f2"], [Mail, "#888"], [Twitter, "#1da1f2"],
];
const TNC: [string, string[]][] = [
  ["1. 谁可以参加？", ["只有在 TitanX 完成至少 1 次存款的活跃会员，才有资格参与此推荐活动并开始邀请好友。"]],
  ["2. 如何加入并开始赚钱？", ["从活动页面复制你的专属推荐链接。", "通过聊天软件、社交媒体等方式分享给好友。", "当你的好友注册并完成至少 MYR100 的首存后，你将开始获得奖励！", "你可随时在活动页面查看你的推荐记录与奖励明细。"]],
  ["3. 我可以获得什么奖励？", ["(i) MYR38 免费现金", "当你的好友首次存款 MYR100 或以上，系统将自动把 MYR38 派发至你的钱包。", "(ii) 每天 0.28% 推荐奖金", "每天你都能获得好友所有真实投注金额的 0.28% 奖励，与他当初存入多少无关。"]],
  ["4. 每天推荐奖金如何计算？", ["每天计算：星期一 12:00 AM – 星期一 11:59 PM（GMT+8）", "派发时间：每周二中午 12:00", "最低派发金额：奖金需超过 MYR1 才会发放", "流水要求：奖金需完成 1 倍流水（1x）才可提款", "示例：若你本周获得 MYR1,188 奖金，你必须完成 MYR1,188 的投注流水后才能提款。"]],
  ["5. 哪些投注不计入流水？", ["和局 / 平局投注", "对冲投注（押双方）", "取消或无效的注单", "每局在轮盘下注 24 个号码或以上", "赔率低于 0.5（或欧洲盘 1.50）", "3 Pictures、Casino Hold’em、扑克", "RNG / 街机类游戏", "4D 彩票", "Mega888 非老虎机游戏（街机、桌游、真人）", "使用奖金资金在这些游戏下注将导致所有奖金 winnings 被取消。"]],
  ["6. 公平游戏政策（Fair Play Policy）", ["我们不允许重复账号或虚假账号。若你与被推荐人使用相同或共享的以下信息，将被取消资格：", "IP 地址", "银行资料", "付款卡", "装置 / 电脑设备"]],
  ["7. 每人仅限一个账号", ["每位用户仅能参与一次推荐活动，包括以下限制：", "家庭 / 同住成员", "地址", "IP 地址", "电邮或电话号码", "支付账户（银行卡、电子钱包）", "共享电脑 / 共享设备", "✅ 所有 TitanX 一般条款与条件同样适用。"]],
];

const card = { background: "var(--card)", borderRadius: 12 } as const;
const inner = { background: "rgba(255,255,255,.04)", borderRadius: 12 } as const;

function Title({ children, icon }: { children: React.ReactNode; icon: React.ElementType }) {
  const I = icon;
  return <div className="flex items-center" style={{ gap: 8, fontSize: 16, fontWeight: 600, height: 24 }}><I size={22} />{children}</div>;
}

function ShareBlock({ url }: { url: string }) {
  const [qr, setQr] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => { QRCode.toDataURL(url || "TitanX", { margin: 1, width: 200 }).then(setQr).catch(() => {}); }, [url]);
  const copy = () => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div style={{ ...card, padding: 8 }}>
      <div style={{ padding: "4px 8px" }}><Title icon={Share2}>分享您的推荐链接</Title></div>
      <div className="flex" style={{ gap: 16, padding: 8 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {qr ? <img src={qr} alt="" width={109} height={109} style={{ width: 109, height: 109, background: "#fff", flexShrink: 0 }} /> : <div style={{ width: 109, height: 109, flexShrink: 0 }} />}
        <div className="flex flex-col flex-1" style={{ gap: 8, minWidth: 0 }}>
          <button onClick={copy} className="flex items-center justify-between" style={{ height: 48, borderRadius: 8, background: "var(--solid)", padding: "0 12px", fontSize: 14, fontWeight: 600 }}>
            {copied ? "已复制" : "复制网址"}<ChevronRight size={16} style={{ color: "var(--muted-2)" }} />
          </button>
          <span style={{ fontSize: 14, fontWeight: 600 }}>通过社交媒体分享</span>
          <div className="flex flex-wrap" style={{ gap: 10 }}>
            {SHARE.map(([I, bg], i) => (
              <span key={i} className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: "50%", background: bg }}><I size={18} color="#fff" /></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReferralView() {
  const { user } = useAuth();
  const [tab, setTab] = useState<Tab>("refer");
  const url = user?.referralUrl ?? "";

  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <Seg value={tab} onChange={setTab} items={[{ key: "refer", label: "推荐好友" }, { key: "reward", label: "我的奖励" }, { key: "tnc", label: "条款与细则" }]} />

      {tab === "refer" && (
        <>
          <div className="flex justify-center" style={{ ...card, padding: "16px 8px" }}>
            <div className="relative" style={{ width: 290, maxWidth: "100%", aspectRatio: "658 / 238", backgroundImage: "url(/referral/paidout.png)", backgroundSize: "100% 100%" }}>
              <div className={`absolute flex items-center justify-center ${orb.className}`} style={{ left: 0, right: 0, top: "46%", gap: 8, fontSize: 19, fontWeight: 500 }}>
                <span style={{ color: "#fdb21c" }}>MYR</span><span>179,195,120.15</span>
              </div>
            </div>
          </div>

          <div style={{ ...card, padding: 16 }}>
            <Title icon={Coins}>奖金</Title>
            <p style={{ margin: "8px 0 12px", fontSize: 14 }}>公司已将全部奖金总额分发给所有玩家</p>
            <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 12 }}>
              {BONUS.map(b => (
                <div key={b.t} className="flex items-center" style={{ ...inner, padding: "16px 8px", gap: 8 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/referral/${b.img}.png`} alt="" draggable={false} style={{ width: 141, height: 141, objectFit: "contain", flexShrink: 0 }} />
                  <div className="flex flex-col" style={{ minWidth: 0 }}>
                    <span style={{ fontSize: 16, color: "#e2e1e2", lineHeight: "24px" }}>{b.t}</span>
                    <span style={{ fontSize: 20, fontWeight: 700 }}>MYR {b.amt}</span>
                    <span style={{ fontSize: 14 }}>{b.n}人</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...card, padding: 16 }}>
            <div className="flex justify-center"><Title icon={Coins}>排行榜</Title></div>
            <div className="relative" style={{ maxWidth: 520, margin: "8px auto 0", containerType: "inline-size" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/referral/leaderboard.png" alt="" draggable={false} style={{ display: "block", width: "100%" }} />
              {TOP3.map(p => (
                <div key={p.no} className="absolute text-center" style={{ left: p.x, top: `${p.y}%`, transform: "translateX(-50%)", fontSize: "3.72cqw", lineHeight: "20px", whiteSpace: "nowrap" }}>
                  <div>{p.no}</div><div>MYR&nbsp; {p.amt}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col" style={{ gap: 8, margin: "8px auto 0", maxWidth: 520 }}>
              {ROWS.map(([no, amt]) => (
                <div key={no} className="flex items-center justify-between" style={{ ...inner, height: 45, padding: "0 12px", fontSize: 14, fontWeight: 600 }}>
                  <span style={{ width: "34%" }}>{no}</span><span>领取奖励</span><span style={{ width: "34%", textAlign: "right" }}>MYR&nbsp; {amt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/referral/referbanner.png" alt="" draggable={false} style={{ width: "100%", borderRadius: 12, display: "block" }} />

          <ShareBlock url={url} />

          <div style={{ ...card, padding: "20px 16px" }}>
            <div style={{ padding: "0 12px" }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>开始赚取在</div>
              <div style={{ fontSize: 16, fontWeight: 600, paddingLeft: 8, marginTop: 2 }}>仅需3步！</div>
            </div>
            <div className="relative flex flex-col" style={{ gap: 20, padding: "16px 12px 4px" }}>
              <span className="absolute" style={{ left: 26, top: 44, bottom: 30, borderLeft: "1px dashed rgba(255,255,255,.25)" }} />
              {["申请并快速获得批准", "分享您的专属推荐链接", "从购买和续费中赚取佣金"].map((t, i) => (
                <div key={t} className="flex items-center relative" style={{ gap: 16 }}>
                  <span className="flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: "50%", background: "#1fc98c", fontSize: 16, flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === "reward" && (
        <>
          <ShareBlock url={url} />
          <div style={{ ...card, padding: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>一次性推荐奖金</div>
            <div className="grid grid-cols-2" style={{ gap: 12 }}>
              {[["邀请已接受", "0"], ["任务已完成", "0"]].map(([t, v]) => (
                <div key={t} className="flex flex-col" style={{ ...inner, padding: 12, gap: 4 }}>
                  <span style={{ fontSize: 14 }}>{t}</span><span style={{ fontSize: 20, fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between" style={{ fontSize: 12, fontWeight: 600, padding: "16px 8px 8px", color: "var(--muted-3)" }}><span>用户名</span><span>注册时间</span></div>
            <div className="flex items-center justify-center" style={{ ...inner, height: 100, fontSize: 14 }}>未找到记录</div>
          </div>
          <div style={{ ...card, padding: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>长期推荐奖金</div>
            <div className="grid grid-cols-3" style={{ fontSize: 12, fontWeight: 600, padding: "0 8px 8px", color: "var(--muted-3)" }}><span>日期</span><span className="text-center">状态</span><span className="text-right">金额</span></div>
            <div className="flex items-center justify-center" style={{ ...inner, height: 100, fontSize: 14 }}>未找到记录</div>
            <div className="flex justify-center" style={{ marginTop: 12 }}>
              <span className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: 8, background: "var(--gold)", color: "#000", fontWeight: 700 }}>1</span>
            </div>
          </div>
        </>
      )}

      {tab === "tnc" && (
        <div style={{ ...card, padding: 16, fontSize: 14, lineHeight: "22px" }}>
          <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>「分享好友 · 赚取免费现金」推荐活动条款与细则</p>
          <p style={{ margin: "0 0 16px" }}>加入 TitanX 并参与「分享好友 · 赚取免费现金」推荐活动，即代表你同意以下所有规则。</p>
          {TNC.map(([h, ps]) => (
            <div key={h} style={{ marginBottom: 16 }}>
              <p style={{ fontWeight: 600, margin: "0 0 6px" }}>{h}</p>
              {ps.map(p => <p key={p} style={{ margin: "0 0 4px" }}>{p}</p>)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

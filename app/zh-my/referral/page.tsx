"use client";
import { useRouter } from "next/navigation";
import { Users, Share2, UserPlus, Coins } from "lucide-react";
import { PageBanner } from "@/components/ui/bo";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

const steps = [
  { Icon: Share2, t: "分享链接", d: "复制您的专属推荐链接并分享给好友" },
  { Icon: UserPlus, t: "好友注册", d: "好友通过链接注册并完成首存" },
  { Icon: Coins, t: "赚取奖励", d: "每邀请一位好友即可获得 MYR 38 奖励" },
];

export default function ReferralPage() {
  const { isLoggedIn } = useAuth();
  const { openLogin } = useModal();
  const router = useRouter();
  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <PageBanner title="推荐好友" icon={Users} />
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 12 }}>
        {steps.map(({ Icon, t, d }, i) => (
          <div key={t} className="flex flex-col" style={{ background: "var(--card)", borderRadius: 12, padding: 20, gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--gold)" }}>步骤 {i + 1}</span>
            <Icon size={32} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: 18, fontWeight: 600 }}>{t}</span>
            <span style={{ fontSize: 14, color: "var(--muted-3)" }}>{d}</span>
          </div>
        ))}
      </div>
      <button className="btn-gold btn-lg" onClick={() => (isLoggedIn ? router.push("/zh-my/account/referral") : openLogin())}>立即推荐</button>
    </div>
  );
}

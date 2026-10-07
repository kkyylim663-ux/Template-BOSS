"use client";
import { FileText } from "lucide-react";
import { PageBanner } from "@/components/ui/bo";

const sections = [
  ["1. 接受条款", "使用本网站或注册账号，即表示您同意以下《条款与条件》。"],
  ["2. 账户注册", "用户须年满 18 岁方可注册账户。每人限开一个账户，禁止共享账户。"],
  ["3. 存款与提款", "存取款须使用本人名下的银行账户，账户名称须与注册姓名一致。"],
  ["4. 奖金与优惠", "所有奖金须完成相应流水要求方可提款，具体以各活动条款为准。"],
  ["5. 负责任博彩", "我们提倡负责任博彩，如有需要可联系客服设置自我限制。"],
  ["6. 账户安全", "请妥善保管您的账户密码，如发现异常请立即联系客服。"],
  ["7. 条款修改", "我们保留随时修改本条款的权利，修改内容公布后即时生效。"],
];

export default function TncPage() {
  return (
    <div style={{ marginBottom: 16 }}>
      <PageBanner title="条款与条件" icon={FileText} />
      <div className="flex flex-col" style={{ padding: "4px 8px", gap: 16 }}>
        <span style={{ fontSize: 24, fontWeight: 600 }}>BO55 — 使用条款与条件</span>
        <div style={{ fontSize: 14 }}>
          <p style={{ fontWeight: 500 }}>最近更新日期：[18 November 2025]</p>
          {sections.map(([h, p]) => (
            <div key={h}>
              <p style={{ fontSize: 16, fontWeight: 600, margin: "16px 0 6px" }}>{h}</p>
              <p style={{ fontWeight: 500 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

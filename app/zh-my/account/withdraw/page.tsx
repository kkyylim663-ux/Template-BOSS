"use client";
import { useState } from "react";
import Link from "next/link";
import { Landmark, Wallet, Bitcoin } from "lucide-react";
import { BalanceWallet, Notes, TxTitle, Field, txTile } from "@/components/ui/bo";

const methods = [
  { k: "bank", l: "Bank Account", Icon: Landmark },
  { k: "ewallet", l: "Ewallet", Icon: Wallet },
  { k: "crypto", l: "Crypto Address", Icon: Bitcoin },
];

export default function WithdrawPage() {
  const [m, setM] = useState("bank");
  return (
    <div className="flex flex-col" style={{ gap: 8, marginBottom: 16 }}>
      <BalanceWallet />
      <div>
        <TxTitle>提款方式</TxTitle>
        <div className="grid grid-cols-3" style={{ gap: 4 }}>
          {methods.map(({ k, l, Icon }) => (
            <button key={k} style={{ ...txTile(m === k), minHeight: 64, padding: 4, justifyContent: "center" }} onClick={() => setM(k)}>
              <Icon size={24} strokeWidth={1.6} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{l}</span>
            </button>
          ))}
        </div>
      </div>
      <Link href="/zh-my/account/bank" className="btn-lg flex items-center justify-center" style={{ borderRadius: 8, border: "0.8px dashed var(--solid)", fontWeight: 600 }}>
        + 添加新账户
      </Link>
      <Field label="金额" required>
        <input className="input" placeholder="最低: 50 / 最高: 30000" inputMode="decimal" />
      </Field>
      <button className="btn-dark btn-lg" disabled>提交（前端骨架）</button>
      <Notes>
        {"提款前请确认已完成所有流水要求。\n收款账户名称必须与注册姓名一致。\n每日提款次数与金额以您的 VIP 等级为准。\n提款通常在 15 分钟内处理完毕。\n如提款被拒绝，金额将退回主钱包。\n如有疑问，请联系 24/7 在线客服。"}
      </Notes>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Zap, Landmark, Wallet, Smartphone, Bitcoin, Phone, CreditCard } from "lucide-react";
import { BalanceWallet, Notes, TxTitle, Field, txTile as tile } from "@/components/ui/bo";

const methods = [
  { k: "quick", l: "Quick Pay", Icon: Zap },
  { k: "bank", l: "Bank Transfer", Icon: Landmark },
  { k: "ewallet", l: "eWallet", Icon: Wallet },
  { k: "ewo", l: "eWallet Online", Icon: Smartphone },
  { k: "crypto", l: "Crypto", Icon: Bitcoin },
  { k: "phone", l: "Phone Credit", Icon: Phone },
];
const channels = [
  { k: "fpay", l: "FPay", min: "30.00", max: "5000.00" },
  { k: "luxepay", l: "Luxepay", min: "30.00", max: "30000.00" },
  { k: "smartpay", l: "Smartpay (Online Banking)", min: "30.00", max: "5000.00" },
  { k: "onepay", l: "Onepay", min: "30.00", max: "30000.00" },
];

export default function DepositPage() {
  const [m, setM] = useState("quick");
  const [c, setC] = useState<string | null>(null);

  return (
    <div style={{ marginBottom: 16 }}>
      <BalanceWallet />
      <div style={{ marginBottom: 8 }}>
        <TxTitle>存款方式</TxTitle>
        <div className="grid grid-cols-3" style={{ gap: 4 }}>
          {methods.map(({ k, l, Icon }) => (
            <button key={k} style={tile(m === k)} onClick={() => { setM(k); setC(null); }}>
              <Icon size={30} strokeWidth={1.6} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{l}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 8 }}>
        <TxTitle>存款渠道</TxTitle>
        <div className="grid grid-cols-3" style={{ gap: 4 }}>
          {channels.map(ch => (
            <button key={ch.k} style={{ ...tile(c === ch.k), minHeight: 95 }} onClick={() => setC(ch.k)}>
              <CreditCard size={30} strokeWidth={1.6} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{ch.l}</span>
              <span style={{ fontSize: 12 }}>{ch.min} ~ {ch.max}</span>
            </button>
          ))}
        </div>
      </div>
      {c && (
        <div className="flex flex-col" style={{ gap: 8, marginBottom: 8 }}>
          <Field label="金额" required>
            <input className="input" placeholder="最低: 30 / 最高: 5000" inputMode="decimal" />
          </Field>
          <button className="btn-dark btn-lg" disabled>提交（前端骨架）</button>
        </div>
      )}
      <Notes>
        {"用于存款的银行账户名称必须与您注册的 BO55 账户名称一致。\n请在确认付款前确保转账金额正确。\n请勿在转账备注中包含任何与赌博相关的词语（例如：casino、bet、BO55）。\n存款通常即时处理。如果您的交易在 5 分钟内未更新，请联系我们的 24/7 在线客服寻求帮助。\n\n任何错误的详细信息或无效交易可能导致存款延迟或被拒绝。"}
      </Notes>
    </div>
  );
}

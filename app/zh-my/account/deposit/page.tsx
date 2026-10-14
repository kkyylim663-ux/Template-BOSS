"use client";
import { useState } from "react";
import { BalanceWallet, Notes, TxTitle, Field, txTile as tile } from "@/components/ui/bo";

const methods = [
  { k: "quick", l: "Quick Pay", img: "quickpay" },
  { k: "bank", l: "Bank Transfer", img: "banktransfer" },
  { k: "ewallet", l: "eWallet", img: "qrcode" },
  { k: "ewo", l: "eWallet Online", img: "ewallet" },
  { k: "crypto", l: "Crypto", img: "crypto" },
  { k: "phone", l: "Phone Credit", img: "phonecredit" },
];
const channels = [
  { k: "smartpay", l: "Smartpay (Online Banking)", min: "30.00", max: "5000.00" },
  { k: "onepay", l: "Onepay", min: "30.00", max: "30000.00" },
  { k: "luxepay", l: "Luxepay", min: "30.00", max: "30000.00" },
];
const banks = [["affin", "Affin Bank"], ["alliance", "Alliance Bank"], ["bsn", "BSN Bank"], ["cimb", "CIMB"], ["hlb", "Hong Leong"], ["mbb", "Maybank"], ["pbb", "Public Bank"], ["rhb", "RHB Bank"]];
const QUICK = ["100.00", "500.00", "1,000.00"];

const Pic = ({ n, size = 30 }: { n: string; size?: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={`/pay/${n}.png`} alt="" draggable={false} style={{ width: size, height: size, objectFit: "contain", display: "block" }} />
);

export default function DepositPage() {
  const [m, setM] = useState("quick");
  const [c, setC] = useState<string | null>("smartpay");
  const [bank, setBank] = useState<string | null>(null);
  const [amt, setAmt] = useState("");

  return (
    <div style={{ marginBottom: 16 }}>
      <BalanceWallet />
      <div style={{ marginBottom: 8 }}>
        <TxTitle>存款方式</TxTitle>
        <div className="grid grid-cols-3" style={{ gap: 4 }}>
          {methods.map(({ k, l, img }) => (
            <button key={k} style={tile(m === k)} onClick={() => { setM(k); setC("smartpay"); setBank(null); }}>
              <Pic n={img} />
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
              <Pic n={ch.k} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{ch.l}</span>
              <span style={{ fontSize: 12 }}>{ch.min} ~ {ch.max}</span>
            </button>
          ))}
        </div>
      </div>
      {c === "smartpay" && (
        <div style={{ marginBottom: 8 }}>
          <TxTitle>存款银行</TxTitle>
          <div className="grid grid-cols-3" style={{ gap: 4 }}>
            {banks.map(([k, l]) => (
              <button key={k} style={{ ...tile(bank === k), minHeight: 80 }} onClick={() => setBank(k)}>
                <Pic n={k} />
                <span style={{ fontSize: 12, fontWeight: 600 }}>{l}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {c && (
        <div className="flex flex-col" style={{ gap: 8, marginBottom: 8 }}>
          <Field label="金额" required>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/pay/myr.png" alt="" className="absolute" style={{ left: 10, top: 8, width: 22, height: 22, objectFit: "contain" }} />
              <input className="input" style={{ paddingLeft: 42 }} value={amt} onChange={e => setAmt(e.target.value)} placeholder="" inputMode="decimal" />
            </div>
          </Field>
          <div className="grid grid-cols-3" style={{ gap: 4 }}>
            {QUICK.map(q => (
              <button key={q} className="btn-dark" style={{ height: 40 }} onClick={() => setAmt(q.replace(",", ""))}>{q}</button>
            ))}
          </div>
          <button className="btn-gold btn-lg" disabled={!amt}>提交</button>
        </div>
      )}
      <Notes>
        {"用于存款的银行账户名称必须与您注册的 TitanX 账户名称一致。\n请在确认付款前确保转账金额正确。\n请勿在转账备注中包含任何与赌博相关的词语（例如：casino、bet、TitanX）。\n存款通常即时处理。如果您的交易在 5 分钟内未更新，请联系我们的 24/7 在线客服寻求帮助。\n\n任何错误的详细信息或无效交易可能导致存款延迟或被拒绝。"}
      </Notes>
    </div>
  );
}

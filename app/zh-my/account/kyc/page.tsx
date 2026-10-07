"use client";
import { useState } from "react";
import { ShieldCheck, Upload } from "lucide-react";

function Drop({ label }: { label: string }) {
  const [name, setName] = useState("");
  return (
    <label className="flex flex-col items-center justify-center cursor-pointer" style={{ height: 178, background: "var(--card)", borderRadius: 12, padding: 12, gap: 8, border: "0.8px dashed var(--solid)" }}>
      <Upload size={28} style={{ color: "var(--muted-3)" }} />
      <span style={{ fontSize: 14, fontWeight: 600 }}>{name || label}</span>
      <span style={{ fontSize: 12, color: "var(--muted-3)" }}>JPG / PNG</span>
      <input type="file" accept="image/*" className="hidden" onChange={e => setName(e.target.files?.[0]?.name ?? "")} />
    </label>
  );
}

export default function KycPage() {
  return (
    <div className="flex flex-col" style={{ gap: 12, marginBottom: 16 }}>
      <div className="flex items-center" style={{ background: "var(--card)", borderRadius: 8, padding: 8, gap: 8 }}>
        <ShieldCheck size={20} />
        <span style={{ fontSize: 14, fontWeight: 600 }}>KYC验证</span>
      </div>
      <span style={{ fontSize: 14, fontWeight: 600 }}>上传您的文档以验证您的账户。</span>
      <div className="flex flex-col" style={{ gap: 4 }}>
        <span style={{ fontSize: 16, fontWeight: 600 }}>可接受的文件:</span>
        <span style={{ fontSize: 14 }}>* 身份证（正反面）</span>
      </div>
      <Drop label="身份证正面" />
      <Drop label="身份证反面" />
      <button className="btn-dark btn-lg">提交</button>
    </div>
  );
}

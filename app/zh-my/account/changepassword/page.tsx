"use client";
import { useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { Field } from "@/components/ui/bo";

function Pw({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [show, setShow] = useState(false);
  return (
    <Field label={label} required>
      <div className="relative">
        <input className="input" type={show ? "text" : "password"} value={value} onChange={e => onChange(e.target.value)} style={{ paddingRight: 36 }} />
        <button type="button" className="absolute" style={{ right: 9, top: 8, color: "var(--muted-2)" }} onClick={() => setShow(s => !s)} aria-label="显示密码">
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </Field>
  );
}

export default function ChangePasswordPage() {
  const [cur, setCur] = useState("");
  const [pw, setPw] = useState("");
  const [rep, setRep] = useState("");
  const rules = [
    { t: "密码至少需要6个字符", ok: pw.length >= 6 },
    { t: "包含数字", ok: /\d/.test(pw) },
    { t: "包含小写字母", ok: /[a-z]/.test(pw) },
  ];
  const score = rules.filter(r => r.ok).length;

  return (
    <div className="flex flex-col" style={{ gap: 8, marginBottom: 16 }}>
      <Pw label="当前密码" value={cur} onChange={setCur} />
      <Pw label="新密码" value={pw} onChange={setPw} />
      <div>
        <div style={{ height: 5, borderRadius: 4, background: "#e9ecef", overflow: "hidden", marginBottom: 6 }}>
          <div style={{ width: `${Math.max(10, (score / 3) * 100)}%`, height: "100%", background: score === 3 ? "#40c057" : score === 2 ? "#fab005" : "#fa5252" }} />
        </div>
        {rules.map(r => (
          <p key={r.t} className="flex items-center" style={{ gap: 6, fontSize: 14, height: 23, color: r.ok ? "#40c057" : "#fa5252" }}>
            {r.ok ? <Check size={14} /> : <X size={14} />} {r.t}
          </p>
        ))}
      </div>
      <Pw label="重复新密码" value={rep} onChange={setRep} />
      <button className="btn-dark btn-lg" disabled={score < 3 || pw !== rep || !cur}>提交</button>
    </div>
  );
}

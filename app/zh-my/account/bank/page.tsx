"use client";
import { useState } from "react";
import { Seg } from "@/components/ui/bo";

type T = "Bank Account" | "Ewallet" | "Crypto Address";

export default function BankPage() {
  const [t, setT] = useState<T>("Bank Account");
  return (
    <div style={{ marginBottom: 16 }}>
      <Seg value={t} onChange={setT} items={(["Bank Account", "Ewallet", "Crypto Address"] as T[]).map(k => ({ key: k, label: k }))} />
      <div className="flex flex-col items-center justify-center" style={{ minHeight: 281, gap: 16 }}>
        <span style={{ fontSize: 16 }}>尚未添加{t}.</span>
        <button className="btn-dark btn-lg" style={{ width: "60%" }}>添加{t}</button>
      </div>
    </div>
  );
}

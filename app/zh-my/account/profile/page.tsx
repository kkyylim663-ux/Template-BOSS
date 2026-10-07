"use client";
import { Mail, Calendar } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Field, Notes } from "@/components/ui/bo";

export default function ProfilePage() {
  const { user } = useAuth();
  const rows = [
    { l: "电子邮箱地址", v: user?.email, Icon: Mail },
    { l: "全名（与银行账户一致）", v: user?.fullName },
    { l: "联系", v: user?.phone },
    { l: "出生日期", v: user?.birthdate, Icon: Calendar },
    { l: "用户名", v: user?.username },
  ];
  return (
    <div className="flex flex-col" style={{ gap: 8, marginBottom: 16 }}>
      {rows.map(({ l, v, Icon }) => (
        <Field key={l} label={l}>
          <div className="relative">
            <input className="input" readOnly value={v ?? ""} style={{ paddingRight: Icon ? 34 : 12 }} />
            {Icon && <Icon size={18} className="absolute" style={{ right: 9, top: 9, color: "var(--muted-2)" }} />}
          </div>
        </Field>
      ))}
      <Notes>联系客服更新您的最新信息。</Notes>
    </div>
  );
}

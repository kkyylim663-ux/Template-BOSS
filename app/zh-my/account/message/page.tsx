import { Inbox } from "lucide-react";

export default function MessagePage() {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ background: "var(--card)", borderRadius: 12, padding: 12, minHeight: 917 }}>
        <div className="flex flex-col items-center" style={{ padding: "24px 12px", gap: 12 }}>
          <Inbox size={40} style={{ color: "var(--muted-3)" }} />
          <span style={{ fontSize: 14, fontWeight: 500 }}>暂无消息</span>
        </div>
      </div>
    </div>
  );
}

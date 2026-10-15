"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { AuthPanel } from "./AuthShell";

export default function RegisterBody() {
  const { login }                  = useAuth();
  const { closeModal }  = useModal();

  const [form, setForm] = useState({
    username: "", phone: "", otp: "", password: "", email: "", fullName: "", referral: "",
  });
  const [showPw, setShowPw]    = useState(false);
  const [loading, setLoading]  = useState(false);
  const [otpSent, setOtpSent]  = useState(false);
  const [error, setError]      = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleOTP = () => {
    if (!form.phone.trim()) { setError("请输入手机号码"); return; }
    setOtpSent(true);
    setError("OTP 已发送（模拟）");
    setTimeout(() => setError(""), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.username || !form.password || !form.phone || !form.fullName) {
      setError("请填写必填项 *"); return;
    }
    setLoading(true);
    await login(form.username, form.password);
    setLoading(false);
    closeModal();
  };

  const perks = [
    "🎁 高达 299% 欢迎奖金",
    "💰 15.5% 每周返水",
    "📈 1.4% 每日流水返利",
    "🛍️ 奖励商城 — 积分兑换好礼",
    "🎯 每日 / 每周任务奖励",
    "👑 VIP 升级奖金 + 专属 Telegram 群",
    "👥 推荐好友：88 或 38 + 0.2% 回馈",
  ];
  const filled = !!form.username.trim() && !!form.password.trim() && !!form.phone.trim() && !!form.fullName.trim();

  const footer = (
    <div style={{ marginTop: 22, padding: "0 4px" }}>
      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>立即注册 &amp;<br />解锁 Test123 专属福利</h3>
      <ul style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 11, listStyle: "disc", paddingLeft: 18 }}>
        {perks.map(t => (
          <li key={t} style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{t}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
    <AuthPanel>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="form-field">
              <label className="form-label">用户名 *</label>
              <input className="form-input" placeholder="用户名" value={form.username} onChange={set("username")} />
            </div>

            <div className="form-field">
              <label className="form-label">手机号码</label>
              <div className="flex gap-2">
                <input className="form-input flex-1" placeholder="+60 xxxxxxxxx" value={form.phone} onChange={set("phone")} />
                <button type="button" className="btn-outline text-xs px-3 flex-shrink-0" onClick={handleOTP}>
                  {otpSent ? "重新发送" : "发送OTP"}
                </button>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">一次性密码 (OTP) *</label>
              <input className="form-input" placeholder="6 位 OTP" value={form.otp} onChange={set("otp")} />
            </div>

            <div className="form-field">
              <label className="form-label">密码 *</label>
              <div className="relative">
                <input
                  className="form-input pr-10"
                  type={showPw ? "text" : "password"}
                  placeholder="至少 6 位"
                  value={form.password}
                  onChange={set("password")}
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 btn-ghost p-0"
                  onClick={() => setShowPw(v => !v)}>
                  {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">电子邮箱 *</label>
              <input className="form-input" type="email" placeholder="邮箱地址" value={form.email} onChange={set("email")} />
            </div>

            <div className="form-field">
              <label className="form-label">全名（与银行账户一致）*</label>
              <input className="form-input" placeholder="真实姓名" value={form.fullName} onChange={set("fullName")} />
            </div>

            <div className="form-field">
              <label className="form-label">推荐码（可选）</label>
              <input className="form-input" placeholder="推荐码" value={form.referral} onChange={set("referral")} />
            </div>

            {error && <p className="text-xs" style={{ color: error.includes("已发送") ? "var(--gold)" : "var(--live-red)" }}>{error}</p>}

            <button type="submit" disabled={loading} className="w-full text-sm font-semibold" style={{ height: 40, borderRadius: 8, background: filled ? "var(--gold)" : "var(--btn-dark)", color: filled ? "#000" : "#6c7390", transition: "background .2s, color .2s" }}>
              {loading ? "注册中..." : "提交"}
            </button>
          </form>
    </AuthPanel>
    {footer}
    </>
  );
}

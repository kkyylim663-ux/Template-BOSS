"use client";
import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function RegisterModal() {
  const { login }                  = useAuth();
  const { closeModal, openLogin }  = useModal();

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

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className="modal-box" style={{ maxWidth: 420, padding: 24 }}>
        <button className="absolute top-4 right-4 btn-ghost" onClick={closeModal}>
          <X size={18} />
        </button>

        <div className="flex justify-center" style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: 1 }}>BO55</span>
        </div>

        {/* Promo banner */}
        <div
          className="flex flex-col justify-end"
          style={{ aspectRatio: "343 / 150", borderRadius: 12, padding: 16, marginBottom: 16, background: "linear-gradient(135deg, #1a1050 0%, #0b0e1e 100%)" }}
        >
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>LET&apos;S MAKE YOU RICH</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Rise higher. Win bigger.</div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center" style={{ gap: 16, marginBottom: 20 }}>
          <button
            className="text-sm"
            style={{ color: "var(--text-muted)", paddingBottom: 6 }}
            onClick={() => { closeModal(); setTimeout(openLogin, 100); }}
          >
            登录
          </button>
          <span style={{ color: "var(--border-main)" }}>|</span>
          <button className="text-sm font-semibold" style={{ color: "var(--gold)", paddingBottom: 6, borderBottom: "2px solid var(--gold)" }}>
            注册
          </button>
        </div>

          <form onSubmit={handleSubmit} className="space-y-3">
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

            <button type="submit" className="btn-primary w-full py-2.5" disabled={loading}>
              {loading ? "注册中..." : "提交"}
            </button>
          </form>

        {/* Register perks */}
        <div className="flex flex-col items-center text-center" style={{ marginTop: 20, gap: 8 }}>
          <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
            立即注册 &amp; 解锁 BO55 专属福利
          </h3>
          {[
            "🎁 高达 299% 欢迎奖金",
            "💰 每日存款返水",
            "👑 VIP 终身会员",
            "🎯 每日任务奖励",
          ].map(b => (
            <div
              key={b}
              className="w-full text-left px-3 py-2 rounded-lg text-xs"
              style={{ background: "rgba(240,168,25,0.1)", color: "var(--text-primary)", border: "1px solid rgba(240,168,25,0.2)" }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

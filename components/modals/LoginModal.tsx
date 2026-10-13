"use client";
import { useState } from "react";
import { X, Eye, EyeOff, Shield } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function LoginModal() {
  const { login }                = useAuth();
  const { closeModal, openRegister } = useModal();
  const [username, setUsername]  = useState("");
  const [password, setPassword]  = useState("");
  const [showPw, setShowPw]      = useState(false);
  const [remember, setRemember]  = useState(false);
  const [loading, setLoading]    = useState(false);
  const [error, setError]        = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) { setError("请输入用户名"); return; }
    if (!password.trim()) { setError("请输入密码"); return; }
    setLoading(true);
    setError("");
    const ok = await login(username, password);
    setLoading(false);
    if (ok) closeModal();
    else setError("用户名或密码错误");
  };

  return (
    <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) closeModal(); }}>
      <div className="modal-box" style={{ maxWidth: 420, padding: 24 }}>
        <button className="absolute top-4 right-4 btn-ghost" onClick={closeModal}>
          <X size={18} />
        </button>

        <div className="flex justify-center" style={{ marginBottom: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Logo" style={{ height: 72, width: "auto", margin: "-10px 0" }} />
        </div>

        {/* Promo banner */}
        <div
          className="flex flex-col justify-end"
          style={{ aspectRatio: "343 / 150", borderRadius: 12, padding: 16, marginBottom: 16, background: "linear-gradient(135deg, #1a1050 0%, #0b0e1e 100%)" }}
        >
          <Shield size={22} style={{ color: "var(--gold)", marginBottom: 6 }} />
          <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>LET&apos;S MAKE YOU RICH</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Rise higher. Win bigger.</div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center" style={{ gap: 16, marginBottom: 20 }}>
          <button className="text-sm font-semibold" style={{ color: "var(--gold)", paddingBottom: 6, borderBottom: "2px solid var(--gold)" }}>
            登录
          </button>
          <span style={{ color: "var(--border-main)" }}>|</span>
          <button
            className="text-sm"
            style={{ color: "var(--text-muted)", paddingBottom: 6 }}
            onClick={() => { closeModal(); setTimeout(openRegister, 100); }}
          >
            注册
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-field">
            <label className="form-label">用户名</label>
            <input
              className="form-input"
              placeholder="用户名"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="form-field">
            <label className="form-label">密码</label>
            <div className="relative">
              <input
                className="form-input pr-10"
                type={showPw ? "text" : "password"}
                placeholder="密码"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 btn-ghost p-0"
                onClick={() => setShowPw(v => !v)}
              >
                {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-muted)" }}>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="w-3.5 h-3.5 accent-[var(--gold)]"
              />
              记住我
            </label>
            <button type="button" style={{ color: "var(--gold-text)" }} className="hover:underline">
              忘记密码？
            </button>
          </div>

          {error && <p className="text-xs" style={{ color: "var(--live-red)" }}>{error}</p>}

          <button
            type="submit"
            className="btn-primary w-full py-2.5 text-sm"
            disabled={loading}
          >
            {loading ? "登录中..." : "登录"}
          </button>
        </form>

        {/* Trust badges */}
        <div className="mt-6">
          <p className="text-xs mb-2 text-center" style={{ color: "var(--text-muted)" }}>Trusted and verified by:</p>
          <div className="flex justify-center gap-3">
            {["bmm", "iTech Labs"].map(b => (
              <div key={b} className="px-3 py-1 rounded text-xs" style={{ background: "var(--bg-card)", color: "var(--text-muted)" }}>{b}</div>
            ))}
          </div>
        </div>

        {/* Welcome blurb */}
        <div className="flex flex-col items-center text-center" style={{ marginTop: 20, gap: 6 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Logo" style={{ height: 56, width: "auto", margin: "-8px 0" }} />
          <div className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>欢迎回到 TitanX</div>
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
            业界领先安全技术，严格保护您的个人信息和资金安全。
          </p>
        </div>
      </div>
    </div>
  );
}

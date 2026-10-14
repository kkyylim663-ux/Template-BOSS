"use client";
import { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { AuthPanel } from "./AuthShell";

export default function LoginBody() {
  const { login }                = useAuth();
  const { closeModal } = useModal();
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

  const filled = !!username.trim() && !!password.trim();

  const footer = (
    <div className="flex flex-col items-center text-center" style={{ marginTop: 22, gap: 8 }}>
      {/* logo hidden on purpose: spacer keeps the original 140x40 box */}
      <span aria-hidden style={{ display: "block", width: 140, height: 40 }} />
      <div className="text-sm font-bold" style={{ color: "#fff", marginTop: 4 }}>Trusted and verified by:</div>
      <div className="flex justify-center items-center" style={{ gap: 16 }}>
        {[["c1", 30], ["c2", 56], ["c3", 56]].map(([b, w]) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={b} src={`/footer/${b}.png`} alt="" draggable={false} style={{ width: w as number, height: 30, objectFit: "contain" }} />
        ))}
      </div>
      <div className="text-sm font-bold" style={{ color: "#fff", marginTop: 4 }}>欢迎回到 TitanX</div>
      <p className="text-xs leading-relaxed" style={{ color: "#e4e8ff" }}>
        业界领先安全技术，严格保护您的个人信息和资金安全。
      </p>
    </div>
  );

  return (
    <>
    <AuthPanel>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div className="form-field">
          <label className="form-label">用户名</label>
          <input className="form-input" style={{ height: 40 }} placeholder="用户名" value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" />
        </div>

        <div className="form-field">
          <label className="form-label">密码</label>
          <div className="relative">
            <input className="form-input pr-10" style={{ height: 40 }} type={showPw ? "text" : "password"} placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 btn-ghost p-0" onClick={() => setShowPw(v => !v)} aria-label="显示密码">
              {showPw ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm" style={{ color: "#fff" }}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="sr-only" />
            <span className="flex items-center justify-center" style={{ width: 16, height: 16, borderRadius: 3, background: remember ? "var(--gold)" : "#fff", transition: "background .15s" }}>
              {remember && <Check size={12} strokeWidth={3.5} color="#000" />}
            </span>
            记住我
          </label>
          <button type="button" style={{ color: "#2b8de6" }} className="hover:underline">忘记密码？</button>
        </div>

        {error && <p className="text-xs" style={{ color: "var(--live-red)" }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full text-sm font-semibold"
          style={{ height: 40, borderRadius: 8, background: filled ? "var(--gold)" : "var(--btn-dark)", color: filled ? "#000" : "#6c7390", transition: "background .2s, color .2s" }}
        >
          {loading ? "登录中..." : "登录"}
        </button>
      </form>
    </AuthPanel>
    {footer}
    </>
  );
}

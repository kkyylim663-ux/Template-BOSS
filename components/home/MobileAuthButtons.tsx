"use client";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function MobileAuthButtons() {
  const { isLoggedIn } = useAuth();
  const { openLogin, openRegister } = useModal();
  if (isLoggedIn) return null;
  return (
    <div className="only-mobile" style={{ gap: 8, marginTop: 7 }}>
      <button className="btn-dark" style={{ flex: 1, height: 44, fontSize: 14, fontWeight: 500 }} onClick={openLogin}>登录</button>
      <button className="btn-gold" style={{ flex: 1, height: 44, fontSize: 14, fontWeight: 500 }} onClick={openRegister}>注册</button>
    </div>
  );
}

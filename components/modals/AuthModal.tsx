"use client";
import { useModal } from "@/context/ModalContext";
import AuthShell from "./AuthShell";
import LoginBody from "./LoginModal";
import RegisterBody from "./RegisterModal";

// One shell for both tabs: switching only swaps the body, so the popup never closes and reopens.
export default function AuthModal() {
  const { modal, closeModal, openLogin, openRegister } = useModal();
  const active = modal === "register" ? "register" : "login";
  return (
    <AuthShell active={active} onClose={closeModal} onSwitch={active === "login" ? openRegister : openLogin}>
      {active === "login" ? <LoginBody /> : <RegisterBody />}
    </AuthShell>
  );
}

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { ready, isLoggedIn } = useAuth();
  const { openLogin } = useModal();
  const router = useRouter();

  useEffect(() => {
    if (ready && !isLoggedIn) {
      router.replace("/zh-my");
      openLogin();
    }
  }, [ready, isLoggedIn, router, openLogin]);

  if (!ready || !isLoggedIn) return <div style={{ minHeight: 400 }} />;
  return <>{children}</>;
}

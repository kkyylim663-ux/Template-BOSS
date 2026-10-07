"use client";
import { createContext, useContext, useState, useCallback } from "react";

type ModalType = "login" | "register" | "announcement" | null;

interface ModalCtx {
  modal: ModalType;
  openLogin: () => void;
  openRegister: () => void;
  openAnnouncement: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalCtx | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalType>(null);

  const openLogin        = useCallback(() => setModal("login"), []);
  const openRegister     = useCallback(() => setModal("register"), []);
  const openAnnouncement = useCallback(() => setModal("announcement"), []);
  const closeModal       = useCallback(() => setModal(null), []);

  return (
    <ModalContext.Provider value={{ modal, openLogin, openRegister, openAnnouncement, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}

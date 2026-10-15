"use client";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LiveFeed from "./LiveFeed";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import NavProgress from "./NavProgress";
import AuthModal from "@/components/modals/AuthModal";
import AnnouncementModal from "@/components/modals/RewardsModalV2";
import FloatingChat, { SideSocial } from "@/components/ui/FloatingChat";
import Translator from "@/components/i18n/Translator";
import { useModal } from "@/context/ModalContext";
import { useEffect } from "react";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const { modal, openAnnouncement } = useModal();

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("bo55_ann")) {
        openAnnouncement();
        sessionStorage.setItem("bo55_ann", "1");
      }
    } catch {}
  }, [openAnnouncement]);

  return (
    <>
      <NavProgress />
      <Header />
      <Sidebar />
      <SideSocial />
      <main className="app-main">
        {children}
        <Footer />
      </main>
      <LiveFeed />
      <MobileNav />

      {(modal === "login" || modal === "register") && <AuthModal />}
      {modal === "announcement" && <AnnouncementModal />}

      <FloatingChat />
      <Translator />
    </>
  );
}

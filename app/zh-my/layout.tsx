import type { Metadata } from "next";
import { AuthProvider }     from "@/context/AuthContext";
import { ModalProvider }    from "@/context/ModalContext";
import { LanguageProvider } from "@/context/LanguageContext";
import LayoutShell          from "@/components/layout/LayoutShell";
import ViewportScale        from "@/components/layout/ViewportScale";

export const metadata: Metadata = {
  title: "Test123 马来西亚 | 在线游戏、优惠活动与奖励",
  description: "Test123 – Simple, Fast, and Reliable. 体验世界级在线博彩娱乐。",
};

export default function ZhMyLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ModalProvider>
          <ViewportScale />
          <LayoutShell>{children}</LayoutShell>
        </ModalProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

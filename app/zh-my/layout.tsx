import type { Metadata } from "next";
import { AuthProvider }  from "@/context/AuthContext";
import { ModalProvider } from "@/context/ModalContext";
import LayoutShell       from "@/components/layout/LayoutShell";

export const metadata: Metadata = {
  title: "BO55 马来西亚 | 在线游戏、优惠活动与奖励",
  description: "BO55 – Simple, Fast, and Reliable. 体验世界级在线博彩娱乐。",
};

export default function ZhMyLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ModalProvider>
        <LayoutShell>{children}</LayoutShell>
      </ModalProvider>
    </AuthProvider>
  );
}

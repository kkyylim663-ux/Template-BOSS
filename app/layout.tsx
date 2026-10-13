import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TitanX 马来西亚",
  description: "TitanX – Simple, Fast, and Reliable",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}

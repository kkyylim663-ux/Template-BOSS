import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BO55 马来西亚",
  description: "BO55 – Simple, Fast, and Reliable",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}

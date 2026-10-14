"use client";
import type { CSSProperties } from "react";
import { NAV_SVG } from "@/lib/nav-icons";

export default function NavSvg({ label, size = 20, active, style }: { label: string; size?: number; active?: boolean; style?: CSSProperties }) {
  const svg = NAV_SVG[label];
  if (!svg) return null;
  return (
    <span
      aria-hidden
      style={{ display: "inline-flex", width: size, height: size, flexShrink: 0, ["--svg-color-start" as string]: active ? "#ffad00" : "#ffffff", ["--svg-color-end" as string]: active ? "#ffad00" : "#ffffff", ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

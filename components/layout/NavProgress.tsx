"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Thin top bar that appears as soon as an internal link is clicked and disappears once the route has changed,
// so slow route compiles / loads never look like a dead click.
export default function NavProgress() {
  const pathname = usePathname();
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setBusy(false);
    if (timer.current) clearTimeout(timer.current);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank" || a.origin !== location.origin) return;
      if (a.pathname === location.pathname) return;
      setBusy(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setBusy(false), 20000);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!busy) return null;
  return <div className="nav-progress" aria-hidden />;
}

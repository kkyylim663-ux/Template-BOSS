"use client";

import { useEffect } from "react";

const BASE_WIDTH = 390;
const MAX_SCALED_WIDTH = 480;

export default function ViewportScale() {
  useEffect(() => {
    const root = document.documentElement;

    const apply = () => {
      // Reset first so the measurement is taken against the unzoomed viewport.
      root.style.zoom = "";
      const w = window.innerWidth || root.clientWidth;
      const scale = w <= MAX_SCALED_WIDTH ? w / BASE_WIDTH : 1;
      root.style.zoom = scale === 1 ? "" : String(scale);
    };

    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);

    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
      root.style.zoom = "";
    };
  }, []);

  return null;
}

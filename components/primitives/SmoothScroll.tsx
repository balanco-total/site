"use client";

import { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cleanup: (() => void) | undefined;
    let started = false;

    const start = async () => {
      if (started) return;
      started = true;
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    };

    const opts = { once: true, passive: true } as const;
    window.addEventListener("pointermove", start, opts);
    window.addEventListener("wheel", start, opts);
    window.addEventListener("touchstart", start, opts);
    window.addEventListener("keydown", start, opts);

    return () => {
      window.removeEventListener("pointermove", start);
      window.removeEventListener("wheel", start);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("keydown", start);
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}

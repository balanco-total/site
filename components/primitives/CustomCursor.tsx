"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * Premium trailing cursor - a glowing dot + a lagging ring that grows
 * over interactive elements. Desktop / fine-pointer only.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const enabled = finePointer && !reduced;

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      const target = e.target as HTMLElement;
      const interactive = !!target.closest("a, button, [data-cursor='hover']");
      ring.dataset.hover = interactive ? "true" : "false";
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200] hidden md:block">
      <div
        ref={dotRef}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-emerald-bright"
        style={{ boxShadow: "0 0 12px 2px rgba(52,211,153,0.7)" }}
      />
      <div
        ref={ringRef}
        data-hover="false"
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-emerald-bright/50 transition-[width,height,margin,opacity] duration-300 data-[hover=true]:-ml-8 data-[hover=true]:-mt-8 data-[hover=true]:h-16 data-[hover=true]:w-16 data-[hover=true]:border-teal/70"
      />
    </div>
  );
}

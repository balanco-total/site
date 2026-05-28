"use client";

import { useEffect, useState } from "react";

/** Normalized (-0.5..0.5) and raw pointer position. */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
        nx: e.clientX / window.innerWidth - 0.5,
        ny: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pos;
}

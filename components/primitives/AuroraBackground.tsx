import { cn } from "@/lib/utils";

/**
 * Performant CSS aurora - layered blurred radial gradients.
 * Animation auto-disables under prefers-reduced-motion (see globals.css).
 */
export function AuroraBackground({
  className,
  intensity = "medium",
}: {
  className?: string;
  intensity?: "soft" | "medium" | "strong";
}) {
  const opacity = { soft: 0.4, medium: 0.6, strong: 0.85 }[intensity];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="absolute -top-1/3 left-1/2 h-[55rem] w-[55rem] -translate-x-1/2 rounded-full blur-[40px] sm:blur-[120px] animate-[aurora_18s_ease-in-out_infinite_alternate]"
        style={{
          opacity,
          background:
            "radial-gradient(circle at center, rgba(16,185,129,0.55), transparent 60%)",
        }}
      />
      <div
        className="absolute top-[10%] -left-[10%] h-[40rem] w-[40rem] rounded-full blur-[40px] sm:blur-[120px] animate-[aurora_22s_ease-in-out_infinite_alternate]"
        style={{
          opacity: opacity * 0.9,
          background:
            "radial-gradient(circle at center, rgba(45,212,191,0.45), transparent 60%)",
        }}
      />
      <div
        className="absolute top-[5%] -right-[10%] h-[42rem] w-[42rem] rounded-full blur-[50px] sm:blur-[130px] animate-[aurora_26s_ease-in-out_infinite_alternate]"
        style={{
          opacity: opacity * 0.8,
          background:
            "radial-gradient(circle at center, rgba(34,211,238,0.4), transparent 60%)",
        }}
      />
    </div>
  );
}

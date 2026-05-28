"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { HERO, CTA } from "@/lib/content";
import { AuroraBackground } from "@/components/primitives/AuroraBackground";
import { GridBackground } from "@/components/primitives/GridBackground";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { ButtonLink } from "@/components/ui/Button";
import { DashboardMockup } from "./DashboardMockup";
import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

export function Hero() {
  const { nx, ny } = useMousePosition();
  const words = HERO.headline.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <AuroraBackground intensity="soft" />
      <GridBackground />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ground/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ground to-transparent" />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <div className="eyebrow mb-6 fade-up-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-bright opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-bright" />
          </span>
          {HERO.badge}
        </div>

        <h1
          className="text-display fade-up-soft mx-auto max-w-4xl text-balance text-5xl text-ink sm:text-6xl md:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={cn(HERO.headlineHighlight.includes(i) && "text-aurora")}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>

        <p
          className="fade-up-soft mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          {HERO.subline}
        </p>

        <div
          className="fade-up-soft mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.25s" }}
        >
          <MagneticButton>
            <ButtonLink href={CTA.primary.href} variant="primary" size="lg" className="group">
              {CTA.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </MagneticButton>
          <ButtonLink href={CTA.secondary.href} variant="secondary" size="lg">
            {CTA.secondary.label}
          </ButtonLink>
        </div>

        {/* trust + social proof */}
        <div
          className="fade-up-soft mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-7"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {HERO.trust.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-muted">
                <Check className="h-4 w-4 text-emerald-bright" />
                {t}
              </span>
            ))}
          </div>
          <div className="hidden h-4 w-px bg-line sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-muted">
              4,9/5 · +12 mil famílias
            </span>
          </div>
        </div>

        {/* floating mockup with mouse parallax */}
        <div
          className="fade-up-soft relative mt-16 w-full max-w-3xl"
          style={{ perspective: 1200, animationDelay: "0.3s" }}
        >
          <motion.div
            animate={{ rotateX: ny * -6, rotateY: nx * 8, y: nx * 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-emerald/20 blur-[80px]" />
            <DashboardMockup />
          </motion.div>

          {/* floating chips */}
          <motion.div
            className="absolute -left-6 top-1/4 hidden sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="glass-strong rounded-2xl px-4 py-3 text-left shadow-xl">
              <p className="text-xs text-muted">Economia no mês</p>
              <p className="font-mono text-lg font-semibold text-emerald-bright">+ R$ 740</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute -right-4 top-2/3 hidden sm:block"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="glass-strong rounded-2xl px-4 py-3 text-left shadow-xl">
              <p className="text-xs text-muted">Extrato importado</p>
              <p className="text-sm font-medium text-ink">42 transações ✓</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

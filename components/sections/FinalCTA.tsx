"use client";

import { ArrowRight } from "lucide-react";
import { FINAL_CTA, CTA, HERO } from "@/lib/content";
import { AuroraBackground } from "@/components/primitives/AuroraBackground";
import { GridBackground } from "@/components/primitives/GridBackground";
import { TextReveal } from "@/components/primitives/TextReveal";
import { Reveal } from "@/components/primitives/Reveal";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { ButtonLink } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section relative overflow-hidden">
      <AuroraBackground intensity="strong" />
      <GridBackground className="bg-grid-fade" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/40 to-transparent" />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <TextReveal
          text={FINAL_CTA.title}
          el="h2"
          highlight={[3, 4]}
          className="text-display max-w-3xl text-balance text-4xl text-ink sm:text-5xl md:text-6xl"
        />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-pretty text-lg text-muted">
            {FINAL_CTA.subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <MagneticButton>
            <ButtonLink href={CTA.primary.href} variant="primary" size="lg" className="group">
              {CTA.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </MagneticButton>
        </Reveal>
        <Reveal delay={0.3} className="mt-7">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {HERO.trust.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-muted">
                <Check className="h-4 w-4 text-emerald-bright" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

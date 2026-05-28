"use client";

import { Check, ArrowRight } from "lucide-react";
import { PRICING, CTA } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { AuroraBackground } from "@/components/primitives/AuroraBackground";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { ButtonLink } from "@/components/ui/Button";

export function Pricing() {
  const reais = Math.floor(PRICING.price);
  const cents = Math.round((PRICING.price - reais) * 100)
    .toString()
    .padStart(2, "0");

  return (
    <section id="preco" className="section">
      <div className="container-x">
        <SectionHeading badge={PRICING.badge} title={PRICING.title} />

        <Reveal className="mx-auto mt-14 max-w-lg">
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-10">
            <AuroraBackground intensity="soft" className="opacity-50" />
            <div className="relative">
              <div className="flex items-end justify-center gap-1">
                <span className="mb-2 text-2xl font-medium text-muted">R$</span>
                <span className="text-display text-7xl text-ink">{reais}</span>
                <span className="mb-2 text-2xl font-medium text-muted">,{cents}</span>
                <span className="mb-3 ml-1 text-muted">{PRICING.period}</span>
              </div>
              <p className="mt-3 text-center text-sm text-emerald-bright">
                {PRICING.trial}
              </p>

              <div className="my-8 h-px bg-line" />

              <ul className="grid gap-3 sm:grid-cols-2">
                {PRICING.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-bright" />
                    {f}
                  </li>
                ))}
              </ul>

              <MagneticButton className="mt-9 block w-full">
                <ButtonLink
                  href={CTA.primary.href}
                  variant="primary"
                  size="lg"
                  className="group w-full"
                >
                  Criar conta grátis
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </MagneticButton>
              <p className="mt-4 text-center text-xs text-faint">
                Tudo incluso. Sem surpresas na fatura.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

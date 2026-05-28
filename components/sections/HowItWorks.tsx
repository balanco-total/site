"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STEPS } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${STEPS.length * 60}%`,
        pin: ".how-pin",
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(
            STEPS.length - 1,
            Math.floor(self.progress * STEPS.length),
          );
          setActive(idx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="como-funciona" ref={sectionRef} className="section">
      <div className="container-x">
        <div className="how-pin">
          <SectionHeading
            badge="Como funciona"
            title="Do zero ao controle em 3 passos"
            subtitle="Sem configuração complexa. Em minutos você já está enxergando para onde o dinheiro vai."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* steps */}
            <div className="flex flex-col gap-4">
              {STEPS.map((s, i) => (
                <button
                  key={s.n}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative rounded-3xl border p-6 text-left transition-all duration-500",
                    active === i
                      ? "glass-strong border-emerald/40"
                      : "border-line bg-white/[0.01] hover:border-line-strong",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "font-mono text-2xl font-semibold transition-colors",
                        active === i ? "text-aurora" : "text-faint",
                      )}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {s.text}
                      </p>
                    </div>
                  </div>
                  {active === i && (
                    <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-emerald via-teal to-transparent" />
                  )}
                </button>
              ))}
            </div>

            {/* visual */}
            <div className="relative aspect-square overflow-hidden rounded-3xl glass-strong p-8 lg:aspect-auto lg:h-[26rem]">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-emerald/20 blur-3xl" />
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <div className="font-mono text-7xl font-bold text-aurora">
                  {STEPS[active].n}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-ink">
                  {STEPS[active].title}
                </h3>
                <p className="mt-3 max-w-sm text-muted">{STEPS[active].text}</p>
                <div className="mt-8 flex gap-2">
                  {STEPS.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-500",
                        active === i ? "w-8 bg-emerald-bright" : "w-1.5 bg-line-strong",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

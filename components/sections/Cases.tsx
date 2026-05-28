"use client";

import { motion } from "framer-motion";
import { CASES } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Cases() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          badge="Resultados reais"
          title="O que muda quando você enxerga tudo"
          subtitle="Pequenas decisões, com base em dados claros, viram grandes economias no fim do mês."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {CASES.map((c) => (
            <motion.div key={c.title} variants={fadeUp}>
              <GlassCard>
                <p className="text-display text-3xl text-aurora">{c.metric}</p>
                <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                <p className="mt-5 border-t border-line pt-4 text-xs text-faint">
                  {c.person}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

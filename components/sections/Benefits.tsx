"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Benefits() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          badge="Por que o BalançoTotal"
          title="Controle financeiro sem o peso de uma planilha"
          subtitle="Você não precisa virar contador para entender seu dinheiro. Precisa de clareza, no tempo que você tem."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.title} variants={fadeUp}>
                <GlassCard>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-emerald/10 text-emerald-bright ring-1 ring-emerald/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{b.text}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Spotlight } from "@/components/primitives/Spotlight";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="recursos" className="section">
      <div className="container-x">
        <SectionHeading
          badge="Recursos"
          title="Tudo o que você precisa. Nada que você não usa."
          subtitle="Foco total no controle pessoal de gastos - do lançamento manual à conexão automática com o banco."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className={cn(f.span === "wide" && "sm:col-span-2")}
              >
                <Spotlight className="glass group h-full rounded-3xl p-7 transition-colors duration-300 hover:border-line-strong">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-teal ring-1 ring-line">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{f.text}</p>
                </Spotlight>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

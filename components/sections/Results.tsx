"use client";

import { motion } from "framer-motion";
import { RESULTS } from "@/lib/content";
import { AnimatedCounter } from "@/components/primitives/AnimatedCounter";
import { AuroraBackground } from "@/components/primitives/AuroraBackground";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

export function Results() {
  return (
    <section className="relative overflow-hidden py-20">
      <AuroraBackground intensity="soft" className="opacity-60" />
      <div className="container-x relative">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
        >
          {RESULTS.map((r) => (
            <motion.div key={r.label} variants={fadeUp} className="text-center">
              <div className="text-display text-4xl text-aurora sm:text-5xl md:text-6xl">
                <AnimatedCounter
                  value={r.value}
                  prefix={r.prefix ?? ""}
                  suffix={r.suffix ?? ""}
                  decimals={r.decimals ?? 0}
                />
              </div>
              <p className="mx-auto mt-3 max-w-[14rem] text-sm text-muted">
                {r.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import { INTEGRATIONS } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/motion";

export function Integrations() {
  return (
    <section id="integracoes" className="section">
      <div className="container-x">
        <SectionHeading
          badge={INTEGRATIONS.badge}
          title={INTEGRATIONS.title}
          subtitle={INTEGRATIONS.subtitle}
        />

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {INTEGRATIONS.banks.map((bank) => (
            <motion.div
              key={bank}
              variants={scaleIn}
              className="group relative flex items-center justify-center gap-3 rounded-2xl border border-line bg-white/[0.02] px-4 py-6 transition-all duration-300 hover:border-emerald/40 hover:bg-emerald/[0.04]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.05] text-faint transition-colors group-hover:text-emerald-bright">
                <Link2 className="h-4 w-4" />
              </span>
              <span className="font-medium text-muted transition-colors group-hover:text-ink">
                {bank}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-sm text-faint">
          E mais de 200 outras instituições suportadas.
        </p>
      </div>
    </section>
  );
}

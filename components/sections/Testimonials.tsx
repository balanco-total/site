"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          badge="Quem usa, recomenda"
          title="Milhares de famílias no controle"
          subtitle="Pessoas comuns que cansaram de planilha e finalmente entenderam para onde o dinheiro vai."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="glass break-inside-avoid rounded-3xl p-6"
            >
              <Quote className="h-6 w-6 text-emerald/40" />
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-emerald to-teal text-sm font-semibold text-[#06080b]">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-ink">{t.name}</span>
                  <span className="block text-xs text-faint">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

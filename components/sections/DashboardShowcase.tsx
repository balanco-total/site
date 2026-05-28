"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { DashboardMockup } from "./DashboardMockup";
import { GridBackground } from "@/components/primitives/GridBackground";

const HIGHLIGHTS = [
  "Saldo do mês sempre à vista",
  "Gastos divididos por categoria e por pessoa",
  "Tendência dos últimos 9 meses",
  "Atualização em tempo real a cada lançamento",
];

export function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -4]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);

  return (
    <section id="dashboard" ref={ref} className="section relative overflow-hidden">
      <GridBackground className="bg-grid-fade opacity-40" />
      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            badge="Dashboard"
            title="Um painel que você entende num relance"
            subtitle="Sem ruído, sem termos técnicos. Só o que importa para você decidir melhor — bonito e direto."
            align="left"
          />
          <ul className="mt-8 flex flex-col gap-3">
            {HIGHLIGHTS.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 text-muted"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald/15 text-emerald-bright">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {h}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div style={{ y, rotateZ: rotate, scale }} className="relative">
          <div className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-teal/15 blur-[90px]" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

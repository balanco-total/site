"use client";

import { motion } from "framer-motion";
import { AUTOMATION } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { formatBRL } from "@/lib/utils";
import { viewportOnce, EASE_OUT } from "@/lib/motion";

export function AutomationAI() {
  return (
    <section id="automacao" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            badge={AUTOMATION.badge}
            title={AUTOMATION.title}
            subtitle={AUTOMATION.subtitle}
            align="left"
          />
          <div className="mt-8 flex flex-col gap-5">
            {AUTOMATION.points.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald-bright ring-1 ring-emerald/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* auto-categorizing rows */}
        <Reveal>
          <div className="glass-strong rounded-3xl p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-muted">extrato.ofx</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-bright">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-bright" />
                categorizando…
              </span>
            </div>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ staggerChildren: 0.12 }}
              className="flex flex-col gap-2.5"
            >
              {AUTOMATION.demoRows.map((r) => (
                <motion.li
                  key={r.merchant}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT } },
                  }}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-white/[0.02] px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm text-ink">{r.merchant}</p>
                    <span className="mt-0.5 inline-block rounded-md bg-teal/10 px-2 py-0.5 text-[0.7rem] text-teal">
                      {r.category}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 font-mono text-sm ${
                      r.amount > 0 ? "text-emerald-bright" : "text-muted"
                    }`}
                  >
                    {r.amount > 0 ? "+" : "−"}
                    {formatBRL(Math.abs(r.amount))}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

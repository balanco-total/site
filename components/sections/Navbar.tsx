"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CTA } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fade-down-soft fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled
            ? "glass-strong shadow-lg"
            : "border border-transparent bg-transparent",
        )}
      >
        <a href="/" className="flex items-center" aria-label="BalançoTotal">
          <Logo height={28} />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/[0.05] hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href={CTA.secondary.href} variant="ghost" size="sm">
            {CTA.secondary.label}
          </ButtonLink>
          <MagneticButton strength={0.3}>
            <ButtonLink href={CTA.primary.href} variant="primary" size="sm">
              {CTA.primary.label}
            </ButtonLink>
          </MagneticButton>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong absolute top-full mt-2 w-[calc(100%-2rem)] max-w-6xl rounded-3xl p-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-muted hover:bg-white/[0.05] hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <ButtonLink href={CTA.secondary.href} variant="secondary" size="md">
                {CTA.secondary.label}
              </ButtonLink>
              <ButtonLink href={CTA.primary.href} variant="primary" size="md">
                {CTA.primary.label}
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

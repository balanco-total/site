"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Reveals text word-by-word with a masked rise. Pass plain string.
 * `highlight` words (by index) get the aurora gradient.
 */
export function TextReveal({
  text,
  className,
  highlight = [],
  delay = 0,
  stagger = 0.06,
  el = "h1",
}: {
  text: string;
  className?: string;
  highlight?: number[];
  delay?: number;
  stagger?: number;
  el?: "h1" | "h2" | "p" | "span";
}) {
  const words = text.split(" ");
  const MotionTag = motion[el];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span
            className={cn(
              "inline-block",
              highlight.includes(i) && "text-aurora",
            )}
            variants={{
              hidden: { y: "110%" },
              show: { y: 0, transition: { duration: 0.85, ease: EASE_OUT } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

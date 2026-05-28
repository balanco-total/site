import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ground disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-bright text-[#06080b] font-semibold shadow-[0_8px_30px_-8px_rgba(16,185,129,0.7)] hover:shadow-[0_10px_44px_-6px_rgba(52,211,153,0.85)] hover:bg-[#4ade9e]",
        secondary:
          "glass text-ink hover:border-line-strong hover:bg-white/[0.06]",
        ghost: "text-muted hover:text-ink hover:bg-white/[0.04]",
        outline:
          "border border-emerald/40 text-emerald-bright hover:bg-emerald/10 hover:border-emerald/70",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

/** Anchor styled as a button (for CTAs that navigate). */
export const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
));
ButtonLink.displayName = "ButtonLink";

export { buttonVariants };

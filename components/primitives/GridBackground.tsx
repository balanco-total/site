import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "bg-grid bg-grid-fade pointer-events-none absolute inset-0",
        className,
      )}
    />
  );
}

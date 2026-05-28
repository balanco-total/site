import { cn } from "@/lib/utils";
import { Spotlight } from "./Spotlight";

export function GlassCard({
  children,
  className,
  spotlight = true,
}: {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
}) {
  const content = (
    <div
      className={cn(
        "glass relative h-full rounded-3xl p-6 transition-colors duration-300 hover:border-line-strong sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );

  if (!spotlight) return content;

  return (
    <Spotlight className="group h-full rounded-3xl">{content}</Spotlight>
  );
}

import { ArrowDownLeft, ArrowUpRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { label: "Mercado", pct: 32, color: "#34d399" },
  { label: "Moradia", pct: 26, color: "#2dd4bf" },
  { label: "Transporte", pct: 18, color: "#22d3ee" },
  { label: "Lazer", pct: 14, color: "#6ee7b7" },
  { label: "Outros", pct: 10, color: "#5d6670" },
];

const TREND = [38, 52, 45, 63, 58, 72, 68, 81, 76];

/** A self-contained, premium product mockup recreated in HTML/CSS. */
export function DashboardMockup({ className }: { className?: string }) {
  // build conic-gradient stops for the donut (pure, no mutation)
  const stops = CATEGORIES.map((c, i) => {
    const start = CATEGORIES.slice(0, i).reduce((s, x) => s + x.pct, 0);
    return `${c.color} ${start}% ${start + c.pct}%`;
  }).join(", ");

  return (
    <div
      aria-hidden
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl",
        className,
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-faint">app.balancototal.com.br</span>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        {/* balance row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-line bg-white/[0.02] p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <ArrowDownLeft className="h-3.5 w-3.5 text-emerald-bright" /> Entradas
            </div>
            <p className="mt-1 font-mono text-sm font-semibold text-ink sm:text-base">
              R$ 6.500
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white/[0.02] p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <ArrowUpRight className="h-3.5 w-3.5 text-rose-400" /> Saídas
            </div>
            <p className="mt-1 font-mono text-sm font-semibold text-ink sm:text-base">
              R$ 4.187
            </p>
          </div>
          <div className="rounded-xl border border-emerald/30 bg-emerald/10 p-3">
            <div className="text-xs text-emerald-bright">Saldo</div>
            <p className="mt-1 font-mono text-sm font-semibold text-emerald-bright sm:text-base">
              R$ 2.313
            </p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {/* donut */}
          <div className="col-span-2 flex flex-col items-center justify-center rounded-xl border border-line bg-white/[0.02] p-3">
            <div
              className="relative h-20 w-20 rounded-full sm:h-24 sm:w-24"
              style={{ background: `conic-gradient(${stops})` }}
            >
              <div className="absolute inset-[22%] grid place-items-center rounded-full bg-surface">
                <span className="text-[0.6rem] text-muted">categorias</span>
              </div>
            </div>
          </div>

          {/* category legend */}
          <div className="col-span-3 space-y-2 rounded-xl border border-line bg-white/[0.02] p-3">
            {CATEGORIES.map((c) => (
              <div key={c.label} className="flex items-center gap-2 text-xs">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: c.color }}
                />
                <span className="text-muted">{c.label}</span>
                <span className="ml-auto font-mono text-muted">{c.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* trend bars */}
        <div className="rounded-xl border border-line bg-white/[0.02] p-3">
          <div className="mb-3 flex items-center gap-1.5 text-xs text-muted">
            <TrendingUp className="h-3.5 w-3.5 text-teal" /> Tendência · 9 meses
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {TREND.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-emerald/40 to-teal"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

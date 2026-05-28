import { LOGO_CLOUD } from "@/lib/content";

export function LogoCloud() {
  const logos = [...LOGO_CLOUD.logos, ...LOGO_CLOUD.logos];

  return (
    <section className="relative border-y border-line/60 py-12">
      <div className="container-x">
        <p className="mb-8 text-center text-sm text-faint">{LOGO_CLOUD.label}</p>
        <div className="mask-x-fade relative overflow-hidden">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-12 pr-12">
            {logos.map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-muted/70 transition-colors hover:text-ink"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

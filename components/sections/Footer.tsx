import { AtSign, Send, Globe } from "lucide-react";
import { FOOTER, CTA } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center" aria-label="BalançoTotal">
              <Logo height={32} />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Controle de gastos pessoal e familiar, sem planilha e sem
              complicação. Saiba para onde o dinheiro vai.
            </p>
            <div className="mt-6 flex gap-2">
              {[AtSign, Send, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
                  aria-label="Rede social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} BalançoTotal. Todos os direitos reservados.
          </p>
          <ButtonLink href={CTA.primary.href} variant="outline" size="sm">
            {CTA.primary.label}
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}

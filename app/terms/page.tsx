import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do BalançoTotal: plano, pagamento, responsabilidades, proibições e demais condições do serviço.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="container-x pt-32 pb-24 sm:pt-40">
          <article className="mx-auto flex max-w-3xl flex-col">
            <span className="eyebrow self-start">Legal</span>
            <h1 className="text-display mt-5 text-3xl text-ink sm:text-4xl md:text-5xl">
              Termos de Uso
            </h1>
            <p className="mt-4 text-sm text-faint">
              Última atualização: maio de 2026
            </p>

            <div className="mt-12 flex flex-col gap-10">
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  1. Aceitação dos termos
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Ao criar uma conta ou usar o{" "}
                  <strong className="text-ink">BalançoTotal</strong>, você declara
                  ter lido, compreendido e concordado com estes Termos de Uso e
                  com nossa{" "}
                  <Link
                    href="/privacy"
                    className="text-emerald-bright underline-offset-4 hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  . Se você não concordar com alguma parte, não utilize o
                  serviço.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  2. Descrição do serviço
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  O BalançoTotal é uma plataforma de controle de despesas
                  pessoais e familiares que permite registrar gastos, categorizar
                  transações, importar extratos bancários (OFX/CSV), conectar
                  contas bancárias via open finance e compartilhar o acesso com
                  membros da família ou grupo.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  3. Plano e pagamento
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-muted">
                  {[
                    <>
                      O serviço oferece um{" "}
                      <strong className="text-ink">
                        período de teste gratuito de 34 dias
                      </strong>
                      , sem necessidade de cartão de crédito.
                    </>,
                    <>
                      Após o período de teste, a assinatura custa{" "}
                      <strong className="text-ink">R$ 7,99/mês</strong>, cobrada
                      mensalmente via Stripe.
                    </>,
                    <>
                      O plano contempla uma conta (grupo familiar/pessoal) com
                      múltiplos membros.
                    </>,
                    <>
                      O não pagamento na data de vencimento pode resultar na
                      suspensão do acesso ao app.
                    </>,
                    <>
                      Os preços podem ser reajustados com aviso prévio de 30 dias
                      por e-mail.
                    </>,
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  4. Cancelamento e reembolso
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Você pode cancelar sua assinatura a qualquer momento nas
                  configurações da conta ou entrando em contato conosco. O
                  cancelamento encerra a cobrança na próxima renovação; o acesso
                  permanece ativo até o final do período já pago.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  Não oferecemos reembolso proporcional por períodos não
                  utilizados, exceto quando exigido pelo Código de Defesa do
                  Consumidor (CDC - Lei nº 8.078/1990).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  5. Responsabilidades do usuário
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Ao usar o BalançoTotal, você se compromete a:
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-muted">
                  {[
                    "Fornecer informações verdadeiras no cadastro.",
                    "Manter a confidencialidade de sua senha.",
                    "Usar o serviço somente para fins pessoais e lícitos.",
                    "Não compartilhar acesso com pessoas de fora do seu grupo familiar ou autorizado.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  6. Proibições de uso
                </h2>
                <p className="mt-3 leading-relaxed text-muted">É vedado:</p>
                <ul className="mt-4 flex flex-col gap-3 text-muted">
                  {[
                    "Usar o serviço para atividades ilegais ou fraudulentas.",
                    "Tentar acessar dados de outros usuários ou contornar medidas de segurança.",
                    "Realizar engenharia reversa, scraping ou uso automatizado sem autorização.",
                    "Revender ou sublicenciar o acesso ao serviço.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  7. Limitação de responsabilidade
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  O BalançoTotal é uma ferramenta de organização pessoal. Não
                  prestamos assessoria financeira, contábil ou jurídica. As
                  informações exibidas são baseadas exclusivamente nos dados que
                  você cadastra. Não nos responsabilizamos por decisões
                  financeiras tomadas com base no uso do app.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  Na máxima extensão permitida por lei, nossa responsabilidade
                  total por quaisquer danos fica limitada ao valor pago nos
                  últimos 3 meses de assinatura.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  8. Disponibilidade do serviço
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Nos esforçamos para manter o serviço disponível continuamente,
                  mas não garantimos disponibilidade ininterrupta. Podemos
                  realizar manutenções programadas com aviso prévio sempre que
                  possível. Interrupções não planejadas não geram direito a
                  reembolso.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  9. Propriedade intelectual
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Todo o código, design, marca e conteúdo do BalançoTotal são de
                  propriedade de seus desenvolvedores. Os dados financeiros que
                  você insere pertencem a você; concedemos licença limitada apenas
                  para operar o serviço.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  10. Alterações e encerramento
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Podemos alterar, suspender ou encerrar o serviço com aviso
                  prévio de 30 dias. Em caso de encerramento definitivo,
                  forneceremos meios para exportar seus dados antes da
                  desativação.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  11. Lei aplicável e foro
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Estes Termos são regidos pelas leis brasileiras. Fica eleito o
                  foro da comarca de domicílio do usuário para resolver quaisquer
                  disputas, nos termos do CDC.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  12. Contato
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Dúvidas sobre estes Termos:{" "}
                  <a
                    href="mailto:contato@balancototal.com.br"
                    className="text-emerald-bright underline-offset-4 hover:underline"
                  >
                    contato@balancototal.com.br
                  </a>
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o BalançoTotal coleta, usa, armazena e protege seus dados pessoais e financeiros, em conformidade com a LGPD.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <div className="container-x pt-32 pb-24 sm:pt-40">
          <article className="mx-auto flex max-w-3xl flex-col">
            <span className="eyebrow self-start">Legal</span>
            <h1 className="text-display mt-5 text-3xl text-ink sm:text-4xl md:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-sm text-faint">
              Última atualização: maio de 2026
            </p>

            <div className="mt-12 flex flex-col gap-10">
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  1. Quem somos
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  O <strong className="text-ink">BalançoTotal</strong> é um
                  serviço de gerenciamento financeiro pessoal e familiar operado
                  por seus desenvolvedores (
                  <strong className="text-ink">Controlador de Dados</strong>).
                  Esta Política descreve como coletamos, usamos, armazenamos e
                  protegemos suas informações pessoais, em conformidade com a Lei
                  Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  2. Dados que coletamos
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-muted">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Cadastro:</strong> nome e
                      endereço de e-mail fornecidos no momento do registro.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Dados financeiros:</strong>{" "}
                      despesas, categorias e contas que você cadastra
                      voluntariamente.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Conexões bancárias:</strong>{" "}
                      quando você conecta uma conta bancária via Pluggy,
                      recebemos transações e saldos diretamente da instituição
                      financeira, com sua autorização expressa.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Dados de pagamento:</strong>{" "}
                      assinatura processada pela Stripe; não armazenamos dados de
                      cartão - eles ficam integralmente na Stripe.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Dados técnicos:</strong>{" "}
                      endereço IP, tipo de navegador e logs de acesso para fins
                      de segurança e diagnóstico.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  3. Finalidade e base legal
                </h2>
                <div className="mt-4 overflow-hidden rounded-2xl border border-line">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-line bg-white/[0.02]">
                        <th className="px-4 py-3 font-semibold text-ink">
                          Finalidade
                        </th>
                        <th className="px-4 py-3 font-semibold text-ink">
                          Base legal (LGPD)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      {[
                        [
                          "Prestar o serviço de controle financeiro",
                          "Execução de contrato (art. 7º, V)",
                        ],
                        [
                          "Processar pagamento da assinatura",
                          "Execução de contrato (art. 7º, V)",
                        ],
                        [
                          "Conectar contas bancárias via Pluggy",
                          "Consentimento (art. 7º, I)",
                        ],
                        [
                          "Enviar comunicações sobre o serviço",
                          "Legítimo interesse (art. 7º, IX)",
                        ],
                        [
                          "Segurança e prevenção de fraudes",
                          "Legítimo interesse (art. 7º, IX)",
                        ],
                      ].map(([finalidade, base]) => (
                        <tr
                          key={finalidade}
                          className="border-b border-line last:border-0"
                        >
                          <td className="px-4 py-3 leading-relaxed">
                            {finalidade}
                          </td>
                          <td className="px-4 py-3 leading-relaxed">{base}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  4. Compartilhamento com terceiros
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Seus dados são compartilhados apenas com os seguintes
                  parceiros, estritamente para operar o serviço:
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-muted">
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Supabase</strong> - banco de
                      dados e autenticação (servidores na nuvem).
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Stripe</strong> —
                      processamento de pagamentos e gestão de assinatura.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>
                      <strong className="text-ink">Pluggy</strong> - agregador de
                      dados bancários, acionado somente com sua autorização.
                    </span>
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-muted">
                  Não vendemos, alugamos nem cedemos seus dados a terceiros para
                  fins de publicidade ou marketing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  5. Retenção de dados
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Mantemos seus dados enquanto sua conta estiver ativa. Ao
                  cancelar ou excluir sua conta, os dados pessoais e financeiros
                  são removidos permanentemente de nossos sistemas em até 30
                  dias, salvo obrigação legal de retenção (ex: registros
                  fiscais).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  6. Seus direitos como titular
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Nos termos da LGPD, você tem direito a:
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-muted">
                  {[
                    "Confirmar a existência de tratamento de seus dados.",
                    "Acessar os dados que temos sobre você.",
                    "Corrigir dados incompletos, inexatos ou desatualizados.",
                    "Solicitar a exclusão de dados tratados com base em consentimento.",
                    "Revogar o consentimento a qualquer momento.",
                    "Solicitar a portabilidade dos seus dados.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed text-muted">
                  Para exercer qualquer desses direitos, entre em contato pelo
                  e-mail indicado na seção 8.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  7. Segurança
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Adotamos medidas técnicas e organizacionais adequadas para
                  proteger seus dados, incluindo criptografia em trânsito (TLS),
                  autenticação via JWT com validação server-side e controle de
                  acesso por Row-Level Security no banco de dados. Nenhum sistema
                  é 100% seguro; em caso de incidente relevante, notificaremos os
                  titulares afetados conforme a LGPD.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  8. Contato
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Dúvidas, solicitações ou reclamações relacionadas a esta
                  Política podem ser enviadas para:{" "}
                  <a
                    href="mailto:privacidade@balancototal.com.br"
                    className="text-emerald-bright underline-offset-4 hover:underline"
                  >
                    privacidade@balancototal.com.br
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  9. Alterações
                </h2>
                <p className="mt-3 leading-relaxed text-muted">
                  Podemos atualizar esta Política periodicamente. Alterações
                  relevantes serão comunicadas por e-mail ou aviso no app com pelo
                  menos 15 dias de antecedência. O uso continuado do serviço após
                  essa data implica aceitação das novas condições.
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

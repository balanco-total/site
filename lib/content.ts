import {
  Wallet,
  PieChart,
  Users,
  Sparkles,
  FileSpreadsheet,
  Repeat,
  Layers,
  Bell,
  ShieldCheck,
  Landmark,
  Upload,
  LineChart,
  type LucideIcon,
} from "lucide-react";

/* ============================================================
   BalançoTotal - Conteúdo central da landing page
   Toda a copy e os dados vivem aqui. Os blocos marcados com
   ⚠️ PLACEHOLDER são fictícios e devem ser trocados pelos reais.
   ============================================================ */

export const CTA = {
  primary: { label: "Começar grátis", href: "https://app.balancototal.com.br/signup" },
  secondary: { label: "Entrar", href: "https://app.balancototal.com.br/login" },
};

export const NAV_LINKS = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Automação", href: "#automacao" },
  { label: "Preço", href: "#preco" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  badge: "Controle financeiro pessoal e familiar",
  // headline highlight indices target the gradient words
  headline: "Saiba para onde o seu dinheiro vai",
  headlineHighlight: [3, 4, 5, 6], // "o seu dinheiro vai"
  subline:
    "Pare de adivinhar. O BalançoTotal reúne seus gastos, importa extratos e conecta seus bancos para mostrar, em segundos, quanto entra, quanto sai e o que sobra - sem planilha e sem complicação.",
  trust: ["Sem cartão de crédito", "34 dias grátis", "Cancele quando quiser"],
};

/* ⚠️ PLACEHOLDER - logos fictícios de instituições/parceiros. */
export const LOGO_CLOUD = {
  label: "Compatível com mais de 200 instituições via Open Finance",
  logos: ["Nubank", "Itaú", "Bradesco", "Banco do Brasil", "Inter", "C6 Bank", "Santander", "Caixa"],
};

export const BENEFITS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Sparkles,
    title: "Simples de verdade",
    text: "Do zero ao controle em minutos. Sem configuração complexa, sem termos contábeis - feito para pessoas, não para contadores.",
  },
  {
    icon: PieChart,
    title: "Clareza imediata",
    text: "Gráficos por categoria, por pessoa e tendência de 9 meses. Você entende seus hábitos sem precisar interpretar nada.",
  },
  {
    icon: Users,
    title: "Pensado para a família",
    text: "Compartilhe com quem mora com você. Cada um lança o seu, todos veem o todo - sem misturar as finanças de ninguém.",
  },
  {
    icon: Sparkles,
    title: "Automação que trabalha por você",
    text: "Importe o extrato e deixe a categorização automática organizar tudo. Despesas recorrentes lançam sozinhas todo mês.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Crie sua conta grátis",
    text: "Cadastro em segundos, sem cartão de crédito. Você já entra com 34 dias liberados para usar tudo.",
  },
  {
    n: "02",
    title: "Registre ou importe seus gastos",
    text: "Lance manualmente, importe o extrato (OFX/CSV) ou conecte seu banco via Open Finance. As transações se categorizam sozinhas.",
  },
  {
    n: "03",
    title: "Acompanhe e decida melhor",
    text: "Veja saldo, categorias e tendências em tempo real. Receba um resumo por e-mail toda segunda e nunca mais seja pego de surpresa.",
  },
];

export const FEATURES: {
  icon: LucideIcon;
  title: string;
  text: string;
  span?: "wide" | "tall";
}[] = [
  {
    icon: LineChart,
    title: "Dashboard em tempo real",
    text: "Saldo do mês, entradas, saídas e o que sobra - atualizado a cada lançamento, num painel limpo e direto.",
    span: "wide",
  },
  {
    icon: PieChart,
    title: "Gráficos que explicam tudo",
    text: "Pizza por categoria, barras por pessoa e a tendência dos últimos 9 meses.",
  },
  {
    icon: Layers,
    title: "Várias contas, um só lugar",
    text: "Carteira, conta corrente e poupança com saldos atualizados automaticamente.",
  },
  {
    icon: Repeat,
    title: "Recorrentes e parcelas",
    text: "Aluguel, assinaturas e compras parceladas lançam sozinhos, mês após mês.",
  },
  {
    icon: Bell,
    title: "Resumo toda segunda",
    text: "Um e-mail semanal com o que vem por aí, para você não ser pego de surpresa.",
    span: "wide",
  },
];

export const AUTOMATION = {
  badge: "Automação & IA",
  title: "Você importa. Ele organiza.",
  subtitle:
    "Suba o extrato do seu banco em OFX ou CSV e veja as transações se categorizarem automaticamente. Quanto mais você usa, mais inteligentes ficam as sugestões.",
  points: [
    {
      icon: Upload,
      title: "Importação OFX e CSV",
      text: "Delimitadores detectados automaticamente. Arraste, solte e pronto.",
    },
    {
      icon: Sparkles,
      title: "Categorização automática",
      text: "Sugestões inteligentes que aprendem com os seus hábitos de consumo.",
    },
    {
      icon: FileSpreadsheet,
      title: "Exportação livre",
      text: "Seus dados são seus. Exporte filtrado por categoria quando quiser.",
    },
  ],
  // demo rows for the "auto-organizing" visual
  demoRows: [
    { merchant: "Supermercado Pão de Açúcar", category: "Mercado", amount: -342.9 },
    { merchant: "Spotify Premium", category: "Assinaturas", amount: -21.9 },
    { merchant: "Posto Shell", category: "Transporte", amount: -180.0 },
    { merchant: "Salário", category: "Receita", amount: 6500.0 },
    { merchant: "Farmácia Drogasil", category: "Saúde", amount: -76.4 },
  ],
};

/* ⚠️ PLACEHOLDER - bancos exibidos no grid de integrações. */
export const INTEGRATIONS = {
  badge: "Open Finance",
  title: "Conecte seu banco e sincronize sozinho",
  subtitle:
    "Mais de 200 instituições financeiras brasileiras suportadas. Conecte uma vez e suas transações entram automaticamente - sem digitar nada.",
  banks: ["Nubank", "Itaú", "Bradesco", "Banco do Brasil", "Inter", "C6 Bank", "Santander", "Caixa", "PicPay", "Mercado Pago", "BTG", "Sicoob"],
};

/* ⚠️ PLACEHOLDER - métricas fictícias para prova social. */
export const RESULTS = [
  { value: 38, suffix: "%", label: "de economia média no 1º trimestre de uso" },
  { value: 12000, prefix: "+", label: "famílias organizando as contas juntas" },
  { value: 200, prefix: "+", label: "instituições conectadas via Open Finance" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "nota média de satisfação" },
];

/* ⚠️ PLACEHOLDER - cases fictícios. */
export const CASES = [
  {
    metric: "R$ 740/mês",
    title: "Cortou assinaturas esquecidas",
    text: "Ao conectar o banco, a Marina descobriu 6 cobranças recorrentes que não usava mais e cancelou todas no mesmo dia.",
    person: "Marina, designer · São Paulo",
  },
  {
    metric: "100% das contas",
    title: "A família toda no mesmo painel",
    text: "Os Andrade passaram a lançar cada um o seu e enxergar o orçamento consolidado. Acabaram as brigas sobre 'quem gastou o quê'.",
    person: "Família Andrade · Curitiba",
  },
  {
    metric: "9 meses",
    title: "Visão clara de tendência",
    text: "Como freelancer, o Rafael usava a tendência de 9 meses para planejar os meses de baixa e parou de se endividar no cartão.",
    person: "Rafael, freelancer · Recife",
  },
];

/* ⚠️ PLACEHOLDER - depoimentos fictícios. */
export const TESTIMONIALS = [
  {
    quote:
      "Eu odiava planilha e nunca durava mais de duas semanas. No BalançoTotal eu importo o extrato e já está tudo categorizado. Mudou minha relação com dinheiro.",
    name: "Camila Ferraz",
    role: "Analista de marketing",
  },
  {
    quote:
      "Conectei minhas contas em 2 minutos e finalmente entendi para onde ia meu dinheiro. O resumo de segunda-feira virou ritual aqui em casa.",
    name: "Bruno Tavares",
    role: "Desenvolvedor",
  },
  {
    quote:
      "O que me ganhou foi a parte familiar. Minha esposa e eu lançamos cada um o nosso e vemos o total junto, sem bagunçar a conta de ninguém.",
    name: "Diego Almeida",
    role: "Professor",
  },
  {
    quote:
      "Simples do jeito que precisa ser. Não é um sistema contábil gigante - é exatamente o controle de gastos que eu queria, bonito e rápido.",
    name: "Letícia Moraes",
    role: "Enfermeira",
  },
  {
    quote:
      "R$ 7,99 por mês se pagou no primeiro mês só com as assinaturas que descobri que estava pagando à toa.",
    name: "Anderson Lima",
    role: "Autônomo",
  },
  {
    quote:
      "A categorização automática é absurda de boa. Importo, confiro em 30 segundos e pronto. Recomendei para a família toda.",
    name: "Patrícia Gomes",
    role: "Arquiteta",
  },
];

export const PRICING = {
  badge: "Um plano. Simples assim.",
  title: "Tudo incluso. Sem surpresas na fatura.",
  price: 7.99,
  period: "/mês",
  trial: "34 dias grátis · sem cartão de crédito",
  features: [
    "Lançamentos manuais ilimitados",
    "Importação de extrato OFX e CSV",
    "Conexão bancária via Open Finance",
    "Dashboard e gráficos em tempo real",
    "Categorias personalizadas com cores",
    "Compartilhamento com a família",
    "Múltiplas contas e carteiras",
    "Despesas recorrentes e parceladas",
    "Resumo semanal por e-mail",
    "Exportação de dados quando quiser",
    "App instalável (PWA) no celular",
    "Segurança de nível bancário",
  ],
};

export const SECURITY = {
  badge: "Segurança",
  title: "Seus dados protegidos do início ao fim",
  points: [
    { icon: ShieldCheck, title: "Autenticação JWT", text: "Sessões seguras via Supabase, com isolamento total entre contas." },
    { icon: Landmark, title: "Row-Level Security", text: "Cada linha do banco é protegida individualmente - ninguém vê o que não é seu." },
    { icon: Wallet, title: "Open Finance regulado", text: "Conexão somente leitura, dentro das regras do Banco Central." },
  ],
};

export const FAQ = [
  {
    question: "O BalançoTotal é um sistema contábil ou ERP?",
    answer:
      "Não. Ele é focado em controle de gastos pessoais e familiar. Nada de emissão de nota fiscal, estoque ou obrigações fiscais - só o essencial para você entender e organizar o seu dinheiro.",
  },
  {
    question: "Preciso de cartão de crédito para testar?",
    answer:
      "Não. São 34 dias grátis sem informar nenhum cartão. Você só decide se quer continuar depois de experimentar tudo.",
  },
  {
    question: "Conectar meu banco é seguro?",
    answer:
      "Sim. A conexão é feita via Open Finance, regulado pelo Banco Central, em modo somente leitura. Não temos acesso para movimentar nada na sua conta.",
  },
  {
    question: "Funciona para a família toda?",
    answer:
      "Sim. Você convida quem mora com você por um link. Cada pessoa lança seus próprios gastos e todos enxergam o painel consolidado, sem misturar as finanças individuais.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "A qualquer momento, sem multa e sem burocracia. O plano é mensal e a cobrança é simples: R$ 7,99 por mês, tudo incluso.",
  },
  {
    question: "Consigo importar o extrato do meu banco?",
    answer:
      "Sim. Aceitamos arquivos OFX e CSV, com detecção automática de delimitadores, e categorizamos as transações para você automaticamente.",
  },
];

export const FINAL_CTA = {
  title: "Pronto para ter o controle?",
  subtitle:
    "Comece agora, de graça, e veja para onde o seu dinheiro vai. Em minutos você tem o painel que sempre quis.",
};

export const FOOTER = {
  columns: [
    {
      title: "Produto",
      links: [
        { label: "Recursos", href: "#recursos" },
        { label: "Como funciona", href: "#como-funciona" },
        { label: "Preço", href: "#preco" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de uso", href: "/terms" },
        { label: "Privacidade", href: "/privacy" },
      ],
    },
  ],
};

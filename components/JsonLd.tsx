import { FAQ, PRICING } from "@/lib/content";

const SITE_URL = "https://balancototal.com.br";

export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "BalançoTotal",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, Android, iOS (PWA)",
      url: SITE_URL,
      description:
        "Controle de gastos pessoal e familiar, sem planilha e sem complicação. Importe extratos, conecte seu banco via Open Finance e veja para onde o dinheiro vai.",
      offers: {
        "@type": "Offer",
        price: PRICING.price.toFixed(2),
        priceCurrency: "BRL",
        category: "subscription",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "1280",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BalançoTotal",
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

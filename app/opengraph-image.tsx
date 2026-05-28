import { ImageResponse } from "next/og";

export const alt = "BalançoTotal - Saiba para onde o dinheiro vai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05070a",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(16,185,129,0.35), transparent 50%), radial-gradient(circle at 90% 90%, rgba(34,211,238,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#34d399",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "rgba(16,185,129,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            B
          </div>
          BalançoTotal
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 700,
            color: "#f5f7fa",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Saiba para onde o seu dinheiro vai.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#99a2ad",
            maxWidth: 820,
          }}
        >
          Controle de gastos pessoal e familiar - sem planilha, sem complicação. 34 dias grátis.
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amaze Balloons — Mais que Infláveis. Presença de Alta Performance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #1A0A2E 0%, #2D1854 50%, #1A0A2E 100%)",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow decorativo */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(234,88,12,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123,47,190,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Label topo */}
        <div
          style={{
            position: "absolute",
            top: "56px",
            left: "72px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "3px",
              background: "#F97316",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              color: "#F97316",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            amazeballoons.com.br
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            position: "relative",
            zIndex: 1,
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            MAIS QUE INFLÁVEIS.
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#F97316",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            PRESENÇA DE ALTA
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#F97316",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            PERFORMANCE.
          </div>
        </div>

        {/* Stats pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {[
            { value: "40+", label: "Anos" },
            { value: "500+", label: "Projetos" },
            { value: "15+", label: "Países" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "100px",
                padding: "10px 20px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#F97316",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

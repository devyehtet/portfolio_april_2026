import type { ReactElement } from "react";

type SocialMetric = {
  label: string;
  value: string;
};

type SocialRow = {
  detail: string;
  label: string;
  value: string;
};

type LandingSocialCardProps = {
  badges: string[];
  description: string;
  eyebrow: string;
  metrics: SocialMetric[];
  rows: SocialRow[];
  title: string;
  urlLabel: string;
};

export function renderLandingSocialCard({
  badges,
  description,
  eyebrow,
  metrics,
  rows,
  title,
  urlLabel,
}: LandingSocialCardProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(56,189,248,0.2), transparent 34%), radial-gradient(circle at bottom right, rgba(99,102,241,0.22), transparent 30%), linear-gradient(135deg, #020617 0%, #0f172a 58%, #111827 100%)",
        color: "#f8fafc",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          opacity: 0.35,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "56px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "63%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {badges.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(148,163,184,0.24)",
                    borderRadius: 999,
                    padding: "10px 16px",
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "#bfdbfe",
                    background: "rgba(15,23,42,0.72)",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  color: "#7dd3fc",
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 70,
                  lineHeight: 1.02,
                  fontWeight: 800,
                  maxWidth: 650,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  lineHeight: 1.48,
                  color: "#cbd5e1",
                  maxWidth: 660,
                }}
              >
                {description}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                padding: "16px 24px",
                background: "#0ea5e9",
                color: "#020617",
                fontSize: 24,
                fontWeight: 800,
              }}
            >
              Start here
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#94a3b8",
              }}
            >
              {urlLabel}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 350,
            borderRadius: 34,
            padding: 24,
            background: "rgba(15,23,42,0.8)",
            border: "1px solid rgba(125,211,252,0.2)",
            boxShadow: "0 24px 80px rgba(2,6,23,0.45)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#7dd3fc",
                  }}
                >
                  Featured Flow
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 32,
                    fontWeight: 800,
                  }}
                >
                  Quick Overview
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: "rgba(14,165,233,0.12)",
                  border: "1px solid rgba(125,211,252,0.2)",
                  color: "#7dd3fc",
                  fontSize: 26,
                  fontWeight: 800,
                }}
              >
                ↗
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    borderRadius: 18,
                    padding: "14px 12px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(148,163,184,0.16)",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#94a3b8",
                    }}
                  >
                    {metric.label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 24,
                      fontWeight: 800,
                    }}
                  >
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {rows.map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 18,
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(148,163,184,0.12)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#7dd3fc",
                      }}
                    >
                      {row.label}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        fontSize: 18,
                        fontWeight: 700,
                        maxWidth: 190,
                      }}
                    >
                      {row.detail}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#e2e8f0",
                      maxWidth: 90,
                      textAlign: "right",
                    }}
                  >
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

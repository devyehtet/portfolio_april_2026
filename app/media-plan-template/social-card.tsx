import type { ReactElement } from "react";

export function renderMediaPlanSocialCard(): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 32%), radial-gradient(circle at bottom right, rgba(99,102,241,0.22), transparent 28%), linear-gradient(135deg, #020617 0%, #0f172a 58%, #111827 100%)",
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
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "54px 56px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "64%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["GOOGLE SHEET", "MANUAL SHARE", "EMAIL DELIVERY"].map((item) => (
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
                    letterSpacing: "0.22em",
                    color: "#bfdbfe",
                    background: "rgba(15,23,42,0.72)",
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
                Media Plan Template
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 70,
                  lineHeight: 1.02,
                  fontWeight: 800,
                  maxWidth: 620,
                }}
              >
                Request the sheet and get a manual share after review
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  lineHeight: 1.5,
                  color: "#cbd5e1",
                  maxWidth: 650,
                }}
              >
                Built for launch planning, campaign budgets, channel roles, KPI
                targets, and cleaner planning conversations.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
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
              Start with the request form
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#94a3b8",
              }}
            >
              yehtet.com/media-plan-template
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 350,
            borderRadius: 34,
            padding: 24,
            background: "rgba(15,23,42,0.78)",
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
                  Demo Preview
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 32,
                    fontWeight: 800,
                  }}
                >
                  Planning View
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
              {[
                ["Reach", "5.4M"],
                ["Sessions", "92K"],
                ["Budget", "$12K"],
              ].map(([label, value]) => (
                <div
                  key={label}
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
                    {label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 24,
                      fontWeight: 800,
                    }}
                  >
                    {value}
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
              {[
                ["Awareness", "Meta Ads", "$4,200"],
                ["Consideration", "Google Search", "$3,600"],
                ["Conversion", "Landing Page + CRO", "$1,200"],
              ].map(([phase, channel, budget]) => (
                <div
                  key={phase}
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
                      {phase}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        fontSize: 20,
                        fontWeight: 700,
                      }}
                    >
                      {channel}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#e2e8f0",
                    }}
                  >
                    {budget}
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

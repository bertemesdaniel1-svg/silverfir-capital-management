export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1a1d24 0%, #090a0f 45%, #050608 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "32px 24px 80px",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "70px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <img
              src="/sfcm-tree-logo.png"
              alt="SFCM Tree Logo"
              style={{
                width: "54px",
                height: "54px",
                objectFit: "cover",
                borderRadius: "14px",
                boxShadow: "0 8px 30px rgba(255,255,255,0.12)",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.18em",
                  color: "#d7d9de",
                  fontWeight: 700,
                }}
              >
                SFCM
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#8f96a3",
                  letterSpacing: "0.12em",
                }}
              >
                SILVER FIR CAPITAL MANAGEMENT
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              color: "#a4acb9",
              fontSize: "14px",
              flexWrap: "wrap",
            }}
          >
            <a href="#strategy" style={{ color: "inherit", textDecoration: "none" }}>
              Strategy
            </a>
            <a href="#infrastructure" style={{ color: "inherit", textDecoration: "none" }}>
              Infrastructure
            </a>
            <a href="#clients" style={{ color: "inherit", textDecoration: "none" }}>
              Clients
            </a>
            <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </a>
          </div>
        </nav>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                color: "#b9c0cc",
                fontSize: "12px",
                letterSpacing: "0.14em",
                marginBottom: "24px",
              }}
            >
              PRIVATE TRADING INFRASTRUCTURE
            </div>

            <h1
              style={{
                fontSize: "clamp(52px, 9vw, 110px)",
                lineHeight: "0.95",
                margin: "0 0 18px 0",
                letterSpacing: "-0.05em",
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: "#e8eaee",
                textShadow: "0 0 30px rgba(255,255,255,0.08)",
              }}
            >
              SFCM
            </h1>

            <div
              style={{
                fontSize: "clamp(18px, 3vw, 32px)",
                color: "#c4c9d1",
                letterSpacing: "0.32em",
                marginBottom: "10px",
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              SILVER FIR
            </div>

            <div
              style={{
                fontSize: "clamp(13px, 2vw, 20px)",
                color: "#8f96a3",
                letterSpacing: "0.24em",
                marginBottom: "28px",
              }}
            >
              CAPITAL MANAGEMENT
            </div>

            <p
              style={{
                maxWidth: "700px",
                color: "#a8afbb",
                fontSize: "18px",
                lineHeight: "1.8",
                marginBottom: "34px",
              }}
            >
              Institutional-style algorithmic trading infrastructure for disciplined
              execution, private client access, and a premium systematic trading brand.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#clients"
                style={{
                  padding: "14px 26px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #f1f3f6 0%, #b7bcc5 100%)",
                  color: "#111318",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(255,255,255,0.12)",
                }}
              >
                Get Access
              </a>

              <a
                href="#strategy"
                style={{
                  padding: "14px 26px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#eef1f6",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Explore Strategy
              </a>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "28px",
              background: "rgba(255,255,255,0.04)",
              padding: "28px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div
              style={{
                marginBottom: "18px",
                color: "#d5dae2",
                fontSize: "14px",
                letterSpacing: "0.1em",
              }}
            >
              BRAND MARK
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <img
                src="/sfcm-tree-logo.png"
                alt="SFCM Logo"
                style={{
                  width: "240px",
                  maxWidth: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#8e96a3", fontSize: "12px", marginBottom: "6px" }}>
                  Core Markets
                </div>
                <div style={{ fontWeight: 700 }}>Gold / Nasdaq</div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#8e96a3", fontSize: "12px", marginBottom: "6px" }}>
                  Access
                </div>
                <div style={{ fontWeight: 700 }}>Private Clients</div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#8e96a3", fontSize: "12px", marginBottom: "6px" }}>
                  Infrastructure
                </div>
                <div style={{ fontWeight: 700 }}>Vercel + Cloudflare</div>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ color: "#8e96a3", fontSize: "12px", marginBottom: "6px" }}>
                  Framework
                </div>
                <div style={{ fontWeight: 700 }}>Risk-First</div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="strategy"
          style={{
            marginTop: "90px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {[
            [
              "Structured Execution",
              "Systematic trade execution with predefined logic, disciplined entries, and controlled trade management.",
            ],
            [
              "Premium Brand Identity",
              "A refined digital presence designed to present SFCM as a serious modern capital-markets brand.",
            ],
            [
              "Scalable Client Access",
              "Built to grow into private dashboards, subscriptions, onboarding, and protected client infrastructure.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "24px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "22px" }}>{title}</h3>
              <p style={{ color: "#a4acb9", lineHeight: "1.8", marginBottom: 0 }}>
                {text}
              </p>
            </div>
          ))}
        </section>

        <footer
          id="contact"
          style={{
            marginTop: "80px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "#8f96a3",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>Silver Fir Capital Management</div>
          <div>contact@silverfircm.com</div>
        </footer>
      </section>
    </main>
  );
}

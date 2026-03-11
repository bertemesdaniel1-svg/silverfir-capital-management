export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 0%, rgba(32,41,66,0.45) 0%, rgba(7,10,18,1) 42%, rgba(3,5,10,1) 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.15))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.15))",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(76,99,153,0.22) 0%, rgba(76,99,153,0.08) 35%, rgba(76,99,153,0) 70%)",
          top: "-340px",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 42%, rgba(255,255,255,0) 75%)",
          top: "140px",
          right: "-80px",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0) 75%)",
          bottom: "120px",
          left: "-60px",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />

      <section
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1380px",
          margin: "0 auto",
          padding: "32px 24px 110px",
        }}
      >
        {/* NAV */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            marginBottom: "78px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "62px",
                height: "62px",
                borderRadius: "18px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.09)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 12px 40px rgba(0,0,0,0.45), 0 0 30px rgba(255,255,255,0.06)",
                backdropFilter: "blur(14px)",
              }}
            >
              <img
                src="/sfcm-tree-logo.png"
                alt="SFCM Tree Logo"
                style={{
                  width: "42px",
                  height: "42px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 18px rgba(255,255,255,0.18))",
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.22em",
                  color: "#eef2f8",
                  fontWeight: 700,
                }}
              >
                SFCM
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#97a0af",
                  letterSpacing: "0.16em",
                }}
              >
                SILVER FIR CAPITAL MANAGEMENT
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "28px",
              color: "#aab2c0",
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

        {/* HERO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: "42px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "10px 16px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                color: "#bcc4d1",
                fontSize: "12px",
                letterSpacing: "0.16em",
                marginBottom: "28px",
                background: "rgba(255,255,255,0.03)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.02)",
              }}
            >
              PRIVATE TRADING INFRASTRUCTURE
            </div>

            <div
              style={{
                position: "relative",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "20px auto auto 10px",
                  width: "260px",
                  height: "120px",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,255,255,0))",
                  filter: "blur(35px)",
                  pointerEvents: "none",
                }}
              />
              <h1
                style={{
                  fontSize: "clamp(56px, 9vw, 126px)",
                  lineHeight: "0.92",
                  margin: 0,
                  letterSpacing: "-0.06em",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  color: "#f1f4f8",
                  textShadow: "0 0 38px rgba(255,255,255,0.1)",
                  position: "relative",
                }}
              >
                SFCM
              </h1>
            </div>

            <div
              style={{
                fontSize: "clamp(18px, 3vw, 32px)",
                color: "#d0d6df",
                letterSpacing: "0.34em",
                marginBottom: "12px",
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              SILVER FIR
            </div>

            <div
              style={{
                fontSize: "clamp(13px, 2vw, 20px)",
                color: "#8f97a6",
                letterSpacing: "0.26em",
                marginBottom: "30px",
              }}
            >
              CAPITAL MANAGEMENT
            </div>

            <p
              style={{
                maxWidth: "760px",
                color: "#a8b0bc",
                fontSize: "19px",
                lineHeight: "1.9",
                marginBottom: "36px",
              }}
            >
              Advanced algorithmic trading infrastructure built for disciplined
              execution, premium client access, and a modern systematic trading
              brand with institutional presentation.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#clients"
                style={{
                  padding: "15px 28px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, #f4f6fa 0%, #c2c8d2 100%)",
                  color: "#101318",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow:
                    "0 14px 40px rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.24)",
                }}
              >
                Get Access
              </a>

              <a
                href="#strategy"
                style={{
                  padding: "15px 28px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#eef2f8",
                  textDecoration: "none",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.02)",
                }}
              >
                Explore Strategy
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "38px",
              }}
            >
              {["Gold", "Nasdaq", "Automation", "Risk-First"].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#b8c1ce",
                    fontSize: "13px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* HERO CARD */}
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "8% 8% auto auto",
                width: "180px",
                height: "180px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.13), rgba(255,255,255,0))",
                filter: "blur(26px)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "30px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                padding: "30px",
                boxShadow:
                  "0 30px 90px rgba(0,0,0,0.46), inset 0 0 40px rgba(255,255,255,0.02)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div
                style={{
                  marginBottom: "18px",
                  color: "#d6dce5",
                  fontSize: "15px",
                  letterSpacing: "0.12em",
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
                <div
                  style={{
                    padding: "20px",
                    borderRadius: "28px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow:
                      "0 16px 40px rgba(0,0,0,0.35), inset 0 0 24px rgba(255,255,255,0.02)",
                  }}
                >
                  <img
                    src="/sfcm-tree-logo.png"
                    alt="SFCM Logo"
                    style={{
                      width: "240px",
                      maxWidth: "100%",
                      borderRadius: "22px",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}
              >
                {[
                  ["Core Markets", "Gold / Nasdaq"],
                  ["Access", "Private Clients"],
                  ["Infrastructure", "Vercel + Cloudflare"],
                  ["Framework", "Risk-First"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      padding: "18px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        color: "#8e97a6",
                        fontSize: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "17px" }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE STRIP */}
        <section
          id="strategy"
          style={{
            marginTop: "96px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {[
            [
              "Structured Execution",
              "Systematic trade execution with predefined logic, disciplined entries, and controlled management.",
            ],
            [
              "Premium Brand Identity",
              "A refined digital presence designed to present SFCM as a serious modern capital-markets brand.",
            ],
            [
              "Scalable Client Access",
              "Built to evolve into dashboards, subscriptions, onboarding, and protected client infrastructure.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "28px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                boxShadow: "0 16px 45px rgba(0,0,0,0.22)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "28px",
                  letterSpacing: "-0.03em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "#a4adbb",
                  lineHeight: "1.85",
                  marginBottom: 0,
                  fontSize: "16px",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </section>

        {/* ADVANCED SECTION */}
        <section
          id="infrastructure"
          style={{
            marginTop: "88px",
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              borderRadius: "30px",
              padding: "34px",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
            }}
          >
            <div
              style={{
                color: "#bbc4d0",
                letterSpacing: "0.16em",
                fontSize: "12px",
                marginBottom: "16px",
              }}
            >
              INFRASTRUCTURE
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
              }}
            >
              Modern, scalable,
              <br />
              client-ready architecture.
            </h2>

            <p
              style={{
                marginTop: "20px",
                color: "#a4adbb",
                lineHeight: "1.9",
                fontSize: "17px",
              }}
            >
              SFCM is positioned not only as a trading concept, but as a premium
              digital operating system for private client delivery, execution
              infrastructure, and advanced financial branding.
            </p>
          </div>

          <div
            id="clients"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
          >
            {[
              ["Private Client Access", "Secure onboarding and controlled access structure."],
              ["Trading Infrastructure", "Website, server, tunnel, automation, and delivery stack."],
              ["Execution Framework", "Clear process logic for entry, stop, target, and operational flow."],
              ["Growth-Ready Platform", "Prepared for subscriptions, dashboard systems, and expansion."],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  borderRadius: "24px",
                  padding: "24px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.018))",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "10px",
                    fontSize: "23px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#a4adbb",
                    lineHeight: "1.8",
                    fontSize: "15px",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "90px",
            padding: "34px",
            borderRadius: "30px",
            border: "1px solid rgba(255,255,255,0.09)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.24)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "22px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  color: "#c2cada",
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  marginBottom: "10px",
                }}
              >
                NEXT STAGE
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(30px, 5vw, 54px)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1.02,
                }}
              >
                Private access, refined delivery,
                <br />
                institutional presence.
              </h2>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  padding: "15px 26px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, #f4f6fa 0%, #c2c8d2 100%)",
                  color: "#101318",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Request Access
              </a>
              <a
                href="#strategy"
                style={{
                  padding: "15px 26px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#eef2f8",
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                View Infrastructure
              </a>
            </div>
          </div>
        </section>

        <footer
          id="contact"
          style={{
            marginTop: "80px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "#8f97a6",
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

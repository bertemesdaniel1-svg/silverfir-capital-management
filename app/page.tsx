export default function Page() {
  return (
    <main className="sfcm-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .sfcm-page {
          min-height: 100vh;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(34,44,72,0.10) 0%, rgba(7,10,18,0.98) 28%, rgba(3,5,10,1) 62%, rgba(1,2,6,1) 100%);
        }

        .sfcm-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.12;
          animation: gridDrift 24s linear infinite;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.18));
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.18));
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(40px);
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .orb-1 {
          width: 520px;
          height: 520px;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(80,100,155,0.08) 0%, rgba(80,100,155,0.025) 40%, rgba(80,100,155,0) 75%);
          animation: floatOrb1 16s ease-in-out infinite alternate;
        }

        .orb-2 {
          width: 220px;
          height: 220px;
          top: 180px;
          right: 40px;
          background: radial-gradient(circle, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 40%, rgba(255,255,255,0) 80%);
          animation: floatOrb2 14s ease-in-out infinite alternate;
        }

        .orb-3 {
          width: 220px;
          height: 220px;
          bottom: 100px;
          left: -40px;
          background: radial-gradient(circle, rgba(70,90,145,0.06) 0%, rgba(70,90,145,0.02) 40%, rgba(70,90,145,0) 80%);
          animation: floatOrb3 18s ease-in-out infinite alternate;
        }

        .noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.025;
          background-image:
            radial-gradient(circle at 20% 20%, white 0.7px, transparent 0.8px),
            radial-gradient(circle at 80% 30%, white 0.7px, transparent 0.8px),
            radial-gradient(circle at 60% 80%, white 0.7px, transparent 0.8px),
            radial-gradient(circle at 30% 70%, white 0.7px, transparent 0.8px);
          background-size: 180px 180px;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1380px;
          margin: 0 auto;
          padding: 32px 24px 110px;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 78px;
          flex-wrap: wrap;
          animation: fadeUp 1s ease forwards;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-icon-wrap {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015));
          border: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 10px 28px rgba(0,0,0,0.45),
            inset 0 0 12px rgba(255,255,255,0.015);
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.08));
        }

        .brand-top {
          font-size: 15px;
          letter-spacing: 0.22em;
          color: #eef2f8;
          font-weight: 700;
        }

        .brand-sub {
          font-size: 12px;
          color: #8892a2;
          letter-spacing: 0.16em;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          color: #9ca6b5;
          font-size: 14px;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .nav-links a:hover {
          color: #eef2f8;
          transform: translateY(-1px);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 42px;
          align-items: center;
        }

        .hero-left {
          animation: fadeUp 1.1s ease forwards;
        }

        .eyebrow {
          display: inline-block;
          padding: 10px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          color: #aeb7c3;
          font-size: 12px;
          letter-spacing: 0.16em;
          margin-bottom: 28px;
          background: rgba(255,255,255,0.018);
        }

        .hero-title {
          margin: 0 0 18px 0;
          font-size: clamp(56px, 9vw, 126px);
          line-height: 0.92;
          letter-spacing: -0.06em;
          font-family: Georgia, "Times New Roman", serif;
          color: #edf1f6;
          text-shadow: 0 0 18px rgba(255,255,255,0.04);
        }

        .hero-sub-1 {
          font-size: clamp(18px, 3vw, 32px);
          color: #d0d6df;
          letter-spacing: 0.34em;
          margin-bottom: 12px;
          font-family: Georgia, "Times New Roman", serif;
        }

        .hero-sub-2 {
          font-size: clamp(13px, 2vw, 20px);
          color: #7f8898;
          letter-spacing: 0.26em;
          margin-bottom: 30px;
        }

        .hero-text {
          max-width: 760px;
          color: #99a4b4;
          font-size: 19px;
          line-height: 1.9;
          margin-bottom: 36px;
        }

        .cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          border-radius: 14px;
          padding: 15px 28px;
          transition: transform 0.2s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #eef2f7 0%, #bcc3cf 100%);
          color: #101318;
          font-weight: 700;
          box-shadow:
            0 10px 24px rgba(0,0,0,0.22),
            0 6px 20px rgba(255,255,255,0.05);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.11);
          color: #eef2f8;
          background: rgba(255,255,255,0.02);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.03);
        }

        .tag-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 38px;
        }

        .tag {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.015);
          color: #aab3c0;
          font-size: 13px;
        }

        .hero-card-wrap {
          animation: fadeUp 1.2s ease forwards;
        }

        .hero-card {
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.012));
          padding: 30px;
          box-shadow:
            0 24px 60px rgba(0,0,0,0.45),
            inset 0 0 24px rgba(255,255,255,0.01);
          position: relative;
          overflow: hidden;
        }

        .card-label {
          margin-bottom: 18px;
          color: #c7ced8;
          font-size: 15px;
          letter-spacing: 0.12em;
        }

        .integrated-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .integrated-logo-box {
          width: 108px;
          height: 108px;
          border-radius: 24px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008));
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .integrated-logo {
          width: 72px;
          height: 72px;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.04));
        }

        .integrated-text-top {
          font-size: 13px;
          letter-spacing: 0.22em;
          color: #e6ebf3;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .integrated-text-main {
          font-size: 28px;
          line-height: 1;
          font-family: Georgia, "Times New Roman", serif;
          letter-spacing: -0.03em;
          color: #f0f3f8;
          margin-bottom: 8px;
        }

        .integrated-text-sub {
          color: #8a93a3;
          font-size: 13px;
          letter-spacing: 0.14em;
        }

        .metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .metric {
          padding: 18px;
          border-radius: 18px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0.008));
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .metric:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.10);
        }

        .metric-label {
          color: #808b9b;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .metric-value {
          font-weight: 700;
          font-size: 17px;
        }

        .cards-3 {
          margin-top: 96px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .info-card {
          padding: 28px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.06);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.008));
          box-shadow: 0 14px 34px rgba(0,0,0,0.18);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.10);
        }

        .info-card h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 28px;
          letter-spacing: -0.03em;
        }

        .info-card p {
          color: #97a2b2;
          line-height: 1.85;
          margin-bottom: 0;
          font-size: 16px;
        }

        .section-2 {
          margin-top: 88px;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 20px;
        }

        .big-panel {
          border-radius: 30px;
          padding: 34px;
          border: 1px solid rgba(255,255,255,0.06);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.008));
        }

        .section-kicker {
          color: #aeb7c3;
          letter-spacing: 0.16em;
          font-size: 12px;
          margin-bottom: 16px;
        }

        .big-panel h2,
        .cta-panel h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.05em;
        }

        .big-panel p,
        .mini-card p {
          color: #97a2b2;
          line-height: 1.9;
        }

        .mini-grid {
          display: grid;
          gridTemplateColumns: 1fr 1fr;
          gap: 18px;
        }

        .mini-card {
          border-radius: 24px;
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.06);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.008));
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .mini-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.10);
        }

        .mini-card h3 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 23px;
          letter-spacing: -0.03em;
        }

        .cta-panel {
          margin-top: 90px;
          padding: 34px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.06);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.01));
          box-shadow: 0 16px 42px rgba(0,0,0,0.20);
        }

        .cta-inner {
          display: flex;
          justify-content: space-between;
          gap: 22px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footer {
          margin-top: 80px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: #7f8999;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gridDrift {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, 64px, 0);
          }
        }

        @keyframes floatOrb1 {
          0% {
            transform: translateX(-50%) translateY(0px);
          }
          100% {
            transform: translateX(-50%) translateY(18px);
          }
        }

        @keyframes floatOrb2 {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          100% {
            transform: translateY(12px) translateX(-10px);
          }
        }

        @keyframes floatOrb3 {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          100% {
            transform: translateY(-12px) translateX(8px);
          }
        }

        @media (max-width: 1100px) {
          .hero,
          .cards-3,
          .section-2,
          .mini-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .container {
            padding: 24px 16px 84px;
          }

          .nav {
            margin-bottom: 50px;
          }

          .hero-text {
            font-size: 17px;
          }

          .brand-sub {
            letter-spacing: 0.08em;
          }

          .nav-links {
            gap: 16px;
          }

          .metrics {
            grid-template-columns: 1fr;
          }

          .cta-inner {
            align-items: flex-start;
          }

          .integrated-brand {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="noise" />

      <section className="container">
        <nav className="nav">
          <div className="brand">
            <div className="brand-icon-wrap">
              <img
                src="/sfcm-tree-logo.png"
                alt="SFCM Tree Logo"
                className="brand-icon"
              />
            </div>

            <div>
              <div className="brand-top">SFCM</div>
              <div className="brand-sub">SILVER FIR CAPITAL MANAGEMENT</div>
            </div>
          </div>

          <div className="nav-links">
            <a href="#strategy">Strategy</a>
            <a href="#infrastructure">Infrastructure</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow">PRIVATE TRADING INFRASTRUCTURE</div>

            <h1 className="hero-title">SFCM</h1>
            <div className="hero-sub-1">SILVER FIR</div>
            <div className="hero-sub-2">CAPITAL MANAGEMENT</div>

            <p className="hero-text">
              Advanced algorithmic trading infrastructure built for disciplined
              execution, premium client access, and a modern systematic trading
              brand with institutional presentation.
            </p>

            <div className="cta-row">
              <a href="#clients" className="btn-primary">
                Get Access
              </a>

              <a href="#strategy" className="btn-secondary">
                Explore Strategy
              </a>
            </div>

            <div className="tag-row">
              <div className="tag">Gold</div>
              <div className="tag">Nasdaq</div>
              <div className="tag">Automation</div>
              <div className="tag">Risk-First</div>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card">
              <div className="card-label">BRAND MARK</div>

              <div className="integrated-brand">
                <div className="integrated-logo-box">
                  <img
                    src="/sfcm-tree-logo.png"
                    alt="SFCM Logo"
                    className="integrated-logo"
                  />
                </div>

                <div>
                  <div className="integrated-text-top">SFCM</div>
                  <div className="integrated-text-main">Silver Fir</div>
                  <div className="integrated-text-sub">CAPITAL MANAGEMENT</div>
                </div>
              </div>

              <div className="metrics">
                <div className="metric">
                  <div className="metric-label">Core Markets</div>
                  <div className="metric-value">Gold / Nasdaq</div>
                </div>

                <div className="metric">
                  <div className="metric-label">Access</div>
                  <div className="metric-value">Private Clients</div>
                </div>

                <div className="metric">
                  <div className="metric-label">Infrastructure</div>
                  <div className="metric-value">Vercel + Cloudflare</div>
                </div>

                <div className="metric">
                  <div className="metric-label">Framework</div>
                  <div className="metric-value">Risk-First</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="strategy" className="cards-3">
          <div className="info-card">
            <h3>Structured Execution</h3>
            <p>
              Systematic trade execution with predefined logic, disciplined entries,
              and controlled management.
            </p>
          </div>

          <div className="info-card">
            <h3>Premium Brand Identity</h3>
            <p>
              A refined digital presence designed to present SFCM as a serious
              modern capital-markets brand.
            </p>
          </div>

          <div className="info-card">
            <h3>Scalable Client Access</h3>
            <p>
              Built to evolve into dashboards, subscriptions, onboarding, and
              protected client infrastructure.
            </p>
          </div>
        </section>

        <section id="infrastructure" className="section-2">
          <div className="big-panel">
            <div className="section-kicker">INFRASTRUCTURE</div>

            <h2>
              Modern, scalable,
              <br />
              client-ready architecture.
            </h2>

            <p>
              SFCM is positioned not only as a trading concept, but as a premium
              digital operating system for private client delivery, execution
              infrastructure, and advanced financial branding.
            </p>
          </div>

          <div id="clients" className="mini-grid">
            <div className="mini-card">
              <h3>Private Client Access</h3>
              <p>Secure onboarding and controlled access structure.</p>
            </div>

            <div className="mini-card">
              <h3>Trading Infrastructure</h3>
              <p>Website, server, tunnel, automation, and delivery stack.</p>
            </div>

            <div className="mini-card">
              <h3>Execution Framework</h3>
              <p>Clear process logic for entry, stop, target, and operational flow.</p>
            </div>

            <div className="mini-card">
              <h3>Growth-Ready Platform</h3>
              <p>Prepared for subscriptions, dashboard systems, and expansion.</p>
            </div>
          </div>
        </section>

        <section className="cta-panel">
          <div className="cta-inner">
            <div>
              <div className="section-kicker">NEXT STAGE</div>
              <h2>
                Private access, refined delivery,
                <br />
                institutional presence.
              </h2>
            </div>

            <div className="cta-row">
              <a href="#contact" className="btn-primary">
                Request Access
              </a>

              <a href="#strategy" className="btn-secondary">
                View Infrastructure
              </a>
            </div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <div>Silver Fir Capital Management</div>
          <div>contact@silverfircm.com</div>
        </footer>
      </section>
    </main>
  );
}

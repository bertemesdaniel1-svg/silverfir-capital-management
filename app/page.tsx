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
          background: #04060b;
        }

        .sfcm-page {
          min-height: 100vh;
          color: white;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          position: relative;
          overflow-x: hidden;
          background: linear-gradient(180deg, #070910 0%, #04060b 48%, #020409 100%);
        }

        /* Fixed chart always behind everything */
        .fixed-chart-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .fixed-chart-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          opacity: 0.65;
          transform: scale(1.03);
        }

        /* This is what makes the chart darker lower on the page */
        .fixed-chart-fade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(4,6,11,0.22) 0%,
              rgba(4,6,11,0.34) 14%,
              rgba(4,6,11,0.50) 30%,
              rgba(4,6,11,0.68) 48%,
              rgba(4,6,11,0.82) 66%,
              rgba(4,6,11,0.92) 82%,
              rgba(4,6,11,0.97) 100%
            ),
            linear-gradient(
              90deg,
              rgba(4,6,11,0.70) 0%,
              rgba(4,6,11,0.30) 22%,
              rgba(4,6,11,0.10) 50%,
              rgba(4,6,11,0.30) 78%,
              rgba(4,6,11,0.72) 100%
            );
        }

        .sfcm-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 1;
          background-image:
            linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.10;
          animation: gridDrift 28s linear infinite;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25));
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.25));
        }

        .ambient {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at 18% 82%, rgba(90,110,160,0.03), transparent 24%),
            radial-gradient(circle at 86% 18%, rgba(255,255,255,0.012), transparent 18%);
          opacity: 0.7;
        }

        .page-content {
          position: relative;
          z-index: 2;
        }

        .container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 32px 24px 110px;
        }

        .glass {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.09);
          box-shadow:
            0 18px 40px rgba(0,0,0,0.30),
            inset 0 1px 0 rgba(255,255,255,0.045),
            inset 0 -1px 0 rgba(255,255,255,0.015);
          backdrop-filter: blur(18px) saturate(125%);
          -webkit-backdrop-filter: blur(18px) saturate(125%);
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
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .brand-top {
          font-size: 15px;
          letter-spacing: 0.20em;
          color: #eef2f8;
          font-weight: 700;
        }

        .brand-sub {
          font-size: 12px;
          color: #8a94a5;
          letter-spacing: 0.14em;
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
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-radius: 36px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 42px;
          align-items: center;
          padding: 40px 0;
        }

        .hero-left {
          animation: fadeUp 1.1s ease forwards;
        }

        .eyebrow {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          color: #b8c1ce;
          font-size: 11px;
          letter-spacing: 0.18em;
          margin-bottom: 30px;
        }

        .hero-main-row {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 28px;
          align-items: center;
          margin-bottom: 20px;
        }

        .hero-title {
          margin: 0 0 16px 0;
          font-size: clamp(64px, 10vw, 136px);
          line-height: 0.90;
          letter-spacing: -0.075em;
          font-weight: 700;
          color: rgba(248,250,252,0.98);
          text-wrap: balance;
        }

        .hero-sub-1 {
          font-size: clamp(18px, 3vw, 30px);
          color: rgba(224,230,238,0.94);
          letter-spacing: 0.28em;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .hero-sub-2 {
          font-size: clamp(13px, 2vw, 18px);
          color: #7f8898;
          letter-spacing: 0.24em;
          margin-bottom: 30px;
          font-weight: 500;
        }

        .small-chart-card {
          border-radius: 28px;
          padding: 14px;
        }

        .small-chart-label {
          color: #a5afbe;
          font-size: 11px;
          letter-spacing: 0.18em;
          margin-bottom: 10px;
          padding-left: 4px;
        }

        .small-chart-image {
          width: 100%;
          display: block;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .hero-text {
          max-width: 760px;
          color: #9aa5b5;
          font-size: 20px;
          line-height: 1.75;
          letter-spacing: -0.015em;
          margin-bottom: 38px;
          text-wrap: pretty;
        }

        .cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          border-radius: 18px;
          padding: 15px 28px;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          letter-spacing: -0.01em;
          min-height: 54px;
        }

        .btn-primary {
          color: #f6f8fb;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
          box-shadow:
            0 12px 30px rgba(0,0,0,0.24),
            inset 0 1px 0 rgba(255,255,255,0.10);
        }

        .btn-secondary {
          color: #e9edf4;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025));
        }

        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.14);
          box-shadow:
            0 16px 36px rgba(0,0,0,0.28),
            inset 0 1px 0 rgba(255,255,255,0.12);
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
          color: #aeb7c4;
          font-size: 13px;
          font-weight: 500;
        }

        .hero-card-wrap {
          animation: fadeUp 1.2s ease forwards;
        }

        .hero-card {
          border-radius: 32px;
          padding: 30px;
        }

        .card-label {
          margin-bottom: 18px;
          color: #ccd3dd;
          font-size: 14px;
          letter-spacing: 0.14em;
          font-weight: 600;
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
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .integrated-logo {
          width: 72px;
          height: 72px;
          object-fit: contain;
        }

        .integrated-text-top {
          font-size: 13px;
          letter-spacing: 0.22em;
          color: #e6ebf3;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .integrated-text-main {
          font-size: 30px;
          line-height: 1;
          letter-spacing: -0.035em;
          color: #f2f5fa;
          margin-bottom: 8px;
          font-weight: 650;
        }

        .integrated-text-sub {
          color: #8a93a3;
          font-size: 13px;
          letter-spacing: 0.14em;
          font-weight: 500;
        }

        .metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .metric {
          padding: 18px;
          border-radius: 20px;
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
          font-weight: 650;
          font-size: 17px;
          letter-spacing: -0.02em;
        }

        .cards-3 {
          margin-top: 96px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .info-card {
          padding: 30px;
          border-radius: 28px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.10);
        }

        .info-card h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 30px;
          letter-spacing: -0.04em;
          line-height: 1.02;
          font-weight: 650;
        }

        .info-card p {
          color: #97a2b2;
          line-height: 1.8;
          margin-bottom: 0;
          font-size: 16px;
          letter-spacing: -0.01em;
        }

        .section-2 {
          margin-top: 88px;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 20px;
        }

        .big-panel {
          border-radius: 32px;
          padding: 36px;
        }

        .section-kicker {
          color: #b2bbc8;
          letter-spacing: 0.16em;
          font-size: 12px;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .big-panel h2,
        .cta-panel h2 {
          margin: 0;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          font-weight: 680;
          text-wrap: balance;
        }

        .big-panel p,
        .mini-card p {
          color: #97a2b2;
          line-height: 1.85;
          letter-spacing: -0.01em;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .mini-card {
          border-radius: 28px;
          padding: 26px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .mini-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.10);
        }

        .mini-card h3 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 24px;
          letter-spacing: -0.035em;
          line-height: 1.04;
          font-weight: 640;
        }

        .cta-panel {
          margin-top: 90px;
          padding: 36px;
          border-radius: 32px;
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
          letter-spacing: -0.01em;
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

        @media (max-width: 1180px) {
          .hero-main-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 1100px) {
          .hero-content,
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

          .hero {
            min-height: auto;
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

      <div className="fixed-chart-bg">
        <img
          src="/us100-chart.png"
          alt="US100 Background Chart"
          className="fixed-chart-image"
        />
        <div className="fixed-chart-fade" />
      </div>

      <div className="ambient" />

      <div className="page-content">
        <section className="container">
          <nav className="nav">
            <div className="brand">
              <div className="brand-icon-wrap glass">
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
            <div className="hero-content">
              <div className="hero-left">
                <div className="eyebrow glass">PRIVATE TRADING INFRASTRUCTURE</div>

                <div className="hero-main-row">
                  <div>
                    <h1 className="hero-title">SFCM</h1>
                    <div className="hero-sub-1">SILVER FIR</div>
                    <div className="hero-sub-2">CAPITAL MANAGEMENT</div>
                  </div>

                  <div className="small-chart-card glass">
                    <div className="small-chart-label">US100 CHART</div>
                    <img
                      src="/us100-chart.png"
                      alt="US100 Chart"
                      className="small-chart-image"
                    />
                  </div>
                </div>

                <p className="hero-text">
                  Advanced algorithmic trading infrastructure built for disciplined
                  execution, premium client access, and a modern systematic trading
                  brand with institutional presentation.
                </p>

                <div className="cta-row">
                  <a href="#clients" className="btn-primary glass">
                    Get Access
                  </a>

                  <a href="#strategy" className="btn-secondary glass">
                    Explore Strategy
                  </a>
                </div>

                <div className="tag-row">
                  <div className="tag glass">Gold</div>
                  <div className="tag glass">Nasdaq</div>
                  <div className="tag glass">Automation</div>
                  <div className="tag glass">Risk-First</div>
                </div>
              </div>

              <div className="hero-card-wrap">
                <div className="hero-card glass">
                  <div className="card-label">BRAND MARK</div>

                  <div className="integrated-brand">
                    <div className="integrated-logo-box glass">
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
                    <div className="metric glass">
                      <div className="metric-label">Core Markets</div>
                      <div className="metric-value">Gold / Nasdaq</div>
                    </div>

                    <div className="metric glass">
                      <div className="metric-label">Access</div>
                      <div className="metric-value">Private Clients</div>
                    </div>

                    <div className="metric glass">
                      <div className="metric-label">Infrastructure</div>
                      <div className="metric-value">Vercel + Cloudflare</div>
                    </div>

                    <div className="metric glass">
                      <div className="metric-label">Framework</div>
                      <div className="metric-value">Risk-First</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="strategy" className="cards-3">
            <div className="info-card glass">
              <h3>Structured Execution</h3>
              <p>
                Systematic trade execution with predefined logic, disciplined entries,
                and controlled management.
              </p>
            </div>

            <div className="info-card glass">
              <h3>Premium Brand Identity</h3>
              <p>
                A refined digital presence designed to present SFCM as a serious
                modern capital-markets brand.
              </p>
            </div>

            <div className="info-card glass">
              <h3>Scalable Client Access</h3>
              <p>
                Built to evolve into dashboards, subscriptions, onboarding, and
                protected client infrastructure.
              </p>
            </div>
          </section>

          <section id="infrastructure" className="section-2">
            <div className="big-panel glass">
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
              <div className="mini-card glass">
                <h3>Private Client Access</h3>
                <p>Secure onboarding and controlled access structure.</p>
              </div>

              <div className="mini-card glass">
                <h3>Trading Infrastructure</h3>
                <p>Website, server, tunnel, automation, and delivery stack.</p>
              </div>

              <div className="mini-card glass">
                <h3>Execution Framework</h3>
                <p>Clear process logic for entry, stop, target, and operational flow.</p>
              </div>

              <div className="mini-card glass">
                <h3>Growth-Ready Platform</h3>
                <p>Prepared for subscriptions, dashboard systems, and expansion.</p>
              </div>
            </div>
          </section>

          <section className="cta-panel glass">
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
                <a href="#contact" className="btn-primary glass">
                  Request Access
                </a>

                <a href="#strategy" className="btn-secondary glass">
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
      </div>
    </main>
  );
}

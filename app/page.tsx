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
            radial-gradient(circle at 50% 0%, rgba(38,48,78,0.22) 0%, rgba(8,11,20,0.96) 34%, rgba(3,5,10,1) 72%, rgba(1,2,6,1) 100%);
        }

        .sfcm-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.22;
          animation: gridDrift 18s linear infinite;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.22));
          -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.22));
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(28px);
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .orb-1 {
          width: 820px;
          height: 820px;
          top: -360px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(112,130,200,0.16) 0%, rgba(112,130,200,0.05) 36%, rgba(112,130,200,0) 70%);
          animation: floatOrb1 14s ease-in-out infinite alternate;
        }

        .orb-2 {
          width: 360px;
          height: 360px;
          top: 140px;
          right: -80px;
          background: radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.025) 40%, rgba(255,255,255,0) 75%);
          animation: floatOrb2 12s ease-in-out infinite alternate;
        }

        .orb-3 {
          width: 340px;
          height: 340px;
          bottom: 40px;
          left: -70px;
          background: radial-gradient(circle, rgba(80,110,185,0.13) 0%, rgba(80,110,185,0.03) 40%, rgba(80,110,185,0) 75%);
          animation: floatOrb3 16s ease-in-out infinite alternate;
        }

        .noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
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
          gap: 16px;
        }

        .brand-icon-wrap {
          width: 62px;
          height: 62px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 12px 40px rgba(0,0,0,0.55),
            0 0 24px rgba(255,255,255,0.04),
            inset 0 0 18px rgba(255,255,255,0.02);
          backdrop-filter: blur(16px);
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .brand-icon {
          width: 42px;
          height: 42px;
          object-fit: contain;
          filter: drop-shadow(0 0 16px rgba(255,255,255,0.18));
        }

        .brand-top {
          font-size: 15px;
          letter-spacing: 0.22em;
          color: #eef2f8;
          font-weight: 700;
        }

        .brand-sub {
          font-size: 12px;
          color: #8e97a7;
          letter-spacing: 0.16em;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          color: #a3adbc;
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
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          color: #b7c0cd;
          font-size: 12px;
          letter-spacing: 0.16em;
          margin-bottom: 28px;
          background: rgba(255,255,255,0.025);
          box-shadow: inset 0 0 20px rgba(255,255,255,0.02);
          backdrop-filter: blur(10px);
        }

        .hero-title-wrap {
          position: relative;
          margin-bottom: 18px;
        }

        .hero-title-wrap::before {
          content: "";
          position: absolute;
          inset: 14px auto auto 8px;
          width: 260px;
          height: 120px;
          background: radial-gradient(circle, rgba(255,255,255,0.10), rgba(255,255,255,0));
          filter: blur(38px);
          pointer-events: none;
          animation: shimmerGlow 5s ease-in-out infinite;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(56px, 9vw, 126px);
          line-height: 0.92;
          letter-spacing: -0.06em;
          font-family: Georgia, "Times New Roman", serif;
          color: #f2f5f9;
          text-shadow: 0 0 32px rgba(255,255,255,0.08);
          position: relative;
          animation: titleShine 6s ease-in-out infinite;
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
          color: #8790a0;
          letter-spacing: 0.26em;
          margin-bottom: 30px;
        }

        .hero-text {
          max-width: 760px;
          color: #9ea8b7;
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
            0 14px 40px rgba(255,255,255,0.10),
            0 8px 24px rgba(0,0,0,0.28);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow:
            0 18px 48px rgba(255,255,255,0.13),
            0 10px 26px rgba(0,0,0,0.34);
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.14);
          color: #eef2f8;
          background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02));
          box-shadow: inset 0 0 20px rgba(255,255,255,0.02);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          background: linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.028));
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
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
          color: #b1bac8;
          font-size: 13px;
          animation: fadeUp 1.2s ease forwards;
        }

        .hero-card-wrap {
          position: relative;
          animation: floatCard 7s ease-in-out infinite;
        }

        .hero-card-wrap::before {
          content: "";
          position: absolute;
          inset: 8% 8% auto auto;
          width: 180px;
          height: 180px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,255,255,0));
          filter: blur(28px);
          pointer-events: none;
        }

        .hero-card {
          border: 1px solid rgba(255,255,255,0.085);
          border-radius: 30px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.022));
          padding: 30px;
          box-shadow:
            0 32px 90px rgba(0,0,0,0.56),
            inset 0 0 40px rgba(255,255,255,0.018);
          backdrop-filter: blur(18px);
          position: relative;
          overflow: hidden;
        }

        .hero-card::after {
          content: "";
          position: absolute;
          top: -20%;
          left: -40%;
          width: 40%;
          height: 140%;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.07) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: rotate(14deg);
          animation: cardSweep 8s ease-in-out infinite;
          pointer-events: none;
        }

        .card-label {
          margin-bottom: 18px;
          color: #d0d7e0;
          font-size: 15px;
          letter-spacing: 0.12em;
        }

        .logo-frame-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .logo-frame {
          padding: 20px;
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.012));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 16px 40px rgba(0,0,0,0.38),
            inset 0 0 24px rgba(255,255,255,0.015);
          animation: logoPulse 5s ease-in-out infinite;
        }

        .hero-logo {
          width: 240px;
          max-width: 100%;
          border-radius: 22px;
          display: block;
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
            linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          border: 1px solid rgba(255,255,255,0.075);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .metric:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.13);
        }

        .metric-label {
          color: #8590a0;
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
          border: 1px solid rgba(255,255,255,0.075);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          box-shadow: 0 16px 45px rgba(0,0,0,0.22);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.12);
        }

        .info-card h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 28px;
          letter-spacing: -0.03em;
        }

        .info-card p {
          color: #9fa9b7;
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
          border: 1px solid rgba(255,255,255,0.075);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015));
        }

        .section-kicker {
          color: #b7c0cd;
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
          color: #9ea8b7;
          line-height: 1.9;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .mini-card {
          border-radius: 24px;
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.075);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .mini-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.12);
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
          border: 1px solid rgba(255,255,255,0.08);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          box-shadow: 0 20px 60px rgba(0,0,0,0.24);
          position: relative;
          overflow: hidden;
        }

        .cta-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(255,255,255,0.03), transparent 32%, transparent 68%, rgba(255,255,255,0.03));
          pointer-events: none;
        }

        .cta-inner {
          display: flex;
          justify-content: space-between;
          gap: 22px;
          flex-wrap: wrap;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .footer {
          margin-top: 80px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #818c9d;
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
            transform: translateX(-50%) translateY(0px) scale(1);
          }
          100% {
            transform: translateX(-50%) translateY(24px) scale(1.04);
          }
        }

        @keyframes floatOrb2 {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          100% {
            transform: translateY(18px) translateX(-18px);
          }
        }

        @keyframes floatOrb3 {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          100% {
            transform: translateY(-18px) translateX(16px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow:
              0 12px 40px rgba(0,0,0,0.55),
              0 0 24px rgba(255,255,255,0.04),
              inset 0 0 18px rgba(255,255,255,0.02);
          }
          50% {
            box-shadow:
              0 14px 46px rgba(0,0,0,0.60),
              0 0 34px rgba(255,255,255,0.08),
              inset 0 0 20px rgba(255,255,255,0.03);
          }
        }

        @keyframes shimmerGlow {
          0%, 100% {
            opacity: 0.65;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes titleShine {
          0%, 100% {
            text-shadow: 0 0 32px rgba(255,255,255,0.08);
          }
          50% {
            text-shadow:
              0 0 42px rgba(255,255,255,0.12),
              0 0 70px rgba(140,160,220,0.08);
          }
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes cardSweep {
          0% {
            transform: translateX(-120%) rotate(14deg);
            opacity: 0;
          }
          15% {
            opacity: 0.55;
          }
          35% {
            opacity: 0.25;
          }
          100% {
            transform: translateX(260%) rotate(14deg);
            opacity: 0;
          }
        }

        @keyframes logoPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow:
              0 16px 40px rgba(0,0,0,0.38),
              inset 0 0 24px rgba(255,255,255,0.015);
          }
          50% {
            transform: scale(1.015);
            box-shadow:
              0 18px 46px rgba(0,0,0,0.42),
              0 0 24px rgba(255,255,255,0.04),
              inset 0 0 26px rgba(255,255,255,0.02);
          }
        }

        @media (max-width: 1100px) {
          .hero,
          .cards-3,
          .section-2,
          .mini-grid {
            grid-template-columns: 1fr;
          }

          .hero-card-wrap {
            animation: none;
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

            <div className="hero-title-wrap">
              <h1 className="hero-title">SFCM</h1>
            </div>

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

              <div className="logo-frame-wrap">
                <div className="logo-frame">
                  <img
                    src="/sfcm-tree-logo.png"
                    alt="SFCM Logo"
                    className="hero-logo"
                  />
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

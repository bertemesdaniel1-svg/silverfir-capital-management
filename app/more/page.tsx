import Link from "next/link";

export default function MorePage() {
  return (
    <main className="more-page">
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

        .more-page {
          min-height: 100vh;
          color: white;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          background:
            linear-gradient(180deg, #070910 0%, #05070c 46%, #030409 100%);
        }

        .shell {
          max-width: 1240px;
          margin: 0 auto;
          padding: 34px 24px 100px;
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

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          border-radius: 22px;
          padding: 14px 18px;
          background: #0b0f17;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 14px 30px rgba(0,0,0,0.32),
            inset 0 1px 0 rgba(255,255,255,0.04);
          margin-bottom: 40px;
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
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
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

        .back-link {
          text-decoration: none;
          color: #e9edf4;
          padding: 12px 18px;
          border-radius: 16px;
        }

        .hero {
          padding: 34px;
          border-radius: 30px;
          margin-bottom: 24px;
        }

        .eyebrow {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 999px;
          color: #b8c1ce;
          font-size: 11px;
          letter-spacing: 0.18em;
          margin-bottom: 22px;
        }

        .title {
          margin: 0 0 14px 0;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 700;
        }

        .lead {
          max-width: 850px;
          color: #98a3b3;
          font-size: 19px;
          line-height: 1.8;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 24px;
        }

        .card {
          padding: 28px;
          border-radius: 28px;
        }

        .card h2 {
          margin: 0 0 12px 0;
          font-size: 30px;
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 650;
        }

        .card p {
          margin: 0;
          color: #97a2b2;
          line-height: 1.85;
          font-size: 16px;
        }

        .wide {
          margin-top: 24px;
          padding: 30px;
          border-radius: 30px;
        }

        .wide h2 {
          margin: 0 0 12px 0;
          font-size: 34px;
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 680;
        }

        .wide p {
          margin: 0;
          color: #97a2b2;
          line-height: 1.9;
          font-size: 17px;
        }

        .list {
          margin-top: 16px;
          display: grid;
          gap: 14px;
        }

        .list-item {
          padding: 18px 20px;
          border-radius: 20px;
          color: #dfe5ee;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .list-item strong {
          display: block;
          margin-bottom: 6px;
          font-size: 16px;
        }

        .footer {
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: #7f8999;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="shell">
        <div className="topbar">
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

          <Link href="/" className="back-link glass">
            Back to Home
          </Link>
        </div>

        <section className="hero glass">
          <div className="eyebrow glass">MORE INFORMATION</div>
          <h1 className="title">What SFCM does and how the framework works.</h1>
          <p className="lead">
            Silver Fir Capital Management is positioned as a premium execution and
            delivery framework built around disciplined infrastructure, structured
            access, and a professional capital-markets presentation. This page
            explains the operating model without exposing proprietary internal
            strategy rules.
          </p>
        </section>

        <section className="grid">
          <div className="card glass">
            <h2>What We Do</h2>
            <p>
              SFCM focuses on delivering a refined systematic trading environment
              with clear structure, controlled access, and a premium user-facing
              experience. The objective is not to publicly disclose proprietary
              signal logic, but to provide a disciplined execution ecosystem around
              it.
            </p>
          </div>

          <div className="card glass">
            <h2>Who It Is For</h2>
            <p>
              The framework is designed for users who value structure, execution
              discipline, risk awareness, and a professional infrastructure layer.
              It is aimed at serious participants who want more than a simple public
              indicator or generic trading dashboard.
            </p>
          </div>

          <div className="card glass">
            <h2>Execution Infrastructure</h2>
            <p>
              The system can include website delivery, account access control,
              server-side components, tunnel and automation setup, and a branded
              operating environment that supports professional client presentation.
            </p>
          </div>

          <div className="card glass">
            <h2>Risk-First Approach</h2>
            <p>
              SFCM is presented around controlled process design rather than hype.
              This means the framework emphasizes structure, access management,
              execution quality, and disciplined operational flow over public
              disclosure of proprietary signal generation details.
            </p>
          </div>
        </section>

        <section className="wide glass">
          <h2>How It Works</h2>
          <p>
            Access to the framework is organized through a layered delivery model.
            Users are introduced to a branded environment, receive access to the
            relevant infrastructure, and interact with a system built around
            execution quality, operational clarity, and controlled client delivery.
          </p>

          <div className="list">
            <div className="list-item">
              <strong>1. Access and onboarding</strong>
              Users are brought into a structured environment instead of a loose
              public setup.
            </div>

            <div className="list-item">
              <strong>2. Infrastructure delivery</strong>
              The framework can include website access, automation components, and
              connected operational tools.
            </div>

            <div className="list-item">
              <strong>3. Controlled methodology</strong>
              The process is explained professionally, while proprietary strategy
              mechanics remain protected.
            </div>

            <div className="list-item">
              <strong>4. Premium presentation</strong>
              The full user experience is designed to feel coherent, modern, and
              institutionally presented.
            </div>
          </div>
        </section>

        <section className="wide glass">
          <h2>What Is Not Publicly Revealed</h2>
          <p>
            This page intentionally does not disclose exact TradingView strategy
            code, proprietary entry and exit rules, alert architecture, execution
            formulas, or private operational logic. The purpose of this page is to
            explain the framework and value proposition without exposing internal
            intellectual property.
          </p>
        </section>

        <footer className="footer">
          <div>Silver Fir Capital Management</div>
          <div>contact@silverfircm.com</div>
        </footer>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
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

        .dashboard-page {
          min-height: 100vh;
          color: white;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          position: relative;
          overflow-x: hidden;
          background:
            radial-gradient(circle at top, rgba(26,34,54,0.55) 0%, rgba(7,9,16,0.96) 42%, #04060b 100%);
        }

        .grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.18;
          pointer-events: none;
        }

        .glow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 18% 20%, rgba(255,255,255,0.04), transparent 20%),
            radial-gradient(circle at 82% 28%, rgba(73,92,148,0.14), transparent 24%),
            radial-gradient(circle at 50% 78%, rgba(255,255,255,0.03), transparent 20%);
        }

        .shell {
          position: relative;
          z-index: 2;
          max-width: 1360px;
          margin: 0 auto;
          padding: 24px 24px 80px;
        }

        .glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 20px 50px rgba(0,0,0,0.34),
            inset 0 1px 0 rgba(255,255,255,0.05);
          backdrop-filter: blur(18px) saturate(125%);
          -webkit-backdrop-filter: blur(18px) saturate(125%);
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          border-radius: 24px;
          padding: 16px 18px;
          background: #0b0f17;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 14px 30px rgba(0,0,0,0.30),
            inset 0 1px 0 rgba(255,255,255,0.04);
          margin-bottom: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
        }

        .brand-icon {
          width: 38px;
          height: 38px;
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

        .top-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .action-btn {
          text-decoration: none;
          color: #e7edf5;
          padding: 11px 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          transition: transform 0.2s ease, border-color 0.2s ease;
          font-size: 14px;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .hero-left,
        .hero-right {
          border-radius: 30px;
          padding: 30px;
        }

        .eyebrow {
          display: inline-block;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          color: #b8c1ce;
          font-size: 11px;
          letter-spacing: 0.18em;
          background: rgba(255,255,255,0.03);
          margin-bottom: 20px;
        }

        .hero-title {
          margin: 0 0 10px 0;
          font-size: clamp(38px, 5vw, 66px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 700;
        }

        .hero-text {
          margin: 0;
          max-width: 760px;
          color: #98a3b3;
          font-size: 18px;
          line-height: 1.85;
        }

        .status-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 24px;
        }

        .status-card {
          border-radius: 22px;
          padding: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .status-label {
          color: #7f8999;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .status-value {
          font-size: 18px;
          font-weight: 650;
          color: #eef2f8;
        }

        .right-title {
          margin: 0 0 10px 0;
          font-size: 26px;
          line-height: 1.05;
          letter-spacing: -0.04em;
          font-weight: 680;
        }

        .right-text {
          margin: 0 0 20px 0;
          color: #97a2b2;
          line-height: 1.8;
          font-size: 15px;
        }

        .mini-stack {
          display: grid;
          gap: 12px;
        }

        .mini-row {
          border-radius: 18px;
          padding: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .mini-row strong {
          display: block;
          margin-bottom: 6px;
          font-size: 15px;
        }

        .mini-row span {
          color: #95a0b1;
          font-size: 14px;
          line-height: 1.7;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        .card {
          border-radius: 28px;
          padding: 26px;
        }

        .card h2 {
          margin: 0 0 12px 0;
          font-size: 28px;
          letter-spacing: -0.04em;
          line-height: 1.02;
          font-weight: 650;
        }

        .card p {
          margin: 0;
          color: #97a2b2;
          line-height: 1.85;
          font-size: 15px;
        }

        .list {
          margin-top: 16px;
          display: grid;
          gap: 12px;
        }

        .list-item {
          padding: 15px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          color: #dfe6ef;
          font-size: 14px;
          line-height: 1.7;
        }

        .wide {
          margin-top: 20px;
          border-radius: 30px;
          padding: 30px;
        }

        .wide h2 {
          margin: 0 0 12px 0;
          font-size: 32px;
          letter-spacing: -0.05em;
          line-height: 1.02;
          font-weight: 680;
        }

        .wide p {
          margin: 0;
          color: #97a2b2;
          line-height: 1.9;
          font-size: 16px;
        }

        .footer {
          margin-top: 24px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: #7f8999;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .hero,
          .main-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .shell {
            padding: 16px 16px 60px;
          }

          .status-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="grid" />
      <div className="glow" />

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
              <div className="brand-sub">PRIVATE CLIENT DASHBOARD</div>
            </div>
          </div>

          <div className="top-actions">
            <Link href="/" className="action-btn">
              Home
            </Link>
            <Link href="/more" className="action-btn">
              More Information
            </Link>
            <Link href="/login" className="action-btn">
              Log Out
            </Link>
          </div>
        </div>

        <section className="hero">
          <div className="hero-left glass">
            <div className="eyebrow">CLIENT OVERVIEW</div>
            <h1 className="hero-title">Welcome to your private access area.</h1>
            <p className="hero-text">
              This dashboard is the structured client environment for future access
              to your SFCM infrastructure, delivery resources, onboarding material,
              and protected client-level components.
            </p>

            <div className="status-grid">
              <div className="status-card">
                <div className="status-label">Subscription</div>
                <div className="status-value">Active</div>
              </div>

              <div className="status-card">
                <div className="status-label">Access Level</div>
                <div className="status-value">Private Client</div>
              </div>

              <div className="status-card">
                <div className="status-label">Infrastructure</div>
                <div className="status-value">Connected</div>
              </div>

              <div className="status-card">
                <div className="status-label">Framework</div>
                <div className="status-value">Risk-First</div>
              </div>
            </div>
          </div>

          <div className="hero-right glass">
            <h2 className="right-title">Current dashboard status</h2>
            <p className="right-text">
              The client portal is prepared as a premium protected area and can be
              connected next to your real authentication and subscription logic.
            </p>

            <div className="mini-stack">
              <div className="mini-row">
                <strong>Portal readiness</strong>
                <span>Frontend client area is active and ready for backend connection.</span>
              </div>

              <div className="mini-row">
                <strong>Next integration</strong>
                <span>Authentication, database validation, and client-specific access rules.</span>
              </div>

              <div className="mini-row">
                <strong>Protected delivery</strong>
                <span>Only active clients should later see restricted infrastructure content.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="main-grid">
          <div className="card glass">
            <h2>Client Access</h2>
            <p>
              This area can later contain personalized client permissions, private
              onboarding steps, access approvals, and subscription-based feature
              visibility.
            </p>

            <div className="list">
              <div className="list-item">Private login environment</div>
              <div className="list-item">Client-specific permissions</div>
              <div className="list-item">Controlled dashboard visibility</div>
            </div>
          </div>

          <div className="card glass">
            <h2>Infrastructure</h2>
            <p>
              The dashboard can be used as the central entry point for setup
              guidance, delivery instructions, operational updates, and protected
              infrastructure resources.
            </p>

            <div className="list">
              <div className="list-item">Setup and onboarding material</div>
              <div className="list-item">Protected delivery resources</div>
              <div className="list-item">Client environment status</div>
            </div>
          </div>

          <div className="card glass">
            <h2>Subscription Control</h2>
            <p>
              Later, access to this dashboard can depend on active billing status,
              expiry date, or manual activation and deactivation from your admin
              control layer.
            </p>

            <div className="list">
              <div className="list-item">Active / inactive client status</div>
              <div className="list-item">Access lock if subscription expires</div>
              <div className="list-item">Manual admin override possible</div>
            </div>
          </div>
        </section>

        <section className="wide glass">
          <h2>What comes next</h2>
          <p>
            The next step is to connect this dashboard to a real authentication
            system and database structure. After that, only valid users with active
            access should be able to log in and view protected client content.
          </p>
        </section>

        <footer className="footer">
          <div>Silver Fir Capital Management</div>
          <div>Protected Client Environment</div>
        </footer>
      </section>
    </main>
  );
}

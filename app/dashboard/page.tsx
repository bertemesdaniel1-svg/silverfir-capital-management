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
            radial-gradient(circle at top, rgba(18,26,42,0.40) 0%, rgba(7,9,16,0.97) 42%, #04060b 100%);
        }

        .grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.12;
          pointer-events: none;
        }

        .glow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.02), transparent 20%),
            radial-gradient(circle at 85% 24%, rgba(73,92,148,0.06), transparent 24%);
        }

        .shell {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 24px 70px;
        }

        .glass {
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 18px 40px rgba(0,0,0,0.30),
            inset 0 1px 0 rgba(255,255,255,0.045);
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
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
        }

        .brand-icon {
          width: 36px;
          height: 36px;
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
          border-radius: 30px;
          padding: 34px;
          margin-bottom: 20px;
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
          margin: 0 0 12px 0;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 0.96;
          letter-spacing: -0.055em;
          font-weight: 680;
        }

        .hero-text {
          margin: 0;
          max-width: 740px;
          color: #98a3b3;
          font-size: 17px;
          line-height: 1.8;
        }

        .stats {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .stat {
          border-radius: 20px;
          padding: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .stat-label {
          color: #7f8999;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 650;
          color: #eef2f8;
          letter-spacing: -0.02em;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .card {
          border-radius: 28px;
          padding: 26px;
        }

        .card h2 {
          margin: 0 0 12px 0;
          font-size: 26px;
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 660;
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

        @media (max-width: 900px) {
          .stats,
          .grid-2 {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 700px) {
          .shell {
            padding: 16px 16px 56px;
          }

          .stats,
          .grid-2 {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 24px;
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
            <Link href="/" className="action-btn">Home</Link>
            <Link href="/login" className="action-btn">Log Out</Link>
          </div>
        </div>

        <section className="hero glass">
          <div className="eyebrow">CLIENT OVERVIEW</div>
          <h1 className="hero-title">Private client access area.</h1>
          <p className="hero-text">
            This dashboard gives a clean overview of your SFCM access status,
            client credentials, infrastructure readiness, and protected delivery
            information.
          </p>

          <div className="stats">
            <div className="stat">
              <div className="stat-label">Subscription</div>
              <div className="stat-value">Active</div>
            </div>

            <div className="stat">
              <div className="stat-label">Access Level</div>
              <div className="stat-value">Private Client</div>
            </div>

            <div className="stat">
              <div className="stat-label">Client Secret</div>
              <div className="stat-value">SFCM_SECRET_001</div>
            </div>

            <div className="stat">
              <div className="stat-label">Infrastructure</div>
              <div className="stat-value">Connected</div>
            </div>
          </div>
        </section>

        <section className="grid-2">
          <div className="card glass">
            <h2>Access Details</h2>
            <p>
              This area is intended for private clients with controlled access to
              SFCM infrastructure, setup information, and future protected content.
            </p>

            <div className="list">
              <div className="list-item">Client email visibility</div>
              <div className="list-item">Permanent client secret</div>
              <div className="list-item">Subscription-based access control</div>
            </div>
          </div>

          <div className="card glass">
            <h2>Next Integration</h2>
            <p>
              The next technical step is to connect this dashboard directly to Neon
              so that login, client data, and account status are loaded live from
              the database.
            </p>

            <div className="list">
              <div className="list-item">Email + password login</div>
              <div className="list-item">Secret tied to one client only</div>
              <div className="list-item">Access lock for inactive subscriptions</div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>Silver Fir Capital Management</div>
          <div>Protected Client Environment</div>
        </footer>
      </section>
    </main>
  );
}

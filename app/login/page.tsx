"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="login-page">
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

        .login-page {
          min-height: 100vh;
          color: white;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top, rgba(36,44,66,0.55) 0%, rgba(7,9,16,0.96) 42%, #04060b 100%);
        }

        .grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.18;
          pointer-events: none;
        }

        .glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 22%),
            radial-gradient(circle at 80% 30%, rgba(68,86,140,0.14), transparent 24%),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.03), transparent 18%);
        }

        .shell {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 18px;
        }

        .panel {
          width: 100%;
          max-width: 1120px;
          display: grid;
          grid-template-columns: 1fr 460px;
          gap: 24px;
          align-items: stretch;
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

        .left {
          border-radius: 30px;
          padding: 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 660px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
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
          font-weight: 700;
          color: #eef2f8;
        }

        .brand-sub {
          font-size: 12px;
          color: #8a94a5;
          letter-spacing: 0.14em;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 22px;
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          color: #b8c1ce;
          font-size: 11px;
          letter-spacing: 0.18em;
          background: rgba(255,255,255,0.03);
        }

        .title {
          margin: 0 0 14px 0;
          font-size: clamp(42px, 5vw, 68px);
          line-height: 0.94;
          letter-spacing: -0.06em;
          font-weight: 700;
          font-family: Georgia, "Times New Roman", serif;
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #fbfcfd 10%,
              #d7dce2 26%,
              #ffffff 42%,
              #b7bec7 58%,
              #eef1f5 76%,
              #8c949e 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.2),
            0 8px 18px rgba(0,0,0,0.22);
        }

        .subtitle {
          max-width: 620px;
          margin: 0;
          color: #9aa5b5;
          font-size: 18px;
          line-height: 1.8;
          letter-spacing: -0.01em;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 34px;
        }

        .feature-card {
          border-radius: 22px;
          padding: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .feature-label {
          color: #7f8999;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .feature-value {
          font-size: 18px;
          font-weight: 650;
          letter-spacing: -0.02em;
          color: #eef2f8;
        }

        .bottom-links {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .ghost-link {
          text-decoration: none;
          color: #dfe6ef;
          padding: 13px 18px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .ghost-link:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.14);
        }

        .right {
          border-radius: 30px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .login-label {
          color: #b9c3d1;
          font-size: 12px;
          letter-spacing: 0.18em;
          margin-bottom: 14px;
        }

        .login-title {
          margin: 0 0 10px 0;
          font-size: 34px;
          line-height: 1.02;
          letter-spacing: -0.05em;
          font-weight: 680;
        }

        .login-text {
          margin: 0 0 24px 0;
          color: #96a2b3;
          line-height: 1.8;
          font-size: 15px;
        }

        .form {
          display: grid;
          gap: 16px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        .field label {
          font-size: 13px;
          color: #c7d0db;
        }

        .field input {
          width: 100%;
          height: 54px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: white;
          padding: 0 16px;
          outline: none;
          font-size: 15px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .field input:focus {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
        }

        .field input::placeholder {
          color: #7f8999;
        }

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 2px;
        }

        .checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #a8b2bf;
          font-size: 14px;
        }

        .checkbox input {
          accent-color: white;
        }

        .forgot {
          color: #dfe6ef;
          text-decoration: none;
          font-size: 14px;
        }

        .primary-btn {
          width: 100%;
          height: 56px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
          color: #f5f8fb;
          font-size: 15px;
          font-weight: 650;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow:
            0 14px 34px rgba(0,0,0,0.24),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
        }

        .notice {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          color: #8f9bac;
          font-size: 13px;
          line-height: 1.7;
        }

        .footer-note {
          margin-top: 18px;
          color: #7f8999;
          font-size: 13px;
        }

        @media (max-width: 980px) {
          .panel {
            grid-template-columns: 1fr;
          }

          .left {
            min-height: auto;
          }
        }
      `}</style>

      <div className="grid" />
      <div className="glow" />

      <section className="shell">
        <div className="panel">
          <div className="left glass">
            <div>
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

              <div className="eyebrow">PRIVATE CLIENT ACCESS</div>

              <h1 className="title">Client login for structured access.</h1>

              <p className="subtitle">
                Access your client area through a private login environment built
                for premium delivery, secure onboarding, and a professional
                infrastructure layer.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-label">Access Layer</div>
                  <div className="feature-value">Private Client Portal</div>
                </div>

                <div className="feature-card">
                  <div className="feature-label">Environment</div>
                  <div className="feature-value">Secure Infrastructure</div>
                </div>

                <div className="feature-card">
                  <div className="feature-label">Delivery</div>
                  <div className="feature-value">Controlled Access</div>
                </div>

                <div className="feature-card">
                  <div className="feature-label">Framework</div>
                  <div className="feature-value">Risk-First</div>
                </div>
              </div>
            </div>

            <div className="bottom-links">
              <Link href="/" className="ghost-link">
                Back to Home
              </Link>
              <Link href="/more" className="ghost-link">
                More Information
              </Link>
            </div>
          </div>

          <div className="right glass">
            <div className="login-label">CLIENT LOGIN</div>
            <h2 className="login-title">Sign in to continue</h2>
            <p className="login-text">
              Enter your client credentials to access your private area. This page
              is the visual login interface and can later be connected to your real
              authentication system.
            </p>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="client@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="row">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#" className="forgot">
                  Forgot password?
                </a>
              </div>

              <button className="primary-btn" type="submit">
                Sign In
              </button>
            </form>

            <div className="notice">
              This page is currently designed as a premium frontend login screen.
              In the next step, it can be connected to a real authentication
              provider and protected client dashboard.
            </div>

            <div className="footer-note">
              Silver Fir Capital Management
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

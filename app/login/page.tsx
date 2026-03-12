"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
            radial-gradient(circle at top, rgba(36,44,66,0.40) 0%, rgba(7,9,16,0.96) 42%, #04060b 100%);
        }

        .grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.14;
          pointer-events: none;
        }

        .glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), transparent 22%),
            radial-gradient(circle at 80% 30%, rgba(68,86,140,0.10), transparent 24%),
            radial-gradient(circle at 50% 80%, rgba(255,255,255,0.02), transparent 18%);
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
          max-width: 480px;
          margin: auto;
          display: flex;
          justify-content: center;
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

        .right {
          border-radius: 30px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        .back-btn {
          display: inline-block;
          align-self: flex-start;
          margin-bottom: 20px;
          color: #cfd6e1;
          text-decoration: none;
          font-size: 14px;
          padding: 10px 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          transition: all 0.2s ease;
        }

        .back-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
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

        .primary-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .error-box {
          margin-top: 14px;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,80,80,0.08);
          color: #ffb3b3;
          font-size: 13px;
          line-height: 1.6;
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
      `}</style>

      <div className="grid" />
      <div className="glow" />

      <section className="shell">
        <div className="panel">
          <div className="right glass">
            <Link href="/" className="back-btn">
              ← Back to Home
            </Link>

            <div className="login-label">CLIENT LOGIN</div>
            <h2 className="login-title">Sign in to continue</h2>
            <p className="login-text">
              Enter your client credentials to access your private area.
            </p>

            <form
              className="form"
              onSubmit={async (e) => {
                e.preventDefault();

                setError("");
                setLoading(true);

                try {
                  const res = await fetch("/api/login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email,
                      password,
                    }),
                  });

                  const data = await res.json();

                  if (!data.success) {
                    setError(data.error || "Login failed");
                    setLoading(false);
                    return;
                  }

                  router.push("/profile");
                } catch {
                  setError("Server error");
                  setLoading(false);
                }
              }}
            >
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

              <button className="primary-btn" type="submit" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>

              {error && <div className="error-box">{error}</div>}
            </form>

            <div className="notice">
              This login is now connected to your backend route and checks whether
              the email and password exist in your Neon client database.
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

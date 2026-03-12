"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Request failed.");
        setLoading(false);
        return;
      }

      setMessage(
        data.message ||
          "If this email exists, a reset link has been prepared."
      );
    } catch {
      setError("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="forgot-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #04060b;
        }

        .forgot-page {
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
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px 16px;
          position: relative;
          z-index: 2;
        }

        .panel {
          width: 100%;
          max-width: 560px;
          border-radius: 30px;
          padding: 32px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 18px 40px rgba(0,0,0,0.30),
            inset 0 1px 0 rgba(255,255,255,0.045);
          backdrop-filter: blur(18px) saturate(125%);
          -webkit-backdrop-filter: blur(18px) saturate(125%);
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          padding: 10px 16px;
          border-radius: 14px;
          color: #cfd6e1;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }

        .label-top {
          color: #b9c3d1;
          font-size: 12px;
          letter-spacing: 0.22em;
          margin-bottom: 14px;
        }

        .title {
          margin: 0 0 12px 0;
          font-size: clamp(34px, 5vw, 54px);
          line-height: 0.96;
          letter-spacing: -0.055em;
          font-weight: 680;
        }

        .text {
          margin: 0 0 24px 0;
          color: #98a3b3;
          font-size: 17px;
          line-height: 1.8;
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
          height: 56px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: white;
          padding: 0 16px;
          outline: none;
          font-size: 15px;
        }

        .field input::placeholder {
          color: #7f8999;
        }

        .field input:focus {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 56px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #eef2f8;
          text-decoration: none;
          cursor: pointer;
          font-size: 15px;
          transition: transform 0.2s ease, border-color 0.2s ease;
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

        .message-box,
        .error-box,
        .notice {
          padding: 14px 16px;
          border-radius: 16px;
          font-size: 13px;
          line-height: 1.7;
        }

        .message-box {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(90,200,120,0.08);
          color: #bff0c9;
        }

        .error-box {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,80,80,0.08);
          color: #ffb3b3;
        }

        .notice {
          margin-top: 16px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.025);
          color: #97a2b2;
        }
      `}</style>

      <div className="grid" />
      <div className="glow" />

      <section className="shell">
        <div className="panel">
          <Link href="/login" className="back-btn">
            ← Back to Login
          </Link>

          <div className="label-top">PASSWORD RESET</div>
          <h1 className="title">Recover your access.</h1>
          <p className="text">
            Enter your client email address. The system will prepare a password
            reset link for your account.
          </p>

          <form className="form" onSubmit={handleSubmit}>
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

            <button className="primary-btn" type="submit" disabled={loading}>
              {loading ? "Preparing Reset..." : "Send Reset Link"}
            </button>

            {message ? <div className="message-box">{message}</div> : null}
            {error ? <div className="error-box">{error}</div> : null}
          </form>

          <div className="notice">
            For security reasons, the response does not confirm whether a client
            account exists for the email address entered.
          </div>
        </div>
      </section>
    </main>
  );
}

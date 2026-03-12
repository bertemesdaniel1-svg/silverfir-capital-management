"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token") || "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!token) {
      setError("Missing reset token.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      setError("Please fill both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token,
          newPassword
        })
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Reset failed.");
        setLoading(false);
        return;
      }

      setMessage(data.message || "Password updated successfully.");

      setTimeout(() => {
        router.push("/login");
      }, 1400);
    } catch {
      setError("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="reset-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #04060b;
        }

        .reset-page {
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
        }

        .message-box,
        .error-box {
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
      `}</style>

      <div className="grid" />
      <div className="glow" />

      <section className="shell">
        <div className="panel">
          <Link href="/login" className="back-btn">
            ← Back to Login
          </Link>

          <div className="label-top">RESET PASSWORD</div>
          <h1 className="title">Set a new password.</h1>
          <p className="text">
            Enter your new password below to restore access to your client portal.
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="newPassword">New Password</label>
              <input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="primary-btn" type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Password"}
            </button>

            {message ? <div className="message-box">{message}</div> : null}
            {error ? <div className="error-box">{error}</div> : null}
          </form>
        </div>
      </section>
    </main>
  );
}

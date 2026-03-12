"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ClientType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  client_secret: string;
  subscription_status: string;
};

export default function ProfilePage() {
  const [client, setClient] = useState<ClientType | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();

        if (!data.success) {
          window.location.href = "/login";
          return;
        }

        setClient(data.client);
      } catch {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const copySecret = async () => {
    if (!client?.client_secret) return;

    try {
      await navigator.clipboard.writeText(client.client_secret);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();

    setPasswordMessage("");
    setPasswordError("");
    setPasswordLoading(true);

    try {
      const res = await fetch("/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword
        })
      });

      const data = await res.json();

      if (!data.success) {
        setPasswordError(data.error || "Password update failed.");
        setPasswordLoading(false);
        return;
      }

      setPasswordMessage(data.message || "Password updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setPasswordError("Server error.");
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#04060b",
        color: "white",
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        Loading profile...
      </main>
    );
  }

  return (
    <main className="profile-page">
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

        .profile-page {
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

        .action-btn,
        .logout-btn,
        .copy-btn,
        .save-btn {
          text-decoration: none;
          color: #e7edf5;
          padding: 11px 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          transition: transform 0.2s ease, border-color 0.2s ease;
          font-size: 14px;
        }

        .action-btn:hover,
        .logout-btn:hover,
        .copy-btn:hover,
        .save-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
        }

        .logout-btn,
        .copy-btn,
        .save-btn {
          cursor: pointer;
        }

        .hero,
        .card {
          border-radius: 30px;
          padding: 30px;
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
          font-size: clamp(32px, 5vw, 52px);
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

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .card h2 {
          margin: 0 0 18px 0;
          font-size: 24px;
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 660;
        }

        .info-grid {
          display: grid;
          gap: 14px;
        }

        .info-item {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .info-label {
          color: #7f8999;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .info-value {
          font-size: 16px;
          color: #eef2f8;
          word-break: break-word;
        }

        .secret-row {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }

        .secret-box {
          flex: 1;
          min-width: 0;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          color: #eef2f8;
          font-size: 15px;
          word-break: break-word;
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
        }

        .field input::placeholder {
          color: #7f8999;
        }

        .field input:focus {
          border-color: rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.05);
        }

        .message-box,
        .error-box {
          padding: 14px 16px;
          border-radius: 16px;
          font-size: 13px;
          line-height: 1.6;
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
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .shell {
            padding: 16px 16px 56px;
          }

          .hero,
          .card {
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
              <div className="brand-sub">CLIENT PROFILE</div>
            </div>
          </div>

          <div className="top-actions">
            <Link href="/dashboard" className="action-btn">Dashboard</Link>
            <Link href="/" className="action-btn">Home</Link>

            <form action="/api/logout" method="post">
              <button className="logout-btn" type="submit">
                Log Out
              </button>
            </form>
          </div>
        </div>

        <section className="hero glass">
          <div className="eyebrow">PROFILE OVERVIEW</div>
          <h1 className="hero-title">
            {client ? `${client.first_name} ${client.last_name}` : "Client Profile"}
          </h1>
          <p className="hero-text">
            Manage your private client details, review your access information,
            and update your password securely from your protected profile area.
          </p>
        </section>

        <section className="grid-2">
          <div className="card glass">
            <h2>Client Information</h2>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">First Name</div>
                <div className="info-value">{client?.first_name}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Last Name</div>
                <div className="info-value">{client?.last_name}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Email</div>
                <div className="info-value">{client?.email}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Subscription Status</div>
                <div className="info-value">{client?.subscription_status}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Client Secret</div>
                <div className="secret-row">
                  <div className="secret-box">{client?.client_secret}</div>
                  <button className="copy-btn" type="button" onClick={copySecret}>
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card glass">
            <h2>Change Password</h2>

            <form className="form" onSubmit={handlePasswordChange}>
              <div className="field">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  id="currentPassword"
                  type="password"
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>

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

              <button className="save-btn" type="submit" disabled={passwordLoading}>
                {passwordLoading ? "Saving..." : "Update Password"}
              </button>

              {passwordMessage ? (
                <div className="message-box">{passwordMessage}</div>
              ) : null}

              {passwordError ? (
                <div className="error-box">{passwordError}</div>
              ) : null}
            </form>
          </div>
        </section>

        <footer className="footer">
          <div>Silver Fir Capital Management</div>
          <div>Protected Client Profile</div>
        </footer>
      </section>
    </main>
  );
}

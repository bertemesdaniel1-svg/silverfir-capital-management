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
  payment_status: string;
  is_approved: boolean;
};

type AccessType = {
  canViewSecret: boolean;
  canDownloadEA: boolean;
};

export default function ProfilePage() {
  const [client, setClient] = useState<ClientType | null>(null);
  const [access, setAccess] = useState<AccessType | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState("");

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
        setAccess(data.access);

        setFirstName(data.client.first_name);
        setLastName(data.client.last_name);
        setEmail(data.client.email);
      } catch {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleProfileUpdate = async (e: React.FormEvent) => {
  e.preventDefault();

  setProfileMessage("");
  setProfileError("");
  setProfileLoading(true);

  try {
    const res = await fetch("/api/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email
      })
    });

    const data = await res.json();

    if (!data.success) {
      setProfileError(data.error || "Failed to update profile.");
      setProfileLoading(false);
      return;
    }

    setProfileMessage(data.message || "Profile updated successfully.");

    setClient((prev) =>
      prev
        ? {
            ...prev,
            first_name: firstName,
            last_name: lastName,
            email
          }
        : prev
    );
  } catch {
    setProfileError("Server error.");
  } finally {
    setProfileLoading(false);
  }
};
  const copySecret = async () => {
    if (!client?.client_secret || !access?.canViewSecret) return;

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
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#04060b",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif"
        }}
      >
        Loading client portal...
      </main>
    );
  }

  return (
    <main className="portal-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #04060b;
        }

        .portal-page {
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
          max-width: 1240px;
          margin: 0 auto;
          padding: 24px 24px 80px;
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
        .save-btn,
        .ghost-btn {
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
        .save-btn:hover,
        .ghost-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
        }

        .logout-btn,
        .copy-btn,
        .save-btn,
        .ghost-btn {
          cursor: pointer;
        }

        .hero {
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
          margin-bottom: 18px;
        }

        .hero-title {
          margin: 0 0 10px 0;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 0.96;
          letter-spacing: -0.055em;
          font-weight: 680;
        }

        .hero-text {
          margin: 0;
          max-width: 760px;
          color: #98a3b3;
          font-size: 17px;
          line-height: 1.8;
        }

        .overview-grid,
        .portal-grid {
          display: grid;
          gap: 20px;
        }

        .overview-grid {
          grid-template-columns: repeat(4, 1fr);
          margin-top: 26px;
        }

        .portal-grid {
          grid-template-columns: 1fr 1fr;
        }

        .card,
        .stat {
          border-radius: 26px;
          padding: 24px;
        }

        .stat {
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
          word-break: break-word;
        }

        .card h2 {
          margin: 0 0 18px 0;
          font-size: 24px;
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 660;
        }

        .card p {
          margin: 0 0 16px 0;
          color: #97a2b2;
          line-height: 1.8;
          font-size: 15px;
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

        .locked-box {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          color: #b8c1ce;
          line-height: 1.8;
          font-size: 14px;
        }

        .badge-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .badge {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #e7edf5;
          font-size: 13px;
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

        .download-list {
          display: grid;
          gap: 12px;
        }

        .download-item {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .download-meta {
          display: grid;
          gap: 6px;
        }

        .download-title {
          font-size: 16px;
          color: #eef2f8;
          font-weight: 600;
        }

        .download-sub {
          color: #8f9bac;
          font-size: 13px;
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
          .overview-grid {
            grid-template-columns: 1fr 1fr;
          }

          .portal-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .shell {
            padding: 16px 16px 56px;
          }

          .hero,
          .card,
          .stat {
            padding: 20px;
          }

          .overview-grid {
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
              <div className="brand-sub">CLIENT PORTAL</div>
            </div>
          </div>

          <div className="top-actions">

            <form action="/api/logout" method="post">
              <button className="logout-btn" type="submit">
                Log Out
              </button>
            </form>
          </div>
        </div>

        <section className="hero glass">
          <div className="eyebrow">CLIENT OVERVIEW</div>
          <h1 className="hero-title">
            {client ? `Welcome, ${client.first_name} ${client.last_name}.` : "Client Portal"}
          </h1>
          <p className="hero-text">
            This is your private SFCM client portal. Manage your account, review
            subscription and billing status, access your protected credentials,
            and view available downloads from one place.
          </p>

          <div className="overview-grid">
            <div className="stat">
              <div className="stat-label">Subscription</div>
              <div className="stat-value">{client?.subscription_status}</div>
            </div>

            <div className="stat">
              <div className="stat-label">Payment</div>
              <div className="stat-value">{client?.payment_status}</div>
            </div>

            <div className="stat">
              <div className="stat-label">Approval</div>
              <div className="stat-value">{client?.is_approved ? "approved" : "pending"}</div>
            </div>

            <div className="stat">
              <div className="stat-label">Email</div>
              <div className="stat-value">{client?.email}</div>
            </div>
          </div>
        </section>

        <section className="portal-grid">
          <div className="card glass">
         <h2>Account Information</h2>

<form className="form" onSubmit={handleProfileUpdate}>
  <div className="field">
    <label htmlFor="firstName">First Name</label>
    <input
      id="firstName"
      type="text"
      placeholder="First name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
  </div>

  <div className="field">
    <label htmlFor="lastName">Last Name</label>
    <input
      id="lastName"
      type="text"
      placeholder="Last name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  </div>

  <div className="field">
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <button className="save-btn" type="submit" disabled={profileLoading}>
    {profileLoading ? "Saving..." : "Update Profile"}
  </button>

  {profileMessage ? (
    <div className="message-box">{profileMessage}</div>
  ) : null}

  {profileError ? (
    <div className="error-box">{profileError}</div>
  ) : null}
</form>
</div>

          <div className="card glass">
            <h2>Security</h2>

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

          <div className="card glass">
            <h2>Subscription</h2>
            <p>
              Your portal access and delivery permissions depend on payment,
              approval, and subscription activation.
            </p>

            <div className="badge-row">
              <div className="badge">Subscription: {client?.subscription_status}</div>
              <div className="badge">Payment: {client?.payment_status}</div>
              <div className="badge">Approval: {client?.is_approved ? "approved" : "pending"}</div>
            </div>
          </div>

          <div className="card glass">
            <h2>Billing</h2>
            <p>
              Payment method management and invoice history can be integrated here
              in the next step. This section is reserved for billing control,
              recurring payments, and subscription renewal.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Payment Status</div>
                <div className="info-value">{client?.payment_status}</div>
              </div>

              <div className="info-item">
                <div className="info-label">Client Approval</div>
                <div className="info-value">{client?.is_approved ? "Approved" : "Pending review"}</div>
              </div>
            </div>
          </div>

          <div className="card glass">
            <h2>Client Secret</h2>

            {access?.canViewSecret ? (
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">Your Permanent Client Secret</div>
                  <div className="secret-row">
                    <div className="secret-box">{client?.client_secret}</div>
                    <button className="copy-btn" type="button" onClick={copySecret}>
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="locked-box">
                Your client secret is currently locked. It becomes visible only after
                your payment is confirmed, your account is approved, and your
                subscription is activated.
              </div>
            )}
          </div>

          <div className="card glass">
            <h2>Downloads</h2>

            {access?.canDownloadEA ? (
              <div className="download-list">
                <div className="download-item">
                  <div className="download-meta">
                    <div className="download-title">EA Delivery Package</div>
                    <div className="download-sub">Protected download for active approved clients</div>
                  </div>
                  <button className="copy-btn" type="button">
                    Download
                  </button>
                </div>

                <div className="download-item">
                  <div className="download-meta">
                    <div className="download-title">Setup Document</div>
                    <div className="download-sub">Trading setup and connection instructions</div>
                  </div>
                  <button className="copy-btn" type="button">
                    Open
                  </button>
                </div>
              </div>
            ) : (
              <div className="locked-box">
                Downloads are currently locked. Access will be released after
                successful payment and manual account approval.
              </div>
            )}
          </div>
        </section>

        <footer className="footer">
          <div>Silver Fir Capital Management</div>
          <div>Private Client Portal</div>
        </footer>
      </section>
    </main>
  );
}

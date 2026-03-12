"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tvUsername, setTvUsername] = useState("");
  const [password, setPassword] = useState("");
  const [chosenCode, setChosenCode] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!/^\d{4}$/.test(chosenCode)) {
      setError("Your client code must be exactly 4 digits.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          tvUsername,
          password,
          chosenCode
        })
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Registration failed.");
        setLoading(false);
        return;
      }

      setMessage(data.message || "Registration successful.");
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
    <main className="register-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #04060b;
        }

        .register-page {
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
          max-width: 640px;
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

        .double {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr 1fr;
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

        .hint {
          font-size: 12px;
          color: #8f9bac;
          line-height: 1.6;
          margin-top: -2px;
        }

        .primary-btn,
        .ghost-btn {
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

        .primary-btn:hover,
        .ghost-btn:hover {
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

        .footer-note {
          margin-top: 16px;
          color: #7f8999;
          font-size: 13px;
        }

        @media (max-width: 700px) {
          .panel {
            padding: 24px;
            border-radius: 24px;
          }

          .double {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="grid" />
      <div className="glow" />

      <section className="shell">
        <div className="panel">
          <Link href="/" className="back-btn">
            ← Back to Home
          </Link>

          <div className="label-top">CLIENT REGISTRATION</div>
          <h1 className="title">Create your SFCM access.</h1>
          <p className="text">
            Register your client account, choose your personal 4-digit client code,
            and set your TradingView username for later indicator access.
          </p>

          <form className="form" onSubmit={handleRegister}>
            <div className="double">
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
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="tvUsername">TradingView Username</label>
              <input
                id="tvUsername"
                type="text"
                placeholder="TradingView username"
                value={tvUsername}
                onChange={(e) => setTvUsername(e.target.value)}
              />
            </div>

            <div className="double">
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="chosenCode">4-Digit Client Code</label>
                <input
                  id="chosenCode"
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  placeholder="1234"
                  value={chosenCode}
                  onChange={(e) =>
                    setChosenCode(e.target.value.replace(/\D/g, "").slice(0, 4))
                  }
                />
                <div className="hint">
                  Your secret will be generated in this format:
                  {" "}SFCM_{chosenCode || "1234"}_XXXXXXXX
                </div>
              </div>
            </div>

            <button className="primary-btn" type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Create Client Account"}
            </button>

            <Link href="/login" className="ghost-btn">
              Already have an account? Sign In
            </Link>

            {message ? <div className="message-box">{message}</div> : null}
            {error ? <div className="error-box">{error}</div> : null}
          </form>

          <div className="notice">
            Your account will be created with restricted access first. Payment,
            approval, and subscription activation are handled separately before
            protected delivery content is unlocked.
          </div>

          <div className="footer-note">Silver Fir Capital Management</div>
        </div>
      </section>
    </main>
  );
}

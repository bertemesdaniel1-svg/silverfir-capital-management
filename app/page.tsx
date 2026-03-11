"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const fadeRef = useRef<HTMLDivElement | null>(null);
  const ambientRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = 0;
    let currentDarkness = 0.18;
    let targetDarkness = 0.18;
    let currentParallax = 0;
    let targetParallax = 0;

    const updateTargets = () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(scrollTop / docHeight, 1);

      targetDarkness = 0.18 + progress * 0.77;
      targetParallax = scrollTop * 0.06;

      if (!rafId) animate();
    };

    const animate = () => {
      const darkDiff = targetDarkness - currentDarkness;
      const paraDiff = targetParallax - currentParallax;

      currentDarkness += darkDiff * 0.08;
      currentParallax += paraDiff * 0.08;

      if (fadeRef.current) {
        fadeRef.current.style.background = `
          linear-gradient(
            180deg,
            rgba(4,6,11,${currentDarkness}) 0%,
            rgba(4,6,11,${Math.min(currentDarkness + 0.10, 0.98)}) 18%,
            rgba(4,6,11,${Math.min(currentDarkness + 0.22, 0.985)}) 40%,
            rgba(4,6,11,${Math.min(currentDarkness + 0.36, 0.99)}) 62%,
            rgba(4,6,11,${Math.min(currentDarkness + 0.52, 0.995)}) 82%,
            rgba(4,6,11,${Math.min(currentDarkness + 0.64, 0.998)}) 100%
          ),
          linear-gradient(
            90deg,
            rgba(4,6,11,0.70) 0%,
            rgba(4,6,11,0.30) 22%,
            rgba(4,6,11,0.10) 50%,
            rgba(4,6,11,0.30) 78%,
            rgba(4,6,11,0.72) 100%
          )
        `;
      }

      if (ambientRef.current) {
        ambientRef.current.style.transform = `translateY(${currentParallax}px)`;
      }

      const stillMoving =
        Math.abs(darkDiff) > 0.001 || Math.abs(paraDiff) > 0.1;

      if (stillMoving) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = ((e.clientY - cy) / cy) * -2.2;
      const ry = ((e.clientX - cx) / cx) * 3;
      setTilt({ x: rx, y: ry });
    };

    window.addEventListener("scroll", updateTargets, { passive: true });
    window.addEventListener("mousemove", onMouseMove);

    updateTargets();

    return () => {
      window.removeEventListener("scroll", updateTargets);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="sfcm-page">
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

        .sfcm-page {
          min-height: 100vh;
          color: white;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          position: relative;
          overflow-x: hidden;
          background: linear-gradient(180deg, #070910 0%, #04060b 48%, #020409 100%);
        }

        .fixed-chart-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .fixed-chart-image {
          position: absolute;
          inset: -2%;
          width: 104%;
          height: 104%;
          object-fit: cover;
          object-position: center center;
          opacity: 0.65;
          transform: scale(1.03);
        }

        .fixed-chart-fade {
          position: absolute;
          inset: 0;
          will-change: background;
        }

        .sfcm-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 1;
          background-image:
            linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.10;
          pointer-events: none;
        }

        .ambient {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at 18% 82%, rgba(90,110,160,0.03), transparent 24%),
            radial-gradient(circle at 86% 18%, rgba(255,255,255,0.012), transparent 18%);
          opacity: 0.7;
          will-change: transform;
        }

        .page-content {
          position: relative;
          z-index: 2;
        }

        .container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 120px 24px 110px;
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

        .topbar-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          padding: 18px 24px;
        }

        .topbar {
          max-width: 1380px;
          margin: 0 auto;
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

        .nav-links {
          display: flex;
          gap: 28px;
          color: #9ca6b5;
          font-size: 14px;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .nav-links a:hover {
          color: #eef2f8;
          transform: translateY(-1px);
        }

        .hero {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-radius: 36px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 56px;
          align-items: center;
          padding: 32px 0;
        }

        .hero-left {
          animation: fadeUp 1.1s ease forwards;
        }

        .eyebrow {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 999px;
          color: #b8c1ce;
          font-size: 11px;
          letter-spacing: 0.18em;
          margin-bottom: 28px;
        }

        .title-wrap {
          transform-style: preserve-3d;
          transition: transform 0.14s ease-out;
          margin-bottom: 22px;
        }

        .hero-title {
          margin: 0 0 10px 0;
          font-size: clamp(42px, 6.1vw, 72px);
          line-height: 0.88;
          letter-spacing: -0.07em;
          font-weight: 700;
          text-wrap: balance;
          font-family: Georgia, "Times New Roman", serif;
        }

        .hero-sub-1 {
          font-size: clamp(14px, 1.65vw, 18px);
          letter-spacing: 0.36em;
          margin-bottom: 8px;
          font-weight: 650;
        }

        .hero-sub-2 {
          font-size: clamp(10px, 1vw, 13px);
          letter-spacing: 0.31em;
          margin-bottom: 0;
          font-weight: 550;
        }

        .metallic-title {
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #fefefe 7%,
              #d7dce2 20%,
              #ffffff 34%,
              #b7bec7 50%,
              #eef1f5 68%,
              #8c949e 84%,
              #dde2e8 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.24),
            0 8px 18px rgba(0,0,0,0.22);
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.04));
        }

        .metallic-sub {
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #eaedf2 24%,
              #ffffff 42%,
              #bcc3cc 70%,
              #f1f4f7 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.10),
            0 5px 14px rgba(0,0,0,0.16);
        }

        .metallic-sub-2 {
          background:
            linear-gradient(
              180deg,
              #e1e6ed 0%,
              #bcc3cc 34%,
              #eef2f6 60%,
              #919aa5 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 1px 0 rgba(255,255,255,0.07),
            0 4px 10px rgba(0,0,0,0.14);
        }

        .hero-text {
          max-width: 650px;
          color: #9aa5b5;
          font-size: 20px;
          line-height: 1.75;
          letter-spacing: -0.015em;
          margin-bottom: 34px;
          text-wrap: pretty;
        }

        .cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          border-radius: 18px;
          padding: 15px 28px;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          letter-spacing: -0.01em;
          min-height: 54px;
          position: relative;
          overflow: hidden;
        }

        .login-btn {
  padding: 10px 18px;
  border-radius: 14px;
  font-size: 14px;
  text-decoration: none;
  color: #eef2f8;
  margin-left: 10px;

  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.08),
    rgba(255,255,255,0.03)
  );

  border: 1px solid rgba(255,255,255,0.12);
  transition: all 0.2s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.18);
}

        .btn-primary::before,
        .btn-secondary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.12) 0%,
            rgba(255,255,255,0.04) 40%,
            rgba(255,255,255,0.015) 100%
          );
          pointer-events: none;
        }

        .btn-primary {
          color: #f6f8fb;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
          box-shadow:
            0 12px 30px rgba(0,0,0,0.24),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .btn-secondary {
          color: #e9edf4;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
        }

        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.14);
          box-shadow:
            0 16px 36px rgba(0,0,0,0.28),
            inset 0 1px 0 rgba(255,255,255,0.14);
        }

        .btn-primary span,
        .btn-secondary span {
          position: relative;
          z-index: 1;
        }

        .micro-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .micro-pill {
          padding: 10px 14px;
          border-radius: 999px;
          color: #aeb7c4;
          font-size: 13px;
          font-weight: 500;
        }

        .hero-right {
          animation: fadeUp 1.2s ease forwards;
        }

        .small-chart-card {
          border-radius: 32px;
          padding: 18px;
          transform-style: preserve-3d;
          transition: transform 0.18s ease;
          max-width: 560px;
          margin-left: auto;
        }

        .small-chart-label {
          color: #a5afbe;
          font-size: 11px;
          letter-spacing: 0.18em;
          margin-bottom: 12px;
          padding-left: 4px;
        }

        .small-chart-image {
          width: 100%;
          display: block;
          border-radius: 26px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .section-shell {
          margin-top: 88px;
        }

        .section-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .info-card {
          padding: 28px;
          border-radius: 28px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.10);
        }

        .info-card h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 28px;
          letter-spacing: -0.04em;
          line-height: 1.02;
          font-weight: 650;
        }

        .info-card p {
          color: #97a2b2;
          line-height: 1.8;
          margin-bottom: 0;
          font-size: 16px;
          letter-spacing: -0.01em;
        }

        .footer {
          margin-top: 70px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: #7f8999;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          letter-spacing: -0.01em;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1100px) {
          .hero-content,
          .section-grid {
            grid-template-columns: 1fr !important;
          }

          .small-chart-card {
            margin-left: 0;
          }
        }

        @media (max-width: 700px) {
          .topbar-wrap {
            padding: 12px 14px;
          }

          .container {
            padding: 110px 16px 84px;
          }

          .hero {
            min-height: auto;
          }

          .hero-text {
            font-size: 17px;
          }

          .brand-sub {
            letter-spacing: 0.08em;
          }

          .nav-links {
            gap: 16px;
          }
        }
      `}</style>

      <div className="fixed-chart-bg">
        <img
          src="/us100-bg.png"
          alt="US100 Background Chart"
          className="fixed-chart-image"
        />
        <div ref={fadeRef} className="fixed-chart-fade" />
      </div>

      <div ref={ambientRef} className="ambient" />

      <div className="topbar-wrap">
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
              <div className="brand-top metallic-sub">SFCM</div>
              <div className="brand-sub metallic-sub-2">
                SILVER FIR CAPITAL MANAGEMENT
              </div>
            </div>
          </div>
<div className="nav-links">
  <a href="#overview">Overview</a>
  <a href="#access">Access</a>
  <a href="#infrastructure">Infrastructure</a>
  <a href="#contact">Contact</a>

  <Link href="/login" className="login-btn glass">
    Login
  </Link>
</div>
        </div>
      </div>

      <div className="page-content">
        <section className="container">
          <section className="hero" id="overview">
            <div className="hero-content">
              <div className="hero-left">
                <div className="eyebrow glass">PRIVATE TRADING INFRASTRUCTURE</div>

                <div
                  className="title-wrap"
                  style={{
                    transform: `perspective(1200px) rotateX(${tilt.x * 0.16}deg) rotateY(${tilt.y * 0.16}deg)`,
                  }}
                >
                  <h1 className="hero-title metallic-title">SFCM</h1>
                  <div className="hero-sub-1 metallic-sub">SILVER FIR</div>
                  <div className="hero-sub-2 metallic-sub-2">
                    CAPITAL MANAGEMENT
                  </div>
                </div>

                <p className="hero-text">
                  Advanced algorithmic trading infrastructure built for disciplined
                  execution, premium client access, and a modern systematic trading
                  brand with institutional presentation.
                </p>

                <div className="cta-row">
                  <a href="#access" className="btn-primary glass">
                    <span>Get Access</span>
                  </a>

                  <Link href="/more" className="btn-secondary glass">
                    <span>More Information</span>
                  </Link>
                </div>

                <div className="micro-row">
                  <div className="micro-pill glass">Gold</div>
                  <div className="micro-pill glass">Nasdaq</div>
                  <div className="micro-pill glass">Automation</div>
                  <div className="micro-pill glass">Risk-First</div>
                </div>
              </div>

              <div className="hero-right">
                <div
                  className="small-chart-card glass"
                  style={{
                    transform: `perspective(1200px) rotateX(${tilt.x * 0.24}deg) rotateY(${tilt.y * 0.24}deg)`,
                  }}
                >
                  <div className="small-chart-label">US100 CHART</div>
                  <img
                    src="/us100-small.png"
                    alt="US100 Chart"
                    className="small-chart-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section-shell" id="access">
            <div className="section-grid">
              <div className="info-card glass">
                <h3>Private Access</h3>
                <p>
                  Structured onboarding for selected users who want a premium and
                  disciplined execution environment.
                </p>
              </div>

              <div className="info-card glass" id="infrastructure">
                <h3>Execution Infrastructure</h3>
                <p>
                  Website, server-side delivery, automation components, and a
                  client-ready digital framework.
                </p>
              </div>

              <div className="info-card glass">
                <h3>Controlled Methodology</h3>
                <p>
                  Professional presentation of the system and process without
                  exposing proprietary internal strategy logic.
                </p>
              </div>
            </div>
          </section>

          <footer id="contact" className="footer">
            <div>Silver Fir Capital Management</div>
            <div>contact@silverfircm.com</div>
          </footer>
        </section>
      </div>
    </main>
  );
}

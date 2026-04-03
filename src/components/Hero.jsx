import { useEffect, useState } from 'react';
import { personalInfo } from '../data/mockData';
import ParticleBg from './ParticleBg';

export default function Hero({ appReady }) {
  const { name, tagline, description, roles, stats, links } = personalInfo;

  const [roleIndex, setRoleIndex] = useState(0);
  const [animate, setAnimate]     = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate('fade-out');
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setAnimate('fade-in');
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="main" className={`hero${appReady ? ' hero--ready' : ''}`}>
      {/* Particle network canvas */}
      <ParticleBg />

      {/* Floating background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Geometric floating shapes */}
      <div className="hero__geo hero__geo--a" aria-hidden="true" />
      <div className="hero__geo hero__geo--b" aria-hidden="true" />
      <div className="hero__geo hero__geo--c" aria-hidden="true" />
      <div className="hero__geo hero__geo--d" aria-hidden="true" />

      <div className="hero__inner">

        {/* ── Left column ───────────────────────── */}
        <div className="hero__content">
          <p className="hero__eyebrow hero__reveal hero__reveal--1">Portfolio</p>

          <h1 className="hero__name hero__reveal hero__reveal--2">{name}</h1>

          <div className="hero__role-row hero__reveal hero__reveal--3">
            <span className="hero__role-prefix">I am a</span>
            <span className={`hero__role hero__role--${animate}`}>
              {roles[roleIndex]}
            </span>
          </div>

          <p className="hero__description hero__reveal hero__reveal--4">{description}</p>

          <div className="hero__stats hero__reveal hero__reveal--5">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="hero__actions hero__reveal hero__reveal--6">
            <a href="#projects"  className="btn btn--primary">View Projects</a>
            <a href="#contact"   className="btn btn--outline">Get in Touch</a>
            <a href={links.github}   target="_blank" rel="noreferrer" className="btn btn--ghost">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">LinkedIn</a>
            {links.cv && (
              <a href={links.cv} target="_blank" rel="noreferrer" className="btn btn--ghost">CV</a>
            )}
          </div>
        </div>

        {/* ── Right column ──────────────────────── */}
        <div className="hero__visual hero__reveal hero__reveal--7">
          <div className="hero__card glow-border">
            <div className="hero__profile-placeholder">
              {/* Replace the src below with your actual photo path */}
              {/* <img src="/profile.jpg" alt={name} /> */}
              <span className="hero__profile-text">Your photo here</span>
            </div>
            <div className="hero__tags">
              {personalInfo.roles.map(r => (
                <span key={r} className="hero__tag">{r.toLowerCase()}</span>
              ))}
              <span className="hero__tag">{personalInfo.location.toLowerCase()}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

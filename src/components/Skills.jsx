import React, { useState, useEffect, useRef } from 'react';
import { Code2, Smartphone, Cpu, Cloud } from 'lucide-react';
import {
  CLogo, ReactLogo, NodeLogo, ExpressLogo, MongoLogo,
  TSLogo, JSLogo, JavaLogo, SocketLogo, FirebaseLogo,
  SupabaseLogo, ViteLogo, GitLogo, GitHubLogo, SQLLogo,
  PythonLogo
} from './TechLogos';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

// ─── Individual Skill Data (each is its own card) ─────────────────────────────

const LANGS = [
  { name: 'JavaScript', icon: JSLogo,     color: '#f7df1e', glow: 'rgba(247,223,30,0.35)',  level: 90 },
  { name: 'TypeScript', icon: TSLogo,     color: '#3178c6', glow: 'rgba(49,120,198,0.35)',   level: 85 },
  { name: 'Java',       icon: JavaLogo,   color: '#f89820', glow: 'rgba(248,152,32,0.35)',   level: 80 },
  { name: 'SQL',        icon: SQLLogo,    color: '#38bdf8', glow: 'rgba(56,189,248,0.35)',   level: 80 },
  { name: 'C Language', icon: CLogo,      color: '#00599c', glow: 'rgba(0,89,156,0.35)',     level: 75 },
  { name: 'Python',     icon: PythonLogo, color: '#3776ab', glow: 'rgba(55,118,171,0.35)',   level: 65 },
];

const WEB = [
  { name: 'React',    icon: ReactLogo,   color: '#00d8ff', glow: 'rgba(0,216,255,0.35)',    level: 88 },
  { name: 'Node.js',  icon: NodeLogo,    color: '#5fa04e', glow: 'rgba(95,160,78,0.35)',    level: 82 },
  { name: 'Express',  icon: ExpressLogo, color: '#c8c8c8', glow: 'rgba(200,200,200,0.2)',   level: 82 },
  { name: 'MongoDB',  icon: MongoLogo,   color: '#13aa52', glow: 'rgba(19,170,82,0.35)',    level: 80 },
  { name: 'PHP',      icon: null,        color: '#8892be', glow: 'rgba(136,146,190,0.35)',  level: 70, label: 'PHP' },
];

const TOOLS = [
  { name: 'Git',       icon: GitLogo,      color: '#f05032', glow: 'rgba(240,80,50,0.35)',    level: 88 },
  { name: 'GitHub',    icon: GitHubLogo,   color: '#e2e8f0', glow: 'rgba(226,232,240,0.2)',   level: 85 },
  { name: 'Vite',      icon: ViteLogo,     color: '#bd34fe', glow: 'rgba(189,52,254,0.35)',   level: 85 },
  { name: 'Firebase',  icon: FirebaseLogo, color: '#ffca28', glow: 'rgba(255,202,40,0.35)',   level: 82 },
  { name: 'Supabase',  icon: SupabaseLogo, color: '#3ecf8e', glow: 'rgba(62,207,142,0.35)',   level: 78 },
  { name: 'Socket.io', icon: SocketLogo,   color: '#00f0ff', glow: 'rgba(0,240,255,0.35)',    level: 78 },
];

const DOMAIN_CARDS = [
  {
    icon: <Code2 size={28} />,
    title: 'Full-Stack Web',
    badge: 'MERN Stack',
    frontTitle: 'Scalable Web Apps',
    desc: 'Responsive React interfaces, robust Express/Node REST APIs, and MongoDB schemas.',
    footer: 'React • Node • Express • DB',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile Dev',
    badge: 'React Native',
    frontTitle: 'Cross-Platform Apps',
    desc: 'Native mobile client with Expo Router, live GPS tracking, and push notifications.',
    footer: 'Expo Router • Mobile UI',
  },
  {
    icon: <Cpu size={28} />,
    title: 'IoT & Hardware',
    badge: 'Smart Systems',
    frontTitle: 'Hardware Automation',
    desc: 'Soil moisture telemetry, microcontroller firmware, and automated solenoid valves.',
    footer: 'ESP32 • Arduino • Sensors',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud & Real-Time',
    badge: 'WebSockets',
    frontTitle: 'Real-Time Services',
    desc: 'Socket.io live tracking, Firebase FCM alerts, and Cloudinary media storage.',
    footer: 'Socket.io • Firebase • Cloud',
  },
];

// ─── PHP fallback SVG (no logo in TechLogos) ──────────────────────────────────
const PHPFallback = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="16" rx="8" fill="#8892be"/>
    <text x="16" y="12" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="#fff">PHP</text>
  </svg>
);

// ─── Helper: level → label (Beginner, Intermediate, Advanced) ────────────────
function getLevelLabel(level) {
  if (level >= 80) return { label: 'Advanced',     cls: 'lvl-advanced' };
  if (level >= 72) return { label: 'Intermediate', cls: 'lvl-intermediate' };
  return           { label: 'Beginner',     cls: 'lvl-beginner' };
}

// ─── Individual SkillCard Component ───────────────────────────────────────────

function SkillCard({ skill, isVisible }) {
  const Icon = skill.icon;
  const { label, cls } = getLevelLabel(skill.level);

  return (
    <div
      className="sc-card glass-panel"
      style={{ '--sc-color': skill.color, '--sc-glow': skill.glow }}
    >
      {/* Sticker Logo */}
      <div className="sc-sticker">
        {Icon ? <Icon size={32} /> : <PHPFallback size={32} />}
      </div>

      {/* Name + Level label */}
      <div className="sc-meta">
        <span className="sc-name">{skill.name}</span>
        <span className={`sc-level-badge ${cls}`}>{label}</span>
      </div>

      {/* Progress Bar */}
      <div className="sc-bar-track">
        <div
          className="sc-bar-fill"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

// ─── Skill Group (heading + grid of individual cards) ─────────────────────────

function SkillGroup({ label, skills, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal delay={delay}>
      <div ref={ref} className="skill-group">
        <div className="skill-group-label">
          <span>{label}</span>
        </div>
        <div className="skill-cards-row">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─── Main Skills Component ─────────────────────────────────────────────────────

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="skills-container container">

        {/* Section Header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">// 02. TECHNICAL ARSENAL</span>
            <h2 className="section-title">Skills & <span className="gradient-text">Proficiencies</span></h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning modern frontend, backend systems, databases, and IoT hardware.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Individual Skill Cards, grouped by category ── */}
        <div className="skills-all-groups">
          <SkillGroup label="Programming Languages" skills={LANGS}  delay={0.1} />
          <SkillGroup label="Web & Mobile Stack"    skills={WEB}   delay={0.15} />
          <SkillGroup label="Cloud & Tools"         skills={TOOLS} delay={0.2} />
        </div>

        {/* ── Core Specializations Flip Cards ── */}
        <ScrollReveal delay={0.15}>
          <div className="specializations-section">
            <div className="specializations-header">
              <h3>Core Specializations</h3>
              <p>Hover to flip each card and explore what I build</p>
            </div>

            <div className="domain-cards-grid">
              {DOMAIN_CARDS.map((card, idx) => (
                <div key={idx} className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="fc-icon-wrapper">{card.icon}</div>
                      <p className="title">{card.title}</p>
                    </div>
                    <div className="flip-card-back">
                      <span className="fc-badge">{card.badge}</span>
                      <p className="title fc-back-title">{card.frontTitle}</p>
                      <p className="fc-desc">{card.desc}</p>
                      <span className="fc-footer">{card.footer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

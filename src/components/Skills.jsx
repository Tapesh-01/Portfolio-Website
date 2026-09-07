import React, { useState, useEffect, useRef } from 'react';
import { Code2, Smartphone, Cpu, Cloud, Terminal, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

// ─── Data ──────────────────────────────────────────────────────────────────────

const PROGRAMMING_LANGUAGES = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'SQL', level: 80 },
  { name: 'C Language', level: 75 },
  { name: 'PHP', level: 70 },
];

const WEB_MOBILE_STACK = [
  { name: 'React.js & React Native', level: 88 },
  { name: 'Node.js & Express', level: 82 },
  { name: 'MongoDB & Databases', level: 80 },
  { name: 'HTML5 & CSS3', level: 90 },
  { name: 'REST APIs & JSON', level: 85 },
];

const CLOUD_TOOLS = [
  { name: 'Git & GitHub', level: 88 },
  { name: 'Firebase & Supabase', level: 82 },
  { name: 'Postman & API Testing', level: 85 },
  { name: 'Vercel & Deployment', level: 80 },
  { name: 'Socket.io & WebSockets', level: 78 },
  { name: 'Linux & CLI Tools', level: 74 },
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
    desc: 'Socket.io live tracking coordinates, Firebase FCM alerts, and Cloudinary storage.',
    footer: 'Socket.io • Firebase • Cloud',
  },
];

// ─── SkillItem: animated progress bar ─────────────────────────────────────────

function SkillItem({ skill, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) { setCount(0); return; }

    let startTime = null;
    const duration = 1400;
    let raf;

    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * skill.level));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, skill.level]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{count}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: isVisible ? `${skill.level}%` : '0%' }} />
      </div>
    </div>
  );
}

// ─── SkillCategoryCard: individual card per category ──────────────────────────

function SkillCategoryCard({ title, icon: Icon, skills, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal delay={delay}>
      <div ref={ref} className="skill-category-card glass-panel">
        <div className="scc-header">
          <div className="scc-icon-box">
            <Icon size={20} />
          </div>
          <h3 className="scc-title">{title}</h3>
        </div>
        <div className="skill-items-list">
          {skills.map((skill, i) => (
            <SkillItem key={i} skill={skill} isVisible={isVisible} />
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

        {/* ── Row 1: 3 Individual Skill Category Cards ── */}
        <div className="skill-cards-grid">
          <SkillCategoryCard
            title="Programming Languages"
            icon={Terminal}
            skills={PROGRAMMING_LANGUAGES}
            delay={0.1}
          />
          <SkillCategoryCard
            title="Web & Mobile Stack"
            icon={Globe}
            skills={WEB_MOBILE_STACK}
            delay={0.2}
          />
          <SkillCategoryCard
            title="Cloud & Tools"
            icon={Cloud}
            skills={CLOUD_TOOLS}
            delay={0.3}
          />
        </div>

        {/* ── Row 2: Core Specialization Flip Cards ── */}
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
                    {/* Front */}
                    <div className="flip-card-front">
                      <div className="fc-icon-wrapper">
                        {card.icon}
                      </div>
                      <p className="title">{card.title}</p>
                    </div>

                    {/* Back */}
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




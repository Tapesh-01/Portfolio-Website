import React, { useState, useEffect, useRef } from 'react';
import { Code2, Smartphone, Cpu, Cloud, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'C Language', level: 75 },
      { name: 'PHP', level: 70 }
    ]
  },
  {
    title: 'Web & Mobile Stack',
    skills: [
      { name: 'React.js & React Native', level: 88 },
      { name: 'Node.js & Express', level: 82 },
      { name: 'MongoDB & Databases', level: 80 },
      { name: 'HTML5 & CSS3', level: 90 }
    ]
  },
  {
    title: 'Tools & Cloud Services',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'IoT Systems & Sensors', level: 80 },
      { name: 'Firebase & Supabase', level: 82 },
      { name: 'Socket.io & WebSockets', level: 78 }
    ]
  }
];

const DOMAIN_CARDS = [
  {
    icon: <Code2 size={28} />,
    title: 'Full-Stack Web',
    badge: 'MERN Stack',
    frontTitle: 'Scalable Web Apps',
    desc: 'Responsive React interfaces, robust Express/Node REST APIs, and MongoDB schemas.',
    footer: 'React • Node • Express • DB'
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile Dev',
    badge: 'React Native',
    frontTitle: 'Cross-Platform Apps',
    desc: 'Native mobile client with Expo Router, live GPS tracking, and push notifications.',
    footer: 'Expo Router • Mobile UI'
  },
  {
    icon: <Cpu size={28} />,
    title: 'IoT & Hardware',
    badge: 'Smart Systems',
    frontTitle: 'Hardware Automation',
    desc: 'Soil moisture telemetry, microcontroller firmware, and automated solenoid valves.',
    footer: 'ESP32 • Arduino • Sensors'
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud & Real-Time',
    badge: 'WebSockets',
    frontTitle: 'Real-Time Services',
    desc: 'Socket.io live tracking coordinates, Firebase FCM alerts, and Cloudinary storage.',
    footer: 'Socket.io • Firebase • Cloud'
  }
];

// Single Skill Bar with 0 -> Level Animated Counter & Smooth Fill
function SkillItem({ skill, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime = null;
    const duration = 1400; // 1.4s count-up duration
    let animationFrameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(easeOutProgress * skill.level);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, skill.level]);

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{count}%</span>
      </div>
      <div className="skill-bar-track">
        <div 
          className="skill-bar-fill" 
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

// Category Box with Scroll Trigger
function SkillCategory({ category, catIdx }) {
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal delay={Math.min(catIdx * 0.1, 0.4)}>
      <div ref={categoryRef} className="skills-category glass-panel">
        <h3>{category.title}</h3>
        <div className="skills-items">
          {category.skills.map((skill, skillIdx) => (
            <SkillItem key={skillIdx} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="skills-container container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">// 02. TECHNICAL ARSENAL</span>
            <h2 className="section-title">Skills & <span className="gradient-text">Proficiencies</span></h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning modern frontend, backend systems, databases, and IoT hardware.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="skills-content">
          {/* Left Column: Proficiency Bars */}
          <div className="skills-lists">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <SkillCategory key={catIdx} category={category} catIdx={catIdx} />
            ))}
          </div>

          {/* Right Column: Uiverse 3D 180deg Flip Domain Cards with Rotating Neon Borders */}
          <div className="skills-specializations">
            <ScrollReveal delay={0.2}>
              <div className="specializations-header">
                <h3>Core Specializations</h3>
              </div>

              <div className="domain-cards-grid">
                {DOMAIN_CARDS.map((card, idx) => (
                  <div key={idx} className="flip-card">
                    <div className="flip-card-inner">
                      {/* Front of Card */}
                      <div className="flip-card-front">
                        <div className="fc-icon-wrapper">
                          {card.icon}
                        </div>
                        <p className="title">{card.title}</p>
                      </div>

                      {/* Back of Card */}
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
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

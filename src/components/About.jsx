import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Layers, Sparkles } from 'lucide-react';
import avatarImg from '../assets/profile.jpg';
import bitLogo from '../assets/bit_logo.png';
import cgbseLogo from '../assets/cgbse_logo.png';
import ScrollReveal from './ScrollReveal';
import './About.css';

const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    institution: 'Bhilai Institute of Technology, Durg',
    duration: '2022 – 2026',
    scoreType: 'CPI',
    score: '7.20',
    desc: 'Focusing on core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, Software Engineering, and IoT. Actively building projects combining web technologies and hardware integration.',
    logo: bitLogo
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Sarvoday H.S. School, Raipur',
    duration: '2022',
    scoreType: 'Percentage',
    score: '76.33%',
    desc: 'Specialized in Science (Physics, Chemistry, Mathematics).',
    logo: cgbseLogo
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Sarvoday H.S. School, Raipur',
    duration: '2020',
    scoreType: 'Percentage',
    score: '89.16%',
    desc: 'Completed secondary education with focus on general sciences, mathematics, and English.',
    logo: cgbseLogo
  }
];

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">// 01. DISCOVER</span>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <p className="section-subtitle">
              Passionate Computer Science engineer driven by building scalable full-stack applications and connected systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-content">
          <ScrollReveal delay={0.1}>
            <div className="about-bio-row">
              <div className="about-photo-col glass-panel">
                <div className="profile-photo-wrapper">
                  <img 
                    src={avatarImg} 
                    alt="Tapesh Kumar Karkel" 
                    className="about-avatar-img"
                  />
                </div>
                <div className="profile-photo-meta">
                  <h3>Tapesh Kumar Karkel</h3>
                  <span className="profile-photo-subtitle">Full Stack Developer</span>
                </div>
              </div>

              <div className="about-text-col glass-panel">
                <div className="summary-header-badge">
                  <span className="summary-pill">// CORE PROFILE</span>
                  <h3>Professional Summary</h3>
                </div>

                <p className="summary-lead">
                  Hi, I'm <strong className="highlight-name">Tapesh</strong> — a <strong>Full-Stack Developer</strong> passionate about building scalable web and cross-platform mobile architectures.
                </p>

                <p className="summary-body">
                  I specialize in the <strong>MERN ecosystem</strong> (<span className="tech-inline">React.js</span>, <span className="tech-inline">Node.js</span>, <span className="tech-inline">Express.js</span>, <span className="tech-inline">MongoDB</span>), <strong>React Native (Expo)</strong>, and modern JavaScript.
                </p>

                <p className="summary-body">
                  With hands-on experience in developing real-time multi-role systems using <strong>Socket.io</strong>, integrating <strong>Gemini AI</strong> capabilities, and configuring enterprise ERP workflows, I focus on writing clean, high-performance code backed by strong fundamentals in <strong>Java</strong>, <strong>DSA</strong>, and <strong>REST APIs</strong>.
                </p>

                <div className="summary-highlights">
                  <div className="highlight-item">
                    <Layers className="highlight-icon" size={22} />
                    <div>
                      <h4>Full-Stack & Mobile Ecosystem</h4>
                      <p>MERN Stack, React Native (Expo) & REST APIs</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <Sparkles className="highlight-icon" size={22} />
                    <div>
                      <h4>Real-Time & AI Systems</h4>
                      <p>Socket.io, Gemini AI & Java DSA Fundamentals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

            <div className="about-education">
              <ScrollReveal delay={0.1}>
                <h3 className="about-subheading">Education History</h3>
              </ScrollReveal>
              <div className="education-timeline">
                {EDUCATION.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.15}>
                    <div className="timeline-item glass-panel">
                      <div className={`timeline-marker ${item.logo ? 'has-logo' : ''}`}>
                        {item.logo ? (
                          <img src={item.logo} alt={item.institution} className="timeline-logo-img" />
                        ) : (
                          <GraduationCap size={26} />
                        )}
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <h4>{item.degree}</h4>
                          <span className="timeline-duration">
                            <Calendar size={14} /> {item.duration}
                          </span>
                        </div>
                        <h5 className="timeline-institution">{item.institution}</h5>
                        <p className="timeline-desc">{item.desc}</p>
                        <div className="timeline-score">
                          <strong>{item.scoreType}:</strong> <span>{item.score}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

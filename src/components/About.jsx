import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
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
          <h2 className="section-title">About Me</h2>
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
                <h3>Professional Summary</h3>
                <p>
                  I am a dedicated Computer Science student with a strong foundation in web development, IoT systems, and practical software design. My passion lies in constructing user-centric, responsive applications that bridge the gap between digital software interfaces and physical IoT hardware.
                </p>
                <p>
                  Currently expanding my capabilities in full-stack engineering, I enjoy building scalable architectures, integrating AI-driven features (like Gemini API integrations), and tackling real-world problem statements through clean, structured code.
                </p>
                <div className="summary-highlights">
                  <div className="highlight-item">
                    <Award className="highlight-icon" />
                    <div>
                      <h4>Full Stack Development</h4>
                      <p>Node.js, React, Express, MongoDB</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <BookOpen className="highlight-icon" />
                    <div>
                      <h4>IoT Solutions</h4>
                      <p>Sensors, microcontrollers, automated actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="about-education">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', background: 'linear-gradient(90deg, #ffffff, var(--accent-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center'}}>Education History</h3>
              <div className="education-timeline">
                {EDUCATION.map((item, index) => (
                  <div key={index} className="timeline-item glass-panel">
                    <div className={`timeline-marker ${item.logo ? 'has-logo' : ''}`}>
                      {item.logo ? (
                        <img src={item.logo} alt={item.institution} className="timeline-logo-img" />
                      ) : (
                        <GraduationCap size={18} />
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
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

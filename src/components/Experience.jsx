import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import csvtuLogo from '../assets/csvtu_logo.png';
import sailLogo from '../assets/sail_logo.png';
import next24techLogo from '../assets/next24tech_logo.png';
import ScrollReveal from './ScrollReveal';
import './Experience.css';

const EXPERIENCES = [
  {
    role: 'Web Developer Intern',
    company: 'CSVTU (Chhattisgarh Swami Vivekanand Technical University), Bhilai',
    duration: '2025',
    logo: csvtuLogo,
    bullets: [
      'Configured Academic Module for student records, sessions, and course uploads.',
      'Implemented full Evaluation & Grading workflows including student result generation.',
      'Developed a comprehensive Leave Management System with complex rules, credits, and notifications.',
      'Contributed significantly to CSVTU\'s digital transformation and ERP migration under Samarth ERP.'
    ]
  },
  {
    role: 'Integrated Real Estate Price & EMI Management System',
    company: 'Bhilai Steel Plant',
    duration: '2025',
    logo: sailLogo,
    bullets: [
      'Developed a unified property management platform integrating real-time pricing grids with EMI calculation engines.',
      'Enabled users to perform comprehensive market trend analysis and loan affordability calculations in a single unified dashboard.'
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'Next24 Tech & Services',
    duration: '2024',
    logo: next24techLogo,
    bullets: [
      'Built a highly responsive personal portfolio website and modern e-commerce UI concept.',
      'Developed and optimized front-end interfaces for an interactive e-learning platform.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section section">
      <div className="experience-container container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">// 03. CAREER JOURNEY</span>
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
            <p className="section-subtitle">
              Hands-on industry experience building scalable web solutions, ERP systems, and enterprise modules.
            </p>
          </div>
        </ScrollReveal>

        <div className="experience-cards timeline-container">
          {EXPERIENCES.map((exp, idx) => (
            <ScrollReveal key={idx} delay={Math.min(idx * 0.1, 0.4)}>
              <div className="experience-card glass-panel timeline-item">
                <div className={`experience-timeline-marker ${exp.logo ? 'has-logo' : ''}`}>
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="timeline-logo-img" />
                  ) : (
                    <Briefcase size={18} />
                  )}
                </div>
                <div className="exp-info">
                  <div className="exp-title-block">
                    <h3>{exp.role}</h3>
                    <div className="exp-meta">
                      <span className="exp-company">
                        <Building2 size={14} /> {exp.company}
                      </span>
                      <span className="exp-duration">
                        <Calendar size={14} /> {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="exp-details">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 className="bullet-icon" size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

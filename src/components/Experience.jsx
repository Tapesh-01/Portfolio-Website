import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const EXPERIENCES = [
  {
    role: 'Web Developer Intern',
    company: 'CSVTU (Chhattisgarh Swami Vivekanand Technical University), Bhilai',
    duration: '2025',
    bullets: [
      'Configured Academic Module for student records, sessions, and course uploads.',
      'Implemented full Evaluation & Grading workflows including student result generation.',
      'Developed a comprehensive Leave Management System with complex rules, credits, and notifications.',
      'Contributed significantly to CSVTU\'s digital transformation and ERP migration under Samarth ERP.'
    ]
  },
  {
    role: 'Integrated Real Estate Price & EMI Management System',
    company: 'Freelance / Self-Project (Full-Stack)',
    duration: '2025',
    bullets: [
      'Developed a unified property management platform integrating real-time pricing grids with EMI calculation engines.',
      'Enabled users to perform comprehensive market trend analysis and loan affordability calculations in a single unified dashboard.'
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'Next24 Tech & Services',
    duration: '2024',
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
        <h2 className="section-title">Professional Experience</h2>

        <div className="experience-cards">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="experience-card glass-panel">
              <div className="exp-info">
                <div className="exp-icon-wrapper">
                  <Briefcase size={22} />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}

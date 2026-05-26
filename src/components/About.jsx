import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import './About.css';

const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science and Engineering',
    institution: 'Bhilai Institute of Technology, Durg',
    duration: '2022 – 2026',
    scoreType: 'CPI',
    score: '6.97',
    desc: 'Focusing on core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, Software Engineering, and IoT. Actively building projects combining web technologies and hardware integration.'
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Sarvoday H.S. School, Raipur',
    duration: '2022',
    scoreType: 'Percentage',
    score: '76.33%',
    desc: 'Specialized in Science (Physics, Chemistry, Mathematics).'
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Sarvoday H.S. School, Raipur',
    duration: '2020',
    scoreType: 'Percentage',
    score: '89.16%',
    desc: 'Completed secondary education with focus on general sciences, mathematics, and English.'
  }
];

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text glass-panel">
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

          <div className="about-education">
            <h3>Education History</h3>
            <div className="education-timeline">
              {EDUCATION.map((item, index) => (
                <div key={index} className="timeline-item glass-panel">
                  <div className="timeline-marker">
                    <GraduationCap size={18} />
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
        </div>
      </div>
    </section>
  );
}

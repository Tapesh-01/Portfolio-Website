import React from 'react';
import Skills3D from './Skills3D';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'C Language', level: 75 },
      { name: 'PHP', level: 70 }
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js & Express', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'HTML5 & CSS3', level: 90 }
    ]
  },
  {
    title: 'Tools & Hardware',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'IoT Systems & Sensors', level: 80 },
      { name: 'Project Deployment', level: 75 },
      { name: 'REST APIs & Integration', level: 80 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="skills-container container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-content">
          <div className="skills-lists">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <div key={catIdx} className="skills-category glass-panel">
                <h3>{category.title}</h3>
                <div className="skills-items">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-visual glass-panel">
            <h3>Interactive Cloud</h3>
            <p className="visual-help">Hover & Drag to spin keywords</p>
            <div className="skills-3d-container">
              <Skills3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

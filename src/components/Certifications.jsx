import React, { useState } from 'react';
import { Award, CheckCircle, Code2, Cpu, ShieldCheck, ExternalLink, ZoomIn, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import certFullstackImg from '../assets/cert_fullstack.png';
import certDsaImg from '../assets/cert_dsa.png';
import certDeloitteImg from '../assets/cert_deloitte.png';
import './Certifications.css';

const CERTIFICATIONS = [
  {
    id: 'web-dev',
    title: 'Full Stack Web Development',
    issuer: 'Apna College (Delta)',
    type: 'web-dev',
    icon: Code2,
    image: certFullstackImg,
    badge: 'Certified',
    desc: 'Comprehensive full-stack engineering covering MERN stack architecture, responsive frontend design, scalable backend RESTful APIs, and database modeling with MongoDB.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript', 'CSS3']
  },
  {
    id: 'dsa-java',
    title: 'DSA with JAVA',
    issuer: 'Apna College (Alpha)',
    type: 'dsa-java',
    icon: Cpu,
    image: certDsaImg,
    badge: 'Certified',
    desc: 'In-depth mastery of Data Structures and Algorithms with Java. Focus on optimal time/space complexity, linked lists, trees, graphs, dynamic programming, and OOP fundamentals.',
    tags: ['Java', 'Data Structures', 'Algorithms', 'Complexity Analysis', 'OOP', 'Recursion']
  },
  {
    id: 'cyber-sec',
    title: 'Cybersecurity Job Simulation',
    issuer: 'Deloitte (Forage)',
    type: 'cyber-sec',
    icon: ShieldCheck,
    image: certDeloitteImg,
    badge: 'Certified',
    desc: 'Practical cyber industry simulation covering vulnerability assessment, threat modeling, network security defense strategies, and security protocols in real-world scenarios.',
    tags: ['Cybersecurity', 'Vulnerability Assessment', 'Threat Modeling', 'System Defense', 'Risk Analysis']
  }
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="certifications-section section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">// 05. CREDENTIALS</span>
            <h2 className="section-title">Verified <span className="gradient-text">Certifications</span></h2>
            <p className="section-subtitle">
              Industry-recognized technical credentials validating full-stack engineering, algorithms, and cybersecurity depth.
            </p>
          </div>
        </ScrollReveal>

        <div className="certifications-list">
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <ScrollReveal key={cert.id} delay={index * 0.15}>
                <div className={`cert-card ${cert.type}`}>
                  {/* Left Column: Certificate Preview Image */}
                  <div 
                    className="cert-image-wrapper"
                    onClick={() => setActiveCert(cert)}
                    title="Click to view full certificate"
                  >
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`} 
                      className="cert-thumb-img" 
                      loading="lazy"
                    />
                    <div className="cert-image-overlay">
                      <span className="cert-zoom-btn">
                        <ZoomIn size={18} /> View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Details, Tags & Action Button */}
                  <div className="cert-content">
                    <div>
                      <div className="cert-card-header">
                        <span className="cert-issuer">{cert.issuer}</span>
                        <span className="cert-badge">
                          <CheckCircle size={13} /> {cert.badge}
                        </span>
                      </div>

                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-desc">{cert.desc}</p>
                    </div>

                    <div className="cert-bottom-row">
                      <div className="cert-tags">
                        {cert.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="cert-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button 
                        className="cert-action-btn"
                        onClick={() => setActiveCert(cert)}
                        aria-label={`View ${cert.title} Certificate`}
                      >
                        <ZoomIn size={15} />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox / Modal for Full-Size Certificate View */}
      {activeCert && (
        <div className="cert-modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <h3>{activeCert.title} - {activeCert.issuer}</h3>
              <button 
                className="cert-modal-close"
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={22} />
              </button>
            </div>
            <div className="cert-modal-body">
              <img 
                src={activeCert.image} 
                alt={`${activeCert.title} Certificate Full`} 
                className="cert-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Hero3D from './Hero3D';
import HeroVisual3D from './HeroVisual3D';
import './Hero.css';

const GithubIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const ROLES = [
  'Full-Stack Developer',
  'IoT Enthusiast',
  'Software Enthusiast',
  'Problem Solver'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = ROLES[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentFullText) {
          // Pause at the end of typing
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-content-3d-bg">
            <Hero3D />
          </div>
          <div className="hero-badge">
            <span className="badge-dot glow-animation"></span>
            Available for Internships & Projects
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">Tapesh Karkel</span>
          </h1>
          <h2 className="hero-subtitle">
            I am a <span className="typing-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </h2>
          <p className="hero-description">
            Computer Science student at Bhilai Institute of Technology with expertise in full-stack web development, IoT systems, and building responsive, user-centric software solutions.
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollToSection('#projects')} className="btn-primary">
              View Work <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('#contact')} className="btn-secondary">
              Contact Me <Mail size={18} />
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Tapesh-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={22} />
            </a>
            <a href="mailto:tapeshkarkel@gmail.com" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-3d-wrapper">
            <HeroVisual3D />
          </div>
        </div>
      </div>
    </section>
  );
}

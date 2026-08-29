import React, { useState, useEffect } from 'react';
import { Code2, Cpu, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import profileImg from '../assets/profile.jpg';
import spiderGreenImg from '../assets/spider_green.png';
import spiderBlueImg from '../assets/spider_blue.png';
import './Hero.css';

import ThemeTransition from './ThemeTransition';
import MarqueeTicker from './MarqueeTicker';
import ResumeDownloadBtn from './ResumeDownloadBtn';

const ROLES = [
  'Full-Stack Developer',
  'IoT Enthusiast',
  'Software Enthusiast',
  'Problem Solver'
];

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Theme Toggle State (Dark / Bright)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [isPulling, setIsPulling] = useState(false);
  const [transitioningTheme, setTransitioningTheme] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (transitioningTheme) return;
    setIsPulling(true);
    setTimeout(() => setIsPulling(false), 500);

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTransitioningTheme(nextTheme);

    // Switch theme halfway through hamster power-up
    setTimeout(() => {
      setTheme(nextTheme);
    }, 700);
  };

  const handleTransitionComplete = () => {
    setTransitioningTheme(null);
  };

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
        {/* Left Side: Typography & CTAs */}
        <ScrollReveal>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot glow-animation"></span>
              Hello there! I'm available for work
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <button className="uiverse-btn" data-text="Tapesh Karkel">
                <span className="actual-text">&nbsp;Tapesh Karkel&nbsp;</span>
                <span aria-hidden="true" className="hover-text">&nbsp;Tapesh Karkel&nbsp;</span>
              </button>
            </h1>

            <h2 className="hero-subtitle">
              I am a <span className="typing-text">{displayText}</span>
              <span className="cursor-blink">|</span>
            </h2>

            <p className="hero-description">
              Computer Science student at Bhilai Institute of Technology with expertise in full-stack web development, IoT systems, and building responsive, user-centric software solutions.
            </p>

            <div className="hero-actions">
              <button onClick={() => scrollToSection('#projects')} className="uiverse-view-btn">
                <span className="uv-circle" aria-hidden="true">
                  <span className="uv-icon uv-arrow"></span>
                </span>
                <span className="uv-btn-text">View Work</span>
              </button>
              <button onClick={() => scrollToSection('#contact')} className="uiverse-contact-btn">
                <div className="ucb-track">
                  <div className="ucb-spacer"></div>
                  <div className="ucb-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
                      <path fill="currentColor" d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" />
                    </svg>
                  </div>
                </div>
                <span className="ucb-label">Contact Me</span>
              </button>
              <ResumeDownloadBtn onOpenModal={onOpenResume} />
            </div>


            <div className="hero-socials">
              <ul className="example-2">
                <li className="icon-content">
                  <a
                    href="https://linkedin.com/in/tapesh-karkel"
                    aria-label="LinkedIn"
                    data-social="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://github.com/Tapesh-01"
                    aria-label="GitHub"
                    data-social="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">GitHub</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://instagram.com/tapesh_karkel"
                    aria-label="Instagram"
                    data-social="instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <div className="tooltip">Instagram</div>
                </li>
                <li className="icon-content">
                  <a
                    href="https://leetcode.com/u/tapeshkarkel/"
                    aria-label="LeetCode"
                    data-social="leetcode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  </a>
                  <div className="tooltip">LeetCode</div>
                </li>
                <li className="icon-content">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        const firstInput = contactSection.querySelector('input[name="name"], input');
                        if (firstInput) setTimeout(() => firstInput.focus(), 600);
                      }
                    }}
                    aria-label="Email Tapesh"
                    data-social="email"
                  >
                    <div className="filled"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.547Z"/>
                    </svg>
                  </a>
                  <div className="tooltip">Email Me</div>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Side: Portrait Cutout + Neon Backdrop + Floating Badges */}
        <ScrollReveal delay={0.2}>
          <div className="hero-visual-card">
            {/* Neon Green Geometric Backdrop Shape */}
            <div className="hero-neon-backdrop"></div>

            {/* Original Portrait Image Frame */}
            <div className="hero-portrait-frame">
              <img src={profileImg} alt="Tapesh Karkel" className="hero-portrait-img" />
            </div>

            {/* Floating Role Pill 1 */}
            <div className="hero-floating-chip chip-left">
              <Code2 size={16} className="chip-icon" />
              <span>Full-Stack Dev</span>
            </div>

            {/* Floating Role Pill 2 */}
            <div className="hero-floating-chip chip-right">
              <Cpu size={16} className="chip-icon" />
              <span>Software Solutions</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Hanging Spider Theme Switcher */}
      <div
        className="spider-container"
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        aria-label="Toggle Bright / Dark Theme"
        title="Click me to switch Light / Dark mode! 💡"
      >
        <div className={`rope center ${isPulling ? 'pulling' : ''}`}>
          <img 
            src={theme === 'dark' ? spiderBlueImg : spiderGreenImg} 
            alt="Spider Theme Toggle" 
            className="hanging-spider-img" 
          />
        </div>
      </div>

      {/* Bottom Infinite Marquee Ticker */}
      <MarqueeTicker />

      {/* Fullscreen Hamster Wheel Theme Transition Overlay */}
      {transitioningTheme && (
        <ThemeTransition 
          targetTheme={transitioningTheme} 
          onComplete={handleTransitionComplete} 
        />
      )}
    </section>
  );
}





import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, FileText, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Experience', target: '#experience' },
  { label: 'Projects', target: '#projects' },
  { label: 'Certifications', target: '#certifications' },
  { label: 'Contact', target: '#contact' }
];

export default function Navbar({ onOpenResume, theme = 'dark', onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver to set active section
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // check center of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
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
      setActiveSection(target);
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <Code2 className="logo-icon" size={24} />
          <span>Tapesh.dev</span>
        </a>

        {/* Desktop Navigation, Theme Toggle & Resume CTA */}
        <div className="navbar-right-group">
          <ul className="navbar-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.target}>
                <a
                  href={item.target}
                  className={activeSection === item.target ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.target)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="nav-theme-btn" 
            onClick={onToggleTheme} 
            aria-label="Toggle Light / Dark Theme"
            title={theme === 'dark' ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="theme-sun-icon" />
            ) : (
              <Moon size={18} className="theme-moon-icon" />
            )}
          </button>

          <button className="nav-resume-btn" onClick={onOpenResume} aria-label="View Resume">
            <FileText size={15} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Header Action Group (Theme Button + Hamburger) */}
        <div className="navbar-mobile-actions">
          <button 
            className="mobile-header-theme-btn" 
            onClick={onToggleTheme} 
            aria-label="Toggle Light / Dark Theme"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Sun size={19} className="theme-sun-icon" />
            ) : (
              <Moon size={19} className="theme-moon-icon" />
            )}
          </button>

          <button className="navbar-mobile-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.target}>
              <a
                href={item.target}
                className={activeSection === item.target ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.target)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-drawer-cta-row">
            <button 
              className="mobile-theme-btn" 
              onClick={() => { onToggleTheme(); closeMenu(); }}
              aria-label="Toggle Light / Dark Mode"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} className="theme-sun-icon" />
                  <span>Light Mode ☀️</span>
                </>
              ) : (
                <>
                  <Moon size={18} className="theme-moon-icon" />
                  <span>Dark Mode 🌙</span>
                </>
              )}
            </button>
            <button className="mobile-resume-btn" onClick={() => { onOpenResume(); closeMenu(); }}>
              <FileText size={18} />
              <span>Resume</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';
import ScrollProgressBar from './components/ScrollProgressBar';
import ThemeTransition from './components/ThemeTransition';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Global Theme State (Dark / Light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [transitioningTheme, setTransitioningTheme] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (transitioningTheme) return;

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

  return (
    <>
      {/* Top Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Fullscreen Supersonic Speeder Preloader */}
      <Preloader />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Interactive Fullscreen Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Navigation (With Mobile & Desktop Theme Toggles) */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section (Contains Spider Toggle and Bottom Marquee Ticker) */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Modern Footer with Infinite Tech Stack Ribbon */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Fullscreen Hamster Wheel Theme Transition Overlay */}
      {transitioningTheme && (
        <ThemeTransition 
          targetTheme={transitioningTheme} 
          onComplete={handleTransitionComplete} 
        />
      )}
    </>
  );
}

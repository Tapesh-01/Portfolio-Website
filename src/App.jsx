import React, { useState } from 'react';
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
import MarqueeTicker from './components/MarqueeTicker';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section (Contains Bottom Marquee Ticker) */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

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
    </>
  );
}

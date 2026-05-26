import React from 'react';
import ThreeBg from './components/ThreeBg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* 3D Background */}
      <ThreeBg />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 10,
        padding: '3rem 0',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(10, 11, 16, 0.8)',
        backdropFilter: 'blur(10px)',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Tapesh Kumar Karkel. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Built with React, Vite, and Three.js
          </p>
        </div>
      </footer>
    </>
  );
}

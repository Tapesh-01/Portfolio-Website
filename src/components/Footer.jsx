import React from 'react';
import { Sparkles } from 'lucide-react';
import {
  ReactLogo,
  ReactRouterLogo,
  NodeLogo,
  ExpressLogo,
  MongoLogo,
  TSLogo,
  JSLogo,
  JavaLogo,
  PythonLogo,
  GeminiLogo,
  SocketLogo,
  FirebaseLogo,
  SupabaseLogo,
  CloudinaryLogo,
  IoTLogo,
  ViteLogo,
  GitLogo,
  SQLLogo
} from './TechLogos';
import './Footer.css';

const TECH_STICKERS = [
  { name: 'React', icon: <ReactLogo size={22} />, color: '#00d8ff', glow: 'rgba(0, 216, 255, 0.5)' },
  { name: 'Router', icon: <ReactRouterLogo size={20} />, color: '#e11d48', glow: 'rgba(225, 29, 72, 0.5)' },
  { name: 'Node.js', icon: <NodeLogo size={20} />, color: '#339933', glow: 'rgba(51, 153, 51, 0.5)' },
  { name: 'Express', icon: <ExpressLogo size={20} />, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.4)' },
  { name: 'MongoDB', icon: <MongoLogo size={22} />, color: '#13aa52', glow: 'rgba(19, 170, 82, 0.5)' },
  { name: 'TypeScript', icon: <TSLogo size={20} />, color: '#3178c6', glow: 'rgba(49, 120, 198, 0.5)' },
  { name: 'JavaScript', icon: <JSLogo size={20} />, color: '#f7df1e', glow: 'rgba(247, 223, 30, 0.5)' },
  { name: 'Java', icon: <JavaLogo size={20} />, color: '#f89820', glow: 'rgba(248, 152, 32, 0.5)' },
  { name: 'Python', icon: <PythonLogo size={20} />, color: '#3776ab', glow: 'rgba(55, 118, 171, 0.5)' },
  { name: 'Gemini', icon: <GeminiLogo size={20} />, color: '#9b51e0', glow: 'rgba(155, 81, 224, 0.5)' },
  { name: 'Socket.io', icon: <SocketLogo size={20} />, color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.5)' },
  { name: 'Firebase', icon: <FirebaseLogo size={20} />, color: '#ffca28', glow: 'rgba(255, 202, 40, 0.5)' },
  { name: 'Supabase', icon: <SupabaseLogo size={20} />, color: '#3ecf8e', glow: 'rgba(62, 207, 142, 0.5)' },
  { name: 'Cloudinary', icon: <CloudinaryLogo size={20} />, color: '#3448c5', glow: 'rgba(52, 72, 197, 0.5)' },
  { name: 'IoT', icon: <IoTLogo size={20} />, color: '#00ffff', glow: 'rgba(0, 255, 255, 0.5)' },
  { name: 'Vite', icon: <ViteLogo size={20} />, color: '#bd34fe', glow: 'rgba(189, 52, 254, 0.5)' },
  { name: 'Git', icon: <GitLogo size={20} />, color: '#f05032', glow: 'rgba(240, 80, 50, 0.5)' },
  { name: 'SQL', icon: <SQLLogo size={20} />, color: '#00758f', glow: 'rgba(0, 117, 143, 0.5)' }
];

export default function Footer() {
  // Duplicate array 3 times for seamless infinite loop
  const marqueeItems = [...TECH_STICKERS, ...TECH_STICKERS, ...TECH_STICKERS];

  return (
    <footer className="portfolio-footer">
      {/* 1. Infinite Glowing Tech Stack Ribbon */}
      <div className="footer-tech-ribbon-container">
        <div className="tech-ribbon-header">
          <span className="ribbon-label">
            <Sparkles size={13} className="label-icon" />
            <span>TECH STACK &amp; TOOLS ECOSYSTEM</span>
          </span>
        </div>

        <div className="footer-tech-marquee">
          <div className="tech-marquee-track">
            {marqueeItems.map((tech, idx) => (
              <div 
                key={idx} 
                className="tech-ribbon-badge"
                style={{ 
                  '--tech-color': tech.color,
                  '--tech-glow': tech.glow 
                }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Original Clean Centered Bottom Bar */}
      <div className="footer-bottom-bar container">
        <p className="copyright-text">
          © {new Date().getFullYear()} Tapesh Kumar Karkel. All rights reserved.
        </p>
        <p className="built-with-text">
          Built with React 19, Vite &amp; Modern CSS
        </p>
      </div>
    </footer>
  );
}

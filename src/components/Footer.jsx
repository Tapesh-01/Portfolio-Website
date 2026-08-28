import React from 'react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  Cloud, 
  Server, 
  Sparkles, 
  Radio, 
  Flame, 
  Zap, 
  Layers, 
  GitBranch, 
  ExternalLink, 
  Mail, 
  FileText,
  Heart
} from 'lucide-react';
import './Footer.css';

const GithubIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TECH_ITEMS = [
  { name: 'React.js', icon: <Code2 size={16} />, color: '#00d8ff', glow: 'rgba(0, 216, 255, 0.4)' },
  { name: 'React Native', icon: <Globe size={16} />, color: '#61dafb', glow: 'rgba(97, 218, 251, 0.4)' },
  { name: 'Expo Router', icon: <Layers size={16} />, color: '#ffffff', glow: 'rgba(255, 255, 255, 0.3)' },
  { name: 'Node.js', icon: <Server size={16} />, color: '#5fa04e', glow: 'rgba(95, 160, 78, 0.4)' },
  { name: 'Express.js', icon: <Zap size={16} />, color: '#e2e8f0', glow: 'rgba(226, 232, 240, 0.3)' },
  { name: 'MongoDB Atlas', icon: <Database size={16} />, color: '#47a248', glow: 'rgba(71, 162, 72, 0.4)' },
  { name: 'TypeScript', icon: <Code2 size={16} />, color: '#3178c6', glow: 'rgba(49, 120, 198, 0.4)' },
  { name: 'JavaScript ES6+', icon: <Zap size={16} />, color: '#f7df1e', glow: 'rgba(247, 223, 30, 0.4)' },
  { name: 'Java & DSA', icon: <Code2 size={16} />, color: '#f89820', glow: 'rgba(248, 152, 32, 0.4)' },
  { name: 'Gemini AI', icon: <Sparkles size={16} />, color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },
  { name: 'Socket.io', icon: <Radio size={16} />, color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.4)' },
  { name: 'Firebase FCM', icon: <Flame size={16} />, color: '#ffca28', glow: 'rgba(255, 202, 40, 0.4)' },
  { name: 'Supabase', icon: <Database size={16} />, color: '#3ecf8e', glow: 'rgba(62, 207, 142, 0.4)' },
  { name: 'Cloudinary CDN', icon: <Cloud size={16} />, color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.4)' },
  { name: 'IoT & Sensors', icon: <Cpu size={16} />, color: '#37FF8B', glow: 'rgba(55, 255, 139, 0.4)' },
  { name: 'Vite & Build', icon: <Zap size={16} />, color: '#bd34fe', glow: 'rgba(189, 52, 254, 0.4)' },
  { name: 'Git & GitHub', icon: <GitBranch size={16} />, color: '#f05032', glow: 'rgba(240, 80, 50, 0.4)' },
  { name: 'SQL & DBMS', icon: <Database size={16} />, color: '#0284c7', glow: 'rgba(2, 132, 199, 0.4)' }
];

export default function Footer() {
  // Duplicate array 3 times for seamless infinite loop
  const marqueeItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

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

      {/* 2. Sleek Clean Minimal Bottom Bar (Zero Redundancy) */}
      <div className="footer-minimal-container container">
        <div className="footer-minimal-content">
          <div className="footer-minimal-brand">
            <span className="brand-logo">&lt;TK /&gt;</span>
            <span className="brand-name">Tapesh Kumar Karkel</span>
          </div>

          <div className="footer-minimal-info">
            <p className="copyright-text">
              © {new Date().getFullYear()} Tapesh Kumar Karkel. All rights reserved.
            </p>
            <span className="footer-dot">•</span>
            <p className="built-with-text">
              Built with <Heart size={12} className="heart-icon" /> using <strong>React 19, Vite &amp; Modern CSS</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Globe, Cpu, HeartPulse, Film, Smartphone, Target, Layers, Play, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import tiffinImage from '../assets/tiffin_project.png';
import wanderlustImage from '../assets/wanderlust_project.png';
import movieImage from '../assets/movie_project.jpg';
import plantImage from '../assets/plant_watering_project.png';
import './Projects.css';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PROJECTS = [
  {
    title: 'My Tiffin App',
    subtitle: 'Student Tiffin Delivery & Mess Logistics Ecosystem',
    category: 'full-stack',
    icon: <Smartphone size={24} />,
    image: tiffinImage,
    videoUrl: null, // Ready for .mp4/.webm hover playback
    live: true,
    year: '2026',
    problemSolved: 'Eliminates student mess coordination chaos, manual cash tallying, and delivery blindspots by centralizing recurring meal subscriptions, automated wallet ledgers, and live courier tracking into a single unified mobile ecosystem.',
    keyArchitecture: 'Built a cross-platform React Native client with Expo SDK 56 & Expo Router, backed by Node.js/Express with real-time Socket.io GPS courier tracking, Firebase FCM push alerts, and secure JWT/Bcrypt authentication.',
    tags: ['React Native', 'Expo Router', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Socket.io', 'Firebase FCM', 'Supabase', 'Cloudinary'],
    githubUrl: 'https://github.com/Tapesh-01/TIffin-Delivery-App',
    liveUrl: 'https://tiffin-student-app.vercel.app/'
  },
  {
    title: 'Wanderlust',
    subtitle: 'Full-Stack Rental Marketplace with AI Chat Assistant',
    category: 'full-stack',
    icon: <Globe size={24} />,
    image: wanderlustImage,
    videoUrl: null, // Ready for .mp4/.webm hover playback
    live: true,
    year: '2025',
    problemSolved: 'Solves friction in lodging discovery, host listing verification, and round-the-clock tenant support with dynamic spatial map overlays, verified bookings, and 24/7 AI-assisted customer triage.',
    keyArchitecture: 'Engineered a scalable MVC lodging marketplace using Node.js & Express, MongoDB geocoding with Leaflet.js interactive maps, Cloudinary media CDN, and an integrated Gemini AI conversational assistant (WanderBot).',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'Cloudinary', 'Gemini AI', 'REST APIs', 'EJS/Bootstrap'],
    githubUrl: 'https://github.com/Tapesh-01/Wandurlust',
    liveUrl: 'https://wandurlust-31y0.onrender.com/'
  },
  {
    title: 'Movie Recommendation System',
    subtitle: 'Machine Learning Vector Similarity Engine',
    category: 'full-stack',
    icon: <Film size={24} />,
    image: movieImage,
    videoUrl: null,
    live: false,
    year: '2024',
    problemSolved: 'Solves content discovery fatigue and choice overload by computing vectorized cosine similarity across 5,000+ TMDb movie attributes to deliver personalized, high-precision recommendations based on genre, cast, and plot embeddings.',
    keyArchitecture: 'Engineered an end-to-end ML data preprocessing pipeline in Jupyter Notebooks, serialized model similarity matrices via Pickle, and deployed a fast Streamlit web application with custom UI components.',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'TMDb 5000 API', 'Cosine Similarity', 'Pickle', 'Pandas & NumPy'],
    githubUrl: 'https://github.com/Tapesh-01/Movie-Recommendation-System',
    liveUrl: null
  },
  {
    title: 'Automatic Plant Watering System',
    subtitle: 'IoT Irrigation Solution with Real-time Moisture Telemetry',
    category: 'iot',
    icon: <Cpu size={24} />,
    image: plantImage,
    videoUrl: null,
    live: false,
    year: '2024',
    problemSolved: 'Prevents plant dehydration and eliminates severe water wastage in precision agriculture by replacing manual watering with autonomous soil moisture telemetry and smart threshold-based pump activation.',
    keyArchitecture: 'Designed an embedded hardware circuit interfacing analog capacitive soil moisture sensors with microcontroller logic and solenoid relay drivers for precision automated irrigation control.',
    tags: ['IoT & Embedded', 'Soil Moisture Sensors', 'Microcontrollers (Arduino/ESP)', 'Relay Drivers', 'Hardware Prototyping'],
    githubUrl: null,
    liveUrl: null
  },
  {
    title: 'Sharda Medical Website',
    subtitle: 'Pharmacy Pricing Catalogue & Automated Order Bridge',
    category: 'full-stack',
    icon: <HeartPulse size={24} />,
    image: null,
    videoUrl: null,
    live: false,
    year: '2023',
    problemSolved: 'Eliminates retail pharmacy inquiry bottlenecks by providing a responsive digital drug catalogue with real-time pricing and automated one-tap WhatsApp prescription ordering.',
    keyArchitecture: 'Developed a mobile-first pharmacy inventory catalogue with dynamic search filtering and direct API-linked WhatsApp prescription dispatch for fast fulfillment.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WhatsApp Business API', 'Responsive UI'],
    githubUrl: null,
    liveUrl: null
  }
];

// Interactive Media Preview Component (Hover to Auto-Play Video / Mockup Viewport)
const ProjectMedia = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (project.videoUrl && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, project.videoUrl]);

  if (!project.image && !project.videoUrl) {
    return (
      <div className="project-image-col placeholder">
        <div className="project-placeholder-content">
          <div className="project-placeholder-icon">
            {React.cloneElement(project.icon, { size: 42 })}
          </div>
          <h4>{project.title}</h4>
          <span>{project.subtitle}</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`project-image-col ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Device / Browser Header Bar */}
      <div className="project-mockup-bar">
        <div className="mockup-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="mockup-url">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
        {project.live && (
          <span className="mockup-live-badge">
            <span className="live-ping"></span> Live
          </span>
        )}
      </div>

      {/* Media Canvas (Video on hover if available, else static high-res poster) */}
      <div className="project-media-wrapper">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.image}
            muted
            loop
            playsInline
            preload="none"
            className="project-feature-video"
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-feature-img" 
            loading="lazy"
          />
        )}

        {/* Subtle Video Hover Badge / Scanline */}
        {project.videoUrl && (
          <div className="video-hover-indicator">
            <Play size={12} className="play-icon" />
            <span>Hover to preview</span>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, idx }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`project-card glass-panel ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${Math.min(idx * 0.1, 0.5)}s` }}
    >
      <div className="project-timeline-marker">
        {React.cloneElement(project.icon, { size: 26 })}
      </div>

      <div className="project-card-inner">
        {/* Left Column: Interactive Media (Video / Mockup Viewport) */}
        <ProjectMedia project={project} />

        {/* Right Column: Structured Engineering Details */}
        <div className="project-content-col">
          {/* Header Row: Title, Category & Top Link Icons */}
          <div className="project-header">
            <div className="project-title-area">
              <div className="project-category-pill">
                <span className="pill-dot"></span>
                <span>{project.category.toUpperCase()}</span>
                <span className="pill-divider">•</span>
                <span>{project.year}</span>
              </div>
              <h3 className="project-main-title">{project.title}</h3>
              <h4 className="project-subtitle-text">{project.subtitle}</h4>
            </div>
            
            <div className="project-top-links">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-link" 
                  aria-label="GitHub Repository"
                  title="View GitHub Repository"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-link primary" 
                  aria-label="Live Demo"
                  title="Open Live Web Application"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Structured Block 1: 🎯 Problem Solved */}
          <div className="project-problem-box">
            <div className="box-header">
              <Target size={15} className="box-icon" />
              <span>PROBLEM SOLVED</span>
            </div>
            <p className="box-text">{project.problemSolved}</p>
          </div>

          {/* Structured Block 2: ⚡ Core Architecture */}
          {project.keyArchitecture && (
            <div className="project-architecture-box">
              <div className="box-header">
                <Sparkles size={15} className="box-icon" />
                <span>KEY ARCHITECTURE &amp; INNOVATION</span>
              </div>
              <p className="box-text">{project.keyArchitecture}</p>
            </div>
          )}

          {/* Structured Block 3: 🛠️ Tech Stack & Direct Actions */}
          <div className="project-footer-area">
            <div className="project-tags-section">
              <div className="tags-label">
                <Layers size={13} />
                <span>TECH STACK USED</span>
              </div>
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="project-action-buttons">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-action-btn secondary"
                >
                  <GithubIcon size={15} />
                  <span>Source Code</span>
                </a>
              )}

              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-action-btn primary"
                >
                  <span className="btn-ping-dot"></span>
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-eyebrow">// 04. FEATURED WORK</span>
            <h2 className="section-title">Academic <span className="gradient-text">Projects</span></h2>
            <p className="section-subtitle">
              Engineered end-to-end full-stack applications, mobile ecosystems, ML recommendation models, and IoT hardware solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <span>All Projects</span>
          </button>
          <button
            className={`filter-btn ${filter === 'full-stack' ? 'active' : ''}`}
            onClick={() => setFilter('full-stack')}
          >
            <span>Full-Stack</span>
          </button>
          <button
            className={`filter-btn ${filter === 'iot' ? 'active' : ''}`}
            onClick={() => setFilter('iot')}
          >
            <span>IoT &amp; Hardware</span>
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title + idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

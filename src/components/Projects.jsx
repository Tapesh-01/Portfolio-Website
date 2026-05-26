import React, { useState } from 'react';
import { ExternalLink, Globe, Cpu, HeartPulse, Film } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const PROJECTS = [
  {
    title: 'Wanderlust',
    subtitle: 'Airbnb-like Platform',
    category: 'full-stack',
    icon: <Globe size={24} />,
    live: true,
    year: '2025',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'Cloudinary', 'Gemini AI'],
    desc: 'A full-stack rental lodging platform. Features secure listings and bookings, dynamic map overlays with Leaflet.js, and an integrated AI chat assistant (WanderBot) built using Gemini AI to handle customer support inquiries.',
    githubUrl: 'https://github.com/Tapesh-01/Wanderlust',
    liveUrl: 'https://wandurlust-31y0.onrender.com/'
  },
  {
    title: 'Movie Recommendation System',
    subtitle: 'Machine Learning Web Application',
    category: 'full-stack',
    icon: <Film size={24} />,
    live: false,
    year: '2024',
    tags: ['Python', 'Streamlit', 'TMDb Dataset', 'Kaggle API', 'HTML/CSS/JS'],
    desc: 'A content-based movie recommendation system built using the TMDb 5000 Movie Dataset from Kaggle. Coded the data preprocessing and recommendation model in a Jupyter Notebook, fetched data using the Kaggle API, serialized the model components using Pickle, and deployed the Streamlit application with a custom HTML/CSS/JS frontend.',
    githubUrl: 'https://github.com/Tapesh-01/Movie-Recommendation-System',
    liveUrl: null
  },
  {
    title: 'Automatic Plant Watering System',
    subtitle: 'IoT Irrigation Solution',
    category: 'iot',
    icon: <Cpu size={24} />,
    live: false,
    year: '2024',
    tags: ['IoT', 'Soil Sensors', 'Automated Irrigation', 'Microcontrollers'],
    desc: 'An automated plant watering system utilizing real-time soil moisture sensors. Leverages smart thresholds to trigger solenoid valves or pumps, delivering precise irrigation controls and preventing water wastage.',
    githubUrl: null,
    liveUrl: null
  },
  {
    title: 'Sharda Medical Website',
    subtitle: 'Pharmacy Pricing & Order Integration',
    category: 'full-stack',
    icon: <HeartPulse size={24} />,
    live: false,
    year: '2023',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WhatsApp API'],
    desc: 'A responsive pharmacy catalogue system. Enables users to browse inventories, compare drug pricing, and place direct ordering requests to the pharmacist via automated WhatsApp chat integrations.',
    githubUrl: null,
    liveUrl: null
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container container">
        <h2 className="section-title">Academic Projects</h2>

        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'full-stack' ? 'active' : ''}`}
            onClick={() => setFilter('full-stack')}
          >
            Full-Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'iot' ? 'active' : ''}`}
            onClick={() => setFilter('iot')}
          >
            IoT & Hardware
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              <div className="project-header">
                <div className="project-icon-box">
                  {project.icon}
                </div>
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  {project.live && <span className="project-live-tag">Live</span>}
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.desc}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">{tag}</span>
                ))}
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <GithubIcon size={16} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn primary">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

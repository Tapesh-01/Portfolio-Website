import React, { useEffect } from 'react';
import { FileText, Download, ExternalLink, X } from 'lucide-react';
import resumePreviewImg from '../assets/resume_preview.png';
import './ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const resumePdfUrl = '/Tapesh_Kumar_Karkel_Resume.pdf';

  return (
    <div className={`resume-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="resume-modal-header">
          <div className="resume-modal-title-group">
            <FileText size={22} style={{ color: 'var(--accent-cyan)' }} />
            <h3>Tapesh Kumar Karkel - Resume</h3>
          </div>

          <div className="resume-modal-actions">
            <a 
              href={resumePdfUrl} 
              download="Tapesh_Kumar_Karkel_Resume.pdf" 
              className="resume-action-btn download-btn"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>

            <a 
              href={resumePdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-action-btn view-btn"
            >
              <ExternalLink size={16} />
              <span>Fullscreen</span>
            </a>

            <button className="resume-close-btn" onClick={onClose} aria-label="Close Resume Modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* High-Resolution Document Body */}
        <div className="resume-modal-body">
          <img
            src={resumePreviewImg}
            alt="Tapesh Kumar Karkel Resume"
            className="resume-preview-img"
          />
        </div>
      </div>
    </div>
  );
}

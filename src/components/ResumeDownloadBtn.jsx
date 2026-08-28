import React, { useState } from 'react';
import './ResumeDownloadBtn.css';

export default function ResumeDownloadBtn({ onOpenModal }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleClick = (e) => {
    if (isDownloaded) {
      // Already downloaded, clicking "Open" opens the interactive resume modal
      e.preventDefault();
      if (onOpenModal) onOpenModal();
      return;
    }

    if (!isChecked) {
      setIsChecked(true);
      // Trigger file download
      const link = document.createElement('a');
      link.href = '/Tapesh_Kumar_Karkel_Resume.pdf';
      link.download = 'Tapesh_Kumar_Karkel_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // After animation completes (3.2s)
      setTimeout(() => {
        setIsDownloaded(true);
      }, 3400);
    }
  };

  return (
    <div className="uiverse-dl-container">
      <label className="uiverse-dl-label" onClick={handleClick}>
        <input 
          type="checkbox" 
          className="uiverse-dl-input" 
          checked={isChecked} 
          readOnly 
        />
        <span className="uiverse-dl-circle">
          <svg
            className="uiverse-dl-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            ></path>
          </svg>
          <div className="uiverse-dl-square"></div>
        </span>
        <p className="uiverse-dl-title">Download CV</p>
        <p className="uiverse-dl-title">Open Resume</p>
      </label>
    </div>
  );
}

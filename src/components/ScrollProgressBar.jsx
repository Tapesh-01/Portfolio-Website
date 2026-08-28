import React, { useState, useEffect } from 'react';
import './ScrollProgressBar.css';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import './ThemeTransition.css';

export default function ThemeTransition({ targetTheme, onComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // 1. Completely lock body and html scrolling during transition
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 2. Hamster running animation then smooth exit
    const timer = setTimeout(() => {
      setExiting(true);
      const finishTimer = setTimeout(() => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(finishTimer);
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [onComplete]);

  return (
    <div className={`theme-transition-overlay ${targetTheme === 'light' ? 'target-light' : 'target-dark'} ${exiting ? 'exiting' : ''}`}>
      <div className="theme-transition-container">
        {/* Uiverse Hamster and Wheel */}
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>

        {/* Status Message */}
        <div className="transition-status-text">
          {targetTheme === 'dark' ? (
            <>Generating Dark Mode Energy ⚡</>
          ) : (
            <>Powering Daylight Generators ☀️</>
          )}
        </div>

        {/* Progress Bar */}
        <div className="transition-progress-track">
          <div className="transition-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import './ThemeTransition.css';

export default function ThemeTransition({ targetTheme, onComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // 1.1s hamster running, then trigger exit fade
    const timer = setTimeout(() => {
      setExiting(true);
      const finishTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 400); // 400ms fade transition
      return () => clearTimeout(finishTimer);
    }, 1100);

    return () => clearTimeout(timer);
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

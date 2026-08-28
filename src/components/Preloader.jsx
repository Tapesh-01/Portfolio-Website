import React, { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Show high-speed animation for 1.8 seconds then trigger smooth exit
    const timer = setTimeout(() => {
      setExiting(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 600); // 600ms exit transition
      return () => clearTimeout(removeTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader-overlay ${exiting ? 'exiting' : ''}`}>
      <div className="preloader-stage">
        {/* Clouds moving in background */}
        <div className="clouds">
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
          <div className="cloud cloud4"></div>
          <div className="cloud cloud5"></div>
        </div>

        {/* Supersonic Speeder */}
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>

        {/* High speed wind lines */}
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Cyberpunk Footer Status */}
        <div className="preloader-footer">
          <span className="preloader-brand">Tapesh Karkel // Portfolio</span>
          <div className="preloader-bar-track">
            <div className="preloader-bar-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

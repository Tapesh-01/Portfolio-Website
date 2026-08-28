import React from 'react';
import './MarqueeTicker.css';

const DEFAULT_ITEMS = [
  'Full-Stack Development',
  'IoT & Hardware',
  'React.js & Node.js',
  'Software Engineering',
  'Embedded Systems',
  'Problem Solver',
  'Web Applications'
];

export default function MarqueeTicker({ items = DEFAULT_ITEMS }) {
  // Duplicate items twice to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="section-marquee-bar" aria-hidden="true">
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            <span className="marquee-star">✳</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

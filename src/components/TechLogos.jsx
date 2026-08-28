import React from 'react';

// === High-Definition Pixel-Perfect Vector Stickers (Transparent Backgrounds) ===

// 1. React (Official Blue Atom)
export const ReactLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 115.3 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(30 57.65 50)" stroke="#00d8ff" strokeWidth="6"/>
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(90 57.65 50)" stroke="#00d8ff" strokeWidth="6"/>
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(150 57.65 50)" stroke="#00d8ff" strokeWidth="6"/>
    <circle cx="57.65" cy="50" r="9.5" fill="#00d8ff"/>
  </svg>
);

// 2. React Router (White/Dark Badge with Red/Blue Accent)
export const ReactRouterLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#18181b" stroke="rgba(255,255,255,0.15)"/>
    <path d="M12 4L4 18H20L12 4Z" fill="#27272a" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 8L7 16.5H17L12 8Z" fill="#3b82f6"/>
  </svg>
);

// 3. Node.js (Green Hexagon Logo)
export const NodeLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L3 9.5V24.5L16 32L29 24.5V9.5L16 2Z" fill="#5fa04e"/>
    <path d="M16 5.5L5.5 11.5V22.5L16 28.5L26.5 22.5V11.5L16 5.5Z" fill="#0f172a"/>
    <text x="16" y="20" fontSize="9.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="#66cc33">JS</text>
  </svg>
);

// 4. Express (Minimalist Ex Wordmark Badge)
export const ExpressLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#ffffff"/>
    <text x="12" y="16.5" fontSize="11.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="#090a0f">ex</text>
  </svg>
);

// 5. MongoDB (Green 3D Leaf)
export const MongoLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5C11.6 1.8 6.5 7.5 6.5 13.5C6.5 18 9.5 21.5 12 22.5C14.5 21.5 17.5 18 17.5 13.5C17.5 7.5 12.4 1.8 12 1.5Z" fill="#13aa52"/>
    <path d="M12 1.5V22.5C12 22.5 12.1 22.4 12.3 22.3C14.6 21.3 17.5 17.5 17.5 13.5C17.5 7.5 12.4 2 12 1.5Z" fill="#00684a"/>
    <path d="M12 18.5V22.5C12 22.5 11.9 22.5 11.8 22.4C10.7 21.9 9.8 20.8 9.2 19.8L12 18.5Z" fill="#ffeaa7"/>
  </svg>
);

// 6. TypeScript (Blue TS Square Sticker)
export const TSLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="#3178C6"/>
    <path d="M15 11H7V14H9.5V23H12.5V14H15V11Z" fill="#ffffff"/>
    <path d="M23 13.8C22.2 13 21 12.5 19.5 12.5C17.5 12.5 16.2 13.5 16.2 15.2C16.2 16.8 17.2 17.6 19 18.2L19.8 18.5C20.8 18.8 21.2 19.2 21.2 19.8C21.2 20.6 20.4 21.2 19.2 21.2C18 21.2 16.8 20.5 16 19.4L14.2 21.2C15.4 22.8 17.2 23.8 19.2 23.8C22 23.8 23.8 22.2 23.8 19.8C23.8 18 22.6 17 20.5 16.4L19.8 16.1C19 15.8 18.6 15.5 18.6 14.9C18.6 14.3 19.2 13.8 20.1 13.8C21 13.8 21.8 14.2 22.4 15L23 13.8Z" fill="#ffffff"/>
  </svg>
);

// 7. JavaScript (ES6+ Yellow Square Sticker)
export const JSLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="#F7DF1E"/>
    <text x="21" y="9" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" textAnchor="end" fill="#000000">ES6+</text>
    <path d="M15 13H17.8V21.2C17.8 23.2 16.6 24.2 14.8 24.2C13.2 24.2 12.1 23.3 11.6 22.2L13.8 20.9C14.1 21.5 14.4 21.9 14.8 21.9C15.3 21.9 15.6 21.6 15.6 21V13H15Z" fill="#000000"/>
    <path d="M23.5 16H21C21 15.1 20.4 14.7 19.7 14.7C19 14.7 18.5 15.1 18.5 15.7C18.5 16.4 19 16.7 20 17.1L21 17.5C22.7 18.2 23.7 19.1 23.7 20.7C23.7 22.5 22.2 23.5 20 23.5C17.7 23.5 16.3 22.3 15.7 20.7L17.9 19.5C18.2 20.4 19 21.1 20 21.1C20.8 21.1 21.5 20.6 21.5 19.9C21.5 19.2 20.9 18.9 19.9 18.5L18.9 18.1C17.5 17.5 16.3 16.7 16.3 15.1C16.3 13.6 17.7 12.5 19.7 12.5C21.5 12.5 23 13.5 23.5 16Z" fill="#000000"/>
  </svg>
);

// 8. Java & DSA (Coffee Cup with DSA Badge)
export const JavaLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 14.5C9.5 14.5 10.8 15.2 12.8 15.2C15.2 15.2 17.2 14.2 17.2 14.2C17.2 14.2 16.1 15 14.2 15.5C12.1 16 9.5 15.8 9.5 14.5Z" fill="#f89820"/>
    <path d="M8.2 12.8C8.2 12.8 9.8 13.8 12.8 13.8C15.8 13.8 18 12.5 18 12.5C18 12.5 16.8 13.5 14.5 14.1C12 14.8 8.2 14.2 8.2 12.8Z" fill="#5382a1"/>
    <path d="M12.5 7.5C13.2 8.2 13.8 9.2 13.8 10.2C13.8 10.5 13.8 10.8 13.7 11C13.2 10.5 12.8 9.8 12.8 9.2C12.8 8.5 13.2 8 12.5 7.5Z" fill="#f89820"/>
    <path d="M11 3.5C12.2 4.8 12.8 6.2 12.8 7.5C12 6.5 11.5 5.5 11.5 4.5C11.5 4.1 11.8 3.8 11 3.5Z" fill="#e76f00"/>
    <path d="M7 17C11.5 18.2 16.8 18 20 16.5C19 17.2 14.5 18.8 7 17Z" fill="#5382a1"/>
    <text x="12" y="23" fontSize="5.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="#f89820">DSA</text>
  </svg>
);

// 9. Socket.io (Circular Blue Lightning Badge)
export const SocketLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10.5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5"/>
    <path d="M13.5 4.5L6.5 13H11.5L10.5 19.5L17.5 11H12.5L13.5 4.5Z" fill="#ffffff"/>
  </svg>
);

// 10. Firebase (Multi-Tone Origami Flame)
export const FirebaseLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 18.5L6.5 4.5L10 10.5L4.5 18.5Z" fill="#FFA000"/>
    <path d="M12.5 7.5L10 10.5L14 3L17.5 18.5L12.5 7.5Z" fill="#F57F17"/>
    <path d="M4.5 18.5L12 22.5L19.5 18.5L17.5 18.5L12 15L6.5 18.5H4.5Z" fill="#FFCA28"/>
  </svg>
);

// 11. Supabase (Dark Green Square with Bright Green Origami Bolt)
export const SupabaseLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#132e22" stroke="rgba(62, 207, 142, 0.4)"/>
    <path d="M13.2 19.6C12.5 20.5 11 20 11 18.8V12.8H4.8C3.7 12.8 3.2 11.3 4.1 10.6L11.4 3.4C12.1 2.5 13.6 3 13.6 4.2V10.2H19.8C20.9 10.2 21.4 11.7 20.5 12.4L13.2 19.6Z" fill="#3ECF8E"/>
  </svg>
);

// 12. Cloudinary (Cloud with C:: Icon)
export const CloudinaryLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.4 10C18.8 6.6 15.9 4 12.5 4C9.8 4 7.4 5.6 6.3 8C3.8 8.3 2 10.4 2 13C2 15.8 4.2 18 7 18H19C21.2 18 23 16.2 23 14C23 11.9 21.4 10.2 19.4 10Z" fill="url(#cloud-grad)"/>
    <text x="11.5" y="14.5" fontSize="7" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" fill="#ffffff">C::</text>
    <defs>
      <linearGradient id="cloud-grad" x1="2" y1="4" x2="23" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8"/>
        <stop offset="1" stopColor="#1e40af"/>
      </linearGradient>
    </defs>
  </svg>
);

// 13. Vite (Purple & Cyan Gradient Triangle with Yellow Lightning)
export const ViteLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.5 3.5L12.5 20.5L3.5 3.5H21.5Z" fill="url(#vite-grad)"/>
    <path d="M12.5 4L15.5 10H11.5L13.5 16L8.5 10H12.5L12.5 4Z" fill="#FFD62E"/>
    <defs>
      <linearGradient id="vite-grad" x1="3.5" y1="3.5" x2="21.5" y2="20.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF"/>
        <stop offset="1" stopColor="#BD34FE"/>
      </linearGradient>
    </defs>
  </svg>
);

// 14. Git & GitHub (Combined Diamond Git & GitHub Octocat Badge)
export const GitLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Git Diamond */}
    <g transform="translate(-1, 0)">
      <path d="M13.7 3.6L6.4 10.9C5.6 11.7 5.6 12.9 6.4 13.7L13.7 21C14.5 21.8 15.7 21.8 16.5 21L18.4 19.1L15.8 16.5C15.2 16.7 14.4 16.5 14 16C13.5 15.5 13.3 14.8 13.5 14.2L11.3 12C10.7 12.2 10 12 9.5 11.5C8.8 10.8 8.8 9.7 9.5 9C10.2 8.3 11.3 8.3 12 9C12.5 9.5 12.7 10.2 12.5 10.8L14.6 12.9V7.8C14.4 7.6 14.3 7.3 14.3 7C14.3 6.2 15 5.5 15.8 5.5C16.6 5.5 17.3 6.2 17.3 7C17.3 7.6 16.9 8.1 16.4 8.4V13.6C16.9 13.9 17.3 14.4 17.3 15C17.3 15.6 17 16.1 16.6 16.4L19.2 19C19.7 18.5 20.7 17.5 20.7 17.5L16.5 3.6C15.7 2.8 14.5 2.8 13.7 3.6Z" fill="#F05032"/>
    </g>
    {/* GitHub Circle */}
    <g transform="translate(14, 2)">
      <circle cx="6" cy="6" r="6" fill="#181717" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
      <path d="M6 1.5C3.5 1.5 1.5 3.5 1.5 6C1.5 8 2.8 9.7 4.6 10.3C4.8 10.3 4.9 10.2 4.9 10.1V8.9C3.6 9.2 3.3 8.3 3.3 8.3C3.1 7.8 2.8 7.7 2.8 7.7C2.4 7.4 2.8 7.4 2.8 7.4C3.2 7.4 3.5 7.8 3.5 7.8C3.9 8.5 4.6 8.3 4.9 8.1C4.9 7.8 5 7.6 5.2 7.5C4.2 7.4 3.1 7 3.1 5.3C3.1 4.8 3.3 4.4 3.6 4.1C3.5 4 3.4 3.5 3.7 2.9C3.7 2.9 4.1 2.8 5 3.4C5.4 3.3 5.8 3.2 6.2 3.2C6.6 3.2 7 3.3 7.4 3.4C8.3 2.8 8.7 2.9 8.7 2.9C9 3.5 8.9 4 8.8 4.1C9.1 4.4 9.3 4.8 9.3 5.3C9.3 7 8.2 7.4 7.2 7.5C7.4 7.7 7.6 8 7.6 8.5V10.1C7.6 10.2 7.7 10.3 7.9 10.3C9.7 9.7 11 8 11 6C11 3.5 9 1.5 6 1.5Z" fill="#ffffff"/>
    </g>
  </svg>
);

// 15. SQL / Database (3-Tier 3D Blue Cylinder)
export const SQLLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5.5" rx="8.5" ry="3" fill="#38bdf8" stroke="#0284c7" strokeWidth="1"/>
    <path d="M3.5 5.5V11C3.5 12.7 7.3 14 12 14C16.7 14 20.5 12.7 20.5 11V5.5" fill="#0284c7" stroke="#0369a1" strokeWidth="1"/>
    <ellipse cx="12" cy="11" rx="8.5" ry="3" fill="#38bdf8"/>
    <path d="M3.5 11V16.5C3.5 18.2 7.3 19.5 12 19.5C16.7 19.5 20.5 18.2 20.5 16.5V11" fill="#0369a1" stroke="#075985" strokeWidth="1"/>
    <ellipse cx="12" cy="16.5" rx="8.5" ry="3" fill="#38bdf8"/>
    <circle cx="17.5" cy="11" r="1" fill="#ffffff"/>
    <circle cx="17.5" cy="16.5" r="1" fill="#ffffff"/>
  </svg>
);

// 16. Python (Blue & Yellow Dual Snakes)
export const PythonLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2L7.1 6.5H12.1V7.3H5.2C3.1 7.3 1.5 8.7 1.5 11.2C1.5 13.8 2.8 14.8 4.4 14.8H5.9V12.7C5.9 10.3 7.8 8.4 10.2 8.4H15.1C16.8 8.4 17.5 7.3 17.5 5.8C17.5 4.3 16.5 2 11.9 2ZM9.4 3.6C10 3.6 10.5 4.1 10.5 4.7C10.5 5.3 10 5.8 9.4 5.8C8.8 5.8 8.3 5.3 8.3 4.7C8.3 4.1 8.8 3.6 9.4 3.6Z" fill="#3776ab"/>
    <path d="M12.1 22C17.2 22 16.9 19.8 16.9 19.8V17.5H11.9V16.7H18.8C20.9 16.7 22.5 15.3 22.5 12.8C22.5 10.2 21.2 9.2 19.6 9.2H18.1V11.3C18.1 13.7 16.2 15.6 13.8 15.6H8.9C7.2 15.6 6.5 16.7 6.5 18.2C6.5 19.7 7.5 22 12.1 22ZM14.6 20.4C14 20.4 13.5 19.9 13.5 19.3C13.5 18.7 14 18.2 14.6 18.2C15.2 18.2 15.7 18.7 15.7 19.3C15.7 19.9 15.2 20.4 14.6 20.4Z" fill="#ffd43b"/>
  </svg>
);

// 17. Gemini AI (Multi-Tone Star)
export const GeminiLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#gemini-grad)"/>
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1ba1e2"/>
        <stop offset="0.5" stopColor="#9b51e0"/>
        <stop offset="1" stopColor="#e040fb"/>
      </linearGradient>
    </defs>
  </svg>
);

// 18. IoT & Microcontrollers (Teal Microcontroller Badge)
export const IoTLogo = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="4" fill="#008184" stroke="#00ffff" strokeWidth="1.5"/>
    <circle cx="8.5" cy="12" r="2" fill="#ffffff"/>
    <circle cx="15.5" cy="12" r="2" fill="#ffffff"/>
    <path d="M9 2V4M15 2V4M9 20V22M15 20V22M2 9H4M2 15H4M20 9H22M20 15H22" stroke="#00ffff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

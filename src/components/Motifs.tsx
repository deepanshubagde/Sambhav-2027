import React from 'react';

interface MotifProps {
  className?: string;
}

/**
 * Minimalist geometric 8-spoked Dhammachakra line motif.
 * Designed as subtle architectural linework rather than heavy ornamentation.
 */
export const DhammachakraMotif: React.FC<MotifProps> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.15" />
    <circle cx="32" cy="32" r="19" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.65" />
    <circle cx="32" cy="32" r="5" stroke="currentColor" strokeWidth="1.15" />
    {/* 8 Noble Spokes */}
    <line x1="32" y1="5" x2="32" y2="27" stroke="currentColor" strokeWidth="1" />
    <line x1="32" y1="37" x2="32" y2="59" stroke="currentColor" strokeWidth="1" />
    <line x1="5" y1="32" x2="27" y2="32" stroke="currentColor" strokeWidth="1" />
    <line x1="37" y1="32" x2="59" y2="32" stroke="currentColor" strokeWidth="1" />
    <line x1="12.9" y1="12.9" x2="28.46" y2="28.46" stroke="currentColor" strokeWidth="1" />
    <line x1="35.54" y1="35.54" x2="51.1" y2="51.1" stroke="currentColor" strokeWidth="1" />
    <line x1="51.1" y1="12.9" x2="35.54" y2="28.46" stroke="currentColor" strokeWidth="1" />
    <line x1="28.46" y1="35.54" x2="12.9" y2="51.1" stroke="currentColor" strokeWidth="1" />
    {/* Cardinal Finials */}
    <circle cx="32" cy="4.5" r="1.4" fill="currentColor" />
    <circle cx="32" cy="59.5" r="1.4" fill="currentColor" />
    <circle cx="4.5" cy="32" r="1.4" fill="currentColor" />
    <circle cx="59.5" cy="32" r="1.4" fill="currentColor" />
    <circle cx="12.5" cy="12.5" r="1.2" fill="currentColor" />
    <circle cx="51.5" cy="12.5" r="1.2" fill="currentColor" />
    <circle cx="12.5" cy="51.5" r="1.2" fill="currentColor" />
    <circle cx="51.5" cy="51.5" r="1.2" fill="currentColor" />
  </svg>
);

/**
 * Subtle Nalanda-inspired architectural arch and sunrise horizon divider.
 */
export const StupaHorizonDivider: React.FC<MotifProps> = ({ className = 'w-full h-8' }) => (
  <svg
    viewBox="0 0 600 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <line x1="0" y1="28" x2="260" y2="28" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
    <line x1="340" y1="28" x2="600" y2="28" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
    <path
      d="M276 28 C276 14, 324 14, 324 28"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.75"
    />
    <path
      d="M286 28 C286 19, 314 19, 314 28"
      stroke="currentColor"
      strokeWidth="0.85"
      strokeOpacity="0.55"
    />
    <line x1="300" y1="7" x2="300" y2="15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
    <circle cx="300" cy="5.5" r="1.5" fill="currentColor" fillOpacity="0.75" />
  </svg>
);

/**
 * Quiet geometric lotus line mark for Monkhood Club's mindfulness sections.
 */
export const LotusEmblem: React.FC<MotifProps> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M24 8C20.5 15 20.5 23 24 30C27.5 23 27.5 15 24 8Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M24 30C18.5 27 14 21 13.5 13.5C18.5 16 22 21.5 24 30Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M24 30C29.5 27 34 21 34.5 13.5C29.5 16 26 21.5 24 30Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M24 30C16.5 30.5 10 27 7 21C12.5 21 18.5 24 24 30Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M24 30C31.5 30.5 38 27 41 21C35.5 21 29.5 24 24 30Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <line x1="12" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="1" strokeOpacity="0.65" />
  </svg>
);

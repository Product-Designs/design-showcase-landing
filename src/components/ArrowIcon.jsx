import React from 'react';

/**
 * ArrowIcon - Reusable right-pointing arrow icon
 * Used for CTAs and navigation elements
 */
function ArrowIcon({ className = 'project-arrow', width = 16, height = 16 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10m0 0L8 3m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;

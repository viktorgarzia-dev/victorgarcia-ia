import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', filled = false }) => (
  <span
    className={`material-symbols-outlined select-none ${className}`}
    style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
    aria-hidden="true"
  >
    {name}
  </span>
);

import React from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 16, className = '' }) => {
  return (
    <i
      className={`fas fa-${name} ${className}`}
      style={{ fontSize: `${size}px` }}
    ></i>
  );
};

export default Icon;

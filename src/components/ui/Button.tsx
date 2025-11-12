import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  href,
}) => {
  const baseClasses = 'font-semibold rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-[#D4AF37] text-[#1C1C1C] border-transparent hover:bg-[#F5F5F5] hover:text-[#1C1C1C] hover:border-[#D4AF37]',
    secondary: 'bg-[#725e03] text-[#1C1C1C] border-transparent hover:bg-[#D4AF37]',
    outline: 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1C1C1C]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;

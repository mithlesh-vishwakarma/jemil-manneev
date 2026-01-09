// src/components/ui/Button.tsx
import React from "react";
import Icon from "./Icon"; // optional, only if you want icon support
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "custom" | "outline";
  size?: "sm" | "md" | "lg";
  iconName?: string; // example: "calendar"
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  className = "",
  variant = "custom",
  size = "md",
  iconName,
  iconPosition = "left",
  disabled = false,
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2";

  const variants: Record<string, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400 cursor-pointer",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-[#d4af37] focus:ring-gray-400 disabled:bg-gray-100 cursor-pointer",
    custom:
      "bg-[#D4AF37] text-[#1c1c1c] hover:bg-white focus:ring-[#d4af37] border border-[#D4AF37] disabled:bg-blue-400 cursor-pointer",
    outline:
      "border border-gray-400 text-gray-800 hover:bg-[#D4AF37] focus:ring-gray-300 disabled:text-gray-400 disabled:border-gray-300 cursor-pointer",
  };

  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {iconName && iconPosition === "left" && (
        <Icon name={iconName} size={16} />
      )}
      <span>{text}</span>
      {iconName && iconPosition === "right" && (
        <Icon name={iconName} size={16} />
      )}
    </>
  );

  if (href) {
    return (
      <Link to={href} onClick={onClick} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;

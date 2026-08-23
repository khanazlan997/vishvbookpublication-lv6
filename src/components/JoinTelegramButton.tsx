import React from 'react';
import { Send } from 'lucide-react';

interface JoinTelegramButtonProps {
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const JoinTelegramButton: React.FC<JoinTelegramButtonProps> = ({
  onClick,
  href = 'https://t.me/+9OOSzfXLgDFjMGJl',
  size = 'md',
  className = '',
  text = 'JOIN TELEGRAM'
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs gap-1 sm:gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  }[size];

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }[size];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center font-bold text-white
        bg-gradient-to-r from-[#229ED9] via-[#0088cc] to-[#1d82b4]
        rounded-full shadow-3d-button hover:shadow-lg hover:shadow-[#229ED9]/30
        transform hover:-translate-y-0.5 active:translate-y-0
        transition-all duration-300 group cursor-pointer
        ${sizeClasses}
        ${className}
      `}
    >
      <Send className={`${iconSizes} transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300`} />
      <span>{text}</span>
    </a>
  );
};

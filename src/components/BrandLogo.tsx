import React, { useState } from 'react';
import sLogoImg from '../assets/images/Slogo.png';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  alt = 'Logo officiel Sans Limite',
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>('/assets/images/Slogo.png?v=2');
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-auto max-w-12',
    md: 'h-10 w-auto max-w-16',
    lg: 'h-14 w-auto max-w-24',
    xl: 'h-20 w-auto max-w-32',
  };

  const handleImageError = () => {
    if (currentSrc !== sLogoImg) {
      setCurrentSrc(sLogoImg);
    } else {
      setHasError(true);
    }
  };

  if (!hasError) {
    return (
      <img
        src={currentSrc}
        alt={alt}
        className={`shrink-0 object-contain drop-shadow-xs select-none transition-transform duration-200 group-hover:scale-105 ${sizeClasses[size]} ${className}`}
        onError={handleImageError}
        loading="eager"
      />
    );
  }

  // Fallback badge if image fails to load
  return (
    <div
      className={`shrink-0 rounded-full flex items-center justify-center bg-[#1E3A8A] text-white font-black font-display shadow-xs ${sizeClasses[size]} ${className}`}
    >
      <span className="text-xs">SL</span>
    </div>
  );
};


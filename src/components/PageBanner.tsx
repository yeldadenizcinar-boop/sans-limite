import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  badge?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  badge,
}) => {
  return (
    <header className="relative bg-[#1E3A8A] text-white overflow-hidden py-14 md:py-20">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/90 to-[#1E3A8A]/75" />
        </div>
      )}

      {/* Decorative subtle accents */}
      <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-[#F97316]/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 max-w-3xl">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
    </header>
  );
};

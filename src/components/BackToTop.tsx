import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white text-[#1E3A8A] shadow-lg border border-slate-200 hover:bg-[#F97316] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

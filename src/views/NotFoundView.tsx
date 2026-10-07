import React, { useState } from 'react';
import { Search, Home, ArrowLeft } from 'lucide-react';
import { PageId, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NotFoundViewProps {
  language?: Language;
  onNavigate: (page: PageId) => void;
  onSearch: (query: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({
  language = 'fr',
  onNavigate,
  onSearch,
}) => {
  const [query, setQuery] = useState('');
  const t = TRANSLATIONS[language];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      onNavigate('actualites');
    }
  };

  return (
    <div className="py-20 md:py-28 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-orange-100 text-[#F97316] font-black text-4xl shadow-inner font-display">
        404
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {t.notFoundPage.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
          {t.notFoundPage.desc}
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.notFoundPage.searchPlaceholder}
          className="w-full pl-10 pr-28 py-3 text-xs sm:text-sm rounded-2xl bg-white border border-slate-200 shadow-xs focus:outline-none focus:border-[#1E3A8A]"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-xl text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#162a63] transition-colors"
        >
          {t.notFoundPage.searchBtn}
        </button>
      </form>

      {/* Return Home Button */}
      <div className="pt-4 flex items-center justify-center gap-4">
        <button
          onClick={() => onNavigate('accueil')}
          className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors shadow-xs flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>{t.notFoundPage.backHome}</span>
        </button>
      </div>
    </div>
  );
};


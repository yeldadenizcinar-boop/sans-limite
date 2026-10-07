import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigateHome: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigateHome }) => {
  return (
    <nav aria-label="Fil d'Ariane" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-500">
        <li className="flex items-center">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 hover:text-[#1E3A8A] font-medium transition-colors"
            title="Retour à l'accueil"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Accueil</span>
          </button>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
            {item.active || !item.onClick ? (
              <span className="font-semibold text-slate-800" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                onClick={item.onClick}
                className="hover:text-[#1E3A8A] font-medium transition-colors truncate max-w-[200px] sm:max-w-none"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

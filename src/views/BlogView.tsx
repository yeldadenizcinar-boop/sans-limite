import React, { useState } from 'react';
import {
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Share2,
  ChevronLeft,
  ChevronRight,
  Tag,
} from 'lucide-react';
import { BlogPost, Language } from '../types';
import { getLocalizedData, ASSET_IMAGES } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface BlogViewProps {
  language: Language;
  selectedArticle: BlogPost | null;
  onSelectArticle: (article: BlogPost | null) => void;
  onToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  language,
  selectedArticle,
  onSelectArticle,
  onToast,
}) => {
  const t = TRANSLATIONS[language];
  const { blogPosts } = getLocalizedData(language);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories =
    language === 'fr'
      ? ['all', 'Actualités', 'Projets', 'Témoignages', 'Ateliers']
      : ['all', 'News', 'Projects', 'Testimonials', 'Workshops'];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    onToast(
      'info',
      language === 'fr' ? 'Lien copié !' : 'Link copied!',
      language === 'fr'
        ? 'Le lien de cet article a été copié dans votre presse-papier.'
        : 'The link to this article has been copied to your clipboard.',
    );
  };

  // If a single article is selected, render the dedicated reader view
  if (selectedArticle) {
    const similarArticles = blogPosts.filter((p) => p.id !== selectedArticle.id).slice(0, 3);

    return (
      <div className="space-y-12 pb-16">
        <PageBanner
          title={selectedArticle.title}
          subtitle={
            language === 'fr'
              ? `Publié le ${selectedArticle.date} par ${selectedArticle.author} · ${selectedArticle.category}`
              : `Published on ${selectedArticle.date} by ${selectedArticle.author} · ${selectedArticle.category}`
          }
          backgroundImage={selectedArticle.image}
          badge={selectedArticle.category}
        />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Back button */}
          <button
            onClick={() => onSelectArticle(null)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:text-[#F97316] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t.blogPage.backToList}</span>
          </button>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>
                  {selectedArticle.author} ({selectedArticle.authorRole})
                </span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedArticle.date}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedArticle.readTime} {t.blogPage.readTime}</span>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-slate-700 hover:text-[#F97316] font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{t.blogPage.shareBtn}</span>
            </button>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-80 sm:h-96 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Body Prose */}
          <div className="prose prose-slate max-w-none space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg font-medium text-slate-900 border-l-4 border-[#F97316] pl-4 italic">
              {selectedArticle.excerpt}
            </p>
            {selectedArticle.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-slate-400" />
            {selectedArticle.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Similar Articles */}
          <div className="pt-12 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">{t.blogPage.similarTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarArticles.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectArticle(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 p-4 shadow-xs hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-[#1E3A8A]">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-2">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.date}</p>
                  </div>
                  <div className="pt-3 flex items-center text-xs font-semibold text-[#F97316]">
                    <span>{t.blogPage.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Filter & Search Logic
  const filteredPosts = blogPosts.filter((post) => {
    if (selectedCategory !== 'all') {
      const matchCat =
        selectedCategory.toLowerCase() === post.category.toLowerCase() ||
        (selectedCategory === 'News' && post.category === 'Actualités') ||
        (selectedCategory === 'Projects' && post.category === 'Projets') ||
        (selectedCategory === 'Testimonials' && post.category === 'Témoignages') ||
        (selectedCategory === 'Workshops' && post.category === 'Ateliers');
      if (!matchCat) return false;
    }
    if (
      searchQuery.trim() &&
      !post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-14 pb-16">
      <PageBanner
        title={t.blogPage.title}
        subtitle={t.blogPage.subtitle}
        backgroundImage={ASSET_IMAGES.hero}
        badge={t.blogPage.badge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'all' ? t.blogPage.allCategories : cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={t.blogPage.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#1E3A8A]"
            />
          </div>
        </div>

        {/* Article Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectArticle(post)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime} {t.blogPage.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1E3A8A] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <span className="text-xs font-bold text-[#1E3A8A] group-hover:text-[#F97316] inline-flex items-center gap-1.5 transition-colors">
                    <span>{t.blogPage.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
            {language === 'fr'
              ? 'Aucun article ne correspond à votre recherche.'
              : 'No articles found matching your query.'}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-slate-200 bg-white disabled:opacity-40"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-colors ${
                  currentPage === i + 1
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-slate-200 bg-white disabled:opacity-40"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

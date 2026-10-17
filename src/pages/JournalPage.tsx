import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { STUDIO_ARTICLES, JournalArticle } from '../data/studioData';

export const JournalPage: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  const featured = STUDIO_ARTICLES[0];
  const otherArticles = STUDIO_ARTICLES.slice(1);

  if (activeArticle) {
    return (
      <article className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <button
          onClick={() => setActiveArticle(null)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5A4636] hover:text-[#1E1B18] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal Index</span>
        </button>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#B08D57] font-mono">
            <span>{activeArticle.category}</span>
            <span>·</span>
            <span>{activeArticle.date}</span>
            <span>·</span>
            <span>{activeArticle.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#1E1B18] leading-[1.15]">
            {activeArticle.title}
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-[#5A4636] leading-relaxed">
            {activeArticle.subtitle}
          </p>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden bg-[#E7DDD0] my-8 border border-[#E5DDD2]">
          <img
            src={activeArticle.image}
            alt={activeArticle.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 text-[#1E1B18] text-base leading-relaxed font-light">
          <p className="text-lg md:text-xl font-normal text-[#1E1B18] leading-relaxed">
            {activeArticle.content.lead}
          </p>

          {activeArticle.content.paragraphs.map((para, i) => (
            <p key={i} className="text-[#5A4636]">
              {para}
            </p>
          ))}

          {activeArticle.content.pullQuote && (
            <div className="my-10 p-8 border-y border-[#B08D57] bg-[#FAF8F5]">
              <blockquote className="font-serif text-2xl md:text-3xl font-light italic text-[#1E1B18] leading-relaxed">
                “{activeArticle.content.pullQuote}”
              </blockquote>
            </div>
          )}

          {activeArticle.content.sectionTitle && (
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1E1B18] pt-6">
              {activeArticle.content.sectionTitle}
            </h2>
          )}

          {activeArticle.content.subParagraphs?.map((sub, i) => (
            <p key={i} className="text-[#5A4636]">
              {sub}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5DDD2] flex items-center justify-between">
          <button
            onClick={() => setActiveArticle(null)}
            className="text-xs uppercase tracking-widest text-[#B08D57] hover:text-[#1E1B18] transition-colors"
          >
            ← Return to Journal
          </button>
          <span className="text-xs text-[#8E867E]">
            Written by Studio Vauquelin Research Group
          </span>
        </div>
      </article>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl mb-16">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-medium flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5" />
          The Monograph
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#1E1B18] tracking-tight">
          Essays on Materiality & Space
        </h1>
        <p className="text-sm md:text-base text-[#5A4636] font-light leading-relaxed">
          Dispatches from our architectural research atelier: investigations into stone quarries, 20th-century collectible design, acoustic psychology, and light choreography.
        </p>
      </div>

      {/* Featured Editorial Post */}
      <section
        onClick={() => setActiveArticle(featured)}
        className="cursor-pointer group mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] border border-[#E5DDD2] p-6 md:p-10"
      >
        <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#E7DDD0]">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
          />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#B08D57] font-mono">
            <span>FEATURED ESSAY</span>
            <span>·</span>
            <span>{featured.readTime}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#1E1B18] group-hover:text-[#B08D57] transition-colors leading-tight">
            {featured.title}
          </h2>

          <p className="text-xs md:text-sm text-[#5A4636] font-light leading-relaxed">
            {featured.excerpt}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-[#1E1B18] font-medium group-hover:translate-x-1 transition-transform">
            <span>Read Complete Essay</span>
            <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
          </div>
        </div>
      </section>

      {/* Grid of Other Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {otherArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="cursor-pointer group flex flex-col space-y-4 p-6 bg-[#FFFFFF] border border-[#E5DDD2] hover:border-[#B08D57] transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#E7DDD0]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#8E867E]">
                <span>{article.category}</span>
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-light text-[#1E1B18] group-hover:text-[#B08D57] transition-colors">
                {article.title}
              </h3>

              <p className="text-xs text-[#5A4636] font-light line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-1 text-xs uppercase tracking-wider text-[#B08D57] font-medium">
              <span>Read Essay</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryFilter } from '../types';

interface ShopByCategoryProps {
  onSelectCategory: (category: CategoryFilter) => void;
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ onSelectCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-7 sm:py-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-4 sm:mb-6">
          <div>
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#8C827A] font-semibold block mb-1">
              Curated Ateliers
            </span>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1C1917] tracking-tight">
              SHOP YOUR WAY
            </h2>
          </div>

          {/* Desktop/Tablet Arrow Navigators */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full border border-[#EADBCC] flex items-center justify-center text-[#1C1917] hover:bg-[#F5EFEB] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full border border-[#EADBCC] flex items-center justify-center text-[#1C1917] hover:bg-[#F5EFEB] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Snap-Scroll Carousel Cards */}
        <div
          ref={scrollRef}
          className="flex gap-3.5 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 py-1"
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.displayName as CategoryFilter)}
              className="snap-start shrink-0 w-[230px] sm:w-[260px] group cursor-pointer relative bg-white border border-[#EADBCC]/70 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#DAC5B0]"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] bg-[#F5EFEB] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                
                {/* Category Name Overlay on Image */}
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <div className="font-serif text-[18px] sm:text-[20px] font-semibold tracking-wide leading-tight">
                    {cat.name}
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-3 sm:p-3.5 flex flex-col justify-between">
                <p className="text-[12px] sm:text-[13px] text-[#59524B] leading-relaxed line-clamp-2">
                  {cat.subtitle}
                </p>

                <div className="mt-2.5 pt-2 border-t border-[#F5EFEB] flex items-center justify-between text-[11px] font-medium text-[#1C1917] group-hover:text-[#C59F51] transition-colors">
                  <span>Explore Collection</span>
                  <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

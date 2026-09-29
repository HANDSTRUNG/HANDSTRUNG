import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const SocialProof: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 sm:py-16 bg-[#F5EFEB] border-t border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          {/* Rating stars & badge */}
          <div className="inline-flex items-center gap-1 text-[#C59F51] mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-base sm:text-lg">★</span>
            ))}
          </div>

          <div className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
            HANDMADE WITH LOVE
          </div>

          <h2 className="font-serif text-[24px] sm:text-[36px] font-semibold text-[#1C1917] tracking-tight leading-snug">
            LOVED BY WOMEN WHO LOVE BEAUTIFUL DETAILS
          </h2>
        </div>

        {/* Testimonials Carousel (Horizontal mobile scroll with snap) */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 py-2"
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="snap-start shrink-0 w-[285px] sm:w-[340px] bg-white border border-[#EADBCC] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  {/* Stars & Date */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex text-[#C59F51] text-xs">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[11px] text-[#A89F91]">{t.date}</span>
                  </div>

                  {/* Review Title */}
                  <h3 className="font-serif text-[16px] sm:text-[18px] font-semibold text-[#1C1917] mb-2">
                    "{t.title}"
                  </h3>

                  {/* Review Quote */}
                  <p className="text-[13px] text-[#59524B] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-4 pt-3.5 border-t border-[#F5EFEB] flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-[#1C1917] flex items-center gap-1.5">
                      <span>{t.author}</span>
                      {t.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                      )}
                    </div>
                    <div className="text-[11px] text-[#8C827A]">{t.location}</div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-[#8C827A] uppercase block">
                      Piece
                    </span>
                    <span className="text-[11px] font-medium text-[#1C1917] truncate max-w-[100px] block">
                      {t.productName}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet Arrow Navigators */}
          <div className="hidden sm:flex justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous testimonials"
              className="w-9 h-9 rounded-full border border-[#DAC5B0] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F5EFEB]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next testimonials"
              className="w-9 h-9 rounded-full border border-[#DAC5B0] bg-white flex items-center justify-center text-[#1C1917] hover:bg-[#F5EFEB]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

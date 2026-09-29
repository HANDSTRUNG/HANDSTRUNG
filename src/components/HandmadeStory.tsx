import React from 'react';
import craftImg from '../assets/images/craft_artisan_hands_1790695485711.jpg';

interface HandmadeStoryProps {
  onReadMore: () => void;
}

export const HandmadeStory: React.FC<HandmadeStoryProps> = ({ onReadMore }) => {
  return (
    <section className="py-9 sm:py-16 bg-[#FAF8F5] border-t border-[#EADBCC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
          
          {/* Craftsmanship Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#EADBCC]/80 bg-[#F5EFEB]">
              <img
                src={craftImg}
                alt="Female artisan hand-stringing pearls and beads in the HANDSTRUNG atelier"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Hallmark Tag */}
            <div className="absolute -bottom-3 left-4 sm:left-6 bg-[#1C1917] text-[#FAF8F5] px-3.5 py-1.5 rounded-sm shadow-md text-[11px] sm:text-[12px] font-medium tracking-[0.2em]">
              HANDMADE • DETAIL • LOVE
            </div>
          </div>

          {/* Story Copy & Atelier Pillars */}
          <div className="lg:col-span-6 pt-4 lg:pt-0">
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-2">
              Our Artisan Commitment
            </span>

            <h2 className="font-serif text-[26px] sm:text-[38px] font-semibold text-[#1C1917] leading-tight tracking-tight mb-3 sm:mb-4 text-balance">
              MADE BY HAND. MADE WITH HEART.
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#59524B] leading-relaxed mb-6">
              Every piece begins with careful hands, beautiful materials and an eye for detail. From delicate pearls to intricate beadwork, each creation is made to feel special. We reject mass manufacturing in favor of slow, patient artistry that you can feel the moment you hold it.
            </p>

            {/* Atelier Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 border-y border-[#EADBCC]">
              <div>
                <div className="font-serif text-[22px] sm:text-[28px] font-bold text-[#1C1917] tabular-nums">
                  36+
                </div>
                <div className="text-[11px] sm:text-[12px] text-[#736B63] leading-snug mt-0.5">
                  Hours per Handbag
                </div>
              </div>

              <div>
                <div className="font-serif text-[22px] sm:text-[28px] font-bold text-[#1C1917]">
                  AAA
                </div>
                <div className="text-[11px] sm:text-[12px] text-[#736B63] leading-snug mt-0.5">
                  Lustrous Pearls
                </div>
              </div>

              <div>
                <div className="font-serif text-[22px] sm:text-[28px] font-bold text-[#1C1917]">
                  100%
                </div>
                <div className="text-[11px] sm:text-[12px] text-[#736B63] leading-snug mt-0.5">
                  Artisan Hand-Strung
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={onReadMore}
                className="text-[13px] font-semibold text-[#1C1917] hover:text-[#C59F51] flex items-center gap-1.5 transition-colors"
              >
                <span>Read the Atelier Story</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

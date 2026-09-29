import React from 'react';
import heroImg from '../assets/images/hero_pearl_collection_1790695440596.jpg';

interface HeroProps {
  onShopNow: () => void;
  onExploreCollections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onExploreCollections }) => {
  return (
    <section className="relative bg-[#FAF8F5] overflow-hidden pt-2 pb-6 sm:py-10 border-b border-[#EADBCC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Visual Showcase - Mobile first order: placed prominently */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#EADBCC]/70 bg-[#F5EFEB]">
              <img
                src={heroImg}
                alt="HANDSTRUNG handcrafted pearl bags, vanity decor, and accessories collection"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-cover object-center"
              />
              {/* Subtle pearl luster light accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating mobile tag */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#1C1917] px-3 py-1 rounded-sm text-[11px] sm:text-[12px] font-medium tracking-wide shadow-xs border border-[#EADBCC]/60 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
                <span>The Heirloom Atelier Collection</span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold">
                Artisanal Lifestyle & Fashion
              </span>
            </div>

            <h1 className="font-serif text-[28px] sm:text-[38px] lg:text-[46px] font-semibold text-[#1C1917] leading-[1.12] tracking-tight mb-2.5 sm:mb-4 text-balance">
              HANDCRAFTED BEAUTY, MADE TO TREASURE.
            </h1>

            <p className="text-[14px] sm:text-[16px] text-[#59524B] leading-relaxed mb-5 sm:mb-6 max-w-lg">
              Pearl, bead and handmade pieces created for the woman who loves beautiful details. From sculptural evening bags to delicate vanity accents.
            </p>

            {/* Action Buttons - large tap targets */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3.5">
              <button
                type="button"
                onClick={onShopNow}
                className="min-h-[48px] px-7 py-3 bg-[#1C1917] text-[#FAF8F5] rounded-xl text-[14px] font-medium tracking-wide hover:bg-[#C59F51] transition-all duration-200 shadow-xs flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>SHOP NOW</span>
                <span className="text-xs">→</span>
              </button>

              <button
                type="button"
                onClick={onExploreCollections}
                className="min-h-[48px] px-6 py-3 bg-transparent text-[#1C1917] border border-[#1C1917]/30 rounded-xl text-[14px] font-medium tracking-wide hover:bg-[#F5EFEB] hover:border-[#1C1917] transition-all duration-200 flex items-center justify-center active:scale-[0.98]"
              >
                EXPLORE COLLECTIONS
              </button>
            </div>

            {/* Trust Assurance Strip */}
            <div className="mt-5 sm:mt-7 pt-4 border-t border-[#EADBCC]/60 flex items-center justify-between text-[11px] sm:text-[12px] text-[#736B63]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
                100% Artisan Made
              </span>
              <span className="text-[#DAC5B0]">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
                Grade-AAA Pearls
              </span>
              <span className="text-[#DAC5B0]">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                Cash on Delivery
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

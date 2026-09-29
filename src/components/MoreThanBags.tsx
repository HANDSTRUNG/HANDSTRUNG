import React from 'react';
import pearlGraceBagImg from '../assets/images/product_pearl_grace_bag_1790695452122.jpg';
import pearlDecorBoxImg from '../assets/images/product_pearl_decor_box_1790695464080.jpg';
import bridalPearlVineImg from '../assets/images/product_bridal_pearl_vine_1790695474839.jpg';
import craftArtisanHandsImg from '../assets/images/craft_artisan_hands_1790695485711.jpg';
import { CategoryFilter } from '../types';

interface MoreThanBagsProps {
  onDiscover: () => void;
  onSelectCategory: (cat: CategoryFilter) => void;
}

export const MoreThanBags: React.FC<MoreThanBagsProps> = ({ onDiscover, onSelectCategory }) => {
  const pillars = [
    {
      title: 'Fashion & Handbags',
      category: 'Bags' as CategoryFilter,
      subtitle: 'Sculptural pearl clutches & evening bags',
      image: pearlGraceBagImg,
    },
    {
      title: 'Home & Dressing Décor',
      category: 'Décor' as CategoryFilter,
      subtitle: 'Vanity trays, keepsake jars & table accents',
      image: pearlDecorBoxImg,
    },
    {
      title: 'Heirloom Accessories',
      category: 'Accessories' as CategoryFilter,
      subtitle: 'Baroque pearl jewelry & hair adornments',
      image: bridalPearlVineImg,
    },
    {
      title: 'Unforgettable Gifting',
      category: 'Gifts' as CategoryFilter,
      subtitle: 'Artisanal gift sets for cherished milestones',
      image: craftArtisanHandsImg,
    },
  ];

  return (
    <section className="py-8 sm:py-16 bg-[#F5EFEB] border-t border-[#EADBCC]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1.5">
            The HANDSTRUNG Philosophy
          </span>
          <h2 className="font-serif text-[24px] sm:text-[36px] font-semibold text-[#1C1917] leading-tight tracking-tight text-balance">
            MORE THAN A HANDBAG. MORE THAN DÉCOR.
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#59524B] mt-2.5 sm:mt-3 leading-relaxed">
            HANDSTRUNG brings handmade beauty into the details that make fashion, spaces and special moments feel uniquely yours.
          </p>
        </div>

        {/* 2x2 Mobile-Friendly Collage */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {pillars.map((item) => (
            <div
              key={item.title}
              onClick={() => onSelectCategory(item.category)}
              className="group relative bg-white border border-[#EADBCC] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs cursor-pointer hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-[#EADBCC]/30">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                
                {/* Floating pill-free title badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="font-serif text-[15px] sm:text-[19px] font-semibold leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[11px] sm:text-[12px] text-white/80 line-clamp-1 hidden sm:block mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="p-2.5 sm:p-3.5 flex items-center justify-between text-[11px] sm:text-[12px] font-medium text-[#1C1917] group-hover:text-[#C59F51]">
                <span>Discover {item.category}</span>
                <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-7 sm:mt-10 text-center">
          <button
            type="button"
            onClick={onDiscover}
            className="min-h-[46px] px-8 py-3 bg-[#1C1917] text-white rounded-xl text-[13px] font-medium tracking-wider hover:bg-[#C59F51] transition-all duration-200 shadow-sm active:scale-[0.98]"
          >
            DISCOVER HANDSTRUNG
          </button>
        </div>
      </div>
    </section>
  );
};

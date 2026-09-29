import React, { useState } from 'react';
import { Sparkles, Heart, Gift, Home, Crown, BookOpen, Layers } from 'lucide-react';
import { Product } from '../data/products';
import { CategoryFilter } from '../types';
import { BridalSection } from './BridalSection';
import { ForHerSection } from './ForHerSection';
import { DecorSection } from './DecorSection';
import { GiftingSection } from './GiftingSection';
import { HandmadeStory } from './HandmadeStory';
import { CATEGORIES } from '../data/products';

interface CollectionsViewProps {
  products: Product[];
  onSelectCategory: (category: CategoryFilter) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onOpenAbout: () => void;
  initialCollectionTab?: 'all' | 'bridal' | 'for-her' | 'decor' | 'gifts' | 'story';
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  products,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onOpenAbout,
  initialCollectionTab = 'all',
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'bridal' | 'for-her' | 'decor' | 'gifts' | 'story'>(
    initialCollectionTab
  );

  const tabs = [
    { id: 'all', label: 'All Curations', icon: Layers },
    { id: 'bridal', label: 'Bridal Suite', icon: Crown },
    { id: 'for-her', label: 'For Her', icon: Heart },
    { id: 'decor', label: 'Home Décor', icon: Home },
    { id: 'gifts', label: 'Gifting Suite', icon: Gift },
    { id: 'story', label: 'Atelier Story', icon: BookOpen },
  ] as const;

  return (
    <div className="py-4 sm:py-8 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
            Dedicated Curations
          </span>
          <h1 className="font-serif text-[24px] sm:text-[34px] font-semibold text-[#1C1917] tracking-tight">
            Explore Collections
          </h1>
          <p className="text-[13px] sm:text-[14px] text-[#736B63] mt-1">
            Deep-dive into each specialized category of handcrafted pearls, home details, and heirloom gifts.
          </p>
        </div>

        {/* Horizontal Navigation Pills for Collections (Mobile-optimized scrollable) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveSubTab(tab.id);
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className={`min-h-[40px] px-3.5 sm:px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-medium transition-all whitespace-nowrap flex items-center gap-1.5 active:scale-95 ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-white border border-[#EADBCC] text-[#59524B] hover:border-[#1C1917]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C59F51]' : 'text-[#8C827A]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: All Curations Overview */}
        {activeSubTab === 'all' && (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in-50 duration-200">
            {/* Visual overview grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    if (cat.id === 'bridal') setActiveSubTab('bridal');
                    else if (cat.id === 'decor') setActiveSubTab('decor');
                    else if (cat.id === 'gifts') setActiveSubTab('gifts');
                    else if (cat.id === 'accessories') setActiveSubTab('for-her');
                    else onSelectCategory(cat.displayName as CategoryFilter);
                  }}
                  className="group bg-white border border-[#EADBCC] rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5EFEB]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 text-white font-serif text-[18px] font-semibold">
                      {cat.name}
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4">
                    <p className="text-[12px] sm:text-[13px] text-[#59524B] leading-relaxed line-clamp-2 mb-3">
                      {cat.subtitle}
                    </p>
                    <div className="pt-2 border-t border-[#F5EFEB] flex items-center justify-between text-[11px] font-semibold text-[#1C1917] group-hover:text-[#C59F51]">
                      <span>Open Dedicated Suite</span>
                      <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Link to Story */}
            <div className="bg-[#F5EFEB] border border-[#EADBCC] rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8C827A] font-semibold block mb-1">
                  Atelier Heritage
                </span>
                <h3 className="font-serif text-[20px] sm:text-[24px] font-semibold text-[#1C1917]">
                  The Art of Handmade Beauty
                </h3>
                <p className="text-[13px] text-[#59524B] max-w-lg mt-1">
                  Learn about our artisans, Grade-AAA pearl inspection, and the hours of hand-weaving behind each creation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveSubTab('story')}
                className="min-h-[44px] px-6 py-2.5 bg-[#1C1917] text-white rounded-xl text-xs font-semibold tracking-wider hover:bg-[#C59F51] transition-colors shrink-0"
              >
                VIEW ATELIER STORY
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Bridal Suite */}
        {activeSubTab === 'bridal' && (
          <div className="animate-in fade-in-50 duration-200">
            <BridalSection
              products={products}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={onToggleWishlist}
              onExploreBridal={() => onSelectCategory('Bridal')}
            />
          </div>
        )}

        {/* Tab 3: For Her Collection */}
        {activeSubTab === 'for-her' && (
          <div className="animate-in fade-in-50 duration-200">
            <ForHerSection
              products={products}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={onToggleWishlist}
              onShopForHer={() => onSelectCategory('Accessories')}
            />
          </div>
        )}

        {/* Tab 4: Home Décor Collection */}
        {activeSubTab === 'decor' && (
          <div className="animate-in fade-in-50 duration-200">
            <DecorSection
              products={products}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={onToggleWishlist}
              onShopDecor={() => onSelectCategory('Décor')}
            />
          </div>
        )}

        {/* Tab 5: Gifting Suite */}
        {activeSubTab === 'gifts' && (
          <div className="animate-in fade-in-50 duration-200">
            <GiftingSection
              products={products}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={onToggleWishlist}
              onExploreGifts={() => onSelectCategory('Gifts')}
            />
          </div>
        )}

        {/* Tab 6: Atelier Story */}
        {activeSubTab === 'story' && (
          <div className="animate-in fade-in-50 duration-200">
            <HandmadeStory onReadMore={onOpenAbout} />
          </div>
        )}

      </div>
    </div>
  );
};

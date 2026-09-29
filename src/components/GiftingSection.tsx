import React, { useState } from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface GiftingSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onExploreGifts: () => void;
}

type GiftCategory = 'For Her' | 'Bridal' | 'Birthday' | 'Special Moments';

export const GiftingSection: React.FC<GiftingSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onExploreGifts,
}) => {
  const [selectedGiftTag, setSelectedGiftTag] = useState<GiftCategory>('For Her');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const giftTags: GiftCategory[] = ['For Her', 'Bridal', 'Birthday', 'Special Moments'];

  const filteredGifts = products
    .filter((p) => p.giftTag === selectedGiftTag || (p.category === 'Gifts' && selectedGiftTag === 'Special Moments'))
    .slice(0, 4);

  return (
    <section className="py-8 sm:py-14 bg-[#FAF8F5] border-t border-[#EADBCC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
            Gifts Made with Intention
          </span>
          <h2 className="font-serif text-[26px] sm:text-[36px] font-semibold text-[#1C1917] tracking-tight">
            A GIFT SHE'LL REMEMBER.
          </h2>
          <p className="text-[13px] sm:text-[15px] text-[#736B63] mt-2">
            Beautiful handmade pieces for birthdays, weddings, anniversaries, bridal showers and unforgettable moments.
          </p>
        </div>

        {/* Gift Category Segmented Control Chips (Button/Tabs compliant) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {giftTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedGiftTag(tag)}
              className={`min-h-[40px] px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all whitespace-nowrap active:scale-95 ${
                selectedGiftTag === tag
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-white border border-[#EADBCC] text-[#59524B] hover:border-[#1C1917]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 2-Column Mobile / 4-Column Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filteredGifts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuickAdd={handleQuickAdd}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              isAddedJustNow={justAddedId === product.id}
            />
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-7 text-center">
          <button
            type="button"
            onClick={onExploreGifts}
            className="min-h-[46px] px-8 py-2.5 bg-[#FAF8F5] border border-[#1C1917] text-[#1C1917] rounded-xl text-[13px] font-semibold tracking-wider hover:bg-[#1C1917] hover:text-white transition-all shadow-xs"
          >
            FIND A GIFT
          </button>
        </div>
      </div>
    </section>
  );
};

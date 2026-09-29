import React, { useState } from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface BridalSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onExploreBridal: () => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onExploreBridal,
}) => {
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const bridalItems = products
    .filter((p) => p.category === 'Bridal' || p.giftTag === 'Bridal')
    .slice(0, 4);

  return (
    <section className="py-8 sm:py-16 bg-[#FDFBF7] border-t border-[#EADBCC] relative overflow-hidden">
      {/* Background Soft Pearl Vignette */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF0E6]/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
              The Atelier Bridal Suite
            </span>
            <h2 className="font-serif text-[26px] sm:text-[38px] font-semibold text-[#1C1917] tracking-tight">
              PEARLS FOR HER SPECIAL MOMENT
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#59524B] mt-1 max-w-lg">
              Ethereal hair vines, heirloom wedding clutches, bridal jewelry & wedding keepsakes hand-strung to treasure for a lifetime.
            </p>
          </div>

          <div className="mt-3 sm:mt-0">
            <button
              type="button"
              onClick={onExploreBridal}
              className="text-[13px] font-semibold text-[#1C1917] hover:text-[#C59F51] flex items-center gap-1.5 transition-colors"
            >
              <span>EXPLORE BRIDAL</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* 2-Column Mobile / 4-Column Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {bridalItems.map((product) => (
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
      </div>
    </section>
  );
};

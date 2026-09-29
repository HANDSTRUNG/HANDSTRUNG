import React, { useState } from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface ForHerSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onShopForHer: () => void;
}

export const ForHerSection: React.FC<ForHerSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onShopForHer,
}) => {
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  // Curated feminine pieces across bags, jewelry, hair accessories & vanity
  const forHerItems = products
    .filter((p) => p.category === 'Bags' || p.category === 'Accessories' || p.giftTag === 'For Her')
    .slice(0, 4);

  return (
    <section className="py-8 sm:py-14 bg-[#FAF8F5] border-t border-[#EADBCC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
              Curated Selection
            </span>
            <h2 className="font-serif text-[26px] sm:text-[36px] font-semibold text-[#1C1917] tracking-tight">
              FOR HER
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#736B63] mt-1 max-w-md">
              Handbags, clutches, hair accessories, jewelry & vanity accents designed to celebrate feminine beauty.
            </p>
          </div>

          <div className="mt-3 sm:mt-0">
            <button
              type="button"
              onClick={onShopForHer}
              className="text-[13px] font-semibold text-[#1C1917] hover:text-[#C59F51] flex items-center gap-1.5 transition-colors"
            >
              <span>SHOP FOR HER</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* 2-column mobile / 4-column desktop grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {forHerItems.map((product) => (
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

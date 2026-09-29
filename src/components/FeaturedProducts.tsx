import React, { useState } from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onViewAll: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onViewAll,
}) => {
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  const [showAllMobile, setShowAllMobile] = useState(false);

  const featuredList = showAllMobile ? products.slice(0, 8) : products.slice(0, 4);

  return (
    <section className="py-8 sm:py-14 bg-[#FAF8F5] border-t border-[#EADBCC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1.5">
            Artisan Signature Pieces
          </span>
          <h2 className="font-serif text-[26px] sm:text-[36px] font-semibold text-[#1C1917] tracking-tight">
            MADE TO BE LOVED
          </h2>
          <p className="text-[13px] sm:text-[15px] text-[#736B63] mt-2">
            Every piece is created entirely by hand with lustrous pearls, delicate beads, and hours of patient devotion.
          </p>
        </div>

        {/* 2-Column Mobile / 4-Column Desktop Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {featuredList.map((product) => (
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

        {/* Explore Full Boutique CTA */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          {!showAllMobile && products.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAllMobile(true)}
              className="sm:hidden w-full max-w-xs min-h-[44px] px-6 py-2.5 bg-white border border-[#EADBCC] text-[#1C1917] rounded-xl text-[13px] font-medium tracking-wide hover:bg-[#F5EFEB] transition-colors"
            >
              Show More Bestsellers (+4)
            </button>
          )}
          <button
            type="button"
            onClick={onViewAll}
            className="w-full sm:w-auto min-h-[46px] px-8 py-2.5 bg-[#FAF8F5] border border-[#1C1917] text-[#1C1917] rounded-xl text-[13px] font-semibold tracking-wider hover:bg-[#1C1917] hover:text-[#FAF8F5] transition-all duration-200 shadow-xs active:scale-[0.98]"
          >
            VIEW ALL HANDMADE CREATIONS ({products.length})
          </button>
        </div>
      </div>
    </section>
  );
};

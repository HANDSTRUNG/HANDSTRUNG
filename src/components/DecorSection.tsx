import React, { useState } from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface DecorSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onShopDecor: () => void;
}

export const DecorSection: React.FC<DecorSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onShopDecor,
}) => {
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const decorItems = products.filter((p) => p.category === 'Décor').slice(0, 4);

  return (
    <section className="py-8 sm:py-14 bg-[#F5EFEB] border-t border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
              Sanctuary & Living
            </span>
            <h2 className="font-serif text-[26px] sm:text-[36px] font-semibold text-[#1C1917] tracking-tight">
              BEAUTY FOR YOUR SPACE
            </h2>
            <p className="text-[13px] sm:text-[15px] text-[#59524B] mt-1 max-w-lg">
              Handcrafted details that turn everyday spaces into something special. From shimmering vanity trays to sculptural keepsake boxes.
            </p>
          </div>

          <div className="mt-3 sm:mt-0">
            <button
              type="button"
              onClick={onShopDecor}
              className="text-[13px] font-semibold text-[#1C1917] hover:text-[#C59F51] flex items-center gap-1.5 transition-colors"
            >
              <span>SHOP DÉCOR</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* 2-Column Mobile / 4-Column Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {decorItems.map((product) => (
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

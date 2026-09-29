import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface WishlistViewProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onExploreShop: () => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
  onExploreShop,
}) => {
  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="py-6 sm:py-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
            Your Curated Favorites
          </span>
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-[26px] sm:text-[34px] font-semibold text-[#1C1917]">
              Saved Pieces
            </h1>
            <span className="text-[13px] text-[#736B63] tabular-nums">
              {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>

        {wishlistedProducts.length === 0 ? (
          <div className="bg-white border border-[#EADBCC] rounded-2xl p-8 sm:p-12 text-center max-w-md mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-[#FAF0E6] text-[#C59F51] flex items-center justify-center mx-auto mb-4 border border-[#EADBCC]">
              <Heart className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-[20px] font-semibold text-[#1C1917] mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-[13px] text-[#736B63] leading-relaxed mb-6">
              Tap the heart icon on any piece to save your favorite pearl bags, vanity décor, and jewelry items here.
            </p>
            <button
              type="button"
              onClick={onExploreShop}
              className="min-h-[46px] px-8 py-2.5 bg-[#1C1917] text-white rounded-xl text-xs font-semibold tracking-wider hover:bg-[#C59F51] transition-colors"
            >
              EXPLORE ATELIER
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {wishlistedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickAdd={onAddToCart}
                isWishlisted={true}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

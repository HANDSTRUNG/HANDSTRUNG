import React from 'react';
import { Heart, Plus, Check } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  isAddedJustNow?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
  isWishlisted,
  onToggleWishlist,
  isAddedJustNow,
}) => {
  return (
    <div className="group relative flex flex-col bg-white border border-[#EADBCC]/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#DAC5B0]">
      {/* Product Image & Tap Area */}
      <div
        onClick={() => onSelect(product)}
        className="relative w-full aspect-[4/5] bg-[#F5EFEB] overflow-hidden cursor-pointer"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Pearl Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Badge or Handmade label */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-none">
          <span className="text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[#1C1917] rounded-sm shadow-xs border border-[#EADBCC]/50">
            {product.badge || 'Handmade'}
          </span>
        </div>

        {/* Wishlist Button - min 44x44px touch target */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2 right-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-white/90 backdrop-blur-xs shadow-xs text-[#1C1917] hover:text-[#C59F51] transition-transform active:scale-90"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#C59F51] text-[#C59F51]' : 'text-[#1C1917]'
            }`}
          />
        </button>

        {/* Quick Add Floating Button (Mobile friendly) */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
            aria-label={`Quick add ${product.name} to cart`}
            className={`min-w-[42px] min-h-[42px] flex items-center justify-center rounded-full shadow-md transition-all active:scale-95 ${
              isAddedJustNow
                ? 'bg-[#2E7D32] text-white'
                : 'bg-[#1C1917] text-white hover:bg-[#C59F51]'
            }`}
          >
            {isAddedJustNow ? (
              <Check className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <Plus className="w-4 h-4 stroke-[2]" />
            )}
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div
        onClick={() => onSelect(product)}
        className="p-3.5 flex flex-col flex-1 justify-between cursor-pointer"
      >
        <div>
          {/* Category subtitle */}
          <div className="text-[11px] uppercase tracking-wider text-[#8C827A] mb-1 font-medium">
            {product.category}
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-[15px] sm:text-[17px] font-medium leading-snug text-[#1C1917] line-clamp-1 group-hover:text-[#C59F51] transition-colors">
            {product.name}
          </h3>

          <p className="text-[12px] text-[#736B63] line-clamp-1 mt-0.5 hidden sm:block">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Rating info */}
        <div className="mt-2.5 pt-2 border-t border-[#F5EFEB] flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[13px] sm:text-[15px] font-semibold text-[#1C1917] tabular-nums">
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[11px] sm:text-[12px] text-[#A89F91] line-through tabular-nums">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#736B63]">
            <span className="text-[#C59F51]">★</span>
            <span className="font-medium text-[#1C1917]">{product.rating}</span>
            <span className="text-[10px] text-[#A89F91]">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Truck,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onBuyNow: (product: Product, quantity?: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Accordion state
  const [openSection, setOpenSection] = useState<string | null>('details');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1600);
  };

  const handleBuy = () => {
    onBuyNow(product, quantity);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.featured)
  ).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center">
      {/* Container - Full screen on mobile, modal on desktop */}
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] min-h-screen sm:min-h-0 sm:my-8 sm:rounded-2xl sm:overflow-hidden shadow-2xl flex flex-col pb-28 sm:pb-8">
        
        {/* Top Floating App Bar for Mobile Modal */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md px-4 py-3 border-b border-[#EADBCC] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back to boutique"
            className="min-w-[44px] min-h-[44px] flex items-center gap-1.5 text-[#1C1917] hover:text-[#C59F51]"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-[13px] font-medium">Boutique</span>
          </button>

          <span className="font-serif text-[15px] font-semibold tracking-wider text-[#1C1917] truncate max-w-[180px]">
            {product.name}
          </span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onToggleWishlist(product.id)}
              aria-label="Wishlist toggle"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1C1917] hover:text-[#C59F51]"
            >
              <Heart
                className={`w-5 h-5 ${
                  isWishlisted ? 'fill-[#C59F51] text-[#C59F51]' : ''
                }`}
              />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="min-w-[40px] min-h-[40px] flex items-center justify-center text-[#1C1917] hover:text-[#C59F51]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 sm:p-8">
          
          {/* Left Column: Swipeable Product Gallery */}
          <div className="md:col-span-7 flex flex-col gap-3">
            <div className="relative aspect-[4/5] bg-[#F5EFEB] rounded-2xl overflow-hidden border border-[#EADBCC] shadow-xs">
              <img
                src={product.images[activeImageIdx] || product.images[0]}
                alt={`${product.name} view ${activeImageIdx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* View counter pill */}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full tabular-nums">
                {activeImageIdx + 1} / {product.images.length}
              </div>

              {/* Gallery Arrow Controls */}
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#1C1917] shadow-xs hover:bg-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((prev) =>
                        prev === product.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#1C1917] shadow-xs hover:bg-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIdx === idx
                      ? 'border-[#C59F51] shadow-xs'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Purchase Details */}
          <div className="md:col-span-5 flex flex-col justify-start">
            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase tracking-widest text-[#8C827A] font-semibold">
                {product.category}
              </span>
              <span className="text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 bg-[#FAF8F5] text-[#1C1917] rounded-sm border border-[#EADBCC]">
                {product.badge || 'Handmade'}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="font-serif text-[24px] sm:text-[30px] font-semibold text-[#1C1917] leading-snug mb-2">
              {product.name}
            </h1>

            {/* Reviews Rating */}
            <div className="flex items-center gap-2 mb-3 text-[13px]">
              <div className="flex text-[#C59F51]">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="font-medium text-[#1C1917]">{product.rating}</span>
              <span className="text-[#8C827A]">({product.reviewCount} verified reviews)</span>
            </div>

            {/* Price & Installments */}
            <div className="mb-4 pb-3 border-b border-[#EADBCC]">
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] sm:text-[26px] font-bold text-[#1C1917] tabular-nums">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-[15px] text-[#A89F91] line-through tabular-nums">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-[11px] text-[#2E7D32] font-semibold tracking-wider ml-1">
                  100% ARTISAN
                </span>
              </div>
              <p className="text-[11px] text-[#736B63] mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
                <span>Cash on Delivery (COD) & Online Bank Transfer available across Pakistan</span>
              </p>
            </div>

            {/* Short Description */}
            <p className="text-[13px] sm:text-[14px] text-[#59524B] leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Limited Batch Notice */}
            <div className="bg-[#FAF8F5] border border-[#EADBCC] rounded-xl p-3 mb-5 flex items-center gap-2 text-[12px] text-[#736B63]">
              <Sparkles className="w-4 h-4 text-[#C59F51] shrink-0" />
              <span>
                Handmade in limited atelier batches. Only <strong className="text-[#1C1917] font-semibold">{product.stockCount} pieces</strong> available.
              </span>
            </div>

            {/* Desktop Action Buttons (Visible on md+) */}
            <div className="hidden sm:flex flex-col gap-2.5 mb-6">
              <div className="flex gap-2">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#EADBCC] rounded-xl bg-white px-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-10 flex items-center justify-center text-[#1C1917] font-bold"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-semibold tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(product.stockCount, q + 1))}
                    className="w-8 h-10 flex items-center justify-center text-[#1C1917] font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 min-h-[46px] rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                    addedAnimation
                      ? 'bg-[#2E7D32] text-white'
                      : 'bg-[#1C1917] text-white hover:bg-[#C59F51]'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>ADD TO CART</span>
                    </>
                  )}
                </button>
              </div>

              {/* Buy Now Button */}
              <button
                type="button"
                onClick={handleBuy}
                className="w-full min-h-[48px] rounded-xl bg-[#C59F51] text-white font-semibold text-sm tracking-wide hover:bg-[#B28B3D] transition-colors shadow-xs"
              >
                BUY NOW
              </button>
            </div>

            {/* Expandable Accordions */}
            <div className="border-t border-[#EADBCC] divide-y divide-[#EADBCC]">
              {/* Accordion 1: Details */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection('details')}
                  className="w-full py-3 flex items-center justify-between text-left text-[13px] font-semibold text-[#1C1917]"
                >
                  <span>Product Details</span>
                  {openSection === 'details' ? (
                    <ChevronUp className="w-4 h-4 text-[#8C827A]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C827A]" />
                  )}
                </button>
                {openSection === 'details' && (
                  <div className="pb-3 text-[12px] text-[#59524B] space-y-1.5 animate-in fade-in-50">
                    <p className="italic text-[#736B63] mb-2">{product.story}</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 2: Materials & Luster */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection('materials')}
                  className="w-full py-3 flex items-center justify-between text-left text-[13px] font-semibold text-[#1C1917]"
                >
                  <span>Materials & Luster</span>
                  {openSection === 'materials' ? (
                    <ChevronUp className="w-4 h-4 text-[#8C827A]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C827A]" />
                  )}
                </button>
                {openSection === 'materials' && (
                  <div className="pb-3 text-[12px] text-[#59524B] space-y-1 animate-in fade-in-50">
                    <ul className="list-disc pl-4 space-y-1">
                      {product.materials.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 3: Dimensions */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection('dimensions')}
                  className="w-full py-3 flex items-center justify-between text-left text-[13px] font-semibold text-[#1C1917]"
                >
                  <span>Dimensions & Fit</span>
                  {openSection === 'dimensions' ? (
                    <ChevronUp className="w-4 h-4 text-[#8C827A]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C827A]" />
                  )}
                </button>
                {openSection === 'dimensions' && (
                  <div className="pb-3 text-[12px] text-[#59524B] animate-in fade-in-50">
                    <p>{product.dimensions}</p>
                  </div>
                )}
              </div>

              {/* Accordion 4: Handmade Process */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection('process')}
                  className="w-full py-3 flex items-center justify-between text-left text-[13px] font-semibold text-[#1C1917]"
                >
                  <span>Handmade Process & Care</span>
                  {openSection === 'process' ? (
                    <ChevronUp className="w-4 h-4 text-[#8C827A]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C827A]" />
                  )}
                </button>
                {openSection === 'process' && (
                  <div className="pb-3 text-[12px] text-[#59524B] leading-relaxed animate-in fade-in-50">
                    <p>{product.handmadeProcess}</p>
                    <p className="mt-2 text-[#736B63]">
                      Care: Gently wipe with a soft micro-fiber cloth. Avoid harsh perfumes or abrasive solvents.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 5: Shipping & Delivery */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection('shipping')}
                  className="w-full py-3 flex items-center justify-between text-left text-[13px] font-semibold text-[#1C1917]"
                >
                  <span>Shipping & Atelier Guarantee</span>
                  {openSection === 'shipping' ? (
                    <ChevronUp className="w-4 h-4 text-[#8C827A]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C827A]" />
                  )}
                </button>
                {openSection === 'shipping' && (
                  <div className="pb-3 text-[12px] text-[#59524B] space-y-1.5 animate-in fade-in-50">
                    <p className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#C59F51]" />
                      <span>{product.shipping}</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C59F51]" />
                      <span>{product.returns}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="p-4 sm:p-8 pt-0 border-t border-[#EADBCC]/60 mt-4">
          <h2 className="font-serif text-[18px] sm:text-[22px] font-semibold text-[#1C1917] mb-3">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectProduct(rel)}
                className="bg-white border border-[#EADBCC] rounded-xl overflow-hidden cursor-pointer hover:shadow-sm"
              >
                <div className="aspect-square bg-[#F5EFEB]">
                  <img
                    src={rel.images[0]}
                    alt={rel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2.5">
                  <h3 className="font-serif text-[13px] font-medium text-[#1C1917] truncate">
                    {rel.name}
                  </h3>
                  <div className="text-[12px] font-semibold text-[#1C1917] mt-0.5">
                    Rs. {rel.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STICKY BOTTOM MOBILE ACTION BAR (Touch-first ergonomic reach zone) */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EADBCC] p-3 pb-safe shadow-lg">
          <div className="flex items-center gap-2 max-w-md mx-auto">
            {/* Price Preview */}
            <div className="pr-1">
              <div className="text-[10px] uppercase text-[#8C827A] font-semibold">Total</div>
              <div className="text-[15px] font-bold text-[#1C1917] tabular-nums whitespace-nowrap">
                Rs. {product.price.toLocaleString()}
              </div>
            </div>

            {/* Quick Add button */}
            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 min-h-[46px] rounded-xl text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                addedAnimation
                  ? 'bg-[#2E7D32] text-white'
                  : 'bg-[#1C1917] text-white hover:bg-[#333]'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>ADDED</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD TO CART</span>
                </>
              )}
            </button>

            {/* Buy Now button - prominent */}
            <button
              type="button"
              onClick={handleBuy}
              className="flex-1 min-h-[46px] rounded-xl bg-[#C59F51] text-white text-xs font-bold tracking-wider hover:bg-[#B28B3D] transition-colors shadow-xs"
            >
              BUY NOW
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

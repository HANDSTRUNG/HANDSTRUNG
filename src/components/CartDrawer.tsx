import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Tag, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 5000;
  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = promoApplied ? Math.round(rawSubtotal * 0.1) : 0;
  const subtotal = rawSubtotal - discountAmount;
  const shipping = rawSubtotal >= FREE_SHIPPING_THRESHOLD || rawSubtotal === 0 ? 0 : 300;
  const total = subtotal + shipping;

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - rawSubtotal);
  const shippingProgressPercent = Math.min(100, (rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'PEARL10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "PEARL10" for 10% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#EADBCC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#1C1917]" />
            <h2 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#1C1917]">
              Shopping Bag
            </h2>
            <span className="text-[12px] text-[#8C827A] font-medium tabular-nums">
              ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 text-[#1C1917] hover:text-[#C59F51]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Dynamic Bar */}
        <div className="bg-[#F5EFEB] px-4 py-2.5 border-b border-[#EADBCC]">
          {remainingForFreeShipping > 0 ? (
            <div className="text-[12px] text-[#59524B]">
              Add <strong className="text-[#1C1917] font-semibold">Rs. {remainingForFreeShipping.toLocaleString()}</strong> more for{' '}
              <span className="text-[#C59F51] font-semibold">Free Delivery Across Pakistan</span>
            </div>
          ) : (
            <div className="text-[12px] text-[#2E7D32] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>You've unlocked Free Express Delivery Across Pakistan!</span>
            </div>
          )}
          <div className="w-full bg-[#EADBCC] h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div
              className="bg-[#C59F51] h-full rounded-full transition-all duration-300"
              style={{ width: `${shippingProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F5EFEB] flex items-center justify-center text-[#8C827A] mb-4">
                <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1C1917]">
                Your bag is empty
              </h3>
              <p className="text-[13px] text-[#736B63] max-w-xs mt-1 mb-6">
                Discover our handcrafted pearl bags, delicate vanity decor, and bridal accessories.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="min-h-[44px] px-6 py-2.5 bg-[#1C1917] text-white rounded-xl text-xs font-semibold tracking-wider hover:bg-[#C59F51] transition-colors"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 bg-white p-3 rounded-xl border border-[#EADBCC]/80 shadow-2xs"
              >
                {/* Product Thumbnail */}
                <div className="w-20 h-20 bg-[#F5EFEB] rounded-lg overflow-hidden shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif text-[14px] font-semibold text-[#1C1917] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.product.id)}
                        aria-label={`Remove ${item.product.name}`}
                        className="text-[#8C827A] hover:text-[#D32F2F] p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-[11px] text-[#8C827A]">
                      {item.product.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[13px] font-bold text-[#1C1917] tabular-nums">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </span>

                    {/* Stepper */}
                    <div className="flex items-center border border-[#EADBCC] rounded-lg bg-[#FAF8F5]">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#1C1917]"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-semibold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#1C1917]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-[#EADBCC] space-y-3 pb-safe">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Promo code (try PEARL10)"
                  className="w-full h-9 pl-3 pr-2 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-xs text-[#1C1917] uppercase placeholder-none font-medium focus:outline-hidden focus:border-[#C59F51]"
                />
              </div>
              <button
                type="submit"
                className="h-9 px-3.5 bg-[#F5EFEB] border border-[#EADBCC] hover:bg-[#EADBCC] text-[#1C1917] rounded-lg text-xs font-semibold transition-colors"
              >
                Apply
              </button>
            </form>

            {promoApplied && (
              <div className="text-[11px] text-[#2E7D32] flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>10% Atelier Discount Applied</span>
              </div>
            )}
            {promoError && (
              <div className="text-[11px] text-[#D32F2F]">{promoError}</div>
            )}

            {/* Pricing Breakdown */}
            <div className="space-y-1.5 text-[13px] pt-1">
              <div className="flex justify-between text-[#736B63]">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-[#1C1917]">
                  Rs. {rawSubtotal.toLocaleString()}
                </span>
              </div>

              {promoApplied && (
                <div className="flex justify-between text-[#2E7D32]">
                  <span>Discount (10%)</span>
                  <span className="tabular-nums font-medium">
                    -Rs. {discountAmount.toLocaleString()}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-[#736B63]">
                <span>Nationwide Courier Delivery</span>
                <span className="tabular-nums font-medium text-[#1C1917]">
                  {shipping === 0 ? 'FREE' : `Rs. ${shipping}`}
                </span>
              </div>

              <div className="flex justify-between text-[16px] font-bold text-[#1C1917] pt-2 border-t border-[#F5EFEB]">
                <span>Estimated Total</span>
                <span className="tabular-nums">Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            {/* Large Checkout Button */}
            <button
              type="button"
              onClick={onProceedToCheckout}
              className="w-full min-h-[48px] rounded-xl bg-[#1C1917] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#C59F51] transition-colors shadow-sm active:scale-[0.99]"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Continue Shopping */}
            <button
              type="button"
              onClick={onClose}
              className="w-full text-center text-xs font-semibold text-[#8C827A] hover:text-[#1C1917] transition-colors pt-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CreditCard,
  Lock,
  CheckCircle,
  Truck,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { CartItem, CheckoutFormState } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderCompleted,
}) => {
  const [form, setForm] = useState<CheckoutFormState>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Pakistan',
    paymentMethod: 'cod',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = rawSubtotal >= 5000 || rawSubtotal === 0 ? 0 : 300;
  const total = rawSubtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `HS-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderId(generatedId);
      setOrderConfirmed(true);
      onOrderCompleted();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] min-h-screen sm:min-h-0 sm:my-6 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden pb-12">
        
        {/* Top Header */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md px-4 py-3.5 border-b border-[#EADBCC] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back"
            className="min-w-[44px] min-h-[44px] flex items-center gap-1.5 text-[#1C1917] hover:text-[#C59F51]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-[13px] font-medium">Return</span>
          </button>

          <div className="text-center">
            <span className="font-serif text-[18px] font-semibold tracking-wider text-[#1C1917]">
              HANDSTRUNG
            </span>
            <div className="text-[10px] text-[#8C827A] flex items-center justify-center gap-1">
              <Lock className="w-3 h-3 text-[#2E7D32]" />
              <span>256-bit Secure Checkout</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close checkout"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center text-[#1C1917]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmation Screen */}
        {orderConfirmed ? (
          <div className="p-6 sm:p-10 flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#FAF0E6] text-[#C59F51] flex items-center justify-center mb-4 border border-[#EADBCC]">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold mb-1">
              Thank You for Supporting Handcrafted
            </span>
            <h2 className="font-serif text-[26px] sm:text-[34px] font-semibold text-[#1C1917] mb-2">
              Your Order is Confirmed
            </h2>
            <p className="text-[14px] text-[#59524B] max-w-md mb-6 leading-relaxed">
              We have received your order <strong className="text-[#1C1917] font-semibold">#{orderId}</strong>. Our artisans are carefully preparing and inspecting your pieces in our signature keepsake packaging.
            </p>

            <div className="w-full max-w-md bg-white border border-[#EADBCC] rounded-xl p-4 text-left mb-6 space-y-2 text-[13px]">
              <div className="flex justify-between text-[#736B63]">
                <span>Order Reference:</span>
                <span className="font-mono font-semibold text-[#1C1917]">#{orderId}</span>
              </div>
              <div className="flex justify-between text-[#736B63]">
                <span>Confirmation Sent to:</span>
                <span className="font-medium text-[#1C1917]">{form.email || 'customer@example.com'}</span>
              </div>
              <div className="flex justify-between text-[#736B63]">
                <span>Delivery City:</span>
                <span className="font-medium text-[#1C1917]">{form.city || 'Pakistan'}</span>
              </div>
              <div className="flex justify-between text-[#736B63]">
                <span>Payment Mode:</span>
                <span className="font-semibold text-[#2E7D32]">
                  {form.paymentMethod === 'cod'
                    ? 'Cash on Delivery (Pay upon arrival)'
                    : form.paymentMethod === 'bank_transfer'
                    ? 'Online Bank Transfer / Raast'
                    : form.paymentMethod === 'easypaisa_jazzcash'
                    ? 'JazzCash / Easypaisa'
                    : 'Debit/Credit Card'}
                </span>
              </div>
              <div className="flex justify-between text-[#736B63]">
                <span>Courier Delivery Timeline:</span>
                <span className="font-medium text-[#1C1917]">2-3 Business Days (TCS/Trax)</span>
              </div>
              <div className="pt-2 border-t border-[#F5EFEB] flex justify-between font-bold text-[#1C1917]">
                <span>Total Amount:</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="min-h-[48px] px-8 py-3 bg-[#1C1917] text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-[#C59F51] transition-colors"
            >
              CONTINUE BROWSING ATELIER
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6">
            
            {/* Order Mini-Summary Header */}
            <div className="bg-white border border-[#EADBCC] rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="font-serif text-[15px] font-semibold text-[#1C1917]">
                  Order Summary ({cartItems.length} items)
                </span>
                <span className="text-[15px] font-bold text-[#1C1917] tabular-nums">
                  Rs. {total.toLocaleString()}
                </span>
              </div>

              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="w-14 h-14 rounded-lg bg-[#F5EFEB] overflow-hidden shrink-0 border border-[#EADBCC] relative"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                    {item.quantity > 1 && (
                      <span className="absolute bottom-0 right-0 bg-[#1C1917] text-white text-[9px] font-bold px-1 rounded-tl-sm">
                        x{item.quantity}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Contact Information */}
            <div className="bg-white border border-[#EADBCC] rounded-xl p-4 sm:p-5 space-y-3">
              <h3 className="font-serif text-[16px] font-semibold text-[#1C1917] flex items-center justify-between">
                <span>1. Contact Information</span>
                <span className="text-[11px] font-sans text-[#8C827A]">Step 1 of 3</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                    Email for Order Confirmation *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] focus:outline-hidden focus:border-[#C59F51]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                    Phone (for Delivery SMS & Tracking) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0300-1234567"
                    className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] focus:outline-hidden focus:border-[#C59F51]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Destination */}
            <div className="bg-white border border-[#EADBCC] rounded-xl p-4 sm:p-5 space-y-3">
              <h3 className="font-serif text-[16px] font-semibold text-[#1C1917] flex items-center justify-between">
                <span>2. Delivery Address in Pakistan</span>
                <span className="text-[11px] font-sans text-[#8C827A]">Step 2 of 3</span>
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Ayesha Khan"
                    className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] focus:outline-hidden focus:border-[#C59F51]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                    Street Address, House / Apartment Number & Area *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="House #12, Street 4, Phase 5 DHA"
                    className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] focus:outline-hidden focus:border-[#C59F51]"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                      City *
                    </label>
                    <select
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      required
                      className="w-full h-11 px-2.5 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-xs sm:text-sm text-[#1C1917] focus:outline-hidden focus:border-[#C59F51]"
                    >
                      <option value="">Select City</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="Gujranwala">Gujranwala</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Quetta">Quetta</option>
                      <option value="Bahawalpur">Bahawalpur</option>
                      <option value="Sargodha">Sargodha</option>
                      <option value="Abbottabad">Abbottabad</option>
                      <option value="Sukkur">Sukkur</option>
                      <option value="Sheikhupura">Sheikhupura</option>
                      <option value="Other City">Other City (All Pakistan)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                      Postal Code (Optional)
                    </label>
                    <input
                      type="text"
                      value={form.postalCode}
                      onChange={(e) =>
                        setForm({ ...form, postalCode: e.target.value })
                      }
                      placeholder="54000"
                      className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] focus:outline-hidden focus:border-[#C59F51]"
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Pakistan"
                      className="w-full h-11 px-3 bg-[#F5EFEB] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] cursor-not-allowed font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Secure Payment Selection for Pakistan */}
            <div className="bg-white border border-[#EADBCC] rounded-xl p-4 sm:p-5 space-y-3">
              <h3 className="font-serif text-[16px] font-semibold text-[#1C1917] flex items-center justify-between">
                <span>3. Payment Method</span>
                <span className="text-[11px] font-sans text-[#8C827A]">Step 3 of 3</span>
              </h3>

              {/* Payment Methods Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'cod', label: 'Cash on Delivery', sub: 'Pay upon arrival', icon: Truck },
                  { id: 'bank_transfer', label: 'Bank / Raast', sub: 'Meezan, HBL, Alfalah', icon: ShieldCheck },
                  { id: 'easypaisa_jazzcash', label: 'JazzCash / Easypaisa', sub: 'Mobile Wallet', icon: Sparkles },
                  { id: 'card', label: 'Debit / Credit Card', sub: 'Visa / Mastercard', icon: CreditCard },
                ].map((pm) => {
                  const Icon = pm.icon;
                  return (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, paymentMethod: pm.id as any })
                      }
                      className={`min-h-[52px] py-2 px-2 rounded-xl border text-center text-xs font-semibold flex flex-col items-center justify-center gap-0.5 transition-all ${
                        form.paymentMethod === pm.id
                          ? 'border-[#1C1917] bg-[#FAF8F5] text-[#1C1917] shadow-xs'
                          : 'border-[#EADBCC] text-[#736B63] hover:border-[#DAC5B0]'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#C59F51]" />
                      <span className="font-bold leading-tight">{pm.label}</span>
                      <span className="text-[9px] text-[#8C827A]">{pm.sub}</span>
                    </button>
                  );
                })}
              </div>

              {form.paymentMethod === 'cod' && (
                <div className="p-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-xl text-[12px] text-[#59524B] space-y-1">
                  <div className="font-semibold text-[#1C1917] flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#2E7D32]" />
                    <span>Cash on Delivery (COD) Selected</span>
                  </div>
                  <p>
                    You will pay <strong className="text-[#1C1917]">Rs. {total.toLocaleString()}</strong> in cash to the TCS/Trax courier rider when your luxury package arrives at your doorstep.
                  </p>
                </div>
              )}

              {form.paymentMethod === 'bank_transfer' && (
                <div className="p-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-xl text-[12px] text-[#59524B] space-y-1.5">
                  <div className="font-semibold text-[#1C1917]">Atelier Official Account:</div>
                  <p className="font-mono text-xs text-[#1C1917]">
                    Bank: Meezan Bank Ltd.<br />
                    Account Title: HANDSTRUNG ATELIER<br />
                    IBAN / Raast ID: PK00MEZN0001234567890101
                  </p>
                  <p className="text-[11px] text-[#8C827A]">
                    Transfer receipt can be shared via WhatsApp for instant processing.
                  </p>
                </div>
              )}

              {form.paymentMethod === 'easypaisa_jazzcash' && (
                <div className="p-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-xl text-[12px] text-[#59524B] space-y-1">
                  <div className="font-semibold text-[#1C1917]">Mobile Account Details:</div>
                  <p className="font-mono text-xs text-[#1C1917]">
                    JazzCash / Easypaisa Till: 0300-8451920 (HANDSTRUNG)
                  </p>
                  <p className="text-[11px] text-[#8C827A]">
                    Order will be confirmed immediately after transaction confirmation.
                  </p>
                </div>
              )}

              {form.paymentMethod === 'card' && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      maxLength={19}
                      value={form.cardNumber}
                      onChange={(e) =>
                        setForm({ ...form, cardNumber: e.target.value })
                      }
                      placeholder="•••• •••• •••• 4242"
                      className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] font-mono tracking-wider focus:outline-hidden focus:border-[#C59F51]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        maxLength={5}
                        value={form.cardExpiry}
                        onChange={(e) =>
                          setForm({ ...form, cardExpiry: e.target.value })
                        }
                        placeholder="MM/YY"
                        className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] font-mono focus:outline-hidden focus:border-[#C59F51]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#736B63] mb-1">
                        Security CVC
                      </label>
                      <input
                        type="password"
                        maxLength={4}
                        value={form.cardCvc}
                        onChange={(e) =>
                          setForm({ ...form, cardCvc: e.target.value })
                        }
                        placeholder="CVC"
                        className="w-full h-11 px-3 bg-[#FAF8F5] border border-[#EADBCC] rounded-lg text-sm text-[#1C1917] font-mono focus:outline-hidden focus:border-[#C59F51]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Total and Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[50px] bg-[#1C1917] text-white rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-[#C59F51] transition-all shadow-md disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Confirming Order...</span>
                ) : (
                  <span>
                    {form.paymentMethod === 'cod'
                      ? `CONFIRM CASH ON DELIVERY ORDER (Rs. ${total.toLocaleString()})`
                      : `AUTHORIZE & PLACE ORDER (Rs. ${total.toLocaleString()})`}
                  </span>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-[#8C827A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>7-Day Checking Guarantee · Replacement on Damaged Transit</span>
              </div>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

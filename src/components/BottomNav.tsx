import React from 'react';
import { Home, Compass, Layers, Heart, ShoppingBag } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  wishlistCount: number;
  cartCount: number;
  onOpenCart: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  wishlistCount,
  cartCount,
  onOpenCart,
}) => {
  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EADBCC] pb-safe"
    >
      <div className="grid grid-cols-5 items-center h-14 max-w-md mx-auto px-2">
        {/* Tab 1: Home */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`min-h-[44px] flex flex-col items-center justify-center transition-colors relative ${
            activeTab === 'home' ? 'text-[#1C1917]' : 'text-[#8C827A] hover:text-[#1C1917]'
          }`}
        >
          <Home className={`w-5 h-5 transition-transform ${activeTab === 'home' ? 'scale-110 stroke-[2.2]' : ''}`} />
          <span className={`text-[10px] tracking-tight mt-0.5 font-medium ${activeTab === 'home' ? 'font-semibold text-[#1C1917]' : ''}`}>
            Home
          </span>
          {activeTab === 'home' && (
            <span className="w-1 h-1 rounded-full bg-[#C59F51] absolute bottom-1" />
          )}
        </button>

        {/* Tab 2: Shop */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`min-h-[44px] flex flex-col items-center justify-center transition-colors relative ${
            activeTab === 'shop' ? 'text-[#1C1917]' : 'text-[#8C827A] hover:text-[#1C1917]'
          }`}
        >
          <Compass className={`w-5 h-5 transition-transform ${activeTab === 'shop' ? 'scale-110 stroke-[2.2]' : ''}`} />
          <span className={`text-[10px] tracking-tight mt-0.5 font-medium ${activeTab === 'shop' ? 'font-semibold text-[#1C1917]' : ''}`}>
            Shop
          </span>
          {activeTab === 'shop' && (
            <span className="w-1 h-1 rounded-full bg-[#C59F51] absolute bottom-1" />
          )}
        </button>

        {/* Tab 3: Collections */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('collections');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`min-h-[44px] flex flex-col items-center justify-center transition-colors relative ${
            activeTab === 'collections' ? 'text-[#1C1917]' : 'text-[#8C827A] hover:text-[#1C1917]'
          }`}
        >
          <Layers className={`w-5 h-5 transition-transform ${activeTab === 'collections' ? 'scale-110 stroke-[2.2]' : ''}`} />
          <span className={`text-[10px] tracking-tight mt-0.5 font-medium ${activeTab === 'collections' ? 'font-semibold text-[#1C1917]' : ''}`}>
            Explore
          </span>
          {activeTab === 'collections' && (
            <span className="w-1 h-1 rounded-full bg-[#C59F51] absolute bottom-1" />
          )}
        </button>

        {/* Tab 4: Wishlist */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('wishlist');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`min-h-[44px] flex flex-col items-center justify-center transition-colors relative ${
            activeTab === 'wishlist' ? 'text-[#1C1917]' : 'text-[#8C827A] hover:text-[#1C1917]'
          }`}
        >
          <div className="relative">
            <Heart
              className={`w-5 h-5 transition-transform ${
                activeTab === 'wishlist'
                  ? 'fill-[#C59F51] text-[#C59F51] scale-110'
                  : wishlistCount > 0
                  ? 'text-[#C59F51]'
                  : ''
              }`}
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[14px] h-[14px] px-0.5 bg-[#C59F51] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className={`text-[10px] tracking-tight mt-0.5 font-medium ${activeTab === 'wishlist' ? 'font-semibold text-[#1C1917]' : ''}`}>
            Wishlist
          </span>
          {activeTab === 'wishlist' && (
            <span className="w-1 h-1 rounded-full bg-[#C59F51] absolute bottom-1" />
          )}
        </button>

        {/* Tab 5: Cart */}
        <button
          type="button"
          onClick={onOpenCart}
          className="min-h-[44px] flex flex-col items-center justify-center transition-colors relative text-[#8C827A] hover:text-[#1C1917]"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[14px] h-[14px] px-0.5 bg-[#1C1917] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">
            Bag
          </span>
        </button>
      </div>
    </nav>
  );
};

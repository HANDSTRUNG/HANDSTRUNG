import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { ActiveTab, CategoryFilter } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCategory: CategoryFilter;
  setSelectedCategory: (cat: CategoryFilter) => void;
  wishlistCount: number;
  cartCount: number;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  setSelectedCategory,
  wishlistCount,
  cartCount,
  onOpenSearch,
  onOpenCart,
  onOpenAbout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const handleNavCategory = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setActiveTab('shop');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavAbout = () => {
    setMobileMenuOpen(false);
    onOpenAbout();
  };

  return (
    <>
      {/* Slim Top Announcement Bar */}
      {announcementVisible && (
        <div className="bg-[#1C1917] text-[#FAF8F5] text-[11px] sm:text-[12px] px-3 py-1.5 flex items-center justify-between tracking-wide font-normal">
          <div className="flex-1 text-center truncate">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
              <span>Free Delivery across Pakistan on orders over Rs. 5,000</span>
              <span className="hidden sm:inline opacity-80">· Cash on Delivery (COD) Available Nationwide</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setAnnouncementVisible(false)}
            aria-label="Dismiss announcement"
            className="p-1 hover:opacity-75 transition-opacity"
          >
            <X className="w-3.5 h-3.5 text-[#EADBCC]" />
          </button>
        </div>
      )}

      {/* Main Top Header Navigation */}
      <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EADBCC]/60 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
          {/* Left Zone: Hamburger for Mobile + Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open boutique menu"
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2 text-[#1C1917] hover:text-[#C59F51] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* HANDSTRUNG Wordmark Brand Logo */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-1.5 text-left focus-visible:outline-hidden"
            >
              <span className="font-serif text-[21px] sm:text-[25px] font-semibold tracking-[0.2em] text-[#1C1917] group-hover:text-[#C59F51] transition-colors">
                HANDSTRUNG
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C59F51] inline-block shadow-xs transform group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Center Zone: Clean Desktop Navigation Links (Exhaustive 1-line) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wider uppercase font-medium text-[#59524B]">
            <button
              type="button"
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`hover:text-[#1C1917] transition-colors py-1 relative ${
                activeTab === 'home' ? 'text-[#1C1917] font-semibold' : ''
              }`}
            >
              Home
              {activeTab === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C59F51]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => handleNavCategory('Bags')}
              className="hover:text-[#1C1917] transition-colors py-1"
            >
              Bags
            </button>

            <button
              type="button"
              onClick={() => handleNavCategory('Décor')}
              className="hover:text-[#1C1917] transition-colors py-1"
            >
              Décor
            </button>

            <button
              type="button"
              onClick={() => handleNavCategory('Accessories')}
              className="hover:text-[#1C1917] transition-colors py-1"
            >
              Accessories
            </button>

            <button
              type="button"
              onClick={() => handleNavCategory('Gifts')}
              className="hover:text-[#1C1917] transition-colors py-1"
            >
              Gifts
            </button>

            <button
              type="button"
              onClick={() => handleNavCategory('Bridal')}
              className="hover:text-[#1C1917] transition-colors py-1"
            >
              Bridal
            </button>

            <button
              type="button"
              onClick={handleNavAbout}
              className="hover:text-[#1C1917] transition-colors py-1 text-[#8C827A]"
            >
              About
            </button>
          </nav>

          {/* Right Zone: Search, Wishlist, Bag with Touch Targets */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search collection"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-[#1C1917] hover:bg-[#F5EFEB] hover:text-[#C59F51] transition-all"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('wishlist')}
              aria-label={`Wishlist with ${wishlistCount} items`}
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-[#1C1917] hover:bg-[#F5EFEB] hover:text-[#C59F51] transition-all"
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${wishlistCount > 0 ? 'fill-[#C59F51] text-[#C59F51]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-[#C59F51] text-white text-[10px] font-bold flex items-center justify-center tabular-nums shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Cart with ${cartCount} items`}
              className="relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#1C1917] text-white hover:bg-[#C59F51] transition-all shadow-xs"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#C59F51] text-white text-[10px] font-bold flex items-center justify-center tabular-nums border-2 border-white shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-sm bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-250">
            {/* Drawer Header */}
            <div className="p-4 flex items-center justify-between border-b border-[#EADBCC]">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg font-semibold tracking-widest text-[#1C1917]">
                  HANDSTRUNG
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center text-[#1C1917] hover:text-[#C59F51]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-[#8C827A] px-3 py-2 font-semibold">
                Shop Collections
              </div>

              {[
                { label: 'All Creations', cat: 'All' as CategoryFilter },
                { label: 'Pearl Handbags & Clutches', cat: 'Bags' as CategoryFilter },
                { label: 'Home Décor & Accents', cat: 'Décor' as CategoryFilter },
                { label: 'Jewelry & Accessories', cat: 'Accessories' as CategoryFilter },
                { label: 'Thoughtful Gifts', cat: 'Gifts' as CategoryFilter },
                { label: 'Bridal & Special Moments', cat: 'Bridal' as CategoryFilter },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavCategory(item.cat)}
                  className="w-full min-h-[44px] px-3 py-2 text-left rounded-lg text-[15px] font-medium text-[#1C1917] hover:bg-[#F5EFEB] flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#C59F51]">→</span>
                </button>
              ))}

              <div className="pt-4 border-t border-[#EADBCC] mt-4">
                <div className="text-[10px] uppercase tracking-widest text-[#8C827A] px-3 py-2 font-semibold">
                  Atelier & Story
                </div>
                <button
                  type="button"
                  onClick={handleNavAbout}
                  className="w-full min-h-[44px] px-3 py-2 text-left rounded-lg text-[15px] font-medium text-[#1C1917] hover:bg-[#F5EFEB] flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C59F51]" />
                  <span>The Art of Handmade Beauty</span>
                </button>
              </div>
            </div>

            {/* Bottom Atelier Badge */}
            <div className="p-4 bg-[#F5EFEB] border-t border-[#EADBCC] text-[12px] text-[#736B63] space-y-1">
              <p className="font-serif italic text-[#1C1917]">
                "Handcrafted Beauty for Every Corner of Life."
              </p>
              <p className="text-[11px] text-[#8C827A]">
                100% Artisan Made · Grade-AAA Pearls
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

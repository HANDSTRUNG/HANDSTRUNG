/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product } from './data/products';
import { CartItem, ActiveTab, CategoryFilter } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Hero } from './components/Hero';
import { ShopByCategory } from './components/ShopByCategory';
import { FeaturedProducts } from './components/FeaturedProducts';
import { MoreThanBags } from './components/MoreThanBags';
import { WhyHandstrung } from './components/WhyHandstrung';
import { SocialProof } from './components/SocialProof';
import { InstagramGallery } from './components/InstagramGallery';
import { MobileShopView } from './components/MobileShopView';
import { CollectionsView } from './components/CollectionsView';
import { WishlistView } from './components/WishlistView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AboutModal } from './components/AboutModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export default function App() {
  // Navigation & Category states
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [collectionSubTab, setCollectionSubTab] = useState<'all' | 'bridal' | 'for-her' | 'decor' | 'gifts' | 'story'>('all');

  // Wishlist state (persisted)
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('handstrung_wishlist');
      return saved ? JSON.parse(saved) : ['pearl-grace-bag'];
    } catch {
      return ['pearl-grace-bag'];
    }
  });

  // Cart state (persisted)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('handstrung_cart');
      return saved
        ? JSON.parse(saved)
        : [
            {
              product: PRODUCTS[0], // Pearl Grace Bag
              quantity: 1,
            },
          ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('handstrung_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  useEffect(() => {
    try {
      localStorage.setItem('handstrung_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Toggle Wishlist
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from saved wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to wishlist');
        return [...prev, productId];
      }
    });
  };

  // Cart handlers
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { product, quantity }];
      }
    });
    showToast(`Added "${product.name}" to bag`);
  };

  const handleBuyNow = (product: Product, quantity = 1) => {
    handleAddToCart(product, quantity);
    setSelectedProduct(null);
    setCheckoutModalOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from bag');
  };

  // Route to collection or shop based on category
  const handleCategoryNav = (cat: CategoryFilter) => {
    if (cat === 'Bridal') {
      setCollectionSubTab('bridal');
      setActiveTab('collections');
    } else if (cat === 'Décor') {
      setCollectionSubTab('decor');
      setActiveTab('collections');
    } else if (cat === 'Gifts') {
      setCollectionSubTab('gifts');
      setActiveTab('collections');
    } else {
      setSelectedCategory(cat);
      setActiveTab('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-60 bg-[#1C1917] text-[#FAF8F5] px-4 py-2 rounded-full text-xs font-medium shadow-lg tracking-wide animate-in fade-in slide-in-from-top-2 duration-200 flex items-center gap-2 border border-[#C59F51]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryNav}
        wishlistCount={wishlistIds.length}
        cartCount={totalCartCount}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* HOMEPAGE - Balanced, fast, medium-length optimized for mobile phones */}
        {activeTab === 'home' && (
          <>
            {/* 1. Hero Section (Compact mobile presence with instant product visibility) */}
            <Hero
              onShopNow={() => {
                setActiveTab('shop');
                setSelectedCategory('All');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreCollections={() => {
                setCollectionSubTab('all');
                setActiveTab('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Shop by Category ("SHOP YOUR WAY" - Horizontal Snap Scroll) */}
            <ShopByCategory onSelectCategory={handleCategoryNav} />

            {/* 3. Featured Products ("MADE TO BE LOVED" - Top Bestsellers) */}
            <FeaturedProducts
              products={PRODUCTS}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onViewAll={() => {
                setActiveTab('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 4. "MORE THAN BAGS" (2x2 Mobile Collage establishing multi-category atelier) */}
            <MoreThanBags
              onDiscover={() => {
                setCollectionSubTab('story');
                setActiveTab('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={handleCategoryNav}
            />

            {/* 5. "Why HANDSTRUNG?" (4 Clean Touch Pillars) */}
            <WhyHandstrung />

            {/* 6. Social Proof & Community Gallery */}
            <SocialProof />
            <InstagramGallery onSelectProduct={(p) => setSelectedProduct(p)} />
          </>
        )}

        {/* SHOP TAB - Complete catalog with live search, category chips, and sort */}
        {activeTab === 'shop' && (
          <MobileShopView
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {/* COLLECTIONS TAB - Dedicated home for Bridal Suite, For Her, Décor, Gifting, and Atelier Story */}
        {activeTab === 'collections' && (
          <CollectionsView
            products={PRODUCTS}
            initialCollectionTab={collectionSubTab}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setActiveTab('shop');
            }}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onOpenAbout={() => setAboutModalOpen(true)}
          />
        )}

        {/* WISHLIST TAB */}
        {activeTab === 'wishlist' && (
          <WishlistView
            products={PRODUCTS}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onExploreShop={() => {
              setActiveTab('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectCategory={handleCategoryNav}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      {/* Mobile Fixed Bottom Navigation Bar (Thumb ergonomic reach zone) */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab === 'collections') {
            setCollectionSubTab('all');
          }
          setActiveTab(tab);
        }}
        wishlistCount={wishlistIds.length}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
      />

      {/* Modals & Overlays */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />
      )}

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setCartDrawerOpen(false);
          setCheckoutModalOpen(true);
        }}
      />

      {/* Mobile-First Checkout Flow */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cartItems={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Brand & Craftsmanship Story Modal */}
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onExploreShop={() => {
          setActiveTab('shop');
          setSelectedCategory('All');
        }}
      />

      {/* Instant Search Overlay */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />
    </div>
  );
}

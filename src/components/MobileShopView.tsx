import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';
import { Product } from '../data/products';
import { CategoryFilter, SortOption } from '../types';
import { ProductCard } from './ProductCard';

interface MobileShopViewProps {
  products: Product[];
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
}

export const MobileShopView: React.FC<MobileShopViewProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories: CategoryFilter[] = ['All', 'Bags', 'Décor', 'Accessories', 'Gifts', 'Bridal'];

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' || product.category === selectedCategory;
        const matchesQuery =
          searchQuery.trim() === '' ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'rating') return b.rating - a.rating;
        return 0; // 'featured' order as in array
      });
  }, [products, selectedCategory, searchQuery, sortOption]);

  return (
    <div className="py-4 sm:py-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title & Total count */}
        <div className="mb-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-0.5">
            The Complete Atelier
          </span>
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-[24px] sm:text-[32px] font-semibold text-[#1C1917]">
              Shop HANDSTRUNG
            </h1>
            <span className="text-[12px] sm:text-[13px] text-[#736B63] tabular-nums">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>
        </div>

        {/* Search Bar - min 44px height */}
        <div className="relative mb-3.5">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C827A]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pearl bags, vanity trays, bridal vines..."
            className="w-full h-11 pl-10 pr-9 bg-white border border-[#EADBCC] rounded-xl text-[14px] text-[#1C1917] placeholder-[#A89F91] focus:outline-hidden focus:border-[#C59F51] transition-colors shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8C827A] hover:text-[#1C1917]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Horizontal Category Chips */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 mb-3.5 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`min-h-[38px] px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all whitespace-nowrap active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-white border border-[#EADBCC] text-[#59524B] hover:border-[#1C1917]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#EADBCC]/60 text-[12px]">
          <div className="text-[#736B63] flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Category: <strong className="text-[#1C1917] font-medium">{selectedCategory}</strong></span>
          </div>

          <div className="flex items-center gap-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8C827A]" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="bg-transparent text-[#1C1917] font-medium text-[12px] cursor-pointer focus:outline-hidden"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* 2 Products Per Row Mobile Grid / 4 Columns Desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-16 bg-white border border-[#EADBCC] rounded-2xl p-6">
            <p className="font-serif text-lg text-[#1C1917] mb-1">
              No handcrafted pieces found
            </p>
            <p className="text-[13px] text-[#736B63] mb-4">
              Try adjusting your search terms or select another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('All');
              }}
              className="min-h-[40px] px-5 py-2 bg-[#1C1917] text-white rounded-lg text-xs font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

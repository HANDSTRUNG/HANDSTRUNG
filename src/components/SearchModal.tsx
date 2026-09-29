import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const suggestions = [
    'Pearl Grace Bag',
    'Pearl Bloom Box',
    'Bridal Vine',
    'Vanity Tray',
    'Clutch',
    'Gifts For Her',
  ];

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-xs justify-start p-3 sm:p-6">
      <div className="w-full max-w-xl mx-auto bg-[#FAF8F5] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-250 flex flex-col max-h-[85vh]">
        
        {/* Search Input Bar */}
        <div className="p-3.5 sm:p-4 border-b border-[#EADBCC] flex items-center gap-2.5">
          <Search className="w-5 h-5 text-[#8C827A] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pearl bags, home décor, bridal pieces..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#1C1917] placeholder-[#A89F91] focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#8C827A] hover:text-[#1C1917] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-[#8C827A] hover:text-[#1C1917] px-2 py-1"
          >
            Cancel
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        {!query && (
          <div className="p-4 border-b border-[#EADBCC] bg-[#F5EFEB]/50">
            <span className="text-[11px] uppercase tracking-wider text-[#8C827A] font-semibold block mb-2">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-1.5">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="px-3 py-1 bg-white border border-[#EADBCC] rounded-full text-xs text-[#59524B] hover:border-[#1C1917] hover:text-[#1C1917] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query && searchResults.length === 0 ? (
            <div className="py-12 text-center text-[#736B63] text-sm">
              No matching pieces found for "{query}".
            </div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors cursor-pointer border border-transparent hover:border-[#EADBCC]"
              >
                <div className="w-14 h-14 rounded-lg bg-[#F5EFEB] overflow-hidden shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold">
                    {product.category}
                  </div>
                  <h4 className="font-serif text-[15px] font-semibold text-[#1C1917] line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#1C1917]">
                    Rs. {product.price.toLocaleString()}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C59F51]" />
              </div>
            ))
          )}

          {!query && (
            <div className="py-8 text-center text-[#8C827A] text-xs">
              Type keywords above to discover our handmade collections.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

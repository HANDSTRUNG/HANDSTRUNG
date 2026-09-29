import React, { useState } from 'react';
import { Instagram, Heart, X, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, PRODUCTS } from '../data/products';
import { Product } from '../data/products';

interface InstagramGalleryProps {
  onSelectProduct: (product: Product) => void;
}

export const InstagramGallery: React.FC<InstagramGalleryProps> = ({ onSelectProduct }) => {
  const [selectedPost, setSelectedPost] = useState<(typeof INSTAGRAM_POSTS)[0] | null>(null);

  const handlePostShop = (productTag: string) => {
    const found = PRODUCTS.find((p) =>
      p.name.toLowerCase().includes(productTag.toLowerCase()) ||
      productTag.toLowerCase().includes(p.name.toLowerCase())
    ) || PRODUCTS[0];
    setSelectedPost(null);
    onSelectProduct(found);
  };

  return (
    <section className="py-8 sm:py-16 bg-[#FAF8F5] border-t border-[#EADBCC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-lg mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold mb-1">
            <Instagram className="w-3.5 h-3.5 text-[#C59F51]" />
            <span>@handstrung_atelier</span>
          </div>
          <h2 className="font-serif text-[24px] sm:text-[34px] font-semibold text-[#1C1917] tracking-tight">
            A LITTLE HANDSTRUNG MAGIC
          </h2>
          <p className="text-[13px] sm:text-[15px] text-[#736B63] mt-1">
            Tag #HandstrungMoments to be featured in our community gallery.
          </p>
        </div>

        {/* 3x2 Grid on Mobile / 6 Columns on Desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square bg-[#F5EFEB] rounded-xl overflow-hidden cursor-pointer shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay with Instagram icon and likes */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center">
                <Instagram className="w-5 h-5 mb-1" />
                <span className="text-[11px] font-medium flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-white" />
                  {post.likes}
                </span>
                <span className="text-[10px] mt-1 text-[#EADBCC] line-clamp-1 underline">
                  {post.productTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Instagram Post preview & tap-to-shop */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <div className="relative bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
              <div className="relative aspect-square bg-[#F5EFEB]">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between text-[12px] text-[#8C827A] mb-2">
                  <span className="font-medium text-[#1C1917] flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5 text-[#C59F51]" />
                    @handstrung_atelier
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#C59F51] text-[#C59F51]" />
                    {selectedPost.likes} likes
                  </span>
                </div>

                <p className="text-[13px] text-[#59524B] leading-relaxed mb-4">
                  {selectedPost.caption}
                </p>

                <button
                  type="button"
                  onClick={() => handlePostShop(selectedPost.productTag)}
                  className="w-full min-h-[44px] py-2.5 bg-[#1C1917] text-white rounded-xl text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-[#C59F51] transition-colors"
                >
                  <span>Shop Featured: {selectedPost.productTag}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

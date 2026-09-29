import React from 'react';
import { X, Sparkles, Gem, Heart, CheckCircle2 } from 'lucide-react';
import craftImg from '../assets/images/craft_artisan_hands_1790695485711.jpg';
import heroImg from '../assets/images/hero_pearl_collection_1790695440596.jpg';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreShop: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onExploreShop }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] min-h-screen sm:min-h-0 sm:my-8 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden pb-12">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md px-4 py-3.5 border-b border-[#EADBCC] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-[18px] font-semibold tracking-wider text-[#1C1917]">
              HANDSTRUNG
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59F51]" />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close about modal"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center text-[#1C1917] hover:text-[#C59F51]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-8 space-y-6">
          
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#F5EFEB]">
            <img
              src={craftImg}
              alt="Artisan craft work at HANDSTRUNG atelier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#EADBCC] font-semibold mb-1">
                Our Origin & Manifesto
              </span>
              <h1 className="font-serif text-[24px] sm:text-[36px] font-semibold leading-tight">
                THE ART OF HANDMADE BEAUTY
              </h1>
            </div>
          </div>

          {/* Narrative */}
          <div className="prose max-w-none text-[#59524B] text-[14px] sm:text-[15px] leading-relaxed space-y-4">
            <p className="font-serif text-[18px] sm:text-[20px] text-[#1C1917] leading-snug italic">
              "We believe that real luxury is found in patience, touch, and the irreplaceable soul of human hands."
            </p>

            <p>
              HANDSTRUNG was born out of a profound love for the luminous quality of pearls, the delicate precision of beads, and the quiet beauty of slow handmade craft. In a world saturated with ephemeral mass production, we create tangible heirlooms designed to be treasured for generations.
            </p>

            {/* Core Expansion Statement */}
            <div className="p-4 sm:p-5 bg-white border border-[#EADBCC] rounded-xl my-4 space-y-2">
              <div className="flex items-center gap-2 text-[#C59F51] font-semibold text-[13px] tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                <span>More Than a Handbag Store</span>
              </div>
              <p className="text-[13px] sm:text-[14px] text-[#1C1917]">
                HANDSTRUNG is a comprehensive women's lifestyle, fashion, décor, and gifting atelier. We bring handmade beauty into all corners of life:
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[12px] font-medium text-[#1C1917]">
                <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EADBCC] rounded-md">Fashion & Bags</span>
                <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EADBCC] rounded-md">Vanity & Home Décor</span>
                <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EADBCC] rounded-md">Heirloom Accessories</span>
                <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EADBCC] rounded-md">Bridal Adornments</span>
                <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#EADBCC] rounded-md">Thoughtful Keepsake Gifts</span>
              </div>
            </div>

            <p>
              Every bag, jewelry piece, vanity tray, and keepsake box begins with high-grade simulated and natural freshwater pearls, individually inspected for optical depth and luster. Our artisans work in small batches, tensioning each strand by hand to ensure durability without sacrificing fluid elegance.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-white border border-[#EADBCC] rounded-xl p-4 text-center">
              <Gem className="w-6 h-6 text-[#C59F51] mx-auto mb-2" />
              <div className="font-serif font-semibold text-[#1C1917] text-base mb-1">
                Grade-AAA Pearls
              </div>
              <div className="text-[12px] text-[#736B63]">
                Flawless nacre luster and natural light dispersion.
              </div>
            </div>

            <div className="bg-white border border-[#EADBCC] rounded-xl p-4 text-center">
              <Heart className="w-6 h-6 text-[#C59F51] mx-auto mb-2" />
              <div className="font-serif font-semibold text-[#1C1917] text-base mb-1">
                Purely Handmade
              </div>
              <div className="text-[12px] text-[#736B63]">
                Never stamped or machine extruded.
              </div>
            </div>

            <div className="bg-white border border-[#EADBCC] rounded-xl p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-[#C59F51] mx-auto mb-2" />
              <div className="font-serif font-semibold text-[#1C1917] text-base mb-1">
                Heirloom Guarantee
              </div>
              <div className="text-[12px] text-[#736B63]">
                Built to last with lifetime artisan restringing support.
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={() => {
                onClose();
                onExploreShop();
              }}
              className="min-h-[48px] px-8 py-3 bg-[#1C1917] text-white rounded-xl text-sm font-semibold tracking-wider hover:bg-[#C59F51] transition-colors"
            >
              EXPLORE THE ATELIER PIECES
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

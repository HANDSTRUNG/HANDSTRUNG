import React, { useState } from 'react';
import { Instagram, Facebook, Check } from 'lucide-react';
import { CategoryFilter } from '../types';

interface FooterProps {
  onSelectCategory: (category: CategoryFilter) => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenAbout }) => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setJoined(true);
      setEmail('');
      setTimeout(() => setJoined(false), 3000);
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-12 pb-24 lg:pb-12 border-t border-[#332E29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#332E29]">
          
          {/* Brand Info & Tagline */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-[24px] font-semibold tracking-[0.2em] text-[#FAF8F5]">
                HANDSTRUNG
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C59F51]" />
            </div>

            <p className="font-serif italic text-[15px] text-[#EADBCC] leading-snug">
              Handcrafted beauty for every corner of life.
            </p>

            <p className="text-[13px] text-[#A89F91] leading-relaxed max-w-sm">
              A women-focused handmade lifestyle, fashion, décor and gifting atelier celebrating the timeless radiance of pearls, beads, and artisanal devotion.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#292524] border border-[#3E3833] flex items-center justify-center text-[#EADBCC] hover:text-[#C59F51] hover:border-[#C59F51] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#292524] border border-[#3E3833] flex items-center justify-center text-[#EADBCC] hover:text-[#C59F51] hover:border-[#C59F51] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {/* TikTok / Pinterest icons styled as clean SVG */}
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-[#292524] border border-[#3E3833] flex items-center justify-center text-[#EADBCC] hover:text-[#C59F51] hover:border-[#C59F51] transition-colors font-serif font-bold text-xs"
              >
                P
              </a>
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[#292524] border border-[#3E3833] flex items-center justify-center text-[#EADBCC] hover:text-[#C59F51] hover:border-[#C59F51] transition-colors font-serif font-bold text-xs"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-[12px] uppercase tracking-widest font-semibold text-[#C59F51]">
              Atelier Collections
            </h4>
            <ul className="space-y-2 text-[13px] text-[#D6CCC2]">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('Bags')}
                  className="hover:text-white transition-colors"
                >
                  Pearl Handbags
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('Décor')}
                  className="hover:text-white transition-colors"
                >
                  Home & Vanity Décor
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('Accessories')}
                  className="hover:text-white transition-colors"
                >
                  Heirloom Jewelry
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('Bridal')}
                  className="hover:text-white transition-colors"
                >
                  Bridal Suite
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectCategory('Gifts')}
                  className="hover:text-white transition-colors"
                >
                  Gift Sets
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-[12px] uppercase tracking-widest font-semibold text-[#C59F51]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-[13px] text-[#D6CCC2]">
              <li>
                <button
                  type="button"
                  onClick={onOpenAbout}
                  className="hover:text-white transition-colors"
                >
                  About HANDSTRUNG
                </button>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Care & Restringing
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Worldwide Shipping
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  30-Day Returns
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white transition-colors">
                  Contact Concierge
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[12px] uppercase tracking-widest font-semibold text-[#C59F51]">
              JOIN THE HANDSTRUNG LIST
            </h4>
            <p className="text-[13px] text-[#A89F91] leading-relaxed">
              Receive private invitations to limited batch drops, bridal trunk shows, and artisanal stories.
            </p>

            <form onSubmit={handleJoin} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 h-11 px-3.5 bg-[#292524] border border-[#3E3833] rounded-xl text-xs text-white placeholder-[#8C827A] focus:outline-hidden focus:border-[#C59F51]"
                />
                <button
                  type="submit"
                  className="min-h-[44px] px-5 bg-[#C59F51] text-white rounded-xl text-xs font-semibold tracking-wider hover:bg-[#B28B3D] transition-colors flex items-center justify-center shrink-0"
                >
                  JOIN
                </button>
              </div>

              {joined && (
                <div className="text-[12px] text-[#81C784] flex items-center gap-1.5 animate-in fade-in-50">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the HANDSTRUNG inner circle.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-[12px] text-[#8C827A] gap-3">
          <p>© {new Date().getFullYear()} HANDSTRUNG Atelier. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

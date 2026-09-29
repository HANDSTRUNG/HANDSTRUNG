import React from 'react';
import { Sparkles, Gem, HeartHandshake, Award } from 'lucide-react';

export const WhyHandstrung: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'HANDMADE',
      desc: 'Carefully crafted by hand with patient devotion',
    },
    {
      icon: Gem,
      title: 'UNIQUE',
      desc: 'Every piece has its own individual character & luster',
    },
    {
      icon: Sparkles,
      title: 'BEAUTIFUL DETAILS',
      desc: 'Created with microscopic attention to every bead',
    },
    {
      icon: Award,
      title: 'MADE TO TREASURE',
      desc: 'Designed as heirloom keepsakes for special moments',
    },
  ];

  return (
    <section className="py-8 sm:py-14 bg-[#FAF8F5] border-t border-[#EADBCC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-lg mx-auto mb-6 sm:mb-10">
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-[#8C827A] font-semibold block mb-1">
            Our Guiding Pillars
          </span>
          <h2 className="font-serif text-[24px] sm:text-[34px] font-semibold text-[#1C1917] tracking-tight">
            WHY HANDSTRUNG?
          </h2>
        </div>

        {/* 2x2 Grid on Mobile, 4 columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white border border-[#EADBCC]/70 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center shadow-2xs hover:border-[#C59F51]/50 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF8F5] border border-[#EADBCC] flex items-center justify-center text-[#C59F51] mb-2.5 sm:mb-3">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-[14px] sm:text-[17px] font-bold text-[#1C1917] tracking-wider mb-1">
                  {pillar.title}
                </h3>
                <p className="text-[11px] sm:text-[13px] text-[#736B63] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

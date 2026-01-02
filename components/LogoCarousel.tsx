
import React from 'react';

const LOGOS = [
  { name: 'Hostinger', icon: 'cloud' },
  { name: 'Gemini', icon: 'auto_awesome' },
  { name: 'Google AI Studio', icon: 'developer_board' },
  { name: 'FreePik', icon: 'imagesmode' },
  { name: 'Lovable', icon: 'favorite' },
  { name: 'Base 44', icon: 'layers' },
  { name: 'Cursor', icon: 'terminal' },
  { name: 'Antigravity', icon: 'filter_drama' },
  { name: 'GitHub', icon: 'code' },
  { name: 'n8n', icon: 'hub' }
];

export const LogoCarousel: React.FC = () => {
  // Double the list to ensure seamless transition
  const displayLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="relative py-12 bg-[#101622] border-y border-gray-800/50 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center relative z-10">
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
          Tecnologías & Partners Estratégicos
        </p>
      </div>

      <div className="mask-fade-edges relative z-10">
        <div className="flex w-fit animate-marquee">
          {displayLogos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-12 shrink-0 group grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
            >
              <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary/20 group-hover:text-primary transition-all">
                <span className="material-symbols-outlined text-2xl">{logo.icon}</span>
              </div>
              <span className="text-lg font-display text-white uppercase tracking-tighter whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

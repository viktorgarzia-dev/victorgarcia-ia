
import React, { useState, useMemo } from 'react';
import { TOOLS } from '../constants';

interface ToolsSectionProps {
  onMoreTools?: () => void;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ onMoreTools }) => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = useMemo(() => {
    return ['Todas', ...Array.from(new Set(TOOLS.map(t => t.category)))];
  }, []);

  const filteredTools = useMemo(() => {
    const tools = activeCategory === 'Todas'
      ? TOOLS
      : TOOLS.filter(t => t.category === activeCategory);
    return tools;
  }, [activeCategory]);

  return (
    <section className="py-24 bg-[#101622] border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center gap-6 reveal">
          <h2 className="text-3xl md:text-5xl font-display leading-[0.9] tracking-tighter text-white uppercase font-black">
            Mi Stack <br />
            <span className="text-gradient-primary">Tecnológico</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            Las herramientas que utilizo diariamente para construir y automatizar.
          </p>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeCategory === cat
                  ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  : 'bg-[#1b1f27] border-gray-800 text-gray-500 hover:border-gray-600 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Standard 3x3 Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.slice(0, 9).map((tool, i) => (
            <div
              key={tool.name}
              className={`group relative flex flex-col bg-[#161a23] border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all shadow-xl hover:-translate-y-1 reveal overflow-hidden`}
              style={{ transitionDelay: `${(i % 3 + 1) * 100}ms` }}
            >
              {/* Background Image Logo */}
              <div className="absolute inset-0 z-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity flex items-center justify-center p-8">
                <img
                  src={tool.image}
                  alt=""
                  className="w-full h-full object-contain grayscale filter brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161a23] via-transparent to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                    {tool.category}
                  </span>
                  {tool.tag && (
                    <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-black uppercase tracking-wider">
                      {tool.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-primary transition-colors leading-tight font-black">
                  {tool.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 line-clamp-3">
                  {tool.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-800/50">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {tool.pricing}
                  </span>
                  <button className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-primary transition-colors">
                    LINK
                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center reveal">
          <button
            onClick={onMoreTools}
            className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-12 py-5 rounded-2xl font-display uppercase tracking-tighter text-xl transition-all hover:scale-105 shadow-xl shadow-primary/30"
          >
            Explorar Stack Completo
          </button>
        </div>
      </div>
    </section>
  );
};

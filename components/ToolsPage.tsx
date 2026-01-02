
import React, { useState, useMemo } from 'react';
import { TOOLS } from '../constants';

export const ToolsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = useMemo(() => {
    return ['Todas', ...Array.from(new Set(TOOLS.map(t => t.category)))];
  }, []);

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'Todas' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-[#101622] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-8 lg:pt-20 lg:pb-12 overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center flex flex-col items-center reveal">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-[1] tracking-tighter text-white uppercase font-black mb-6 lg:mb-8">
            Directorio de <br />
            <span className="text-gradient-primary">Herramientas</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mb-8 lg:mb-12 px-4">
            El stack tecnológico que utilizo para escalar negocios. Filtrado, probado y recomendado.
          </p>

          <div className="w-full max-w-md relative px-4">
            <span className="material-symbols-outlined absolute left-8 top-1/2 -translate-y-1/2 text-gray-500">search</span>
            <input
              type="text"
              placeholder="Buscar herramienta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1b1f27] border border-gray-800 rounded-2xl py-4 pl-14 pr-6 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Sticky Categories Bar */}
      <section className="sticky top-20 z-40 bg-[#101622]/95 backdrop-blur-md border-b border-gray-800 py-4 reveal active">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar px-4 justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border shrink-0 ${activeCategory === cat
                  ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  : 'bg-[#1b1f27] border-gray-800 text-gray-500 hover:border-gray-600 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0b0d11]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool, i) => (
              <div
                key={`${activeCategory}-${tool.name}`}
                className={`group relative flex flex-col bg-[#161a23]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all shadow-xl reveal overflow-hidden active`}
                style={{ transitionDelay: `${(i % 8) * 50}ms` }}
              >
                {/* Subtle Gradient Glow */}
                <div className="absolute -top-24 -right-24 size-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

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

                  <h3 className="text-2xl font-display text-white group-hover:text-primary transition-colors leading-tight mb-4 font-black">
                    {tool.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-10 line-clamp-3 font-light">
                    {tool.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-800/50 pt-6">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      {tool.pricing}
                    </span>
                    <button className="text-white hover:text-primary transition-colors text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                      LINK
                      <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">open_in_new</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="py-32 text-center flex flex-col items-center reveal active">
              <div className="size-24 rounded-full bg-gray-900/50 flex items-center justify-center mb-6 border border-gray-800">
                <span className="material-symbols-outlined text-gray-700 text-5xl">inventory_2</span>
              </div>
              <h4 className="text-xl font-display text-white uppercase mb-2">Sin resultados</h4>
              <p className="text-gray-500 font-light max-w-xs mb-8">
                No hemos encontrado ninguna herramienta que coincida con "<span className="text-primary font-bold">{searchQuery}</span>"
              </p>
              <button
                onClick={() => { setActiveCategory('Todas'); setSearchQuery(''); }}
                className="bg-primary/10 border border-primary/20 text-primary px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                Limpiar todos los filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 border-t border-gray-800 bg-[#111318]">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-8 reveal">
          <h2 className="text-4xl md:text-5xl font-display leading-[0.9] tracking-tighter text-white uppercase font-black">
            ¿Falta alguna <br />
            <span className="text-gradient-primary">Herramienta?</span>
          </h2>
          <button className="w-fit mx-auto bg-white text-primary px-10 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-tighter hover:scale-105 active:scale-95 shadow-xl">
            Proponer Herramienta
          </button>
        </div>
      </section>
    </div>
  );
};

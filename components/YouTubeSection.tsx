
import React, { useState, useEffect } from 'react';

export const YouTubeSection: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedVideoId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideoId]);

  const featuredVideoId = "L9_xtP4yG-Q";

  return (
    <section className="py-24 bg-[#0b0d11]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Usamos flex-col-reverse para que en móvil el texto (segundo hijo) suba arriba y el video (primer hijo) baje. En lg volvemos a flex-row. */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Video Container */}
          <div
            onClick={() => setSelectedVideoId(featuredVideoId)}
            className="flex-1 w-full relative group cursor-pointer reveal reveal-left"
          >
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-gray-900 border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://i.ytimg.com/vi/L9_xtP4yG-Q/maxresdefault.jpg"
                alt="Curso de Make para principiantes"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-20 md:size-24 bg-[#e62117] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(230,33,23,0.4)] group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-5xl fill-1">play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#e62117] text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    RECOMENDADO
                  </span>
                  <span className="text-gray-400 text-xs font-medium">Hace 2 meses</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display text-white leading-tight">
                  Curso de Make.com: Automatizaciones con IA para Principiantes
                </h3>
              </div>
            </div>
            <div className="absolute -inset-4 bg-red-600/10 rounded-[3rem] blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start gap-8 reveal reveal-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 text-xs font-black uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm fill-1">play_circle</span>
              Contenido Gratuito
            </div>

            <h2 className="text-3xl md:text-4xl font-display leading-[0.9] tracking-tighter text-white uppercase font-black">
              Aprende IA gratis <br />
              en mi <span className="text-gradient-primary">Canal de YouTube</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Únete a mi comunidad de suscriptores apasionados por la tecnología. Publico tutoriales semanales, reviews de nuevas herramientas y guías paso a paso para que domines la inteligencia artificial sin coste alguno.
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-4 w-full sm:w-auto">
              <a
                href="https://www.youtube.com/@VictorGarciaIA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#e62117] hover:bg-[#c41c14] text-white px-8 py-3.5 md:py-4 rounded-xl font-display uppercase tracking-tighter text-base md:text-lg flex items-center justify-center gap-3 shadow-xl shadow-red-600/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                <span className="material-symbols-outlined fill-1">smart_display</span>
                Suscribirse Ahora
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {selectedVideoId && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedVideoId(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5"
              onClick={() => setSelectedVideoId(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

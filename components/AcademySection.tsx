
import React from 'react';
import { ACADEMY_MODULES } from '../constants';

interface AcademySectionProps {
  onMoreInfo?: () => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onMoreInfo }) => {
  return (
    <section className="py-24 border-t border-gray-800 bg-[#111318] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4 reveal">
          <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-[0.2em] border border-green-500/30 animate-pulse">
            INSCRIPCIÓN GRATUITA (CUPOS LIMITADOS)
          </div>
          <h2 className="text-3xl md:text-5xl font-display leading-[0.9] tracking-tighter text-white uppercase font-black">
            Academia <br />
            <span className="text-gradient-primary">IA360</span>
          </h2>
          <p className="text-lg text-gray-400">
            Únete a la comunidad líder en <span className="text-white font-bold">Skool</span>. Aprende desde cero hasta experto las herramientas que están redefiniendo el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-20 max-w-4xl mx-auto">
          {ACADEMY_MODULES.map((module, index) => (
            <div
              key={module.id}
              className={`bg-[#1b1f27] border border-gray-800 p-6 rounded-[2rem] hover:border-primary/50 transition-all group flex flex-col h-full reveal delay-${(index + 1) * 100}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                  <span className="material-symbols-outlined text-xl">{module.icon}</span>
                </div>
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{module.level}</span>
              </div>
              <div className="text-primary text-[10px] font-black mb-1 tracking-[0.2em]">MÓDULO {module.id}</div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">{module.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 font-light line-clamp-2">
                {module.description}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-800/50 flex justify-end">
                <button
                  onClick={onMoreInfo}
                  className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-primary transition-colors group/btn"
                >
                  Ver Detalles
                  <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* New Main CTA Block */}
        <div className="flex flex-col items-center gap-8 reveal">
          <div className="relative group w-fit mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-fuchsia-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <button
              onClick={onMoreInfo}
              className="relative w-fit flex items-center justify-center gap-3 bg-primary hover:bg-purple-600 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-display uppercase tracking-tighter text-lg md:text-2xl transition-all shadow-2xl shadow-primary/40 active:scale-95 group-hover:-translate-y-1"
            >
              <span className="material-symbols-outlined fill-1 text-xl md:text-2xl">rocket_launch</span>
              Reclamar mi Plaza Gratis
            </button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center text-center gap-2 text-green-400 text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              Solo quedan 12 plazas gratuitas este mes
            </div>
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
              Acceso inmediato a Skool + 60h de Contenido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

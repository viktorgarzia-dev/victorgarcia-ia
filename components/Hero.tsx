
import React from 'react';




interface HeroProps {
  onCTA?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCTA }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-20 min-h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-pan opacity-40"></div>
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-blob [animation-delay:2s]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/20 via-transparent to-[#101622]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#101622_85%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-full flex justify-center mb-6">
            <div className="absolute w-64 h-64 bg-gradient-to-r from-primary to-fuchsia-500 rounded-full opacity-15 blur-3xl"></div>
          </div>
          <div className="flex flex-col gap-6 md:gap-7 reveal reveal-left mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-xs font-black uppercase tracking-wider w-fit mx-auto backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              CUPOS GRATUITOS DISPONIBLES
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-[1] tracking-tighter text-white uppercase font-black">
              Domina la IA y <br />
              <span className="text-gradient-primary">Automatiza tu Futuro</span>
            </h1>
            <hr className="w-24 border-0 h-1 bg-gradient-to-r from-primary to-fuchsia-500 mx-auto my-4" />

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl font-light">
              Únete a la academia IA360 de forma <b>completamente gratuita</b> hasta completar el cupo inicial. Aprende a integrar IA en tu flujo de trabajo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onCTA}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-purple-600 text-white h-12 md:h-14 px-8 md:px-10 rounded-xl text-sm md:text-lg font-display uppercase tracking-tighter transition-all shadow-xl shadow-primary/25 hover:-translate-y-1 w-fit mx-auto sm:w-auto"
              >
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
                Acceso Gratis Ahora
              </button>
              <a
                href="https://www.youtube.com/@VictorGarciaIA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1b1f27]/80 hover:bg-[#282e39] border border-gray-800 backdrop-blur-sm text-white h-12 md:h-14 px-6 md:px-8 rounded-xl text-sm md:text-base font-bold transition-all w-fit mx-auto sm:w-auto shadow-[0_0_25px_rgba(239,68,68,0.15)] hover:shadow-[0_0_35px_rgba(239,68,68,0.3)]"
              >
                <span className="material-symbols-outlined text-red-500 text-xl">play_circle</span>
                Canal de YouTube
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

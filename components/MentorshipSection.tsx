
import React from 'react';

interface MentorshipSectionProps {
  onMoreInfo?: () => void;
}

export const MentorshipSection: React.FC<MentorshipSectionProps> = ({ onMoreInfo }) => {
  const mentorshipOptions = [
    {
      title: 'Mentoría 60 minutos',
      description: 'Sesión intensiva de consultoría técnica.',
      price: '97€',
      active: false,
      url: 'https://buy.stripe.com/test_eVq9AV9Yt6vU41y171fIs00'
    },
    {
      title: 'Mentoría 120 minutos',
      description: 'Profundización y resolución de bloqueos complejos.',
      price: '167€',
      active: true
    },
    {
      title: 'Pack Aceleradora',
      description: '4 Sesiones + Soporte Chat continuo.',
      price: '267€',
      active: false
    },
    {
      title: 'Formaciones Empresas',
      description: 'Capacitación in-company para equipos.',
      price: 'PRO',
      active: false,
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-[#101622] border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-pan opacity-10"></div>
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] animate-blob [animation-delay:2s]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/20 via-transparent to-[#101622]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#101622_85%)]"></div>
      </div>

      <div className="relative w-full flex justify-center mb-6">
        <div className="absolute w-64 h-64 bg-gradient-to-r from-primary to-fuchsia-500 rounded-full opacity-15 blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-12 lg:mb-0">
          <div className="flex flex-col gap-10 reveal reveal-left">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] w-fit">
                <span className="material-symbols-outlined text-sm">bolt</span>
                Acompañamiento Estratégico
              </div>
              <h2 className="text-2xl md:text-4xl font-display leading-[1] tracking-tighter text-white uppercase font-black">
                Acelera con <br />
                <span className="text-gradient-primary">Estrategia Real</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Deja de perder tiempo en tutoriales genéricos. Analizaremos tu situación específica, ya seas un profesional independiente o un equipo corporativo, y diseñaremos una hoja de ruta de implementación a medida.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { title: 'Estrategia & Consultoría', desc: 'Resolución de bloqueos técnicos en tiempo real.', icon: 'ads_click' },
                { title: 'IA Agents Roadmap', desc: 'Diseño de sistemas de agentes para tu negocio.', icon: 'smart_toy' },
                { title: 'Formación de Equipos', desc: 'Capacitación técnica para departamentos de IT y Negocio.', icon: 'groups' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="size-12 rounded-xl bg-[#1b1f27] border border-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hidden on mobile, shown on desktop */}
            <div className="pt-4 hidden lg:block">
              <button
                onClick={onMoreInfo}
                className="group relative w-fit bg-primary hover:bg-purple-600 text-white px-10 py-5 rounded-2xl font-display uppercase tracking-tighter text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">ads_click</span>
                Ver Planes de Mentoría
              </button>
            </div>
          </div>

          <div className="relative reveal reveal-right delay-200">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl -z-10"></div>
            <div className="bg-[#161a23] border border-white/5 rounded-[2.5rem] p-6 md:p-12 shadow-2xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                  <img
                    src="../imagenes/image.png"
                    className="size-20 rounded-2xl object-cover border-2 border-primary/20 shadow-lg"
                    alt="Victor Garcia"
                  />
                  <div className="absolute -bottom-1 -right-1 size-5 bg-green-500 rounded-full border-4 border-[#161a23]"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-display text-white uppercase tracking-tighter">Victor Garcia IA</h3>
                  <p className="text-primary text-sm font-bold tracking-tight">Mentor de IA & Automatización</p>
                </div>
              </div>

              <div className="h-px w-full bg-gray-800 mb-8 opacity-50"></div>

              <div className="flex flex-col gap-4">
                {mentorshipOptions.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => option.url ? window.open(option.url, '_blank') : onMoreInfo?.()}
                    className={`relative bg-[#1b1f27] p-6 rounded-2xl border flex justify-between items-center group transition-all hover:border-primary/50 cursor-pointer ${option.active ? 'border-l-4 border-l-primary' : 'border-gray-800'
                      } ${option.highlight ? 'bg-primary/5 border-primary/30' : ''}`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className={`font-bold text-lg leading-tight transition-colors ${option.highlight ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                        {option.title}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {option.description}
                      </span>
                      <p className="text-sm text-white font-medium mt-2">Victor Garcia IA</p>
                    </div>
                    <div className={`text-2xl font-black transition-transform group-hover:scale-110 ${option.highlight ? 'text-primary' : 'text-white'}`}>
                      {option.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shown only on mobile, after the grid */}
        <div className="flex lg:hidden justify-center reveal active pt-8">
          <button
            onClick={onMoreInfo}
            className="group relative w-fit bg-primary hover:bg-purple-600 text-white px-10 py-5 rounded-2xl font-display uppercase tracking-tighter text-lg shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">ads_click</span>
            Ver Planes de Mentoría
          </button>
        </div>
      </div>
    </section>
  );
};

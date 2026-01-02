
import React from 'react';

interface CorporateSectionProps {
  onMoreInfo?: () => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onMoreInfo }) => {
  return (
    <section className="py-24 bg-[#111318] relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center gap-4">
          <div className="px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-xs font-bold uppercase tracking-widest border border-fuchsia-500/20">
            Soluciones para Empresas
          </div>
          <h2 className="text-3xl md:text-4xl font-display leading-[0.9] tracking-tighter text-white uppercase font-black">
            Transformación <br />
            <span className="text-gradient-primary">con IA</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl font-light">
            Auditamos, diseñamos e implementamos sistemas de Inteligencia Artificial que reducen costes operativos y escalan procesos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Automatización de Workflows',
              desc: 'Eliminamos tareas administrativas repetitivas conectando tus herramientas internas.',
              icon: 'account_tree',
              benefits: ['Gestión de Leads', 'Facturación Automática']
            },
            {
              title: 'Asistentes Virtuales 24/7',
              desc: 'Chatbots inteligentes entrenados con tu conocimiento corporativo para ventas y soporte.',
              icon: 'smart_toy',
              benefits: ['Soporte al Cliente', 'Cualificación de Ventas']
            },
            {
              title: 'Generación de Contenido',
              desc: 'Sistemas de IA para crear textos de marketing y creatividades a gran escala.',
              icon: 'auto_fix',
              benefits: ['Blogs SEO con IA', 'Creatividades para Ads']
            }
          ].map((service, i) => (
            <div key={i} className="bg-[#1b1f27]/50 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl hover:border-primary/50 transition-all group relative overflow-hidden">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
                {service.desc}
              </p>
              <ul className="flex flex-col gap-2">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                    <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-fuchsia-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0b0d11] border border-white/5 rounded-[2.5rem] p-8 md:p-16 overflow-hidden flex flex-col items-center text-center gap-8 shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-display leading-[1.1] tracking-tighter text-white uppercase font-black">
              ¿Listo para <br />
              <span className="text-primary">escalar</span> tu negocio?
            </h3>
            <button
              onClick={onMoreInfo}
              className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-display uppercase tracking-tighter text-lg md:text-xl transition-all hover:scale-105 shadow-xl shadow-primary/30"
            >
              Explorar Soluciones Corporativas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

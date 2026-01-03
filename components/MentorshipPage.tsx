
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';

export const MentorshipPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();

    // Add all form fields to URLSearchParams
    data.append('name', formData.get('name') as string);
    data.append('email', formData.get('email') as string);
    data.append('phone', formData.get('phone') as string);
    data.append('level', formData.get('level') as string);
    data.append('message', formData.get('message') as string);
    data.append('timestamp', new Date().toISOString());
    data.append('form_name', 'Formulario Mentorias');

    try {
      await fetch('https://hook.eu1.make.com/l4u9pei16obc2uu04kfal2bg4aswe5uu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Solo mantenemos las mentorías individuales en el grid de precios
  const mentorshipTiers = [
    {
      title: 'Mentoría 60 min',
      price: '97€',
      features: ['Consultoría técnica directa', 'Resolución de errores', 'Grabación de la sesión'],
      cta: 'Reservar Sesión',
      primary: false,
      url: 'https://cal.com/victorgarcia-ia/mentoria-60?overlayCalendar=true'
    },
    {
      title: 'Mentoría 120 min',
      price: '167€',
      features: ['Análisis de arquitectura', 'Diseño de flujos en vivo', 'Soporte 24h post-sesión'],
      cta: 'Reservar Sesión',
      primary: true,
      featured: true,
      url: 'https://cal.com/victorgarcia-ia/mentoria-120?overlayCalendar=true'
    },
    {
      title: 'Pack Aceleradora',
      price: '267€',
      features: ['4 Sesiones de 60 min', 'Acceso WhatsApp directo', 'Revisión de escenarios'],
      cta: 'Reservar Pack',
      primary: false,
      url: 'https://cal.com/victorgarcia-ia/pack-aceleradora-4-sesiones?overlayCalendar=true'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('mentorship-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const solutions = [
    { icon: 'hub', title: 'Make & n8n Pro', desc: 'Desbloquea flujos complejos con Webhooks, APIs personalizadas y manejo de errores avanzado.' },
    { icon: 'terminal', title: 'Vibecoding Senior', desc: 'Aprende a usar Cursor y Python para crear herramientas que las plataformas No-Code no permiten.' },
    { icon: 'psychology', title: 'Arquitectura RAG', desc: 'Diseña sistemas de memoria para IAs usando bases de datos vectoriales (Pinecone/Supabase).' },
    { icon: 'groups', title: 'Formación de Equipos', desc: 'Capacitamos a tu departamento técnico para que la IA sea su mejor aliado operativo.' }
  ];

  return (
    <div className="bg-[#101622] min-h-screen text-white font-sans">
      {/* Hero Persuasivo */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden bg-gradient-to-b from-primary/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto reveal">
            <div className="px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-black uppercase tracking-[0.3em] animate-pulse">
              Acceso Directo a Experto Senior
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-[1] tracking-tighter text-white uppercase font-black">
              Deja de Adivinar. <br />
              <span className="text-gradient-primary">Empieza a Construir.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl delay-100 font-light">
              ¿Llevas semanas estancado en un bug de Make o n8n? <br />
              Elimina meses de prueba y error con mentoría directa o formación personalizada para tu equipo.
            </p>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-display uppercase tracking-tighter text-lg md:text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105"
            >
              Ver Opciones de Aceleración
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section - Individual Mentorships */}
      <section id="pricing" className="py-24 bg-[#111318] border-y border-gray-800 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-display uppercase font-black text-white tracking-tighter leading-none">Mentorías <span className="text-primary">1-on-1</span></h2>
            <p className="text-gray-500 mt-4 font-light">Consultoría técnica directa para profesionales y emprendedores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Membresía IA360 Free Block con Glow Elegante */}
            <div className="bg-[#1b1f27]/90 backdrop-blur-xl border-2 border-primary/60 rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center text-center shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-500 hover:shadow-[0_0_70px_rgba(168,85,247,0.3)] hover:scale-[1.03] relative reveal delay-100 group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-fuchsia-600 text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl z-20">
                COMUNIDAD
              </div>
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-display text-white uppercase tracking-tighter font-black leading-tight">
                  Membresía <br />
                  <span className="text-primary">IA360</span>
                </h3>
              </div>
              <div className="flex flex-col items-center gap-0 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-display font-bold text-green-400 tracking-tighter drop-shadow-[0_0_20px_rgba(74,222,128,0.3)]">GRATIS</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg md:text-xl font-sans mb-8 leading-relaxed font-normal px-2">
                Ideal para aprender los fundamentos antes de una sesión personalizada técnica.
              </p>
              <button
                onClick={() => window.open('https://www.skool.com/victor-garcia-ia-9044', '_blank')}
                className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-8 py-3 rounded-2xl font-display text-base md:text-lg font-black shadow-xl shadow-primary/20 transition-all uppercase tracking-tighter mt-auto group-hover:scale-[1.02] active:scale-95"
              >
                Unirse Ahora
              </button>
            </div>

            {mentorshipTiers.map((tier, i) => (
              <div key={i} className={`bg-[#161a23]/80 backdrop-blur-md border ${tier.featured ? 'border-primary/50 shadow-[0_0_40px_rgba(168,85,247,0.15)]' : 'border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.4)]'} rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.25)] hover:border-primary/40 hover:scale-[1.02] relative reveal delay-${(i + 2) * 100} group`}>
                <div className="mb-4">
                  <h3 className={`text-lg font-display uppercase tracking-tighter font-black transition-colors text-gray-400 group-hover:text-white`}>{tier.title}</h3>
                </div>
                <div className={`text-2xl md:text-3xl font-display font-bold mb-6 tracking-tighter text-white`}>{tier.price}</div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6 opacity-50"></div>
                <ul className="flex flex-col gap-3 mb-10 flex-1 w-full max-w-[280px] mx-auto items-start">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="text-base md:text-lg text-white/90 flex items-start gap-3 font-sans font-normal text-left">
                      <span className={`material-symbols-outlined text-xl md:text-2xl shrink-0 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] mt-0.5`}>check_circle</span>
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => tier.url ? window.open(tier.url, '_blank') : scrollToForm()}
                  className={`w-fit mx-auto px-10 py-4 rounded-2xl font-display font-black transition-all uppercase tracking-tighter text-sm ${tier.primary
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-purple-600'
                    : 'bg-[#222731] text-gray-300 hover:bg-[#2d333e] hover:text-white border border-white/5'
                    }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nueva Sección Bloque: Formaciones para Empresas */}
      <section className="py-24 bg-[#0b0d11] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-[#161a23] border border-white/5 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-[0_0_80px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 reveal reveal-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-black uppercase tracking-[0.3em] mb-8">
                <span className="material-symbols-outlined text-sm">business</span>
                Soluciones Corporativas B2B
              </div>
              <h2 className="text-3xl md:text-4xl font-display uppercase font-black text-white tracking-tighter leading-[1] mb-8">
                Formación <br />
                <span className="text-fuchsia-500">In-Company</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
                Transformamos a tu equipo en una unidad de élite capaz de implementar arquitecturas de IA propietarias. No enseñamos teoría; construimos <span className="text-white font-bold">soluciones reales sobre vuestro propio stack</span>.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { title: 'Programa a medida', icon: 'settings_suggest', desc: 'Diseñamos el currículo según vuestros retos técnicos específicos.' },
                  { title: 'Auditoría previa', icon: 'search_check', desc: 'Analizamos vuestros flujos de trabajo antes de empezar la formación.' },
                  { title: 'Casos de uso reales', icon: 'precision_manufacturing', desc: 'Los ejercicios se realizan sobre procesos operativos de vuestra empresa.' },
                  { title: 'Soporte post-formación', icon: 'support_agent', desc: 'Garantizamos que lo aprendido se implemente con éxito en producción.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group/item">
                    <div className="size-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 shrink-0 group-hover/item:bg-fuchsia-500 group-hover/item:text-white transition-all shadow-[0_0_15px_rgba(217,70,239,0.1)]">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => window.open('https://cal.com/victorgarcia-ia/30min?overlayCalendar=true', '_blank')}
                  className="w-fit mx-auto lg:mx-0 bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-10 py-5 rounded-2xl font-display uppercase tracking-tighter text-lg shadow-xl shadow-fuchsia-600/20 transition-all active:scale-95"
                >
                  Agendar Llamada
                </button>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 w-fit mx-auto lg:mx-0">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=corp${i}`} className="size-8 rounded-full border-2 border-[#161a23]" alt="team" />)}
                  </div>
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest">+15 empresas ya formadas</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full lg:max-w-md reveal reveal-right delay-200">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 group shadow-[0_0_50px_rgba(217,70,239,0.05)]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000"
                  alt="Formación corporativa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161a23] via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-xs font-black text-fuchsia-400 uppercase tracking-[0.4em] mb-2 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">Mentalidad Senior</div>
                  <div className="text-white text-2xl font-display uppercase leading-tight tracking-tighter">"La IA no sustituye equipos, sustituye los procesos lentos."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verticales de Éxito */}
      <section className="py-24 bg-[#101622]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-display uppercase font-black tracking-tighter text-white">Verticales de Éxito</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className={`bg-[#1b1f27] p-8 md:p-10 rounded-[2.5rem] border border-gray-800 hover:border-primary/50 hover:bg-[#1f242d] transition-all group reveal delay-${(i + 1) * 100} shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-primary/10`}>
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                  <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-white group-hover:text-primary transition-colors">{s.title}</h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0b0d11]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal reveal-left">
              <h2 className="text-3xl md:text-4xl font-display uppercase font-black text-white tracking-tighter mb-8 leading-none">
                El "Tutorial Hell" <br />
                <span className="text-primary">te está costando dinero</span>
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  'Tutoriales genéricos que no se aplican a tu caso real.',
                  'Horas perdidas buscando por qué un webhook no responde.',
                  'Falta de formación técnica en equipos que dependen de la IA.',
                  'Miedo a vender una solución que no sabes si aguantará el tráfico.'
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-red-500 mt-1">cancel</span>
                    <p className="text-gray-400 text-lg font-light">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#161a23] p-10 rounded-[3rem] border border-white/5 shadow-2xl reveal reveal-right delay-200">
              <div className="text-xs font-black text-primary mb-4 tracking-widest uppercase italic">"Lo que hacemos en 60 min"</div>
              <h3 className="text-2xl font-bold mb-6">Sustituimos la duda por arquitectura validada.</h3>
              <p className="text-gray-500 mb-8 italic font-light leading-relaxed">
                "No solo arreglamos el código; diseñamos la lógica para que tu sistema sea infalible. Mi objetivo es que salgas de la llamada con el problema resuelto y la confianza recuperada."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" className="size-12 rounded-full border-2 border-primary" alt="Victor" />
                <div>
                  <div className="font-bold text-white">Victor Garcia</div>
                  <div className="text-xs text-primary font-bold uppercase tracking-widest">Mentor IA Senior</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#101622] border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-2xl md:text-4xl font-display uppercase font-black mb-16 reveal">¿Cómo empezamos?</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>
            {[
              { step: '01', title: 'Aplica', desc: 'Rellena el formulario con tu reto técnico actual.' },
              { step: '02', title: 'Evaluación', desc: 'Analizo si puedo ayudarte de forma efectiva.' },
              { step: '03', title: 'Escala', desc: 'Resolvemos tu bloqueo en vivo y definimos el roadmap.' }
            ].map((p, i) => (
              <div key={i} className={`text-center flex flex-col items-center reveal delay-${(i + 1) * 200}`}>
                <div className="size-16 rounded-full bg-[#1b1f27] border-4 border-[#101622] outline outline-1 outline-primary/50 flex items-center justify-center text-xl font-black text-primary mb-6 shadow-2xl">
                  {p.step}
                </div>
                <h4 className="text-lg font-bold mb-2 uppercase">{p.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mentorship-form" className="py-24 relative overflow-hidden bg-[#111318]">
        <div className="max-w-4xl mx-auto px-4 reveal">
          <div className="bg-[#1b1f27] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative z-10">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                  <span className="material-symbols-outlined text-5xl">check</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">¡Solicitud Enviada!</h2>
                <p className="text-gray-400 font-light">Revisaré tu caso y te contactaré personalmente por WhatsApp en menos de 24 horas.</p>
                <button onClick={() => setFormSubmitted(false)} className="mt-8 text-primary font-black uppercase text-xs tracking-widest underline">Enviar otra solicitud</button>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-display uppercase font-black text-white tracking-tighter mb-4">
                    Aplica a <span className="text-primary">Mentoría / Formación</span>
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base font-light">Cuéntame tu reto o las necesidades de tu equipo. Si veo que puedo darte un ROI claro, te contactaré hoy mismo.</p>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black text-white uppercase tracking-widest ml-1 opacity-90">Nombre Completo</label>
                      <input required name="name" type="text" placeholder="Tu nombre" className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-gray-600 text-base" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black text-white uppercase tracking-widest ml-1 opacity-90">Email Corporativo</label>
                      <input required name="email" type="email" placeholder="email@ejemplo.com" className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-gray-600 text-base" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black text-white uppercase tracking-widest ml-1 opacity-90">WhatsApp</label>
                      <input required name="phone" type="tel" placeholder="+34 600 000 000" className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-gray-600 text-base" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black text-white uppercase tracking-widest ml-1 opacity-90">¿Qué nivel tienes en IA?</label>
                      <select required name="level" className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-all appearance-none cursor-pointer text-base">
                        <option value="basic">Principiante (Usando ChatGPT)</option>
                        <option value="inter">Intermedio (Make/n8n básico)</option>
                        <option value="advanced">Avanzado (Desarrollador/Senior)</option>
                        <option value="team">Represento a un equipo/empresa</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-black text-white uppercase tracking-widest ml-1 opacity-90">Tu Reto o Necesidades de Formación</label>
                    <textarea required name="message" rows={4} placeholder="Sé específico: ¿Qué estás intentando construir o qué procesos quieres que tu equipo aprenda a automatizar?" className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-all resize-none placeholder:text-gray-600 text-base"></textarea>
                  </div>
                  <button disabled={loading} className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-12 py-5 rounded-xl font-display uppercase tracking-tighter text-xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? 'Enviando...' : 'Enviar Solicitud'}
                  </button>
                  <p className="text-xs text-center text-gray-400 uppercase tracking-widest font-bold">Respuesta en menos de 24h vía WhatsApp</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 text-center border-t border-gray-800/30 opacity-40">
        <p className="text-[9px] font-bold uppercase tracking-[0.4em]">Cupos limitados por mes para garantizar calidad técnica</p>
      </section>
    </div>
  );
};

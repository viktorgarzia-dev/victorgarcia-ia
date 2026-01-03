
import React, { useState } from 'react';

export const EnterprisePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { title: 'Auditoría de Procesos', desc: 'Analizamos tus flujos actuales para identificar cuellos de botella y oportunidades de automatización masiva.', icon: 'analytics' },
    { title: 'Prueba de Valor (PoC)', desc: 'Construimos un prototipo funcional en menos de 10 días para validar el ROI del sistema propuesto.', icon: 'biotech' },
    { title: 'Despliegue de Agentes', desc: 'Implementamos ecosistemas de agentes autónomos que se integran con tus herramientas (Slack, CRM, ERP).', icon: 'rocket' },
    { title: 'Escalado & Soporte', desc: 'Monitoreo continuo y optimización de tokens/latencia para asegurar la estabilidad operativa.', icon: 'school' }
  ];

  const leadGenFeatures = [
    {
      title: 'Prospección Hiper-Personalizada',
      desc: 'Sistemas que investigan el perfil de LinkedIn y la web de cada prospecto para escribir emails que parecen redactados por un humano senior.',
      icon: 'contact_mail'
    },
    {
      title: 'Cualificación Autónoma 24/7',
      desc: 'Agentes de voz y chat que filtran leads según presupuesto y necesidad antes de agendar una reunión en el calendario de tus ventas.',
      icon: 'filter_alt'
    },
    {
      title: 'Enriquecimiento de Datos',
      desc: 'Conectamos fuentes de datos masivas para encontrar el contacto directo de los tomadores de decisiones en cualquier industria.',
      icon: 'database'
    }
  ];

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();

    // Collect all selected checkboxes for 'interest'
    const interests: string[] = [];
    const checkboxes = e.currentTarget.querySelectorAll('input[name="interest"]:checked');
    checkboxes.forEach((checkbox) => {
      interests.push((checkbox as HTMLInputElement).value);
    });

    data.append('name_role', formData.get('name_role') as string);
    data.append('company', formData.get('company') as string);
    data.append('email', formData.get('email') as string);
    data.append('team_size', formData.get('team_size') as string);
    data.append('interests', interests.join(', '));
    data.append('budget', formData.get('budget') as string);
    data.append('project_desc', formData.get('project_desc') as string);
    data.append('timestamp', new Date().toISOString());
    data.append('form_name', 'Formulario empresas');

    try {
      await fetch('https://hook.eu1.make.com/l4u9pei16obc2uu04kfal2bg4aswe5uu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#101622] min-h-screen text-white">
      {/* Enterprise Hero - Tighter Padding for tablet and mobile */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-gray-800 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-pan opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 rounded-full blur-[120px] animate-blob [animation-delay:3s]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-[#101622] to-[#101622]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-black uppercase tracking-wider mb-6 shadow-2xl shadow-fuchsia-500/10">
              <span className="material-symbols-outlined text-sm">business</span>
              SOLUCIONES DE ALTO NIVEL PARA EMPRESAS
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display leading-[1] tracking-tighter text-white uppercase font-black mb-6">
              Automatización <br />
              <span className="text-gradient-primary">Sin Fricción</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              Transformamos la operativa de tu negocio mediante arquitecturas de IA personalizadas. Desde generación de leads hasta agentes operativos autónomos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => document.getElementById('enterprise-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-fit mx-auto sm:mx-0 bg-primary hover:bg-purple-600 text-white px-10 py-5 rounded-2xl font-display uppercase tracking-tighter text-base md:text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 border border-white/10"
              >
                Solicitar Auditoría
              </button>
              <button className="w-fit mx-auto sm:mx-0 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-display uppercase tracking-tighter text-base border border-white/10 transition-all">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the Enterprise content... */}
      <section className="py-24 bg-[#0b0d11]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal reveal-left">
              <div className="text-primary text-[10px] font-black mb-4 tracking-[0.3em] uppercase">Estrategia de Crecimiento</div>
              <h2 className="text-3xl md:text-4xl font-display uppercase font-black text-white tracking-tighter mb-8 leading-tight">
                Generación de <span className="text-gradient-primary">Leads B2B</span> <br />
                con Inteligencia Artificial
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                Eliminamos el trabajo manual en la búsqueda de clientes. Nuestros sistemas no solo encuentran prospectos, sino que inician la conversación de forma personalizada y relevante.
              </p>

              <div className="space-y-8">
                {leadGenFeatures.map((f, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="size-14 rounded-2xl bg-[#1b1f27] border border-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">{f.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal reveal-right delay-200">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[3rem] -z-10"></div>
              <div className="bg-[#161a23] border border-white/5 p-8 rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="flex flex-col gap-6">
                  <div className="bg-[#1b1f27] p-6 rounded-2xl border border-gray-800">
                    <div className="text-xs font-black text-gray-500 uppercase mb-4 tracking-widest">Caso de Éxito: Prospección SaaS</div>
                    <div className="flex items-end gap-4 mb-2">
                      <div className="text-4xl font-black text-green-400">+1,200</div>
                      <div className="text-sm text-gray-400 pb-1 italic font-medium">Leads cualificados / mes</div>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">Automatización completa de búsqueda y primer contacto vía LinkedIn & Cold Email.</p>
                  </div>
                  <div className="bg-[#1b1f27] p-6 rounded-2xl border border-gray-800">
                    <div className="text-xs font-black text-gray-500 uppercase mb-4 tracking-widest">Eficiencia en Ventas</div>
                    <div className="flex items-end gap-4 mb-2">
                      <div className="text-4xl font-black text-primary">-85%</div>
                      <div className="text-sm text-gray-400 pb-1 italic font-medium">Tiempo de prospección manual</div>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">El equipo de ventas ahora solo atiende llamadas con leads que ya han sido filtrados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 flex flex-col items-center gap-4 reveal">
            <h2 className="text-2xl md:text-3xl font-display leading-tight tracking-tighter text-white uppercase font-black">
              Ecosistemas <br />
              <span className="text-gradient-primary">Inteligentes</span>
            </h2>
            <p className="text-gray-400 max-w-xl font-light text-sm md:text-base">Más allá de simples prompts. Construimos sistemas integrados en tu stack actual.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Arquitectura de Agentes IA',
                desc: 'Desarrollamos agentes que no solo responden preguntas, sino que ejecutan acciones: envían emails, actualizan CRM y coordinan tareas entre departamentos.',
                icon: 'smart_toy',
                features: ['Integración con n8n/Make', 'Conexión con APIs propietarias', 'Memoria a largo plazo (RAG)']
              },
              {
                title: 'Workflows de Operaciones',
                desc: 'Automatizamos la gestión documental, la entrada de datos y el soporte técnico interno para que tu equipo se enfoque en el valor real.',
                icon: 'hub',
                features: ['Análisis de documentos masivo', 'Soporte IT automatizado', 'Gestión de inventario con IA']
              }
            ].map((service, i) => (
              <div key={i} className={`bg-[#1b1f27] border border-gray-800 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] hover:border-primary/30 transition-all reveal delay-${(i + 1) * 200}`}>
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-6 uppercase leading-tight tracking-tighter">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-10 text-sm md:text-base font-light">{service.desc}</p>
                <ul className="flex flex-col gap-4">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-bold">
                      <span className="material-symbols-outlined text-primary">done_all</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111318] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display uppercase font-black mb-20 reveal tracking-tighter text-center">Nuestro Proceso Senior</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col items-center text-center reveal delay-${(i + 1) * 100}`}>
                <div className="size-20 rounded-3xl bg-[#1b1f27] border border-gray-800 flex items-center justify-center text-primary mb-8 shadow-xl hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <h4 className="text-white font-black text-lg mb-3 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise-form" className="py-24 bg-[#101622] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 reveal">
          <div className="bg-[#1b1f27] border border-white/10 rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-20 shadow-2xl">
            {submitted ? (
              <div className="text-center py-20">
                <div className="size-24 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-8 animate-bounce">
                  <span className="material-symbols-outlined text-6xl">business_center</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display uppercase font-black mb-6">Solicitud Recibida</h2>
                <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed font-light">
                  Analizaremos tu empresa y te contactaremos en las próximas 24 horas para agendar la auditoría estratégica.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-12 text-primary font-black uppercase text-xs tracking-[0.3em] underline">Volver al formulario</button>
              </div>
            ) : (
              <>
                <div className="text-center mb-16 flex flex-col items-center gap-4">
                  <h2 className="text-3xl md:text-4xl font-display leading-tight tracking-tighter text-white uppercase font-black">
                    Auditoría <br />
                    <span className="text-gradient-primary">Estratégica B2B</span>
                  </h2>
                  <p className="text-gray-500 max-w-md font-light text-sm">Cuéntanos sobre tu operación y diseñaremos una propuesta técnica a medida.</p>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Nombre y Cargo</label>
                      <input required name="name_role" type="text" placeholder="Ej: Juan Pérez, CEO" className="w-full bg-[#101622] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Nombre de la Empresa</label>
                      <input required name="company" type="text" placeholder="Tu Empresa S.L." className="w-full bg-[#101622] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Corporativo</label>
                      <input required name="email" type="email" placeholder="nombre@empresa.com" className="w-full bg-[#101622] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tamaño del Equipo</label>
                      <select required name="team_size" className="w-full bg-[#101622] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                        <option value="1-10">1-10 empleados</option>
                        <option value="11-50">11-50 empleados</option>
                        <option value="51-200">51-200 empleados</option>
                        <option value="200+">Más de 200 empleados</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Interés Principal</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {['Generación de Leads', 'Ecosistema de Agentes', 'Automatización Interna', 'Consultoría Estratégica', 'Formación In-Company'].map((interest) => (
                        <label key={interest} className="flex items-center gap-3 bg-[#101622] border border-gray-800 p-4 rounded-xl cursor-pointer hover:border-primary/50 transition-all">
                          <input type="checkbox" name="interest" value={interest} className="size-5 rounded border-gray-800 text-primary focus:ring-primary bg-gray-900" />
                          <span className="text-xs font-bold text-gray-300">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Presupuesto Estimado Mensual (EUR)</label>
                    <select required name="budget" className="w-full bg-[#101622] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                      <option value="<1k">Menos de 1.000€</option>
                      <option value="1k-3k">1.000€ - 3.000€</option>
                      <option value="3k-10k">3.000€ - 10.000€</option>
                      <option value="10k+">Más de 10.000€</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Descripción del Proyecto / Reto Actual</label>
                    <textarea required name="project_desc" rows={4} placeholder="Danos un poco de contexto sobre qué procesos quieres optimizar..." className="w-full bg-[#101622] border border-gray-800 rounded-2xl px-6 py-4 text-white outline-none focus:border-primary transition-all resize-none placeholder:text-gray-700"></textarea>
                  </div>
                  <button disabled={loading} className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-12 py-5 rounded-2xl font-display uppercase tracking-tighter text-lg md:text-xl shadow-xl shadow-primary/30 transition-all active:scale-[0.98] mt-4 disabled:opacity-50">
                    {loading ? 'Enviando Solicitud...' : 'Solicitar Auditoría Corporativa'}
                  </button>
                  <div className="text-center flex items-center justify-center gap-2 text-gray-600">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Tratamiento confidencial de datos - GDPR Compliant</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-800/30 opacity-30 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.8em]">IA Senior Solutions for Future-Proof Companies</p>
      </section>
    </div>
  );
};

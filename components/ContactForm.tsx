
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();

    // Add all form fields to URLSearchParams
    data.append('name', formData.get('name') as string);
    data.append('email', formData.get('email') as string);
    data.append('phone', formData.get('phone') as string);
    data.append('interest', formData.get('interest') as string);
    data.append('message', formData.get('message') as string);
    data.append('timestamp', new Date().toISOString());

    try {
      await fetch('https://hook.eu1.make.com/l4u9pei16obc2uu04kfal2bg4aswe5uu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });
      setStatus('success');
    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('idle');
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-24 bg-[#111318] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-[#1b1f27] border border-primary/30 rounded-[3rem] p-12 text-center reveal active">
            <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
              <span className="material-symbols-outlined text-5xl">check_circle</span>
            </div>
            <h2 className="text-3xl font-display uppercase font-black text-white mb-4">¡Mensaje Recibido!</h2>
            <p className="text-gray-400 max-w-md mx-auto">He recibido tu información. Analizaré tu caso personalmente y te contactaré vía WhatsApp o Email en menos de 24 horas.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-8 text-primary font-black uppercase text-xs tracking-widest hover:underline"
            >
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#111318] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-8 reveal reveal-left">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Disponible para Proyectos
              </span>
              <h2 className="text-3xl md:text-4xl font-display leading-[1] tracking-tighter text-white uppercase font-black">
                Hablemos de <br />
                <span className="text-gradient-primary">IA Aplicada</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg font-light">
                ¿Tienes un reto técnico, quieres formar a tu equipo o escalar tu negocio con agentes autónomos? Cuéntame tu visión y la haremos realidad.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-gray-400">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <span className="text-sm font-medium">Respuesta técnica garantizada</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="text-sm font-medium">Contacto en menos de 24h</span>
              </div>
            </div>
          </div>

          {/* Expanded Form */}
          <div className="bg-[#1b1f27] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative reveal reveal-right">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Nombre</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="email@ejemplo.com"
                    className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">WhatsApp / Tel</label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+34 000 000 000"
                    className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Me interesa...</label>
                  <select
                    required
                    name="interest"
                    className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-3.5 text-white outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                  >
                    <option value="academia">IA360 Academia (Aprender)</option>
                    <option value="mentoria">Mentoría 1-on-1 (Bloqueo Técnico)</option>
                    <option value="empresa">Soluciones Empresas (B2B)</option>
                    <option value="otro">Otros Proyectos</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Tu Reto o Proyecto</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="¿En qué puedo ayudarte hoy?"
                  className="bg-[#101622] border border-gray-800 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-all resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <button
                disabled={status === 'loading'}
                className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-8 py-4 rounded-2xl font-display uppercase tracking-tighter text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    Enviar Propuesta
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-600 uppercase tracking-widest font-medium">
                Al enviar, aceptas que procesemos tus datos para contactarte profesionalmente.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

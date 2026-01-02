
import React, { useState } from 'react';
import { getBrandAdvice } from '../services/gemini';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const advice = await getBrandAdvice(query);
      setResponse(advice || 'No pude generar una respuesta. Por favor intenta de nuevo.');
    } catch (err) {
      setResponse('Error al conectar con la IA. Por favor intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[60] size-14 bg-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center text-white hover:scale-110 transition-transform group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">smart_toy</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1b1f27] border border-gray-800 rounded-3xl w-full max-w-lg shadow-2xl flex flex-col max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#111318]">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h3 className="font-black text-white">IA Brand Assistant</h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
              {!response && !loading && (
                <div className="bg-[#111318] p-4 rounded-2xl border border-gray-800 text-sm text-gray-400">
                  Hola! Soy tu asistente IA. ¿En qué puedo ayudarte?
                  <div className="mt-4 grid gap-2">
                    {['¿Cómo funciona la academia?', '¿Qué es el vibecoding?', 'Busco servicios para mi empresa'].map(q => (
                      <button
                        key={q}
                        onClick={() => setQuery(q)}
                        className="text-left p-2 rounded-lg bg-[#1b1f27] hover:bg-primary/10 hover:text-primary transition-all text-xs"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {loading && (
                <div className="flex items-center gap-3 text-sm text-gray-400 bg-[#111318] p-4 rounded-2xl animate-pulse">
                  <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
                  Analizando tu consulta con IA...
                </div>
              )}

              {response && (
                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/20 text-sm text-gray-200 leading-relaxed">
                  <div className="font-bold text-primary mb-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">robot_2</span>
                    Respuesta:
                  </div>
                  {response}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-6 border-t border-gray-800 bg-[#111318]">
              <div className="flex gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Escribe tu duda aquí..."
                  className="flex-1 bg-[#1b1f27] border border-gray-800 rounded-xl px-4 py-2 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                />
                <button
                  disabled={loading}
                  className="bg-primary hover:bg-purple-600 text-white size-10 rounded-xl flex items-center justify-center disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

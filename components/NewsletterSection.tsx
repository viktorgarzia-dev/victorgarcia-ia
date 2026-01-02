
import React, { useState } from 'react';

export const NewsletterSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="bg-[#1b1f27] border border-white/5 rounded-[3rem] p-8 md:p-16 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left reveal reveal-left active">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em] mb-6">
                            <span className="material-symbols-outlined text-sm">auto_stories</span>
                            Lead Magnet Gratuito
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase font-black text-white tracking-tighter leading-[1] mb-6">
                            Guía de <span className="text-gradient-primary">50 Prompts Pro</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
                            Únete a más de <span className="text-white font-bold">5,000 suscriptores</span> y recibe semanalmente estrategias de IA, automatizaciones exclusivas y este recurso gratuito para dominar ChatGPT.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70">
                            {['Vibecoding', 'n8n', 'Make', 'Agents'].map(tag => (
                                <span key={tag} className="text-xs font-black uppercase tracking-widest text-gray-500 border border-gray-800 px-3 py-1 rounded-lg">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md reveal reveal-right active">
                        {status === 'success' ? (
                            <div className="text-center bg-primary/10 border border-primary/20 rounded-3xl p-10 animate-in zoom-in-95">
                                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                                    <span className="material-symbols-outlined text-4xl">mark_email_read</span>
                                </div>
                                <h3 className="text-2xl font-display text-white uppercase mb-2">¡Revisa tu Inbox!</h3>
                                <p className="text-gray-400 font-light">Te he enviado la guía. Si no la ves, revisa tu carpeta de spam o promociones.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">mail</span>
                                    <input
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Tu mejor email..."
                                        className="w-full bg-[#101622] border border-gray-800 rounded-2xl py-5 pl-14 pr-6 text-white outline-none focus:border-primary transition-all placeholder:text-gray-700 text-lg"
                                    />
                                </div>
                                <button
                                    disabled={status === 'loading'}
                                    className="w-full bg-primary hover:bg-purple-600 text-white py-5 rounded-2xl font-display uppercase tracking-tighter text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {status === 'loading' ? (
                                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined">download</span>
                                            Descargar Guía Gratis
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-center text-gray-600 uppercase tracking-widest font-black mt-2">
                                    🔒 Sin spam. Solo valor real cada martes.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

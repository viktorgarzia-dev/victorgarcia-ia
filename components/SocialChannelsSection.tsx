import React from 'react';

export const SocialChannelsSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#0b0d11] relative overflow-hidden border-t border-gray-800/50">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-black uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-sm text-primary">notifications_active</span>
                        Mantente al día
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-4">
                        Recursos <span className="text-gradient-primary">Diarios</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                        Únete a mis canales oficiales para recibir noticias de IA, plantillas de automatización y regalos exclusivos antes que nadie.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Telegram Card */}
                    <a
                        href="https://t.me/victorgarcia_ia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-[#161a23] border border-blue-500/10 hover:border-blue-500/50 p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 hover:bg-blue-500/5 hover:-translate-y-1 overflow-hidden reveal delay-100"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                            <svg viewBox="0 0 24 24" className="w-32 h-32 fill-blue-500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.638z" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="size-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                                <span className="material-symbols-outlined text-3xl text-blue-500 group-hover:text-white transition-colors">send</span>
                            </div>

                            <h3 className="text-2xl font-display font-black text-white mb-3 uppercase tracking-tight">
                                Canal Telegram
                            </h3>
                            <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                Tutoriales técnicos, debates y encuestas. La comunidad más activa de builders.
                            </p>

                            <div className="inline-flex items-center gap-3 text-blue-400 font-black uppercase tracking-[0.2em] text-xs group-hover:text-white transition-colors">
                                Unirme Ahora <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </a>

                    {/* WhatsApp Card */}
                    <a
                        href="https://whatsapp.com/channel/0029VbBJpULGZNCqyp5FqB33"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-[#161a23] border border-green-500/10 hover:border-green-500/50 p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 hover:bg-green-500/5 hover:-translate-y-1 overflow-hidden reveal delay-200"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                            <svg viewBox="0 0 24 24" className="w-32 h-32 fill-green-500" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="size-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-8 border border-green-500/20 group-hover:bg-green-500 group-hover:text-white transition-all shadow-[0_0_30px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                                <span className="material-symbols-outlined text-3xl text-green-500 group-hover:text-white transition-colors">chat</span>
                            </div>

                            <h3 className="text-2xl font-display font-black text-white mb-3 uppercase tracking-tight">
                                Canal WhatsApp
                            </h3>
                            <p className="text-gray-400 mb-8 font-light leading-relaxed">
                                Noticias al instante, avisos de nuevos vídeos y plantillas directas a tu móvil.
                            </p>

                            <div className="inline-flex items-center gap-3 text-green-400 font-black uppercase tracking-[0.2em] text-xs group-hover:text-white transition-colors">
                                Unirme Ahora <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

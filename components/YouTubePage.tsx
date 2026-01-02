
import React, { useState, useMemo, useEffect } from 'react';
import { VIDEOS } from '../constants';

export const YouTubePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    const categories = ['Todos', 'IA', 'Automatización', 'Desarrollo', 'Productividad'];

    const filteredVideos = useMemo(() => {
        return VIDEOS.filter(video => {
            const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'Todos' || video.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedVideoId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedVideoId]);

    return (
        <div className="bg-[#101622] min-h-screen text-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden border-b border-gray-800/50">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob [animation-delay:4s]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto reveal">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-black uppercase tracking-widest mb-8">
                            <span className="material-symbols-outlined text-sm fill-1">play_circle</span>
                            Contenido Gratuito en Video
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display leading-none tracking-tighter text-white uppercase font-black mb-8">
                            Aprende IA <br />
                            <span className="text-gradient-primary">Paso a Paso</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-12">
                            Explora tutoriales, reviews y guías sobre automatización e inteligencia artificial. Sin rodeos, directo a la implementación.
                        </p>

                        {/* Search & Filters */}
                        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors">search</span>
                                <input
                                    type="text"
                                    placeholder="¿Qué quieres aprender a automatizar hoy?"
                                    className="w-full bg-[#1b1f27] border border-gray-800 rounded-2xl pl-14 pr-6 py-5 text-white outline-none focus:border-primary/50 transition-all shadow-2xl placeholder:text-gray-600 text-lg"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${activeCategory === cat
                                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                            : 'bg-[#1b1f27] border-gray-800 text-gray-400 hover:border-gray-600'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Videos Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {filteredVideos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredVideos.map((video, i) => (
                                <div
                                    key={video.id}
                                    onClick={() => setSelectedVideoId(video.id)}
                                    className="group flex flex-col bg-[#161a23] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 shadow-2xl reveal cursor-pointer"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                                        {/* Duration Tag */}
                                        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white">
                                            {video.duration}
                                        </div>

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="size-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <span className="material-symbols-outlined text-white text-3xl fill-1">play_arrow</span>
                                            </div>
                                        </div>

                                        {/* Category Tag */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#1b1f27]/80 backdrop-blur-md border border-white/10 text-primary text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                                                {video.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-8 flex flex-col flex-1">
                                        <h3 className="text-xl font-display text-white group-hover:text-primary transition-colors leading-tight mb-4 line-clamp-2">
                                            {video.title}
                                        </h3>

                                        <div className="mt-auto flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                            <span>{video.topic}</span>
                                            <div className="flex items-center gap-1.5">
                                                <span className="size-1 rounded-full bg-gray-700"></span>
                                                <span>{video.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-[#1b1f27] border border-gray-800 rounded-[3rem]">
                            <span className="material-symbols-outlined text-6xl text-gray-700 mb-6">videocam_off</span>
                            <h3 className="text-2xl font-black uppercase text-white mb-2">No se encontraron videos</h3>
                            <p className="text-gray-500 font-light">Prueba con otros términos de búsqueda o categorías.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Video Modal Overlay */}
            {selectedVideoId && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
                    onClick={() => setSelectedVideoId(null)}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5"
                            onClick={() => setSelectedVideoId(null)}
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                            title="YouTube video player"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="pb-24 pt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-r from-red-600/10 to-primary/10 border border-white/5 rounded-[3rem] p-10 md:p-16 relative overflow-hidden reveal">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-6">
                                ¿Te gusta lo que ves?
                            </h2>
                            <p className="text-lg text-gray-400 font-light mb-10 max-w-xl mx-auto">
                                No te pierdas ni un solo video. Suscríbete para recibir notificaciones de nuevos tutoriales y directos.
                            </p>
                            <a
                                href="https://www.youtube.com/@VictorGarciaIA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#e62117] hover:bg-[#c41c14] text-white px-10 py-5 rounded-2xl font-display uppercase tracking-tighter text-xl shadow-2xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
                            >
                                <span className="material-symbols-outlined fill-1">smart_display</span>
                                Suscribirse al Canal
                            </a>
                        </div>
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-64 bg-red-600/20 rounded-full blur-[100px]"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

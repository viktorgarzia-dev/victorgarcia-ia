
import React, { useState, useEffect, useCallback } from 'react';

interface CommandPaletteProps {
    onNavigate: (sectionId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    const commands = [
        { id: 'inicio', label: 'Inicio', icon: 'home', category: 'Navegación' },
        { id: 'academia', label: 'Academia IA360', icon: 'school', category: 'Navegación' },
        { id: 'mentoria', label: 'Mentorías 1-on-1', icon: 'person', category: 'Navegación' },
        { id: 'empresa', label: 'Soluciones Empresas', icon: 'business', category: 'Navegación' },
        { id: 'herramientas', label: 'Directorio de Herramientas', icon: 'construction', category: 'Navegación' },
        { id: 'youtube', label: 'Contenido YouTube', icon: 'smart_display', category: 'Navegación' },
        { id: 'contacto', label: 'Contactar con Victor', icon: 'mail', category: 'Acciones' },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSelect = useCallback((id: string) => {
        onNavigate(id);
        setIsOpen(false);
        setQuery('');
    }, [onNavigate]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-xl bg-[#1b1f27] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-4 border-b border-gray-800 flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-500">search</span>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Escribe un comando o sección..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-600 text-lg"
                    />
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-gray-900 border border-gray-800 text-xs text-gray-500 font-bold">
                        ESC
                    </div>
                </div>

                <div className="max-h-[60vh] overflow-y-auto p-2">
                    {filteredCommands.length > 0 ? (
                        <div className="flex flex-col gap-1">
                            {filteredCommands.map((cmd) => (
                                <button
                                    key={cmd.id}
                                    onClick={() => handleSelect(cmd.id)}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 group transition-all text-left"
                                >
                                    <div className="size-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 group-hover:text-primary group-hover:border-primary/30">
                                        <span className="material-symbols-outlined text-xl">{cmd.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-medium">{cmd.label}</div>
                                        <div className="text-xs text-gray-600 uppercase tracking-widest">{cmd.category}</div>
                                    </div>
                                    <span className="material-symbols-outlined text-gray-800 text-sm group-hover:text-primary">subdirectory_arrow_left</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-gray-500 font-light">
                            No se encontraron resultados para "{query}"
                        </div>
                    )}
                </div>

                <div className="p-4 bg-[#111318] border-t border-gray-800 flex items-center justify-between text-xs text-gray-600 font-bold uppercase tracking-widest">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><span className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800">↑↓</span> Navegar</span>
                        <span className="flex items-center gap-1"><span className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-800">ENTER</span> Seleccionar</span>
                    </div>
                    <span>Victor Garcia IA v2.0</span>
                </div>
            </div>
        </div>
    );
};

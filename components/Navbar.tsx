
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  currentView: 'home' | 'academy' | 'mentorship' | 'enterprise' | 'tools' | 'youtube';
  onNavigateHome: (sectionId?: string) => void;
  onNavigateAcademy: () => void;
  onNavigateMentorship: () => void;
  onNavigateEnterprise: () => void;
  onNavigateTools: () => void;
  onNavigateYouTube: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  currentView,
  onNavigateHome,
  onNavigateAcademy,
  onNavigateMentorship,
  onNavigateEnterprise,
  onNavigateTools,
  onNavigateYouTube
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar el menú si se cambia el tamaño de la ventana a escritorio grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Inicio', id: 'inicio', icon: 'home' },
    { label: 'Academia', id: 'academia', icon: 'school' },
    { label: 'Mentoría', id: 'mentoria', icon: 'person' },
    { label: 'Empresas', id: 'empresa', icon: 'business' },
    { label: 'YouTube', id: 'youtube', icon: 'smart_display' },
    { label: 'Herramientas', id: 'herramientas', icon: 'construction' },
    { label: 'Contacto', id: 'contacto', icon: 'mail' },
  ];

  const handleNavigate = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'mentoria') onNavigateMentorship();
    else if (id === 'academia') onNavigateAcademy();
    else if (id === 'empresa') onNavigateEnterprise();
    else if (id === 'herramientas') onNavigateTools();
    else if (id === 'youtube') onNavigateYouTube();
    else onNavigateHome(id);
  };

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-[#111318]/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigateHome()}
            >
              <div className="size-8 flex items-center justify-center bg-primary rounded text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">smart_toy</span>
              </div>
              <span className="text-xl font-display tracking-tight text-white uppercase">Victor Garcia IA</span>
            </div>

            {/* Desktop Navigation (Visible only from LG upwards) */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${(currentView === 'home' && activeSection === item.id) ||
                      (currentView === 'mentorship' && item.id === 'mentoria') ||
                      (currentView === 'academy' && item.id === 'academia') ||
                      (currentView === 'enterprise' && item.id === 'empresa') ||
                      (currentView === 'tools' && item.id === 'herramientas') ||
                      (currentView === 'youtube' && item.id === 'youtube')
                      ? 'text-primary' : 'text-gray-300'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                onClick={onNavigateAcademy}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg font-display uppercase tracking-tighter ${currentView === 'academy'
                  ? 'bg-white text-primary'
                  : 'bg-primary text-white shadow-primary/20 hover:bg-purple-600'
                  }`}
              >
                IA360 Academia
              </button>
            </div>

            {/* Mobile/Tablet Hamburger Toggle (Visible until LG) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-white hover:text-primary transition-colors flex items-center justify-center"
                aria-label="Abrir menú"
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#101622] border-l border-white/5 shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#111318]">
              <span className="text-xl font-display text-white uppercase tracking-tighter">Menú Principal</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="size-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all ${(currentView === 'home' && activeSection === item.id) ||
                    (currentView === 'mentorship' && item.id === 'mentoria') ||
                    (currentView === 'academy' && item.id === 'academia') ||
                    (currentView === 'enterprise' && item.id === 'empresa') ||
                    (currentView === 'tools' && item.id === 'herramientas') ||
                    (currentView === 'youtube' && item.id === 'youtube')
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="text-lg font-bold tracking-tight">{item.label}</span>
                  <span className="material-symbols-outlined text-gray-700 ml-auto text-sm">chevron_right</span>
                </button>
              ))}
            </div>

            <div className="mt-auto p-6 space-y-4 bg-gradient-to-t from-black to-transparent">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onNavigateAcademy();
                }}
                className="w-full bg-primary hover:bg-purple-600 text-white h-16 rounded-2xl font-display uppercase tracking-tighter text-xl shadow-2xl shadow-primary/25 transition-all active:scale-95"
              >
                IA360 Academia
              </button>

              <div className="flex items-center justify-center gap-4 py-4">
                {[
                  { icon: 'smart_display', url: 'https://www.youtube.com/@VictorGarciaIA' },
                  { icon: 'alternate_email', url: '#' },
                  { icon: 'public', url: '#' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target={social.url.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="size-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <span className="material-symbols-outlined">{social.icon}</span>
                  </a>
                ))}
              </div>

              <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest pb-4">
                © 2024 Victor Garcia IA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

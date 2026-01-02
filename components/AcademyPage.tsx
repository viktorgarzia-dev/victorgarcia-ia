
import React, { useState, useEffect, useRef } from 'react';
import { ACADEMY_MODULES, TESTIMONIALS } from '../constants';

interface AcademicBotProps {
  isHappy?: boolean;
}

const AcademicBot: React.FC<AcademicBotProps> = ({ isHappy }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [targetPos, setTargetPos] = useState({ x: 0.5, y: 0.5 });
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const requestRef = useRef<number>(0);
  // Fix: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to avoid namespace errors in browser environment.
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });

      // Reset idle timer
      setIsReading(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      idleTimerRef.current = setTimeout(() => {
        setIsReading(true);
      }, 2500); // 2.5 seconds of inactivity to start reading
    };

    const animate = () => {
      setMousePos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.08,
        y: prev.y + (targetPos.y - prev.y) * 0.08
      }));

      setReadingProgress(prev => (prev + 0.05) % (Math.PI * 2));

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [targetPos]);

  const handleClick = () => {
    if (isCelebrating) return;
    setIsCelebrating(true);
    setTimeout(() => setIsCelebrating(false), 2000);
  };

  const rotateX = isReading ? 20 : (mousePos.y - 0.5) * -30;
  const rotateY = isReading ? 0 : (mousePos.x - 0.5) * 45;

  // Eye movement calculation
  const getEyeTranslation = () => {
    if (isReading) {
      // Sinusoidal movement mimicking reading left to right
      const x = Math.sin(readingProgress * 4) * 8;
      const y = 8; // Looking down at the book
      return { x, y };
    }
    return {
      x: (mousePos.x - 0.5) * 15,
      y: (mousePos.y - 0.5) * 10
    };
  };

  const eyePos = getEyeTranslation();

  return (
    <div
      className="relative w-full h-full flex items-center justify-center py-10 cursor-pointer group/bot"
      style={{ perspective: '1500px' }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { icon: 'code', top: '15%', left: '10%', delay: '0s' },
          { icon: 'terminal', top: '75%', left: '15%', delay: '1s' },
          { icon: 'data_object', top: '25%', left: '85%', delay: '0.5s' },
          { icon: 'bolt', top: '80%', left: '80%', delay: '1.5s' },
        ].map((item, i) => (
          <div
            key={i}
            className={`absolute text-primary/10 transition-all duration-1000 ${isCelebrating ? 'scale-150 opacity-40 rotate-[360deg]' : 'animate-pulse'}`}
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              transform: `translate(${(mousePos.x - 0.5) * -60}px, ${(mousePos.y - 0.5) * -60}px)`
            }}
          >
            <span className="material-symbols-outlined text-4xl md:text-5xl">{item.icon}</span>
          </div>
        ))}
      </div>

      <div
        className={`relative transition-all duration-700 ease-out ${isCelebrating ? '-translate-y-20 scale-110' : ''}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite] -z-10"
          style={{ transform: 'translateZ(-50px) rotateX(70deg)' }}
        ></div>

        {/* Graduation Cap */}
        <div
          className={`absolute -top-36 left-1/2 -translate-x-1/2 w-52 transition-all duration-500 z-40 ${isCelebrating ? 'rotate-[10deg] -translate-y-6' : ''} ${isReading ? 'opacity-0 scale-90 translate-y-10' : 'opacity-100'}`}
          style={{
            transform: `translateZ(100px) translateY(${(mousePos.y - 0.5) * 15}px)`,
            filter: isCelebrating ? 'drop-shadow(0 0 40px rgba(168,85,247,0.9))' : 'drop-shadow(0 15px 25px rgba(0,0,0,0.8))'
          }}
        >
          <svg viewBox="0 0 100 60" className="w-full h-auto">
            <path d="M5 25 L50 8 L95 25 L50 42 Z" fill="#0f1115" stroke="#a855f7" strokeWidth="1.5" />
            <path d="M28 36 L28 50 C28 54, 72 54, 72 50 L72 36" fill="#161a23" stroke="#a855f7" strokeWidth="1.5" />
            <line x1="50" y1="25" x2="88" y2="25" stroke="#a855f7" strokeWidth="2" />
            <line x1="88" y1="25" x2="88" y2="48" stroke="#a855f7" strokeWidth="2" className={isCelebrating ? 'animate-bounce' : ''} />
            <circle cx="88" cy="48" r="4.5" fill="#a855f7" className={isCelebrating ? 'animate-pulse shadow-[0_0_15px_#a855f7]' : ''} />
          </svg>
        </div>

        {/* Reading Book Visual */}
        <div
          className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 transition-all duration-700 z-50 pointer-events-none ${isReading ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}
          style={{ transform: 'translateZ(150px)' }}
        >
          <div className="bg-[#1b1f27] border-2 border-primary/50 rounded-lg p-3 shadow-[0_0_30px_rgba(168,85,247,0.3)] relative overflow-hidden">
            <div className="flex gap-2">
              <div className="flex-1 space-y-1">
                <div className="h-1 w-full bg-white/10 rounded-full"></div>
                <div className="h-1 w-3/4 bg-white/10 rounded-full"></div>
                <div className="h-1 w-full bg-white/10 rounded-full"></div>
              </div>
              <div className="w-px h-12 bg-white/5"></div>
              <div className="flex-1 space-y-1">
                <div className="h-1 w-full bg-primary/20 rounded-full"></div>
                <div className="h-1 w-full bg-white/10 rounded-full"></div>
                <div className="h-1 w-1/2 bg-white/10 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className={`relative w-56 h-64 bg-gradient-to-b from-[#1b1f27] to-[#0f1115] rounded-[4rem] border-2 transition-all duration-500 ${isCelebrating ? 'border-primary shadow-[0_0_60px_rgba(168,85,247,0.6)]' : isHappy ? 'border-primary/60 scale-105 shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'border-white/10'} shadow-2xl overflow-hidden flex flex-col items-center justify-center`}>
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute top-0 w-full h-2/3 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>

          <div className={`relative w-44 h-24 rounded-3xl border-2 transition-all duration-500 ${isCelebrating ? 'bg-green-500/20 border-green-400' : isHappy || isReading ? 'bg-primary/10 border-primary' : 'bg-[#050608] border-primary/20'} flex items-center justify-center overflow-hidden z-20`}>
            <div className={`absolute inset-0 transition-opacity duration-700 ${isCelebrating || isHappy ? 'opacity-0' : 'opacity-10'}`}>
              <div className="text-[7px] font-mono text-primary leading-tight whitespace-nowrap animate-marquee-vertical">
                {Array(25).fill(0).map((_, i) => (
                  <div key={i}>01101011 11001010 11110000 00011101</div>
                ))}
              </div>
            </div>

            <div className="flex gap-10 relative z-10 transition-all duration-300">
              {isCelebrating ? (
                <>
                  <span className="material-symbols-outlined text-green-400 text-3xl animate-bounce">verified</span>
                  <span className="material-symbols-outlined text-green-400 text-3xl animate-bounce [animation-delay:0.1s]">verified</span>
                </>
              ) : (
                <>
                  <div className="relative size-8 bg-primary/20 rounded-full border border-primary/30 flex items-center justify-center overflow-hidden">
                    <div
                      className="size-4 bg-primary rounded-full shadow-[0_0_15px_#a855f7] transition-transform duration-75"
                      style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}
                    >
                      <div className="absolute top-0.5 left-0.5 size-1.5 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                  <div className="relative size-8 bg-primary/20 rounded-full border border-primary/30 flex items-center justify-center overflow-hidden">
                    <div
                      className="size-4 bg-primary rounded-full shadow-[0_0_15px_#a855f7] transition-transform duration-75"
                      style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}
                    >
                      <div className="absolute top-0.5 left-0.5 size-1.5 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-4 w-full animate-[scan_3s_linear_infinite] pointer-events-none"></div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 w-full px-12 z-20">
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <div className={`h-full transition-all duration-700 ${isCelebrating ? 'bg-green-500 w-full' : isHappy || isReading ? 'bg-primary w-3/4 animate-pulse' : 'bg-primary/40 animate-marquee-horizontal w-1/3'}`}></div>
            </div>
            <div className="flex gap-2">
              <div className={`size-1 rounded-full ${isHappy || isReading ? 'bg-primary animate-ping' : 'bg-gray-800'}`}></div>
              <div className={`size-1 rounded-full ${isHappy || isReading ? 'bg-primary animate-ping [animation-delay:0.2s]' : 'bg-gray-800'}`}></div>
              <div className={`size-1 rounded-full ${isHappy || isReading ? 'bg-primary animate-ping [animation-delay:0.4s]' : 'bg-gray-800'}`}></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-12 bg-gradient-to-b from-[#161a23] to-[#0b0d11] border border-white/5 rounded-b-3xl -z-10 shadow-xl"></div>
      </div>

      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/60 backdrop-blur-2xl rounded-xl border border-white/5 text-[8px] font-black uppercase tracking-[0.4em] transition-all duration-500 ${isCelebrating ? 'opacity-0' : (isReading ? 'opacity-100' : 'opacity-0 group-hover/bot:opacity-100')}`}>
        {isReading ? 'Modo Lectura Activo' : 'Click to Graduate'}
      </div>
    </div>
  );
};

export const AcademyPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);

  const benefits = [
    {
      icon: 'groups',
      title: 'Comunidad Elite',
      desc: 'Acceso a la plataforma privada de builders de IA en Skool. Networking real.',
      glowColor: 'bg-blue-500/10'
    },
    {
      icon: 'video_library',
      title: 'Contenido 4K',
      desc: 'Más de 60 horas de tutoriales paso a paso, actualizados semanalmente.',
      glowColor: 'bg-purple-500/10'
    },
    {
      icon: 'terminal',
      title: 'Scripts Listos',
      desc: 'Plantillas de Python, flujos de Make y prompts avanzado para tus proyectos.',
      glowColor: 'bg-fuchsia-500/10'
    },
    {
      icon: 'workspace_premium',
      title: 'Certificado Pro',
      desc: 'Demuestra tus habilidades con una certificación oficial al completar los módulos.',
      glowColor: 'bg-primary/20'
    }
  ];

  const faqs = [
    { q: "¿Es realmente gratuita?", a: "Sí, actualmente estamos en fase de lanzamiento. Las primeras 500 plazas son 100% gratuitas para crear una comunidad inicial potente." },
    { q: "¿Necesito saber programar?", a: "No. El curso está estructurado para llevarte desde los fundamentos del No-Code hasta conceptos avanzados de programación asistida por IA." },
    { q: "¿Tendré soporte si me quedo atascado?", a: "Absolutamente. Dentro de nuestra comunidad en Skool respondemos todas las dudas y hacemos sesiones de Q&A en directo." },
    { q: "¿Cuándo se actualiza el contenido?", a: "La IA cambia cada día. Nosotros subimos nuevas lecciones cada semana para que nunca te quedes atrás." }
  ];

  return (
    <div className="bg-[#101622] min-h-screen text-white">
      {/* Academy Hero - Adjusted Padding for tablet and mobile */}
      <section className="relative pt-8 pb-8 md:pt-10 md:pb-10 lg:pt-16 lg:pb-16 overflow-hidden border-b border-gray-800">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[180px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-6 reveal reveal-left text-center">
              <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[10px] mx-auto">
                <span className="material-symbols-outlined fill-1 text-sm">stars</span>
                Liderazgo Técnico en IA
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[0.9] tracking-tighter text-white uppercase font-black">
                Domina <br />
                <span className="text-gradient-primary">La IA Aplicada</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-lg mx-auto">
                Deja de ser un usuario y conviértete en un <span className="text-white font-bold">Arquitecto de IA</span>. Construye flujos autónomos y escala tus resultados.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 justify-center">
                <button
                  onMouseEnter={() => setIsHoveringCTA(true)}
                  onMouseLeave={() => setIsHoveringCTA(false)}
                  className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-8 py-4 rounded-2xl font-display uppercase tracking-tighter text-base md:text-lg transition-all shadow-xl shadow-primary/30 active:scale-95 group flex items-center justify-center gap-3 border border-white/10"
                >
                  <span className="material-symbols-outlined animate-bounce text-xl">rocket_launch</span>
                  Acceso Gratuito Inmediato
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 bg-[#080a0e] border-b border-gray-800/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-1000">
          <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.4em] font-black">
            <span className="text-primary text-xl font-black">500+</span> BUILDERS
          </div>
          <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.4em] font-black">
            <span className="text-primary text-xl font-black">60H+</span> CURSOS
          </div>
          <div className="flex items-center gap-3 font-display text-[10px] uppercase tracking-[0.4em] font-black">
            <span className="text-primary text-xl font-black">FREE</span> ACCESO
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-display uppercase font-black text-white mb-6 leading-[0.9] tracking-tighter">
            El sistema está <br /> <span className="text-red-500">ROTO</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            La mayoría pierde tiempo probando prompts al azar. Nosotros te enseñamos a <span className="text-white font-bold">programar el futuro</span> con agentes que trabajan mientras duermes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="group relative bg-[#13171f] border border-white/5 rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8 items-start hover:border-primary/40 transition-all reveal delay-100">
                <div className={`absolute inset-0 ${b.glowColor} opacity-0 group-hover:opacity-100 transition-opacity blur-[60px] -z-10`}></div>
                <div className="size-16 md:size-20 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-xl shrink-0">
                  <span className="material-symbols-outlined text-3xl">{b.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-white mb-3 uppercase tracking-tighter leading-none">{b.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center bg-gradient-to-b from-[#0a0c10] to-[#101622]">
        <div className="max-w-3xl mx-auto px-4 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-[9px] font-black uppercase tracking-[0.3em] border border-green-500/20 mb-8 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            Cupos Gratuitos Disponibles Hoy
          </div>
          <h2 className="text-4xl md:text-5xl font-display uppercase font-black text-white mb-8 leading-[0.85] tracking-tighter">
            No seas el último <br /> <span className="text-gradient-primary">en adaptarte</span>
          </h2>
          <button className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-10 py-5 rounded-2xl font-display uppercase tracking-tighter text-base md:text-xl shadow-[0_20px_60px_rgba(168,85,247,0.3)] transition-all hover:scale-105 active:scale-95 border border-white/10">
            Unirse a IA360 Gratis
          </button>
          <p className="text-gray-600 mt-6 text-[10px] font-black uppercase tracking-[0.5em] opacity-60">Matrícula abierta por tiempo limitado</p>
        </div>
      </section>

      <section className="py-20 bg-[#080a0e]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display uppercase font-black mb-16 reveal tracking-tighter text-center">Feedback de la Comunidad</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[#13171f] border border-white/5 p-8 rounded-[2.5rem] flex flex-col gap-6 reveal delay-100 hover:border-primary/20 transition-all shadow-xl">
                <div className="flex gap-1 text-primary">
                  {Array(5).fill(0).map((_, idx) => <span key={idx} className="material-symbols-outlined fill-1 text-base">star</span>)}
                </div>
                <p className="text-gray-300 text-sm md:text-base font-light italic leading-relaxed">"{t.content}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${t.colorClass} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-black text-white uppercase text-sm tracking-tighter">{t.name}</div>
                    <div className="text-primary text-[8px] font-black uppercase tracking-[0.3em]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-display uppercase font-black text-white tracking-tighter leading-none mb-6">El Programa</h2>
            <p className="text-gray-400 text-base font-light">Cuatro fases diseñadas para destruir la curva de aprendizaje.</p>
          </div>

          <div className="flex flex-col gap-6">
            {ACADEMY_MODULES.map((module, i) => (
              <div key={module.id} className={`bg-[#13171f] border border-gray-800/60 rounded-[2.5rem] p-8 md:p-10 hover:border-primary/40 transition-all flex flex-col md:flex-row gap-8 items-center group reveal delay-100`}>
                <div className="size-16 md:size-20 rounded-[1.5rem] bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-2xl">
                  <span className="material-symbols-outlined text-4xl">{module.icon}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                    <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">{module.level}</span>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-gray-700"></span>
                    <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">FASE {module.id}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tighter">{module.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/10 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <div className="bg-[#13171f] border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000">
              <span className="material-symbols-outlined text-[200px]">smart_toy</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase font-black text-white mb-8 tracking-tighter leading-[0.8] animate-pulse">
              VENCE <br /> AL <span className="text-gradient-primary">ALGORITMO</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg font-light mb-12 max-w-xl mx-auto leading-relaxed">
              La inteligencia artificial no te quitará el trabajo. Lo hará alguien que sepa usarla mejor que tú. Entra hoy gratis.
            </p>

            <div className="flex flex-col items-center gap-6">
              <button className="w-fit mx-auto bg-primary hover:bg-purple-600 text-white px-10 py-5 rounded-[2rem] font-display uppercase tracking-tighter text-base md:text-xl shadow-[0_25px_80px_rgba(168,85,247,0.4)] transition-all hover:scale-105 active:scale-95 border border-white/20">
                Matrícula Gratis en Skool
              </button>

              <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">
                <div className="flex -space-x-2">
                  {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="size-6 rounded-full border-2 border-[#13171f] bg-gray-800 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?u=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                Quedan <span className="text-white">12 plazas</span> gratuitas
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-800/30 opacity-30 text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.8em]">IA360 ACADEMY &copy; 2024 • ENGINEERED FOR GROWTH</p>
      </section>

      <style>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(500%); }
        }
      `}</style>
    </div>
  );
};


import React from 'react';

interface FooterProps {
  onNavigateHome?: (sectionId?: string) => void;
  onNavigateMentorship?: () => void;
  onNavigateAcademy?: () => void;
  onNavigateEnterprise?: () => void;
  onNavigateTools?: () => void;
  onNavigateYouTube?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateMentorship,
  onNavigateAcademy,
  onNavigateEnterprise,
  onNavigateTools,
  onNavigateYouTube
}) => {
  return (
    <footer className="bg-[#0b0d11] border-t border-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigateHome?.()}
            >
              <div className="size-8 flex items-center justify-center bg-primary/20 rounded text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-xl">smart_toy</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Victor Garcia IA</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
              Democratizando el acceso a la Inteligencia Artificial y la automatización para profesionales hispanos.
            </p>
          </div>

          <div className="flex gap-12 text-sm font-bold">
            <div className="flex flex-col gap-4">
              <span className="text-gray-600 uppercase tracking-widest text-xs">Contenido</span>
              <button onClick={() => onNavigateAcademy?.()} className="text-left text-gray-400 hover:text-white transition-colors">Academia</button>
              <button onClick={() => onNavigateMentorship?.()} className="text-left text-gray-400 hover:text-white transition-colors">Mentoría</button>
              <button onClick={() => onNavigateEnterprise?.()} className="text-left text-gray-400 hover:text-white transition-colors">Empresas</button>
              <button onClick={() => onNavigateYouTube?.()} className="text-left text-gray-400 hover:text-white transition-colors">YouTube</button>
              <button onClick={() => onNavigateTools?.()} className="text-left text-gray-400 hover:text-white transition-colors">Herramientas</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-gray-600 uppercase tracking-widest text-xs">Legal</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { icon: 'smart_display', href: 'https://www.youtube.com/@VictorGarciaIA' },
              { icon: 'alternate_email', href: '#' },
              { icon: 'public', href: '#' },
              { icon: 'link', href: '#' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="size-10 rounded-full bg-[#1b1f27] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
              >
                <span className="material-symbols-outlined text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center flex flex-col items-center gap-2">
          <p className="text-xs text-gray-600 font-medium">
            © 2024 Victor Garcia IA. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-gray-700 font-medium">
            Hecho con IA para la comunidad IA.
          </p>
        </div>
      </div>
    </footer>
  );
};

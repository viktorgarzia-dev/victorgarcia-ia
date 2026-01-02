
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCarousel } from './components/LogoCarousel';
import { YouTubeSection } from './components/YouTubeSection';
import { AcademySection } from './components/AcademySection';
import { MentorshipSection } from './components/MentorshipSection';
import { CorporateSection } from './components/CorporateSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { AcademyPage } from './components/AcademyPage';
import { MentorshipPage } from './components/MentorshipPage';
import { EnterprisePage } from './components/EnterprisePage';
import { ToolsPage } from './components/ToolsPage';
import { DynamicBackground } from './components/DynamicBackground';
import { NewsletterSection } from './components/NewsletterSection';
import { CommandPalette } from './components/CommandPalette';
import { YouTubePage } from './components/YouTubePage';




const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentView, setCurrentView] = useState<'home' | 'academy' | 'mentorship' | 'enterprise' | 'tools' | 'youtube'>('home');

  // Sistema de Animaciones Robusto con MutationObserver
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Función para observar elementos iniciales y nuevos
    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.active)');
      elements.forEach(el => observer.observe(el));
    };

    // Observar elementos existentes al montar o cambiar de vista
    observeElements();

    // MutationObserver para detectar elementos .reveal inyectados dinámicamente (por filtros, etc.)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          observeElements();
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [currentView]);

  useEffect(() => {
    if (currentView === 'home') {
      const handleScroll = () => {
        const sections = ['inicio', 'academia', 'mentoria', 'empresa', 'herramientas', 'contacto'];
        const scrollPosition = window.scrollY + 100;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentView]);

  const navigateToAcademy = () => {
    setCurrentView('academy');
    window.scrollTo(0, 0);
  };

  const navigateToMentorship = () => {
    setCurrentView('mentorship');
    window.scrollTo(0, 0);
  };

  const navigateToEnterprise = () => {
    setCurrentView('enterprise');
    window.scrollTo(0, 0);
  };

  const navigateToTools = () => {
    setCurrentView('tools');
    window.scrollTo(0, 0);
  };

  const navigateToYouTube = () => {
    setCurrentView('youtube');
    window.scrollTo(0, 0);
  };

  const navigateToHome = (sectionId?: string) => {
    setCurrentView('home');
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleNavigateShortcut = (id: string) => {
    if (id === 'youtube') {
      navigateToYouTube();
      return;
    }

    if (id === 'mentoria') navigateToMentorship();
    else if (id === 'academia') navigateToAcademy();
    else if (id === 'empresa') navigateToEnterprise();
    else if (id === 'herramientas') navigateToTools();
    else navigateToHome(id);
  };


  return (
    <div className="flex flex-col min-h-screen relative">
      <DynamicBackground />
      <CommandPalette onNavigate={handleNavigateShortcut} />
      <Navbar
        activeSection={activeSection}
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigateAcademy={navigateToAcademy}
        onNavigateMentorship={navigateToMentorship}
        onNavigateEnterprise={navigateToEnterprise}
        onNavigateTools={navigateToTools}
        onNavigateYouTube={navigateToYouTube}
      />

      <main>
        {currentView === 'home' ? (
          <>
            <div id="inicio">
              <Hero onCTA={navigateToAcademy} />
              <LogoCarousel />
            </div>

            <div id="youtube">
              <YouTubeSection />
            </div>

            <div id="academia">
              <AcademySection onMoreInfo={navigateToAcademy} />
            </div>

            <div id="mentoria">
              <MentorshipSection onMoreInfo={navigateToMentorship} />
            </div>

            <div id="empresa">
              <CorporateSection onMoreInfo={navigateToEnterprise} />
            </div>

            <div id="herramientas">
              <ToolsSection onMoreTools={navigateToTools} />
            </div>

            <div id="contacto">
              <ContactForm />
            </div>
          </>
        ) : currentView === 'academy' ? (
          <AcademyPage />
        ) : currentView === 'mentorship' ? (
          <MentorshipPage />
        ) : currentView === 'tools' ? (
          <ToolsPage />
        ) : currentView === 'youtube' ? (
          <YouTubePage />
        ) : (
          <EnterprisePage />
        )}
      </main>

      <NewsletterSection />

      <Footer
        onNavigateHome={navigateToHome}
        onNavigateMentorship={navigateToMentorship}
        onNavigateAcademy={navigateToAcademy}
        onNavigateEnterprise={navigateToEnterprise}
        onNavigateTools={navigateToTools}
        onNavigateYouTube={navigateToYouTube}
      />

      <AIAssistant />
    </div>
  );
};

export default App;

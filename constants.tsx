
import { Video, Tool, Testimonial, AcademyModule } from './types';

export const VIDEOS: Video[] = [
  {
    id: "3_pmzDOYvqc",
    title: "Cómo Conectar OpenAI ChatGPT a Make.com en 5 minutos | Tutorial 2025",
    topic: "Make.com",
    date: "Hace 2 meses",
    duration: "05:45",
    thumbnail: "https://i.ytimg.com/vi/3_pmzDOYvqc/maxresdefault.jpg",
    category: "Automatización"
  },
  {
    id: "2owDTkbFTZA",
    title: "Cómo Conectar Telegram a Make.com | Guía para Principiantes 2025",
    topic: "Make.com",
    date: "Hace 2 meses",
    duration: "12:20",
    thumbnail: "https://i.ytimg.com/vi/2owDTkbFTZA/maxresdefault.jpg",
    category: "Automatización"
  },
  {
    id: "rqKhpRQzKRw",
    title: "Cómo Conectar Google Gemini con Make.com IA GRATIS | Tutorial 2025",
    topic: "Make.com",
    date: "Hace 2 meses",
    duration: "08:15",
    thumbnail: "https://i.ytimg.com/vi/rqKhpRQzKRw/maxresdefault.jpg",
    category: "IA"
  },
  {
    id: "3VdwCrFJGwI",
    title: "Conectar Google Drive, Gmail y Sheets a Make.com | Guía Completa 2025",
    topic: "Make.com",
    date: "Hace 2 meses",
    duration: "18:40",
    thumbnail: "https://i.ytimg.com/vi/3VdwCrFJGwI/maxresdefault.jpg",
    category: "Productividad"
  },
  {
    id: "tD9nA_y_Hvw",
    title: "Cómo Crear un AGENTE IA en Make.com Guía Paso a Paso 2025",
    topic: "Make.com",
    date: "Hace 2 meses",
    duration: "22:10",
    thumbnail: "https://i.ytimg.com/vi/tD9nA_y_Hvw/maxresdefault.jpg",
    category: "IA"
  },
  {
    id: "L9_xtP4yG-Q",
    title: "Curso de Make.com: Make AI Toolkit | Automatizaciones con IA 2025",
    topic: "Make.com",
    date: "Hace 2 meses",
    duration: "45:30",
    thumbnail: "https://i.ytimg.com/vi/L9_xtP4yG-Q/maxresdefault.jpg",
    category: "Desarrollo"
  }
];

export const TOOLS: Tool[] = [
  // --- LLM'S ---
  {
    name: "Claude (Anthropic)",
    category: "LLM's",
    pricing: "Freemium",
    description: "El modelo más inteligente y capaz para tareas de codificación y razonamiento avanzado.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Claude_AI_symbol.svg",
    tag: "Top Model"
  },
  {
    name: "Gemini",
    category: "LLM's",
    pricing: "Freemium",
    description: "El modelo multimodal más avanzado de Google, integrado en todo su ecosistema y con ventana de contexto masiva.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Google_Gemini_logo.svg",
    tag: "Ecosistema"
  },
  {
    name: "ChatGPT",
    category: "LLM's",
    pricing: "Freemium",
    description: "El pionero de la IA generativa. Versátil, potente y con el ecosistema de GPTs más grande del mundo.",
    image: "/chatgpt-logo.png"
  },
  {
    name: "Perplexity",
    category: "LLM's",
    pricing: "Freemium",
    description: "El buscador del futuro. Respuestas directas con fuentes reales, actualizadas y razonamiento avanzado.",
    image: "https://boost.space/wp-content/uploads/2025/02/perplexity-ai.png"
  },

  // --- AUTOMATIZACIÓN ---
  {
    name: "n8n",
    category: "Automatización",
    pricing: "Self-hosted",
    description: "Flujos de trabajo técnicos con nodos. Ideal para automatizaciones complejas, seguras y customizadas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/N8n-logo-new.svg",
    tag: "Favorito"
  },
  {
    name: "Make.com",
    category: "Automatización",
    pricing: "SaaS",
    description: "La herramienta de automatización visual más versátil del mercado para conectar miles de APIs.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Make-logo.svg/1024px-Make-logo.svg.png"
  },
  {
    name: "Zapier",
    category: "Automatización",
    pricing: "SaaS",
    description: "La plataforma de automatización líder para conectar más de 6000 aplicaciones sin necesidad de código.",
    image: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg"
  },
  {
    name: "SerpApi",
    category: "Automatización",
    pricing: "API",
    description: "Extracción de datos de motores de búsqueda a escala para alimentar tus sistemas de inteligencia artificial.",
    image: "https://serpapi.com/serpapi-logo.png"
  },
  {
    name: "Apify",
    category: "Automatización",
    pricing: "Freemium",
    description: "Plataforma completa para web scraping y automatización de procesos complejos en cualquier sitio web.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Apify_logo.svg/1200px-Apify_logo.svg.png"
  },

  // --- MEDIA ---
  {
    name: "Midjourney",
    category: "Media",
    pricing: "Suscripción",
    description: "Generación de imágenes artísticas y fotorrealistas con una calidad inigualable y estética superior.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Midjourney_Emblem.svg",
    tag: "Calidad Pro"
  },
  {
    name: "Freepik",
    category: "Media",
    pricing: "Freemium",
    description: "El banco de recursos creativos más grande, ahora con herramientas de IA generativa integradas de vanguardia.",
    image: "https://static.vecteezy.com/system/resources/previews/022/100/363/non_2x/freepik-logo-transparent-free-png.png"
  },
  {
    name: "Runway",
    category: "Media",
    pricing: "Premium",
    description: "Generación y edición de vídeo profesional impulsada por IA. El estándar actual en vídeo generativo.",
    image: "https://asset.brandfetch.io/id_o5Z7p6f/id7bX1-o9T.png"
  },
  {
    name: "Kling",
    category: "Media",
    pricing: "Premium",
    description: "Generador de vídeo ultra-realista que está rompiendo barreras en la calidad visual y física del movimiento.",
    image: "https://images.squarespace-cdn.com/content/v1/660c29f2732953245055b62b/195b6c2d-944c-47ea-a4b7-d95bc48430a6/Kling+AI+Square.png"
  },
  {
    name: "ElevenLabs",
    category: "Media",
    pricing: "Freemium",
    description: "La mejor tecnología de síntesis de voz y clonación de audio del mundo con matices humanos.",
    image: "https://elevenlabs.io/brand-kit/ElevenLabs_Symbol.svg"
  },
  {
    name: "HeyGen",
    category: "Media",
    pricing: "Premium",
    description: "Crea vídeos con avatares ultra-realistas que hablan cualquier idioma con tu propia voz sincronizada.",
    image: "https://asset.brandfetch.io/id8yS7T8U7/idj6T1_T7y.png"
  },

  // --- DESARROLLO ---
  {
    name: "Cursor",
    category: "Desarrollo",
    pricing: "Freemium",
    description: "Fork de VS Code con IA nativa. El mejor editor para Vibecoding y desarrollo asistido actualmente.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Cursor_logo.svg",
    tag: "Imprescindible"
  },
  {
    name: "Antigravity",
    category: "Desarrollo",
    pricing: "SaaS",
    description: "Aceleración de procesos de desarrollo y despliegue para aplicaciones modernas escalables.",
    image: "https://asset.brandfetch.io/idy6T1_T7y/idj6T1_T7y.png"
  },
  {
    name: "Github",
    category: "Desarrollo",
    pricing: "Freemium",
    description: "El hogar de los desarrolladores. Hosting de código y colaboración con Copilot integrado de forma nativa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
  },
  {
    name: "Visual Studio Code",
    category: "Desarrollo",
    pricing: "Gratis",
    description: "El editor de código más popular del mundo, altamente extensible para flujos de IA con miles de extensiones.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
  },

  // --- PRODUCTIVIDAD ---
  {
    name: "Google AI Studio",
    category: "Productividad",
    pricing: "Gratis",
    description: "Entorno de desarrollo rápido para experimentar con Gemini y obtener claves de API de última generación.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Google_Gemini_logo.svg",
    tag: "Dev Tool"
  },
  {
    name: "NotebookLM",
    category: "Productividad",
    pricing: "Gratis",
    description: "Tu cuaderno de investigación inteligente. Analiza documentos masivos y genera resúmenes profundos.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Google_NotebookLM_logo.svg/2560px-Google_NotebookLM_logo.svg.png"
  },
  {
    name: "Notion",
    category: "Productividad",
    pricing: "Suscripción",
    description: "Tu espacio de trabajo conectado con IA para escribir, organizar y automatizar notas y proyectos complejos.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg"
  },
  {
    name: "Fireflies.ai",
    category: "Productividad",
    pricing: "SaaS",
    description: "Graba, transcribe y resume tus reuniones automáticamente con IA integrándose en tus calendarios.",
    image: "https://asset.brandfetch.io/id5bX1_o9T/id7bX1_o9T.png"
  },

  // --- INFRA ---
  {
    name: "Pinecone",
    category: "Infra",
    pricing: "Freemium",
    description: "Base de datos vectorial para crear sistemas RAG potentes y memoria a largo plazo para tus agentes de IA.",
    image: "https://pbs.twimg.com/profile_images/1615438863695286273/9V9J8jF-_400x400.jpg"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Méndez",
    role: "Senior Developer",
    content: "IA360 cambió radicalmente mi carrera. Pasé de ser un desarrollador junior a liderar la integración de IA en solo 3 meses.",
    initials: "CM",
    colorClass: "from-blue-500 to-cyan-400"
  },
  {
    name: "Elena Torres",
    role: "CEO, TechFlow",
    content: "La automatización que Victor implementó en nuestra empresa nos está ahorrando más de 20 horas semanales.",
    initials: "ET",
    colorClass: "from-purple-500 to-pink-500"
  },
  {
    name: "Javier Ruiz",
    role: "CTO, DataStart",
    content: "Las mentorías 1:1 fueron clave para entender cómo aplicar LLMs en producción sin romper nuestra infraestructura.",
    initials: "JR",
    colorClass: "from-orange-500 to-yellow-500"
  }
];

export const ACADEMY_MODULES: AcademyModule[] = [
  {
    id: "01",
    title: "Maestría en ChatGPT y Prompt Engineering",
    description: "Domina técnicas como Chain-of-Thought, Few-Shot Prompting y crea estructuras de prompts reutilizables.",
    level: "Fundamental",
    icon: "psychology"
  },
  {
    id: "02",
    title: "Automatizaciones con Make.com y n8n",
    description: "Conecta tus aplicaciones favoritas sin código. Crea flujos de trabajo que gestionen tu negocio automáticamente.",
    level: "Intermedio",
    icon: "hub"
  },
  {
    id: "03",
    title: "Vibecoding: Programa con IA",
    description: "Deja que la IA escriba el código por ti. Domina Cursor y GitHub Copilot para desarrollar 10x más rápido.",
    level: "Novedad",
    icon: "code"
  },
  {
    id: "04",
    title: "Arquitectura de Agentes IA",
    description: "El modelo de negocio del futuro. Aprende cómo empaquetar, vender y entregar servicios de IA.",
    level: "Avanzado",
    icon: "smart_toy"
  }
];

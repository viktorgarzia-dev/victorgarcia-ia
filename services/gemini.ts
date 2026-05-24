import { GoogleGenAI } from '@google/genai';

const MODEL = 'gemini-3-flash-preview';

export class MissingApiKeyError extends Error {
  constructor() {
    super('Falta la API key de Gemini.');
    this.name = 'MissingApiKeyError';
  }
}

export function isApiKeyConfigured(): boolean {
  return !!process.env.API_KEY?.trim();
}

async function run(systemInstruction: string, contents: string, temperature = 0.8): Promise<string> {
  if (!isApiKeyConfigured()) {
    throw new MissingApiKeyError();
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: MODEL,
    contents,
    config: { systemInstruction, temperature },
  });
  return response.text ?? '';
}

const EXPERT = 'Eres un asesor experto en creación de negocios online y emprendimiento digital. Respondes siempre en español, de forma clara, concreta y accionable. Usa texto plano con títulos y listas con guiones (sin tablas ni HTML).';

export function generateIdeas(niche: string): Promise<string> {
  const topic = niche.trim()
    ? `Nicho o tema de interés del usuario: "${niche.trim()}".`
    : 'El usuario no indicó un nicho concreto: propón ideas variadas y de tendencia.';
  return run(
    EXPERT,
    `${topic}

Propón entre 3 y 5 ideas de negocio online. Para cada idea incluye:
- Nombre de la idea
- Problema que resuelve y público objetivo
- Modelo de monetización
- Por qué puede funcionar ahora`,
    0.9
  );
}

export function analyzeIdea(title: string, content: string): Promise<string> {
  return run(
    EXPERT,
    `Analiza y valida esta idea de negocio online.

Título: ${title || '(sin título)'}
Descripción:
${content || '(sin descripción)'}

Devuelve el análisis con estas secciones:
- Mercado y público objetivo
- Modelo de monetización
- Pasos para un MVP
- Riesgos y cómo mitigarlos
- Veredicto (potencial alto/medio/bajo y por qué)`,
    0.7
  );
}

export function suggestNextSteps(title: string, content: string): Promise<string> {
  return run(
    EXPERT,
    `Para esta idea de negocio online, propón entre 3 y 7 próximos pasos concretos y accionables para avanzar esta semana.

Título: ${title || '(sin título)'}
Descripción:
${content || '(sin descripción)'}

Devuelve solo la lista de pasos, ordenados por prioridad.`,
    0.6
  );
}

import { NoteStatus } from './types';

export interface NoteTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  preset: {
    title?: string;
    content?: string;
    tags?: string[];
    status?: NoteStatus;
  };
}

const LEAN_CANVAS = `## 1. Problema
- (Los 3 problemas principales que resuelves)
- (Alternativas que usan hoy tus clientes)

## 2. Segmentos de cliente
- (Tu público objetivo)
- (Early adopters: quién lo necesita HOY)

## 3. Propuesta única de valor
- (Mensaje claro y memorable: por qué te eligen a ti)

## 4. Solución
- (Las 3 funciones clave que abordan los problemas de arriba)

## 5. Canales
- (Cómo llegas a tus clientes: orgánico, ads, partners, etc.)

## 6. Flujos de ingresos
- (Modelo de precios y fuentes de ingreso)

## 7. Estructura de costes
- (Costes de adquisición, fijos y variables)

## 8. Métricas clave
- (Los 2-3 números que te dirán si funciona)

## 9. Ventaja competitiva injusta
- (Algo que un competidor no puede copiar fácilmente)
`;

const VALIDACION = `## Hipótesis
- Creo que [cliente] tiene [problema] y pagaría por [solución].

## Cliente objetivo
- (¿Quién exactamente? Edad, contexto, dónde se encuentra)

## Experimento de esta semana
- (Acción concreta y medible: landing, entrevistas, anuncio, preventa...)

## Métrica de éxito
- (Qué número me dirá que la hipótesis se valida)

## Coste y plazo
- (Cuánto tiempo/dinero invierto y cuándo decido)

## Resultado
- Estado: pendiente / validada / invalidada
- Aprendizaje:
`;

const MVP = `## Idea en una frase
-

## Funcionalidad mínima imprescindible
-
-
-

## Lo que NO incluiré en este MVP
-
-

## Stack y herramientas
- (No-code, código, integraciones)

## Primer cliente o prueba
- (¿A quién se lo enseño primero?)

## Plan de 7 días
- Día 1:
- Día 2:
- Día 3:
- Día 4:
- Día 5:
- Día 6:
- Día 7:
`;

export const TEMPLATES: NoteTemplate[] = [
  {
    id: 'blank',
    name: 'En blanco',
    description: 'Empieza desde cero.',
    icon: 'edit_note',
    preset: {},
  },
  {
    id: 'lean-canvas',
    name: 'Lean Canvas',
    description: '9 bloques para modelar tu negocio.',
    icon: 'view_module',
    preset: {
      title: 'Lean Canvas',
      tags: ['lean-canvas'],
      content: LEAN_CANVAS,
    },
  },
  {
    id: 'validacion',
    name: 'Validación rápida',
    description: 'Una hipótesis, un experimento, un resultado.',
    icon: 'experiment',
    preset: {
      title: 'Validación de hipótesis',
      tags: ['validación'],
      status: 'validando',
      content: VALIDACION,
    },
  },
  {
    id: 'mvp',
    name: 'MVP express',
    description: 'Plan de 7 días para lanzar el mínimo viable.',
    icon: 'rocket_launch',
    preset: {
      title: 'MVP en 7 días',
      tags: ['mvp'],
      status: 'en progreso',
      content: MVP,
    },
  },
];

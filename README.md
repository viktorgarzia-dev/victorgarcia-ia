# Ideas de Negocio

App web para capturar, organizar y desarrollar **ideas y notas de negocios online**, con un **asistente de IA (Google Gemini)** que genera ideas, las valida y sugiere los siguientes pasos. Las notas se guardan en el navegador (localStorage); no requiere cuenta ni backend.

## Funcionalidades

- **Notas/ideas**: crear, editar y borrar, con título, contenido, etiquetas y estado (`Idea`, `Validando`, `En progreso`, `Archivada`).
- **Búsqueda y filtros** por texto, etiqueta y estado.
- **Autoguardado** en `localStorage` (persiste al recargar).
- **Asistente de IA**:
  - *Generar ideas* a partir de un nicho.
  - *Analizar idea* (mercado, monetización, MVP, riesgos).
  - *Siguientes pasos* accionables.
  - La salida se puede anexar/reemplazar en la nota actual o crear una nota nueva.

## Stack

React 19 + TypeScript + Vite. Estilos con Tailwind (CDN). IA con `@google/genai`.

## Ejecutar en local

**Requisitos:** Node.js

1. Instala dependencias:
   ```bash
   npm install
   ```
2. (Opcional, para la IA) crea un archivo `.env.local` con tu clave de Gemini:
   ```bash
   GEMINI_API_KEY=tu_clave_aqui
   ```
   Sin clave, la app funciona igual pero el asistente muestra un aviso en lugar de respuestas.
3. Arranca el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre http://localhost:3000

## Compilar para producción

```bash
npm run build
npm run preview
```

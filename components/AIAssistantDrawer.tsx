import React, { useState } from 'react';
import { Note } from '../types';
import { Icon } from './Icon';
import {
  analyzeIdea,
  generateIdeas,
  isApiKeyConfigured,
  MissingApiKeyError,
  suggestNextSteps,
} from '../services/gemini';

type Mode = 'generar' | 'analizar' | 'pasos';

interface AIAssistantDrawerProps {
  open: boolean;
  onClose: () => void;
  currentNote: Note | null;
  onAppend: (text: string) => void;
  onReplace: (text: string) => void;
  onCreateNote: (text: string) => void;
}

const MODES: { id: Mode; label: string; icon: string }[] = [
  { id: 'generar', label: 'Generar ideas', icon: 'lightbulb' },
  { id: 'analizar', label: 'Analizar idea', icon: 'query_stats' },
  { id: 'pasos', label: 'Siguientes pasos', icon: 'checklist' },
];

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({
  open,
  onClose,
  currentNote,
  onAppend,
  onReplace,
  onCreateNote,
}) => {
  const [mode, setMode] = useState<Mode>('generar');
  const [niche, setNiche] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [missingKey, setMissingKey] = useState(false);

  const needsNote = mode !== 'generar';
  const disabled = loading || (needsNote && !currentNote);

  const handleRun = async () => {
    setLoading(true);
    setError(null);
    setMissingKey(false);
    setOutput('');
    try {
      let result = '';
      if (mode === 'generar') {
        result = await generateIdeas(niche);
      } else if (currentNote) {
        result =
          mode === 'analizar'
            ? await analyzeIdea(currentNote.title, currentNote.content)
            : await suggestNextSteps(currentNote.title, currentNote.content);
      }
      setOutput(result);
    } catch (err) {
      if (err instanceof MissingApiKeyError) {
        setMissingKey(true);
      } else {
        setError('No se pudo contactar con el asistente. Inténtalo de nuevo en unos segundos.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-background-dark shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <Icon name="auto_awesome" className="text-xl text-primary" filled />
            <h2 className="font-bold">Asistente de IA</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5"
            aria-label="Cerrar asistente"
          >
            <Icon name="close" className="text-lg" />
          </button>
        </div>

        <div className="flex gap-1.5 border-b border-white/10 p-3">
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setMode(m.id);
                setOutput('');
                setError(null);
                setMissingKey(false);
              }}
              className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-2 py-2 text-xs font-medium transition ${
                mode === m.id ? 'bg-primary/15 text-primary ring-1 ring-primary/30' : 'text-zinc-400 hover:bg-white/5'
              }`}
            >
              <Icon name={m.icon} className="text-lg" />
              {m.label}
            </button>
          ))}
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto p-4">
          {mode === 'generar' ? (
            <input
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleRun()}
              placeholder="Nicho o tema (ej. fitness, mascotas, finanzas)"
              className="mb-3 w-full rounded-xl border border-white/10 bg-background-surface px-3 py-2 text-sm placeholder-zinc-500 outline-none focus:border-primary/50"
            />
          ) : currentNote ? (
            <p className="mb-3 rounded-lg bg-white/5 px-3 py-2 text-sm text-zinc-400">
              Trabajando sobre: <span className="text-zinc-200">{currentNote.title.trim() || 'Sin título'}</span>
            </p>
          ) : (
            <p className="mb-3 rounded-lg bg-amber-500/10 px-3 py-2 text-sm text-amber-300 ring-1 ring-amber-500/20">
              Selecciona o crea una idea para usar este modo.
            </p>
          )}

          <button
            onClick={handleRun}
            disabled={disabled}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Icon name="progress_activity" className="animate-spin text-lg" />
                Pensando...
              </>
            ) : (
              <>
                <Icon name="auto_awesome" className="text-lg" />
                {MODES.find((m) => m.id === mode)?.label}
              </>
            )}
          </button>

          {missingKey && (
            <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
              <p className="font-semibold">API key no configurada</p>
              <p className="mt-1 text-amber-200/80">
                Crea un archivo <code className="rounded bg-black/30 px-1">.env.local</code> con{' '}
                <code className="rounded bg-black/30 px-1">GEMINI_API_KEY=tu_clave</code> y reinicia el
                servidor para usar el asistente.
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </div>
          )}

          {output && (
            <div className="mt-4 flex flex-1 flex-col">
              <div className="flex-1 whitespace-pre-wrap rounded-xl border border-white/10 bg-background-card p-4 text-sm leading-relaxed text-zinc-200">
                {output}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {currentNote ? (
                  <>
                    <ActionButton icon="add" label="Anexar a la nota" onClick={() => onAppend(output)} />
                    <ActionButton
                      icon="swap_horiz"
                      label="Reemplazar"
                      onClick={() => onReplace(output)}
                    />
                  </>
                ) : (
                  <ActionButton
                    icon="note_add"
                    label="Crear nota con esto"
                    onClick={() => onCreateNote(output)}
                  />
                )}
              </div>
            </div>
          )}

          {!isApiKeyConfigured() && !missingKey && !output && !loading && (
            <p className="mt-4 text-center text-xs text-zinc-500">
              Sugerencia: configura <code>GEMINI_API_KEY</code> en <code>.env.local</code> para habilitar la IA.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

const ActionButton: React.FC<{ icon: string; label: string; onClick: () => void }> = ({
  icon,
  label,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="inline-flex items-center gap-1.5 rounded-lg bg-background-surface px-3 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 transition hover:ring-primary/40"
  >
    <Icon name={icon} className="text-base text-primary" />
    {label}
  </button>
);

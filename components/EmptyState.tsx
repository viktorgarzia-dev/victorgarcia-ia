import React from 'react';
import { NoteTemplate } from '../constants';
import { Icon } from './Icon';
import { NewNoteMenu } from './NewNoteMenu';

interface EmptyStateProps {
  onCreate: (preset: NoteTemplate['preset']) => void;
  onOpenAI: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onCreate, onOpenAI }) => (
  <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30">
      <Icon name="lightbulb" className="text-4xl text-primary" filled />
    </div>
    <h2 className="text-2xl font-bold">Tu próximo negocio empieza aquí</h2>
    <p className="mt-2 max-w-md text-zinc-400">
      Captura ideas, organízalas por estado y deja que el asistente de IA te ayude a generarlas,
      validarlas y planificar los siguientes pasos.
    </p>
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <NewNoteMenu onSelect={onCreate} variant="hero" />
      <button
        onClick={onOpenAI}
        className="inline-flex items-center gap-2 rounded-xl bg-background-surface px-5 py-2.5 font-semibold text-zinc-200 ring-1 ring-white/10 transition hover:ring-primary/40"
      >
        <Icon name="auto_awesome" className="text-lg text-primary" />
        Generar con IA
      </button>
    </div>
  </div>
);

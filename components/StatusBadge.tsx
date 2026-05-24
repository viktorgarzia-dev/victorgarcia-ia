import React from 'react';
import { NoteStatus } from '../types';

const STYLES: Record<NoteStatus, string> = {
  idea: 'bg-amber-500/15 text-amber-300 ring-amber-500/30',
  validando: 'bg-sky-500/15 text-sky-300 ring-sky-500/30',
  'en progreso': 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30',
  archivada: 'bg-zinc-500/15 text-zinc-400 ring-zinc-500/30',
};

const LABELS: Record<NoteStatus, string> = {
  idea: 'Idea',
  validando: 'Validando',
  'en progreso': 'En progreso',
  archivada: 'Archivada',
};

export const StatusBadge: React.FC<{ status: NoteStatus; className?: string }> = ({
  status,
  className = '',
}) => (
  <span
    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${STYLES[status]} ${className}`}
  >
    {LABELS[status]}
  </span>
);

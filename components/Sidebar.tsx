import React, { useMemo, useState } from 'react';
import { Note, NoteStatus, NOTE_STATUSES } from '../types';
import { NoteTemplate } from '../constants';
import { Icon } from './Icon';
import { NewNoteMenu } from './NewNoteMenu';
import { NoteListItem } from './NoteListItem';

interface SidebarProps {
  notes: Note[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onCreate: (preset: NoteTemplate['preset']) => void;
}

const STATUS_LABELS: Record<NoteStatus, string> = {
  idea: 'Idea',
  validando: 'Validando',
  'en progreso': 'En progreso',
  archivada: 'Archivada',
};

export const Sidebar: React.FC<SidebarProps> = ({
  notes,
  selectedId,
  onSelect,
  onDelete,
  onCreate,
}) => {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<NoteStatus | 'todas'>('todas');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes
      .filter((n) => (statusFilter === 'todas' ? true : n.status === statusFilter))
      .filter((n) => {
        if (!q) return true;
        return (
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          n.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => b.updatedAt - a.updatedAt);
  }, [notes, query, statusFilter]);

  return (
    <aside className="flex h-full flex-col gap-3 p-3">
      <NewNoteMenu onSelect={onCreate} variant="sidebar" />

      <div className="relative">
        <Icon
          name="search"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-zinc-500"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar ideas..."
          className="w-full rounded-xl border border-white/10 bg-background-surface py-2 pl-10 pr-3 text-sm placeholder-zinc-500 outline-none focus:border-primary/50"
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        <FilterChip
          active={statusFilter === 'todas'}
          onClick={() => setStatusFilter('todas')}
          label="Todas"
        />
        {NOTE_STATUSES.map((s) => (
          <FilterChip
            key={s}
            active={statusFilter === s}
            onClick={() => setStatusFilter(s)}
            label={STATUS_LABELS[s]}
          />
        ))}
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto pr-1">
        {filtered.length === 0 ? (
          <p className="px-2 py-8 text-center text-sm text-zinc-500">
            {notes.length === 0 ? 'Aún no tienes ideas.' : 'Sin resultados para este filtro.'}
          </p>
        ) : (
          filtered.map((note) => (
            <NoteListItem
              key={note.id}
              note={note}
              active={note.id === selectedId}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </aside>
  );
};

const FilterChip: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({
  active,
  onClick,
  label,
}) => (
  <button
    onClick={onClick}
    className={`rounded-full px-3 py-1 text-xs font-medium transition ${
      active ? 'bg-primary text-white' : 'bg-white/5 text-zinc-400 hover:bg-white/10'
    }`}
  >
    {label}
  </button>
);

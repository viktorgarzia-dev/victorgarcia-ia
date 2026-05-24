import React from 'react';
import { Note } from '../types';
import { Icon } from './Icon';
import { StatusBadge } from './StatusBadge';

interface NoteListItemProps {
  note: Note;
  active: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export const NoteListItem: React.FC<NoteListItemProps> = ({ note, active, onSelect, onDelete }) => {
  const snippet = note.content.trim().replace(/\s+/g, ' ').slice(0, 90);
  return (
    <div
      onClick={() => onSelect(note.id)}
      className={`group cursor-pointer rounded-xl border p-3 transition ${
        active
          ? 'border-primary/50 bg-primary/10'
          : 'border-white/5 bg-background-card hover:border-white/15'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="min-w-0 flex-1 truncate font-semibold">
          {note.title.trim() || 'Sin título'}
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
          className="shrink-0 rounded-md p-1 text-zinc-500 opacity-0 transition hover:bg-white/10 hover:text-red-400 group-hover:opacity-100"
          aria-label="Eliminar nota"
        >
          <Icon name="delete" className="text-base" />
        </button>
      </div>
      {snippet && <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{snippet}</p>}
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <StatusBadge status={note.status} />
        {note.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

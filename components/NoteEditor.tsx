import React, { useEffect, useRef, useState } from 'react';
import { Note, NoteStatus, NOTE_STATUSES } from '../types';
import { Icon } from './Icon';

interface NoteEditorProps {
  note: Note;
  onChange: (patch: Partial<Omit<Note, 'id' | 'createdAt'>>) => void;
  onOpenAI: () => void;
  onDelete: (id: string) => void;
}

const STATUS_LABELS: Record<NoteStatus, string> = {
  idea: 'Idea',
  validando: 'Validando',
  'en progreso': 'En progreso',
  archivada: 'Archivada',
};

export const NoteEditor: React.FC<NoteEditorProps> = ({ note, onChange, onOpenAI, onDelete }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [tagInput, setTagInput] = useState('');

  // Re-sync local fields when switching to a different note (or when AI edits content).
  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setTagInput('');
  }, [note.id, note.content, note.title]);

  // Debounced autosave of title/content.
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  useEffect(() => {
    if (title === note.title && content === note.content) return;
    const t = setTimeout(() => onChangeRef.current({ title, content }), 400);
    return () => clearTimeout(t);
  }, [title, content, note.title, note.content]);

  const addTag = () => {
    const tag = tagInput.trim().replace(/^#/, '').toLowerCase();
    if (tag && !note.tags.includes(tag)) {
      onChange({ tags: [...note.tags, tag] });
    }
    setTagInput('');
  };

  const removeTag = (tag: string) => onChange({ tags: note.tags.filter((t) => t !== tag) });

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3 sm:px-6">
        <select
          value={note.status}
          onChange={(e) => onChange({ status: e.target.value as NoteStatus })}
          className="rounded-lg border border-white/10 bg-background-surface px-3 py-1.5 text-sm outline-none focus:border-primary/50"
        >
          {NOTE_STATUSES.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABELS[s]}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAI}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-3 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/30 transition hover:bg-primary/25"
          >
            <Icon name="auto_awesome" className="text-base" />
            <span className="hidden sm:inline">Asistente IA</span>
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-red-400"
            aria-label="Eliminar nota"
          >
            <Icon name="delete" className="text-lg" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4 sm:px-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la idea"
          className="w-full bg-transparent text-2xl font-bold placeholder-zinc-600 outline-none"
        />

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
            >
              #{tag}
              <button
                onClick={() => removeTag(tag)}
                className="text-zinc-500 hover:text-red-400"
                aria-label={`Quitar etiqueta ${tag}`}
              >
                <Icon name="close" className="text-sm" />
              </button>
            </span>
          ))}
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                addTag();
              }
            }}
            onBlur={addTag}
            placeholder="+ etiqueta"
            className="w-24 bg-transparent text-xs text-zinc-300 placeholder-zinc-600 outline-none"
          />
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Describe tu idea de negocio: el problema, el público, cómo ganarías dinero..."
          className="mt-4 min-h-[300px] flex-1 resize-none whitespace-pre-wrap bg-transparent leading-relaxed text-zinc-200 placeholder-zinc-600 outline-none"
        />
      </div>
    </div>
  );
};

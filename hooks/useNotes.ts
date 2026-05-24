import { useCallback, useState } from 'react';
import { Note, NoteStatus } from '../types';
import { useLocalStorage } from './useLocalStorage';

const STORAGE_KEY = 'ideas-negocio:notes';

function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export interface NewNoteInput {
  title?: string;
  content?: string;
  tags?: string[];
  status?: NoteStatus;
}

export function useNotes() {
  const [notes, setNotes, quotaExceeded] = useLocalStorage<Note[]>(STORAGE_KEY, []);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const createNote = useCallback(
    (input: NewNoteInput = {}): Note => {
      const now = Date.now();
      const note: Note = {
        id: newId(),
        title: input.title ?? '',
        content: input.content ?? '',
        tags: input.tags ?? [],
        status: input.status ?? 'idea',
        createdAt: now,
        updatedAt: now,
      };
      setNotes((prev) => [note, ...prev]);
      setSelectedId(note.id);
      return note;
    },
    [setNotes]
  );

  const updateNote = useCallback(
    (id: string, patch: Partial<Omit<Note, 'id' | 'createdAt'>>) => {
      setNotes((prev) =>
        prev.map((n) => (n.id === id ? { ...n, ...patch, updatedAt: Date.now() } : n))
      );
    },
    [setNotes]
  );

  const deleteNote = useCallback(
    (id: string) => {
      setNotes((prev) => prev.filter((n) => n.id !== id));
      setSelectedId((curr) => (curr === id ? null : curr));
    },
    [setNotes]
  );

  return {
    notes,
    selectedId,
    setSelectedId,
    createNote,
    updateNote,
    deleteNote,
    quotaExceeded,
  };
}

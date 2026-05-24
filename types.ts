export type NoteStatus = 'idea' | 'validando' | 'en progreso' | 'archivada';

export const NOTE_STATUSES: NoteStatus[] = ['idea', 'validando', 'en progreso', 'archivada'];

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  status: NoteStatus;
  createdAt: number;
  updatedAt: number;
}

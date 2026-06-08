import React, { useEffect, useRef, useState } from 'react';
import { NoteTemplate, TEMPLATES } from '../constants';
import { Icon } from './Icon';

interface NewNoteMenuProps {
  onSelect: (preset: NoteTemplate['preset']) => void;
  variant?: 'sidebar' | 'hero';
}

export const NewNoteMenu: React.FC<NewNoteMenuProps> = ({ onSelect, variant = 'sidebar' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', handle);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  const triggerClass =
    variant === 'hero'
      ? 'inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-semibold text-white transition hover:bg-primary/90'
      : 'flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white transition hover:bg-primary/90';

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((v) => !v)} className={triggerClass} aria-haspopup="menu" aria-expanded={open}>
        <Icon name="add" className="text-lg" />
        Nueva idea
        <Icon name="expand_more" className="text-base opacity-80" />
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-30 mt-2 w-72 overflow-hidden rounded-xl border border-white/10 bg-background-surface shadow-2xl ${
            variant === 'hero' ? 'left-1/2 -translate-x-1/2' : 'left-0'
          }`}
        >
          <div className="border-b border-white/10 px-3 py-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
            Empieza con
          </div>
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              role="menuitem"
              onClick={() => {
                onSelect(t.preset);
                setOpen(false);
              }}
              className="flex w-full items-start gap-3 px-3 py-2.5 text-left transition hover:bg-white/5"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
                <Icon name={t.icon} className="text-lg" />
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{t.name}</span>
                <span className="block text-xs text-zinc-400">{t.description}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

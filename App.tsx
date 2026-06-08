import React, { useEffect, useState } from 'react';
import { useNotes } from './hooks/useNotes';
import { Sidebar } from './components/Sidebar';
import { NoteEditor } from './components/NoteEditor';
import { EmptyState } from './components/EmptyState';
import { AIAssistantDrawer } from './components/AIAssistantDrawer';
import { Icon } from './components/Icon';
import { NoteTemplate } from './constants';

const App: React.FC = () => {
  const {
    notes,
    selectedId,
    setSelectedId,
    createNote,
    updateNote,
    deleteNote,
    quotaExceeded,
  } = useNotes();

  const [aiOpen, setAiOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedNote = notes.find((n) => n.id === selectedId) ?? null;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setSidebarOpen(false);
  };

  const handleCreate = (preset: NoteTemplate['preset'] = {}) => {
    createNote(preset);
    setSidebarOpen(false);
  };

  const appendToNote = (text: string) => {
    if (!selectedNote) return;
    const base = selectedNote.content.trim();
    updateNote(selectedNote.id, { content: base ? `${base}\n\n${text}` : text });
  };

  const replaceNote = (text: string) => {
    if (!selectedNote) return;
    updateNote(selectedNote.id, { content: text });
  };

  const createFromAI = (text: string) => {
    const note = createNote({ content: text });
    setSelectedId(note.id);
  };

  // Cerrar drawers con Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAiOpen(false);
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background-dark text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="rounded-lg p-2 text-zinc-300 transition hover:bg-white/5 md:hidden"
            aria-label="Abrir lista de ideas"
          >
            <Icon name="menu" className="text-xl" />
          </button>
          <Icon name="lightbulb" className="text-2xl text-primary" filled />
          <h1 className="text-lg font-bold">
            Ideas <span className="text-gradient-primary">de Negocio</span>
          </h1>
        </div>
        <button
          onClick={() => setAiOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-3 py-1.5 text-sm font-semibold text-primary ring-1 ring-primary/30 transition hover:bg-primary/25"
        >
          <Icon name="auto_awesome" className="text-base" />
          <span className="hidden sm:inline">Asistente IA</span>
        </button>
      </header>

      {quotaExceeded && (
        <div className="bg-red-500/15 px-4 py-2 text-center text-sm text-red-200">
          El almacenamiento local está lleno. Elimina ideas antiguas para guardar cambios.
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: fijo en desktop, drawer en móvil */}
        <div className="hidden w-80 shrink-0 border-r border-white/10 md:block">
          <Sidebar
            notes={notes}
            selectedId={selectedId}
            onSelect={handleSelect}
            onDelete={deleteNote}
            onCreate={handleCreate}
          />
        </div>

        {sidebarOpen && (
          <>
            <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
            <div className="fixed left-0 top-0 z-40 h-full w-80 max-w-[85%] border-r border-white/10 bg-background-dark md:hidden">
              <Sidebar
                notes={notes}
                selectedId={selectedId}
                onSelect={handleSelect}
                onDelete={deleteNote}
                onCreate={handleCreate}
              />
            </div>
          </>
        )}

        <main className="flex flex-1 flex-col overflow-hidden">
          {selectedNote ? (
            <NoteEditor
              key={selectedNote.id}
              note={selectedNote}
              onChange={(patch) => updateNote(selectedNote.id, patch)}
              onOpenAI={() => setAiOpen(true)}
              onDelete={deleteNote}
            />
          ) : (
            <EmptyState onCreate={handleCreate} onOpenAI={() => setAiOpen(true)} />
          )}
        </main>
      </div>

      <AIAssistantDrawer
        open={aiOpen}
        onClose={() => setAiOpen(false)}
        currentNote={selectedNote}
        onAppend={appendToNote}
        onReplace={replaceNote}
        onCreateNote={createFromAI}
      />
    </div>
  );
};

export default App;

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from 'react';
import '../App.css';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

const STORAGE_KEY = 'notes.v1';

function loadNotes() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (_) {
        return [];
    }
}

export default function NotesApp() {
    const [notes, setNotes] = useState(() => loadNotes());
    const [activeId, setActiveId] = useState(notes[0]?.id ?? null);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        if (!activeId && notes.length) setActiveId(notes[0].id);
    }, [notes, activeId]);

    function createNote() {
        const now = Date.now();
        const note = {
            id: String(now),
            title: 'Новая заметка',
            content: '',
            updated: now,
        };
        setNotes((s) => [note, ...s]);
        setActiveId(note.id);
    }

    function updateNote(updated) {
        setNotes((s) =>
            s.map((n) =>
                n.id === updated.id ? { ...updated, updated: Date.now() } : n,
            ),
        );
    }

    function deleteNote(id) {
        setNotes((s) => s.filter((n) => n.id !== id));
        if (activeId === id) setActiveId(null);
    }

    const active = notes.find((n) => n.id === activeId) ?? null;

    return (
        <div className='notes-root'>
            <header className='notes-header'>
                <h1>Заметки</h1>
                <div className='notes-actions'>
                    <button className='btn' onClick={createNote}>
                        + Новая
                    </button>
                </div>
            </header>

            <div className='notes-main'>
                <NoteList
                    notes={notes}
                    activeId={activeId}
                    onSelect={(id) => setActiveId(id)}
                    onDelete={deleteNote}
                />
                <NoteEditor
                    note={active}
                    onSave={updateNote}
                    onDelete={deleteNote}
                    onCreate={createNote}
                />
            </div>
        </div>
    );
}

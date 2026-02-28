import NoteItem from './NoteItem';

export default function NoteList({ notes, activeId, onSelect, onDelete }) {
    return (
        <aside className='notes-list'>
            {notes.length === 0 && (
                <div className='empty-list'>Нет заметок</div>
            )}
            {notes.map((n) => (
                <NoteItem
                    key={n.id}
                    note={n}
                    active={n.id === activeId}
                    onSelect={onSelect}
                    onDelete={onDelete}
                />
            ))}
        </aside>
    );
}

function snippet(text) {
    if (!text) return '';
    return text.length > 80 ? text.slice(0, 77) + '...' : text;
}

export default function NoteItem({ note, active, onSelect, onDelete }) {
    const date = new Date(note.updated).toLocaleString();
    return (
        <div
            className={`note-item ${active ? 'active' : ''}`}
            onClick={() => onSelect(note.id)}
        >
            <div className='note-meta'>
                <div className='note-title'>{note.title}</div>
                <div className='note-time'>{date}</div>
            </div>
            <div className='note-snippet'>{snippet(note.content)}</div>
            <button
                className='note-delete'
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(note.id);
                }}
            >
                ✕
            </button>
        </div>
    );
}

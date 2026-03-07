import { useEffect, useState } from 'react';

export default function NoteEditor({ note, onSave, onDelete, onCreate }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setContent(note.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [note]);

    if (!note) {
        return (
            <div className='editor empty'>
                <p>Выберите заметку или создайте новую.</p>
                <button className='btn' onClick={onCreate}>
                    + Создать
                </button>
            </div>
        );
    }

    function save() {
        onSave({ ...note, title: title || 'Без названия', content });
    }

    return (
        <div className='editor'>
            <input
                className='note-title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Заголовок'
            />
            <textarea
                className='note-content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder='Текст заметки...'
            />
            <div className='editor-actions'>
                <button className='btn primary' onClick={save}>
                    Сохранить
                </button>
                <button
                    className='btn danger'
                    onClick={() => onDelete(note.id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
}

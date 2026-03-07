import { useState } from 'react';
import './App.css';
import NotesApp from './components/NotesApp';

import { HexColorPicker } from 'react-colorful';

export default function App() {
    const [color, setColor] = useState('#7c5cff');
    return (
        <>
            <HexColorPicker
                color={color}
                onChange={setColor}
                className='color-picker_block'
            />
            <NotesApp color={color} />
        </>
    );
}

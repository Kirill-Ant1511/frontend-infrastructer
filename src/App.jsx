import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import './App.css';
import NotesApp from './components/NotesApp';

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

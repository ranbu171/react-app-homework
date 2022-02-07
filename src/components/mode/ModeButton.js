import { useContext } from 'react';
import { ModeContext } from './ModeCss';
import { useState } from 'react';

export default function ModeButton () {
    const {mode, setMode} = useContext(ModeContext);
    const [buttonText, changeText] = useState('dark mode');

    function changeMode () {
        changeText(`${mode} mode`);
        setMode();
    }
    return ( 
        <button onClick={changeMode}>{`change to ${buttonText}`}</button>
    )
}
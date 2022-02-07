
import { createContext } from 'react';
const initialState = {
    mode: 'light',
    setMode: () => null
};

export const ModeContext = createContext(initialState);
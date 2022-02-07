import { createContext } from "react";

const initialState =  {
    apples: ['Mac']
}

export const Store = createContext(initialState)
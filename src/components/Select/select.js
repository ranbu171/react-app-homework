import { useState } from "react"
import Toast from "./toast";
import './select.css'

export default function Select () {
    const [isSelected, getSelected] = useState(0);
    return (
        <div className="select">
            <h2>Select Toast HomeWork</h2>
        <select onChange={e => getSelected(e.target.selectedIndex)}>
            <option >succes</option>
            <option >info</option>
            <option >error</option>
            <option >warning</option>
        </select>
        <Toast index={isSelected} />
        </div>
    )
}
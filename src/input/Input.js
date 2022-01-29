import { useState } from 'react';

export default function Input () {
    const [isValue, newValue] = useState('');

    return (
        <div>
            <input onChange={e => newValue(e.target.value)}></input>
            <p>Value of input: {isValue}</p>
        </div>
    )

}
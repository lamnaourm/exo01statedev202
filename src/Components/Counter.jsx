import React from 'react'
import { useState } from 'react'

export default function Counter() {

    const [compteur, setCompteur] = useState(0);
    const [pasI, setPasI] = useState(1);
    const [pasD, setPasD] = useState(1);

    const incrementer = () => {
        setCompteur(c => c + pasI)
    }

    const decrementer = () => {
        setCompteur(c => c - pasD)
    }

    const initialiser = () => {
        setCompteur(0)
    }

    return (
        <div className='counter'>
            <h1>{compteur}</h1>

            <div>
                <button onClick={incrementer}>Incrementer</button>
                <button onClick={decrementer}>Decrementer</button>
                <button onClick={initialiser}  disabled={compteur===0}>Initialiser</button>
            </div>

            <fieldset>
                <legend>Pas d'incrementation</legend>
                <button onClick={() => setPasI(1)} disabled={pasI===1}>1</button>
                <button onClick={() => setPasI(2)} disabled={pasI===2}>2</button>
                <button onClick={() => setPasI(3)} disabled={pasI===3}>3</button>
                <button onClick={() => setPasI(4)} disabled={pasI===4}>4</button>
            </fieldset>

            <fieldset>
                <legend>Pas de decrementation</legend>
                <button onClick={() => setPasD(1)} disabled={pasD===1}>1</button>
                <button onClick={() => setPasD(2)} disabled={pasD===2}>2</button>
                <button onClick={() => setPasD(3)} disabled={pasD===3}>3</button>
                <button onClick={() => setPasD(4)} disabled={pasD===4}>4</button>
            </fieldset>
        </div>
    )
}

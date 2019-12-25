import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [isNum, setisNum] = useState('Impar')

    useEffect(() => {
        contador % 2 == 0 ? setisNum('Par') : setisNum('Impar')
    })

    return (
        <div>
            <h1>{contador} é um numero {isNum}</h1>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
        </div>
    )
}
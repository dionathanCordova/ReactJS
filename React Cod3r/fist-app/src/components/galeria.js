import React from 'react';
import Produto from './produto';

export default props => {
    const comprar = (prod) => {
        alert(`Comprar produto ${prod}`)
    }

    return (
        <div>
            <Produto comprar={comprar} />
        </div>
    )
}
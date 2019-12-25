import React from 'react';
import Filho from './fillho';

export default props => {
    const noticiar = () => {
        alert('teste');
    }

    return (
        <div>
            <Filho noticiar={noticiar} />
        </div>
    )
}

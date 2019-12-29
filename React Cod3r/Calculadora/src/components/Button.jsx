import React from 'react';
import './Button.css'

export default props => {
    let classes = props.classAtt

    return (
        <button onClick={e => props.click && props.click(props.label)} className={'button ' + classes}>{props.label}</button>
    )
} 

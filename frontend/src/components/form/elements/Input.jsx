import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <input
            className={`${props.className}`}
            type={props.type}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
        />
    )
}

export default Input

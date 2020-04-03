import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div>
            <input
                className={`${props.className}`}
                type={props.type}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                ref={props.reference}
            />
            {/* {
                props.err && <p className={'Input-error-message'}>{props.errMessage}</p>
            } */}
        </div>

    )
}

export default Input

import React from 'react';
import Input from './Input'
import './Input.css';
const InputWithIcon = (props) => {
    return (
        <div
            className={`Input-Input-box`}
            >
            <label className={`Input-Icon-box ${props.iconClasses ? props.iconClasses : ''}`} htmlFor={props.id}>
                {props.icon}
            </label>
            <Input
                className={`Input-Input ${props.inputClasses ? props.inputClasses : ''}`}
                type={props.type}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

export default InputWithIcon

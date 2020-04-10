import React from 'react';
import Input from './Input'
import './Input.css';
const InputWithIcon = (props) => {
    return (
        <>
        <div
            className={`Input-Input-box ${!props.err && 'Input-no-errors'}`}
            >
            <label className={`Input-Icon-box ${props.iconClasses ? props.iconClasses : ''}`} htmlFor={props.id}>
                {props.icon}
            </label>
            <Input
                className={`Input-Input  ${props.inputClasses ? props.inputClasses : ''}`}
                type={props.type}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder}
                reference={props.reference}
                err={props.err}
                errMessage={props.errMessage}
            />

        </div>
        {
            props.err && <p className={'Input-error-message'}>{props.errMessage}</p>
        }
        </>
    )
}

export default InputWithIcon

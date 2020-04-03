import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <button
            type={props.type}
            className={`
                Button-Button
                ${props.buttonGradient ? 'Button-Gradient' : ''}
                ${props.className}
            `}
            style={props.style}
            onClick={props.onClick}

            >
            {props.children}
        </button>
    )
}

export default Button

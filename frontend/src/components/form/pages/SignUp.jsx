import React, {useContext} from 'react';
import {AuthContext} from '../../../context/auth-context';
import useSignUpForm from '../../../hooks/useSignUpForm';
import InputWithIcon from '../elements/InputWithIcon';
import Button from '../elements/Button';

import {AiOutlineMail} from 'react-icons/ai';
import {FiHash} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';

import './Form.css';




const SignUp = () => {
    const {login} = useContext(AuthContext);
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    return (
        <form className="Form-wrapper" onSubmit={handleSubmit}>
            <InputWithIcon
                icon={<FiUser/>}
                id="username"
                type="username"
                name="username"
                onChange={handleInputChange}
                value={inputs.username}
            />

            <InputWithIcon
                icon={<AiOutlineMail/>}
                id="email"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
            />
            <InputWithIcon
                icon={<FiHash/>}
                id="password"
                type="password"
                name="password"
                onChange={handleInputChange}
                value={inputs.password}
            />

            <Button
                onClick={login}
                type="submit"
                buttonGradient
            >   Login
            </Button>
        </form>
    )
}

export default SignUp

import React from 'react';
// import  {useContext} from 'react';
// import {AuthContext} from '../../../context/auth-context';
// import useSignUpForm from '../../../hooks/useSignUpForm';
import InputWithIcon from '../elements/InputWithIcon';
import Button from '../elements/Button';
import { useForm } from 'react-hook-form'


import {AiOutlineMail} from 'react-icons/ai';
import {FiHash} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';

import './Form.css';




const SignUp = () => {
    // const {login} = useContext(AuthContext);
    // const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <form className="Form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <InputWithIcon
                icon={<FiUser/>}
                id="username"
                type="username"
                name="username"
                reference={register({required : true , minLength : 5})}
                err={errors.username}
                errMessage="Username must contain at least 5 characters "
            />

            <InputWithIcon
                icon={<AiOutlineMail/>}
                id="email"
                type="email"
                name="email"
                reference={register({required : true})}
                err={errors.email}
                errMessage="Please enter a valid email"
            />
            <InputWithIcon
                icon={<FiHash/>}
                id="password"
                type="password"
                name="password"
                reference={register({required : true , minLength : 5})}
                err={errors.password}
                errMessage="Password must contain at least 5 characters"
            />

            <Button
                // onClick={login}
                type="submit"
                buttonGradient
            >   Login
            </Button>
        </form>
    )
}

export default SignUp

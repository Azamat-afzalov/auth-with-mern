import React from 'react';
import  {useContext} from 'react';
import {useHttpClient} from '../../../hooks/http-hook';
import {AuthContext} from '../../../context/auth-context';

import InputWithIcon from '../elements/InputWithIcon';
import Button from '../elements/Button';
import { useForm } from 'react-hook-form'


import {AiOutlineMail} from 'react-icons/ai';
import {FiHash} from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';

import './Form.css';




const SignUp = () => {
    const {login} = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = async ( data , evt )  => {
        try{
            await sendRequest(`http://localhost:5000/api/users/signup`,
            "POST",
            JSON.stringify({
                username : data.username,
                email : data.email,
                password : data.password
            }),
            {
                'Content-Type' : 'application/json'
            })
        }catch(err){}

    }
    return (
        <form className="Form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <InputWithIcon
                icon={<FiUser/>}
                id="username"
                type="username"
                name="username"
                reference={register({required : true , minLength : 5})}
                placeholder="Enter a username"
                err={errors.username}
                errMessage="Username must contain at least 5 characters "
            />

            <InputWithIcon
                icon={<AiOutlineMail/>}
                id="email"
                type="email"
                name="email"
                placeholder="Enter an email"
                reference={register({required : true})}
                err={errors.email}
                errMessage="Please enter a valid email"
            />
            <InputWithIcon
                icon={<FiHash/>}
                id="password"
                type="password"
                name="password"
                placeholder="Enter a password"
                reference={register({required : true , minLength : 5})}
                err={errors.password}
                errMessage="Password must contain at least 5 characters"
            />

            <Button
                // onClick={login}
                type="submit"
                buttonGradient
            >   Sign Up
            </Button>
        </form>
    )
}

export default SignUp

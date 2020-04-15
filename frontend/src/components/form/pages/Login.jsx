import React, {useContext , useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useHttpClient} from '../../../hooks/http-hook';
import {AuthContext} from '../../../context/auth-context';
import Button from '../elements/Button';
import InputWithIcon from '../elements/InputWithIcon';
import {AiOutlineMail} from 'react-icons/ai';
import {FiHash} from 'react-icons/fi';
import { useForm } from 'react-hook-form'


import './Form.css';
import './Login.css';


const Login = () => {
    const {login} = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = async (data , evt) => {
        evt.preventDefault();
        let responseData
        try {
            responseData = await sendRequest(`http://localhost:5000/api/users/login` ,
            "POST",
            JSON.stringify({
                email: data.email,
                password: data.password
            }),
            {
                'Content-Type': 'application/json'
            }
            )

            login(responseData.userId , responseData.token);

        } catch (error) {
            console.log(error);
        }
        // console.log(responseData.userId)
        history.push(`/`)
    }


    return (
        <form action="POST" className="Form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <InputWithIcon
                icon={<AiOutlineMail/>}
                id="email"
                type="email"
                name="email"
                reference={register({required : true , type: 'email' })}
                placeholder="Enter an email"
                err={errors.email}
                errMessage="Please enter a valid email"
            />
            <InputWithIcon
                icon={<FiHash/>}
                id="password"
                type="password"
                name="password"
                reference={register({required : true , minLength : 5})}
                placeholder="Enter a password"
                err={errors.password}
                errMessage="Password must contain at least 5 characters "
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

export default Login

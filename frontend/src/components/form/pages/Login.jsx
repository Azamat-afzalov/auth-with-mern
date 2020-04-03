import React, {useContext , useState} from 'react';
import {AuthContext} from '../../../context/auth-context';
import Button from '../elements/Button';
import InputWithIcon from '../elements/InputWithIcon';
import {AiOutlineMail} from 'react-icons/ai';
import {FiHash} from 'react-icons/fi';


import './Form.css';
import './Login.css';


const Login = () => {
    const {login} = useContext(AuthContext);
    const [email ,setEmail] = useState();


    return (
        <form action="POST" className="Form-wrapper">
            <InputWithIcon
                icon={<AiOutlineMail/>}
                id="email"
                type="email"
                name="email"
            />
            <InputWithIcon
                icon={<FiHash/>}
                id="password"
                type="password"
                name="password"
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

export default Login

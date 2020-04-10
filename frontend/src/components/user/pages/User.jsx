import React, {useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';
import {useHttpClient} from '../../../hooks/http-hook.js';

const User = () => {
    const {sendRequest } = useHttpClient();
    //, error , isLoading , clearErrors
    const userId = useParams().userId;
    console.log(userId);
    const [user , setUser] = useState({});
    useEffect(() => {
        const fetchUser = async() => {
            try{
                const response = await sendRequest(`http://localhost:5000/api/users/${userId}`);

                setUser(response.user);
            }catch(err){}
        }
        fetchUser()
    }, [userId,sendRequest])
    console.log(user);
    return (
        <div>
            <p>id : {user._id}</p>
            <p>username: {user.username}</p>
            <p>email : {user.email}</p>
        </div>
    )
}

export default User

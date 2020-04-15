import React, {useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';
import {useHttpClient} from '../../../hooks/http-hook.js';
import './User.css'

const User = () => {
    const {sendRequest } = useHttpClient();
    // const [userId , setUserId] = useState();
    //, error , isLoading , clearErrors
    const [user , setUser] = useState({});
    const [success , setSuccess] = useState();
    const [isLoading , setIsLoading] = useState(true);
    const userId = useParams().userId;


    useEffect(() => {
        const fetchUser = async() => {
            let token = JSON.parse(localStorage.getItem('userData'))
            if(token){
                try{
                    token = token.token;
                    const response = await
                    sendRequest(`http://localhost:5000/api/users/${userId}`,"GET",null,
                    {
                        'Authorization' : 'Bearer ' + token,
                        'Content-Type' : 'application/json'
                    })
                    // ,"GET",null,{
                    //     'Authentication' : 'Bearer ' + token,
                    //     'Content-Type' : 'application/json'
                    // });
                    setUser(response.user);
                    setSuccess(response.success);
                    setIsLoading(false);
                    console.log(success)
                }catch(err){}
            }else {
                setSuccess(false);
                setIsLoading(false);
            }

        }
        fetchUser()
    }, [userId , sendRequest , success , isLoading])
    return (
        <div className="User-container">
            {isLoading ? (<p>loading ... </p>) :
            (<>
                {success  ? (
                    <div className="User-details">
                        <p> <span>id</span>: {user._id}</p>
                        <p> <span>username</span>: {user.username}</p>
                        <p> <span>email</span>: {user.email}</p>
                    </div>
                ) :
                (
                    <p>You cannot see user details without being logged in</p>
                )}
            </>)}
        </div>


    )
}

export default User

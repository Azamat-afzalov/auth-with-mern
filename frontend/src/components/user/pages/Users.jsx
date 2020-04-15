import React, {useEffect , useState} from 'react';
import UserList from '../components/UserList';
import {useHttpClient} from '../../../hooks/http-hook';
// import ClipLoader from 'react-spinners/ClipLoader';



const Users = () => {
    const [users , setUsers ] = useState();
    const { isLoading, error, sendRequest} =  useHttpClient();
    //, clearError
    useEffect(() => {
        const fetchUsers = async() => {
            try{
                const responseData = await sendRequest(`http://localhost:5000/api/users/all`)
                setUsers(responseData.users);
            }catch(err){}
        }
        fetchUsers()
    } , [sendRequest])
    return (
        <>
            {error && <div>{error}</div>}
            {/* {isLoading &&
            <div className="Loading-spinner">
                <ClipLoader size="100" color="#21D4FD" loading={isLoading}/>
            </div>} */}
            {!isLoading && users && <UserList users={users}/>}
        </>
    )
}

export default Users

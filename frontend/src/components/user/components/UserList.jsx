import React from 'react';
import UserItem from './UserItem';

import './UserList.css';
const UserList = ({users}) => {

    return (
        <ul className="UserList-ul">
            {users.map((user , idx) =>
                (<UserItem key={user.id} username={user.username} id={user.id} idx={idx}/>)
            )}

        </ul>
    )
}

export default UserList

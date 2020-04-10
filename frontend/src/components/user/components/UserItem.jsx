import React from 'react';
import {Link} from 'react-router-dom'
import './UserItem.css';

const UserItem = ({id , idx , username}) => {
    return (
        <li className="UserItem-li">
            <span className="UserItem-span">{idx + 1}</span>
            <Link to={`/users/${id}`} className="link">
                {username}
            </Link>

        </li>
    )
}

export default UserItem

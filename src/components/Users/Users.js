import React from 'react';

const Users = (props) => {
    const { name, username } = props.user;
    return (
        <div>
            <h1>{name}</h1>
            <p><small>@{username}</small></p>
        </div>
    );
};

export default Users;
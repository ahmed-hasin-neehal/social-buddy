import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
// import Users from '../Users/Users';

const Post = (props) => {
    const { userId, title, id } = props.post;
    const history = useHistory();
    const handleClick = (postId)=>{
        const url = `/details/${postId}`;
        history.push(url);
    }
    const postStyle = {
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'justify',
        backgroundColor: 'lightblue',
    }

    // const [users, setUsers] = useState({});

    // useEffect(()=>{
    //     fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    //     .then(response => response.json())
    //     .then(data => setUsers(data))
    // },[])

    return (
        <div style={postStyle}>
            <h1>Wall Post #{id}</h1>
            <h3>{title}</h3>
            <Button variant="contained" color="primary" onClick={()=>handleClick(id)}>Show Details</Button>
        </div>
    );
};

export default Post;
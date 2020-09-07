import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Container from '@material-ui/core/Container';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <Container>
                {
                posts.map(post => <Post post={post}></Post>)
                }
            </Container>
        </div>
    );
};

export default Home;
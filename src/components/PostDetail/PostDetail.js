import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Comments from '../Comments/Comments';
import Users from '../Users/Users';

const PostDetail = () => {
    const {postID} = useParams();
    const [post, setPost] = useState({});
    const url = `https://jsonplaceholder.typicode.com/posts/${postID}`

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])

    const [comment, setComment] = useState([]);
    const cmnturl = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`

    useEffect(() => {
        fetch(cmnturl)
        .then(response => response.json())
        .then(data => setComment(data))
    }, [])

    return (
        <div>
            <Container maxWidth="md" className="post-details">
                <p><small>Post# {postID}</small></p>
                <p><small>User: {post.userId}</small> </p>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <br/>
                {
                    comment.map(cmnt => <Comments cmnt={cmnt}></Comments>)
                }
            </Container>
            
        </div>
    );
};

export default PostDetail;
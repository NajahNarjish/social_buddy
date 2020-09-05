import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    let {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect (() =>{
        fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response =>response.json())
        .then (data =>setPost(data)); 
    },[])
    const {userId, title}  = post;
    return (
        <div>
            <h1>this is post detail of {postId}</h1>
            <h3>{userId}</h3>
            <p>{title}</p>      
        </div>
    );
};

export default PostDetail;
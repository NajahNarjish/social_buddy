import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment.js';

const PostDetail = () => {
    let {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect (() =>{
        fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response =>response.json())
        .then (data =>setPost(data)); 
    },[])
    const {userId,title}  = post;
    const mainPostId = post.id;

    const [comments, setComments] = useState([]);
    useEffect (() =>{
        fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response =>response.json())
        .then (data => setComments(data)); 
    },[])
    

    return (
        <div>
            {/* <h1>this is post detail of {postId}</h1> */}
            <h3>{userId}</h3>
            <p>{title}</p>  
            <p>main post id{mainPostId}</p>

            <h3>Comments</h3>
            {
                comments.map(element => <Comment key = {element.id} comment  = {element}></Comment> )
            }


        </div>
    );
};

export default PostDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment.js';

const PostDetail = () => {

    const postDetailstyles = {
        margin: '60px auto',
        padding: '10px 10px 20px',
        border: '1px solid gray',
        width: '70%',
        textAlign: 'center',
        backgroundColor: "#E9F4D2",
        borderRadius:"20px"
    }

    let {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect (() =>{
        fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response =>response.json())
        .then (data =>setPost(data)); 
    },[])
    const {userId,title, body}  = post;
    

    const [comments, setComments] = useState([]);
    useEffect (() =>{
        fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response =>response.json())
        .then (data => setComments(data)); 
    },[])

    return (
        <div style={postDetailstyles}>
            <img src={"https://images.app.goo.gl/HAtDeqPAefp3Sbg18"} alt="" />
            
            <h4>Post of buddy ID:{userId}</h4>
            <h3>"{title}"</h3>  
            <p style = {{margin:"0 20px"}}>{body}</p>
            <br/>
            <h3>Comments</h3>
            {
                comments.map(element => <Comment key = {element.id} comment  = {element}></Comment> )
            }
        </div>
    );
};

export default PostDetail;
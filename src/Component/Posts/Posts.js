import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const {userId,title, id, body } = props.post;
    
    const postStyle = {
        border: '1px solid red',
        margin: '5px',
        padding: '5px',
        borderRadius: '10px'
    }
    return (
        <div style={postStyle}>
           <h3>Name</h3>
           <p>buddy ID: {userId}</p>
            <p>title: {title}</p> 
            <p>{body}</p>
            <Link to = {`/post/${id}`}>
                <button>See more...of {id}</button>
            </Link>
        </div>
    );
};

export default Posts;
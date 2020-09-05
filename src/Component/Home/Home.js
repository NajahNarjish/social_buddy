import React, { useEffect } from 'react';
import { useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch ("https://jsonplaceholder.typicode.com/posts")
        .then (response => response.json())
        .then (data =>setPosts(data))
    }, [])
    return (
        <div>
            <h1>this is home</h1>
            {
                posts.map(element => <Posts key ={element.id} post={element}></Posts>)
            }
        </div>
    );
};

export default Home;
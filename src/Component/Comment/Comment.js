import React from 'react';

const Comment = (props) => {
    const {name, body} = props.comment;
    return (
        <div>
            <img src="" alt=""/>
            <div>
                <h4>{name}</h4>
                <p>{body}</p>

            </div>

        </div>
    );
};

export default Comment;
import React from "react";

import Writing from './Writing'

export default function Board(props) {
    const writings = props.writings;
    const deletePost = props.deletePost;


    return (
        <div>
            {writings.map(writing => (
                <Writing 
                    writing={writing} 
                    deletePost={deletePost}
                ></Writing>
            ))}
        </div>
    )
}

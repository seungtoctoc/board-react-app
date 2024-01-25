import React from "react";

import Writing from './Writing'

export default function Board(props) {
    const writings = props.writings;
    const deleteWriting = props.deleteWriting;
    const modifyWriting = props.modifyWriting;

    return (
        <div>
            {writings.map(writing => (
                <Writing 
                    writing={writing} 
                    deleteWriting={deleteWriting}
                    modifyWriting={modifyWriting}>    
                </Writing> 
            ))}

            
            
        </div>
    )
}

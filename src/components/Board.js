import React from "react";

import Writing from './Writing'

export default function Board(props) {
    const writings = props.writings;
    const deleteWriting = props.deleteWriting;
    const modifyWriting = props.modifyWriting;

    return (
        <div className='container mt-5' style={{zIndex:'1', paddingBottom:'300px'}}>
            {writings.map(writing => (
                <Writing 
                    key={writing.id}
                    writing={writing}
                    deleteWriting={deleteWriting}
                    modifyWriting={modifyWriting}>    
                </Writing> 
            ))}
        </div>
    )
}

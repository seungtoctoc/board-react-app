import React from "react";

import Writing from './Writing'

export default function Board(props) {
    const writings = props.writings;



    return (
        <div>
            {writings.map(writing => (
                <Writing writing={writing}></Writing>
            ))}
        </div>
    )
}

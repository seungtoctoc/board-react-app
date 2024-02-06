import React, {useState} from "react";

import Form from 'react-bootstrap/Form';

export default function Search(props) {
    const setKeyword = props.setKeyword;

    return (
        <div className='container'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Input keyword for search" 
                onChange={(e) => setKeyword(e.target.value)}         
                />
            </Form.Group>
        </div>
    )
}
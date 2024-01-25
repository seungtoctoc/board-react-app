import React, {useState} from "react";

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AlwaysOpenExample(props) {
    const writing = props.writing;
    const deleteWriting = props.deleteWriting;
    const modifyWriting = props.modifyWriting;

    const [editing, setEditing] = useState(false);
    const [modifyValue, setModifyValue] = useState('');

    const clickModifyButton = () => {
        setEditing(true);
    }

    const clickDeleteButton = (writing) => {
        deleteWriting(writing);
    }

    const clickCompleteButton = (writing) => {
        setEditing(false);
        modifyWriting(writing, modifyValue);
    }

    const clickCancelButton = () => {
        setEditing(false);
    }

    return (
        <div className="m-4">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        {writing.title}
                    </Accordion.Header>

                    <Accordion.Body>
                        {editing ? 
                            <>
                                <Form.Control as="textarea" rows={4}
                                    onChange={(e) => setModifyValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && clickCompleteButton()}
                                />

                                <div className="mt-4 d-flex justify-content-end">
                                    <Button variant="light" className="m-2"
                                        onClick={() => clickCompleteButton(writing)}>
                                        Complete
                                    </Button>

                                    <Button variant="secondary" className="m-2" 
                                        onClick={() => clickCancelButton()}>
                                        Cancle
                                    </Button>{' '}
                                </div>
                            </> 
                            : <>
                                {writing.body}

                                <div className="mt-4 d-flex justify-content-end">
                                    <Button variant="light" className="m-2"
                                        onClick={() => clickModifyButton()}>
                                        Modify
                                    </Button>
                                    
                                    <Button variant="danger" className="m-2" 
                                        onClick={() => clickDeleteButton(writing)}
                                    >Delete</Button>{' '}
                                </div>
                            </>}        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
  }

  export default AlwaysOpenExample;
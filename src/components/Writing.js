import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function AlwaysOpenExample(props) {
    const writing = props.writing;
    const deletePost = props.deletePost;

    return (
        <div className="m-4">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        {writing.title}
                    </Accordion.Header>

                    <Accordion.Body>
                        {writing.body}

                        <div className="mt-4 d-flex justify-content-end">
                            <Button variant="light" className="m-2">Modify</Button>
                            <Button variant="danger" className="m-2" 
                                onClick={() => deletePost(writing)}
                            >Delete</Button>{' '}
                        </div>
                    </Accordion.Body>
                    
                </Accordion.Item>
            </Accordion>
        </div>
     
    );
  }

  export default AlwaysOpenExample;
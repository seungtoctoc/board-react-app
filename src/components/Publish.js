import React, {useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Color from './Color'

export default function Publish(props) {
    const [publishing, setPublishing] = useState(false);
    const [bodyValue, setBodyValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [color, setColor] = useState(1);

    const publishWriting = props.publishWriting;

    const clickPublishButton = () => {
        setPublishing(true);
    }

    const clickCancelButton = () => {
        setPublishing(false);
    }

    const clickCompleteButton = () => {
        publishWriting(titleValue, bodyValue, color);
        setPublishing(false);
    }
    
    return (
        <div>
            {publishing ? 
            <>
                <div style={{width:'100%', height:'100%', position:'fixed', top:'0', display:'flex', alignItems:'center'}}>
                    <div style={{width:'80%', maxWidth:'600px', height:'480px', backgroundColor:'#EDECF2', margin:'0 auto', padding:'30px'}}>
                        <Form.Control as="textarea" rows={1}
                            onChange={(e) => setTitleValue(e.target.value)}
                            style={{marginBottom:'10px'}}/>
                        
                        <Form.Control as="textarea" rows={9}
                            onChange={(e) => setBodyValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && clickCompleteButton()}/>

                        
                        <Color setColor={setColor}></Color>



                        <div className="mt-4 d-flex justify-content-end">
                            <Button variant="success" className="m-2"
                                onClick={(() => clickCompleteButton())}>
                                Publish
                            </Button>
                                    
                            <Button variant="light" className="m-2" 
                                onClick={(() => clickCancelButton())}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </>
            :<>
                <div style={{position:'fixed', bottom:'0', margin:'14px', width:'100%'}}>
                    <Button variant="success" style={{width:'300px', zIndex:'2'}}
                        onClick={(() => clickPublishButton())}>
                        New Post
                    </Button>
                </div>
            </>}

         

            
        </div>
       
    )

}
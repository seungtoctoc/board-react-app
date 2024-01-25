import React, {useState} from "react";

import Button from 'react-bootstrap/Button';

export default function Publish(props) {
    const [publishing, setPublishing] = useState(false);

    return (
        <div>
            {publishing ? 
            <>

            </>
            :<>
            
            </>}

            {/* <div style={{width:'100%', height:'100%', position:'fixed', top:'0', display:'flex', alignItems:'center'}}>
                <div style={{width:'80%', height:'50%', backgroundColor:'green', margin:'0 auto'}}>
            
                </div>
            </div> */}

            <div style={{position:'fixed', bottom:'0', margin:'14px', width:'100%'}}>
                <Button variant="success" style={{width:'300px', zIndex:'2'}}>
                New Post
                </Button>
            </div>
        </div>
       
    )

}
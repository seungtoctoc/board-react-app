import React, {useState} from "react";

const color = [
    '#C6DBDA',
    '#FEE1E8',
    '#FED7C3',
    '#F6EAC2',
    '#ECD5E3'
]

export default function Color(props) {
    const [clickedColor, setClickedColor] = useState(0);

    const setColor = props.setColor;



    const clickColor = (index) => {
        setClickedColor(index);
        setColor(index);
    }

    const divElements = color.map((item, index) =>
        <div 
            style={{width:'50px', height:'50px', backgroundColor:item, margin:'10px',
                border: index === clickedColor ? '2px solid blue' : 'none'}}
            
            onClick={(() => clickColor(index))}>
        </div>
    
    )


    

    return (
        
        <div style={{display:'flex', width:'350px', margin:'10px auto'}}>
            {divElements}
        </div>
        
        
    )




}
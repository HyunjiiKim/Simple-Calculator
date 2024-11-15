import './Controller.css';
import React from "react";

const elements=[+100,+10,+1,-1,-10,-100];

const Controller = ({handleSetCount}) => {
    return(
        <div className='gridContainer'>
            {elements.map((value, index) => ( 
                 <button 
                 key={index}
                 className='gridItem'
                 onClick={()=>handleSetCount(+value)}>{value}</button>))}
        </div>
    );
}

export default Controller;
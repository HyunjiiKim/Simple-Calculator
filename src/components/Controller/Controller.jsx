import './Controller.css';
import React from "react";

const Controller = ({handleSetCount}) => {
    return(
        <div className='gridContainer'>
            <button className='gridItem' onClick={()=>handleSetCount(+1)}>1</button>
            <button className='gridItem' onClick={()=>handleSetCount(+2)}>2</button>
            <button className='gridItem' onClick={()=>handleSetCount(+3)}>3</button>
            <button className='gridItem' onClick={()=>handleSetCount(+4)}>4</button>
            <button className='gridItem' onClick={()=>handleSetCount(+5)}>5</button>
            <button className='gridItem' onClick={()=>handleSetCount(+6)}>6</button>
            <button className='gridItem' onClick={()=>handleSetCount(+7)}>7</button>
            <button className='gridItem' onClick={()=>handleSetCount(+8)}>8</button>
            <button className='gridItem' onClick={()=>handleSetCount(+9)}>9</button>
            <button className='gridItem'>+</button>
            <button className='gridItem' onClick={()=>handleSetCount(+0)}>0</button>
            <button className='gridItem'>-</button>
            <button className='gridItem'>*</button>
            <button className='gridItem'>/</button>
            <button className='gridItem'>Clear</button>
        </div>
    );
}

export default Controller;
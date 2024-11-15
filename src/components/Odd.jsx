import { useEffect } from "react";

function Odd(){
    useEffect(()=>{
        return() => {
            console.log("Odd Component Unmounted");
        };
    },[]);
    
    return<div>This is odd.</div>
};

export default Odd;
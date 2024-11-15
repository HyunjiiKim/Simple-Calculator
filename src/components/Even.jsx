import { useEffect } from "react";

function Even() {
    useEffect(()=>{
        return()=>{
            console.log("Even Component Unmounted")
        };
    },[]);
    
    return <div>This is even.</div>
};
export default Even;
//import components
import Header from './components/Header/Header'
import Viewer from './components/Viewer/Viewer'
import Controller from './components/Controller/Controller'
import Even from './components/Even'
import Odd from './components/Odd'

import { useRef,useState, useEffect } from 'react'

import './App.css'

function App(){

  const [count,setCount] = useState(0);
  const [text,setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count+value);
  };
  const handleChangeText = (e) =>{
    setText(e.target.value);
  };
  //Create didMountRef which allows to judge if App Component is mounted or not.
  //By default, it's false.
  const didMountRef = useRef(false);

  useEffect(()=>{
    if(!didMountRef.current){
      didMountRef.current=true;
      return;
    }else{
      console.log("Component Updated");
    }});

  useEffect(()=>{
    console.log("Component Mounted");
  },[])

  // every 1 second, * will appears in console.
  useEffect(()=>{
    const intervalID = setInterval(()=>{
      console.log("*");
    },1000);

  return()=>{
    console.log("Clean up");
    clearInterval(intervalID);
  };});

  return (
    <>
      <Header />
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <Viewer count={count} />
      {count%2===0 && <Even /> || <Odd />}
      <Controller handleSetCount={handleSetCount}/>  
    </>
  );}

export default App

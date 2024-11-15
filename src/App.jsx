//import components
import Header from './components/Header/Header'
import Viewer from './components/Viewer/Viewer'
import Controller from './components/Controller/Controller'

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
  
  const didMountRef = useRef(false);

  useEffect(()=>{
    if(!didMountRef.current){
      didMountRef.current=true;
      return;
    }else{
      console.log("Component Updated");
    }});


  return (
    <>
      <Header />
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <Viewer count={count} />
      <Controller handleSetCount={handleSetCount}/>  
    </>
  );}

export default App

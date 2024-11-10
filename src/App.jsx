//import components
import Header from './components/Header/Header'
import Viewer from './components/Viewer/Viewer'
import Controller from './components/Controller/Controller'

import { useState } from 'react'

import './App.css'

function App(){

  const [count,setCount] = useState(0);
  const handleSetCount= (value) => {
    setCount(count+value);
  };

  return (
    <>
      <Header />
      <Viewer count={count} />
      <Controller handleSetCount={handleSetCount}/>  
    </>
  );}

export default App

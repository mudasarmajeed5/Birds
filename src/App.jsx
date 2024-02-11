import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log('Use effect');
  },[])
  return (
    <>
      <div  className="FirstPage bg-black ">
        <Navbar/>
      </div>

    </>
  )
}

export default App

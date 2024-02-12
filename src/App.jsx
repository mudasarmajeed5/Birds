import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar"
import './App.css'
import "./Global.css"
import videoSrc from './assets/homepage Video.mp4';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Use effect');
  }, [])
  return (
    <>
      <div className="FirstPage">

        <div className="video">
          <video muted autoPlay loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
        </div>
        <Navbar />

      </div>

    </>
  )
}

export default App

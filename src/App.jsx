import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import TextAnimation from "./components/TextAnimation"
import './App.css'
import "./Global.css"
import videoSrc from './assets/homepage Video.mp4';

function App() {

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
      <div className="text_anime flex justify-center items-center h-[80vh] flex-col">
        <TextAnimation />
        <div className="flex gap-2">
        <button className='text-white backdrop:blur-sm mt-20 bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 animate-bounce '><a href="#">Become a Partner</a></button>
        <button className='text-white backdrop:blur-sm mt-20 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 animate-bounce '><a href="#">Explore</a></button>
        </div>
      </div>

    </>
  )
}

export default App

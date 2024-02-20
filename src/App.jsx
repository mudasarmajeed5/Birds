import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import TextAnimation from "./components/TextAnimation"
import './App.css'
import "./Global.css"
import Imgsrc from './assets/background Image.png';

function App() {

  return (
    <>
        <Navbar />

      <div className="FirstPage">


        <div className="img">
          <img className='absolute object-cover object-center top-0 z-[-1000] h-[100vh] w-full' src={Imgsrc} alt="" />
        </div>
        <div className="text_anime flex justify-center items-center h-[80vh] flex-col">
          <TextAnimation />
          <div className="flex gap-2">
            <button className='text-white backdrop:blur-sm mt-20 bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 animate-bounce '><a href="#">Become a Partner</a></button>
            <button className='text-white backdrop:blur-sm mt-20 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 animate-bounce '><a href="#">Explore</a></button>
          </div>
        </div>
      </div>
      <div className="hello">hel</div>

    </>
  )
}

export default App

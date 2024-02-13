import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar"
import './App.css'
import "./Global.css"
import videoSrc from './assets/homepage Video.mp4';

function App() {

  const TextAnimation = () => {
    const [transitionClass, setTransitionClass] = useState('');
    useEffect(() => {
 
      const timeout = setTimeout(() => {
        setTransitionClass('transitioned-to-five-rem');
      }, 1000); 
  
      const resetTimeout = setTimeout(() => {
        setTransitionClass('transitioned-to-one-rem');
      }, 4000); 
  
      return () => {
        clearTimeout(timeout);
        clearTimeout(resetTimeout);
      };
    }, []); 
  
    return (
      <div className="flex justify-center items-center flex-col">
      <div className='md:text-3xl text-lg sliding-text text-white'>PIONEERING NEW PERSPECTIVES</div>
      <div className='mt-2 md:text-6xl text-3xl sliding-text text-white'>OF</div>
      <div className='mt-2 md:text-6xl text-4xl sliding-text font-bold'>Digital Marketing</div>
      
    </div>
    );
  };
  

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
        <button className='text-white backdrop:blur-sm mt-20 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 animate-bounce '><a href="#">ReadMore</a></button>
      </div>

    </>
  )
}

export default App

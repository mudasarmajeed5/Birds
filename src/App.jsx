import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import SecondPage from "./components/SecondPage"
import ThirdPage from "./components/ThirdPage"
import TextAnimation from "./components/TextAnimation"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"
import { useState, useEffect } from 'react';
import './App.css'
import "./Global.css"
import Imgsrc from './bodyImage.png';
import ServicesSlider from './components/ServicesSlider';
function App() {

  return (
    <>
      <Navbar />
      <div className="FirstPage">
        <div className="img">
          <img className='absolute object-cover object-center top-0 z-[-1000]  h-[100%] w-full' src={Imgsrc} alt="" />
        </div>
        <div className="text_anime flex justify-center items-center h-[80vh] flex-col relative">
          <TextAnimation />
          <div className="flex gap-2">
            <button className='text-white backdrop:blur-sm mt-20 bg-green-500 py-2 rounded-md hover:bg-green-700 animate-bounce '><a className='px-4 py-2' href="#">Become a Partner</a></button>
            <button className='text-white backdrop:blur-sm mt-20 bg-red-600  rounded-md hover:bg-red-700 animate-bounce '><a className='px-4 py-2' href="#explore">Explore</a></button>
          </div>
          <div className='flex justify-center items-center text-xl md:text-2xl lets_talk gap-2 mt-5 font-sans'>Wanna get in Touch?<span><a href="">Lets Talk...</a></span></div>
        </div>
        {/* Adding a tag here with postion absolute will make it appear on the first page at the end of the image. */}

      </div>
      <SecondPage />
      <ThirdPage/>
      <ServicesSlider/>
      <ContactPage/>
      <Footer/>
    </>
  )
}

export default App

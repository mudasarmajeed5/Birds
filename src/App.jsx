import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Navbar from "./components/Navbar"
import TextAnimation from "./components/TextAnimation"
import './App.css'
import "./Global.css"
import Imgsrc from './bodyImage.png';
import SecondPage from "./components/SecondPage"
import SwitchTheme from "./assets/SwitchTheme.svg"
function App() {
  const [Btncolor, setBtncolor] = useState(true);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const ToggleDarkMode = (e) => {
    document.body.classList.toggle("l_theme")
  }
  const btnClr = () => {
    setBtncolor(!Btncolor);
    console.log(Btncolor);
  }
  


  return (
    <>
     {showButton && <div className='fixed left-2 top-[50vh]'><button id="dark-mode" className={`p-2 rounded-full ${Btncolor ? "bg-white": "bg-black"}`} onClick={(e) => { ToggleDarkMode(e); btnClr()}}> <img src={SwitchTheme} alt="" /></button></div>}
      <Navbar />
      <div className="FirstPage">
        <div className="img">
          <img className='absolute object-cover object-center top-0 z-[-1000]  h-[100%] w-full' src={Imgsrc} alt="" />
        </div>
        <div className="text_anime flex justify-center items-center h-[80vh] flex-col">
          <TextAnimation />
          <div className="flex gap-2">
            <button className='text-white backdrop:blur-sm mt-20 bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 animate-bounce '><a href="#">Become a Partner</a></button>
            <button className='text-white backdrop:blur-sm mt-20 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 animate-bounce '><a href="#explore">Explore</a></button>
          </div>
      <div className='flex justify-center items-center text-xl md:text-2xl lets_talk gap-2 mt-5 font-sans'>Wanna get in Touch?<span><a href="">Lets Talk...</a></span></div>
        </div>
      </div>
      <SecondPage/>

    </>
  )
}

export default App

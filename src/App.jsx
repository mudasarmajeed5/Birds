import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Navbar from "./components/Navbar"
import TextAnimation from "./components/TextAnimation"
import './App.css'
import "./Global.css"
import Imgsrc from './bodyImage.png';
import SecondPage from "./components/SecondPage"
function App() {
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
    const darkMode = document.getElementById("dark-mode");
    darkMode.classList.toggle("bg-white");
    darkMode.classList.toggle("bg-black");
  }


  return (
    <>
     {showButton && <div className='fixed left-2 top-[50vh]'><button id="dark-mode" className="p-2 bg-white rounded-full" onClick={(e) => { ToggleDarkMode(e) }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="red" stroke-width="1.5" stroke-linecap="round" />
        <path d="M14 10C13.3875 10.6432 12.7111 11 12 11C11.2889 11 10.6125 10.6432 10 10" stroke="red" stroke-width="1.5" stroke-linecap="round" />
        <path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="red" stroke-width="1.5" />
        <path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="red" stroke-width="1.5" />
        <path d="M12 15.5V11" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg></button></div>}
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

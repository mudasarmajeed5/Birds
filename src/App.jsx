import Navbar from "./components/Navbar"
import TextAnimation from "./components/TextAnimation"
import Carousel from "./components/Carousel";
import SecondPage from "./components/SecondPage"
import ThirdPage from "./components/ThirdPage"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"
import ServicesSlider from './components/ServicesSlider';

import './App.css'
import "./Global.css"
import Imgsrc from './bodyImage.png';
// WhatsApp Icon!
import { RiWhatsappFill } from "react-icons/ri";

function App() {

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[10] text-5xl md:text-4xl text-green-400 hover:text-green-600"><a target="_blank" href="https://wa.link/ghsevf"><RiWhatsappFill /></a></div>
      <Navbar />
      <div id="home" className="FirstPage relative">
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
        <div className="absolute bottom-0 w-full">
        <Carousel />
        </div>

      </div>
      <SecondPage />
      <ThirdPage />
      <ServicesSlider />
      <ContactPage />
      <Footer />
    </>
  )
}

export default App

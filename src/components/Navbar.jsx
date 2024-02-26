import React, { useState } from 'react'
import "./Navbar.css"
import { memo } from 'react'
import Menu from "../assets/menu-01.svg"
import Close from "../assets/cancel-01.svg"
import logo from "/Logo-Analysis.svg"
const Navbar = () => {




  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [Toggle, setToggle] = useState(true);
  const showMenu = () => {
    setToggle(!Toggle)
  }
  const M_Navbar = () => {
    return (
      <nav className="m_navbar">
        <img onClick={showMenu} className="block md:hidden mr-2" src={Toggle ? Menu : Close}></img>
        <ul className={Toggle ? 'menu show' : 'menu'}>
          <li><a onClick={scrollToTop} className='smooth-underline-transition' href="#home">Home</a></li>
          <li><a className='smooth-underline-transition' href="#explore">Services</a></li>
          <li><a className='smooth-underline-transition' href="#about">About</a></li>
          <li><a className='smooth-underline-transition' href="#blog">Blogs</a></li>
          <li><a className='smooth-underline-transition' href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  };

  const QuoteButton = () => (
    <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mr-2 md:mr-0 focus:outline-none text-white transition-all hover:bg-yellow-600 rounded-md text-base mt-0 md:mt-0">
      Get Quote
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
  return (

    <header className="body-font glassglass z-50 sticky top-0 ">
      <div className="container mx-auto flex flex-wrap  md:flex-row md:items-center justify-between items-center nav-pad">
        <a className=" flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
          <img className='nav-logo' src={logo} alt="" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden md:flex toggleNavColor">
          <a href='#home' onClick={scrollToTop} className="mr-5 smooth-underline-transition transition-all cursor-pointer">Home</a>
          <a href='#explore' className="mr-5 smooth-underline-transition transition-all cursor-pointer">Services</a>
          <a href='#about' className="mr-5 smooth-underline-transition transition-all cursor-pointer">About</a>
          <a href='#blog' className="mr-5 smooth-underline-transition transition-all cursor-pointer">Blogs</a>
          <a href='#contact' className="mr-5 smooth-underline-transition transition-all cursor-pointer">Contact</a>
        </nav>
        <div className="flex gap-1 md:gap-2 items-center">

          {/* Drop Down Menu PHONE*/}
          <div className="mobile-nav">
            <M_Navbar />
          </div>
          {/* Get Quote BUTTON*/}

          <div className="quoteButton">
            <QuoteButton />
          </div>
        </div>
      </div>
     
    </header>

  )
}

export default memo(Navbar)

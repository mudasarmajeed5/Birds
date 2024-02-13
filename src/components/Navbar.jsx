import React,{useState} from 'react'
import "./Navbar.css"
import Menu from "../assets/menu-01.svg"
import Close from "../assets/cancel-01.svg"

const Navbar = () => {
  const [Toggle,setToggle] = useState(true);
  const showMenu=()=>{
      setToggle(!Toggle)
  }
  const M_Navbar = () => {
    return (
      <div className="m_navbar">
        <img onClick={showMenu} className="block md:hidden mr-2" src={Toggle?Menu:Close}></img>
        <ul className={Toggle ? 'menu show' : 'menu'}>
          <li><a className='smooth-underline-transition' href="#">Home</a></li>
          <li><a className='smooth-underline-transition' href="#">Services</a></li>
          <li><a className='smooth-underline-transition' href="#">About</a></li>
          <li><a className='smooth-underline-transition' href="#">Blog</a></li>
          <li><a className='smooth-underline-transition' href="#">Contact</a></li>
        </ul>
      </div>
    );
  };

  const QuoteButton=()=>(
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
    <header className="text-gray-600 body-font glassglass sticky top-0">
      <div className="container mx-auto flex flex-wrap  md:flex-row md:items-center justify-between items-center nav-pad">
        <a className=" flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
          <img className='nav-logo' src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg" alt="" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden md:flex text-white">
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Home</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Services</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">About</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Blog</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Contact</a>
        </nav>
        <div className="flex gap-1 md:gap-2 items-center">

          {/* Drop Down Menu PHONE*/}
          <div className="mobile-nav">
          <M_Navbar/>
          </div>
          {/* Get Quote BUTTON*/}

          <div className="quoteButton">
          <QuoteButton/>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Navbar

import React, { useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {
  useEffect(() => {
    function dropdown() {
      let navdrop = document.getElementById("btn1");
      navdrop.style.display = "none";
      let navcatch = document.getElementById("btn2");
      navdrop.addEventListener("click", function () {
        if (navdrop.style.display != "none") {
          navdrop.style.display = "none";
        }
        navcatch.style.display = "block";
      });
      navcatch.addEventListener("click", function () {
        if (navcatch.style.display != "none") {
          navcatch.style.display = "none";
        }
        navdrop.style.display = "block";
      });

      let x = document.getElementById("vid")
      x.addEventListener("click" , function(){
        if (navcatch.style.display == "none") {
          navcatch.style.display = "block";
          navdrop.style.display = "none";
        }
      })
    }

    dropdown();

  })
  const DropDownMenu = () => (
    <div className="md:hidden">

      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          id='btn1'
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* open and close menu svg here! */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          className="btn btn-secondary dropdown-toggle"
          id='btn2'
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* open and close menu svg here! */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <ul className="dropdown-menu mt-3 w-[100vw] ">
          <li>
            <a className="dropdown-item" href="#">
              Billboards
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              TVC's
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Media Campaigns
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
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
    <header className="text-gray-600 body-font glassglass sticky top-0">
      <div className="container mx-auto flex flex-wrap  md:flex-row md:items-center justify-between items-center nav-pad">
        <a className=" flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
          <img className='nav-logo' src="https://cfcdn.apowersoft.info/astro/picwish/_astro/scene-logo-after.310a7581.png" alt="" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden md:flex text-white">
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">BillBoards</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">TVC's</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Print Media</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Campaigns</a>
        </nav>
        <div className="flex gap-1 md:gap-2 items-center">
          <div className="quote">
            {/* Get Quote Button */}
            <QuoteButton />
          </div>
          <div className="menu">
            {/* Drop Down Menu */}
            <DropDownMenu />
          </div>
        </div>
      </div>
    </header>

  )
}

export default Navbar

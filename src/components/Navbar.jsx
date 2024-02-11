import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  const DropDownMenu = () => (
    <div className="md:hidden">
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 5L20 5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12L20 12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 19L20 19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <ul className="dropdown-menu">
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
          <img className='nav-logo' src="https://colorstudiomax.com/wp-content/uploads/2023/10/color-white-e1698328086113.png" alt="" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden md:flex text-white">
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">BillBoards</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">TVC's</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Print Media</a>
          <a className="mr-5 smooth-underline-transition transition-all cursor-pointer">Campaigns</a>
        </nav>
        <div className="flex gap-1 md:gap-2 items-center">
          {/* Drop Down Menu */}
          <DropDownMenu/>
          {/* Get Quote Button */}
          <QuoteButton/>
        </div>
      </div>
    </header>

  )
}

export default Navbar

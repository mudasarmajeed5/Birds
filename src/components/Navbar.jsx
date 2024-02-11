import React from 'react'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-1 md:p-3 md:flex-row md:items-center justify-between items-center">
      <a className=" flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
        <img width={100} src="https://colorstudiomax.com/wp-content/uploads/2023/10/color-white-e1698328086113.png" alt="" />
      </a>
      <nav className="md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center hidden md:flex text-white">
        <a className="mr-5 hover:underline underline-offset-8 transition-all cursor-pointer">BillBoards</a>
        <a className="mr-5 hover:underline underline-offset-8 transition-all cursor-pointer">TVCs</a>
        <a className="mr-5 hover:underline underline-offset-8 transition-all cursor-pointer">Print Media</a>
        <a className="mr-5 hover:underline underline-offset-8 transition-all cursor-pointer">Campaigns</a>
      </nav>
      <div className="flex gap-1 md:gap-2 items-center">
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={24}
            viewBox="0 -960 960 960"
            width={24}
            fill='white'
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mr-2 md:mr-0 focus:outline-none text-white transition-all hover:bg-yellow-700 rounded-md text-base mt-0 md:mt-0">
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
      </div>
    </div>
  </header>
  
  )
}

export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-3 border-gray-200 bg-blue-200 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src="https://www.pinclipart.com/picdir/middle/16-169117_pickle-clipart-jar-lid-rick-and-morty-png.png" className="h-8 mr-4 sm:h-12 rounded-full" alt="Rick and Morty Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-700">Rick and Morty</span>
        </a>
        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className=" flex flex-col mt-4 rounded-lg bg-gray- md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 bg-blue-700 rounded md:bg-transparent md:p-0 md:text-gray-700 dark:bg-gray-400 " aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/welcome" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 text-gray-700 dark:hover:bg-gray-400 hover:text-gray-700 ">Welcome</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
'use client';
import dynamic from "next/dynamic";
import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mr White</span>
        </a>
        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={isOpen ? 'block w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'} id="navbar-default">
          <ul className="font-medium flex flex-col sm:flex-row p-4 md:p-0 mt-4">
            <li className="mb-2 sm:mb-0 sm:mr-2">
              <a href="/" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 dark:text-white " aria-current="page">Home</a>
            </li>
            <li className="mb-2 sm:mb-0 sm:mr-2">
              <a href="/ESQL" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 dark:text-white " aria-current="page">ESQL</a>
            </li>
            <li className="mb-2 sm:mb-0 sm:mr-2">
              <a href="/webMethodsJourney" className="block py-2 pl-3 pr-4 text-white rounded md:p-0 dark:text-white " aria-current="page">webMethods Journey.</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(NavBar), { ssr: false })



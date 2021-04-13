import Link from 'next/link'
import { useState } from 'react'

import { RiUploadLine } from "react-icons/ri";

export const Navbar = () => {
  return (
    <nav className="">
      <div className="container">
        <div className="relative flex items-center justify-between h-16">

          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/*
                Icon when menu is closed.
                Heroicon name: outline/menu
                Menu open: "hidden", Menu closed: "block"
              */}
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/*
                Icon when menu is open.
                Heroicon name: outline/x
                Menu open: "block", Menu closed: "hidden"
              */}
              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

                    
          <div className="flex items-center justify-center flex-1 align-center">

            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href={`/`}>
              <a title="Rada.co"><img className="block w-auto h-8" src="./images/rada.svg" alt="Rada.co" /></a>
              </Link>
            </div>

            {/* Search */}
            <div className="relative w-full mx-6">
              <input type="search" className="w-full px-5 py-2 border border-gray-100 rounded shadow-sm focus:shadow-lg focus:border-primary-700" placeholder="Search by address or name ..." />
            </div>

            {/* Main Nav */}
            <div className="flex-1 hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/" className="px-3 py-2 font-medium text-white rounded-md whitespace-nowrap bg-primary-700" aria-current="page">Explore</a>
                <a href="/" className="px-3 py-2 font-medium text-gray-700 whitespace-nowrap hover:text-primary-700">About Us</a>
                <a href="/" className="px-3 py-2 font-medium text-gray-700 whitespace-nowrap hover:text-primary-700">How It Work</a>
              </div>
            </div>
 
          </div>


          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <div className="flex-1 hidden sm:block">
              <div className="flex space-x-4">
                <a href="/" className="flex items-center px-3 py-2 font-medium text-gray-700 whitespace-nowrap hover:text-primary-700">
                  <span className="mr-2 icon"><RiUploadLine /></span>
                  Submit
                </a>
              </div>
            </div>
    
            {/* Profile dropdown */}
            <div className="relative ml-3">

              <div>
                <button type="button" className="flex text-sm bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src="https://picsum.photos/80/80?random=1" alt="" />
                </button>
              </div>
    
              {/*
                Dropdown menu, show/hide based on menu state.
    
                For animated transitions, import { Transition } from '@headlessui/react' and wrap the next tag in this component:
                <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                ></Transition>
              */}
              <div className="absolute right-0 hidden w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>

            </div>

          </div>
        </div>
      </div>
    
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href="/" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</a>
    
          <a href="/" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Team</a>
    
          <a href="/" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Projects</a>
    
          <a href="/" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Calendar</a>
        </div>
      </div>
      
    </nav>
  );
}
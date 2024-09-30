import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Fruits from '../assets/fruits.png'
import Vegetables from '../assets/vegetables.png'
import Meats from '../assets/meats.png'
import Dairies from '../assets/dairies.png'
import Bakeries from '../assets/bakeries.png'
import Seeds from '../assets/seeds.png'
import Sweets from '../assets/sweets.png'
import Drinks from '../assets/drinks.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0 w-64' : 'w-16'
        } transition-all duration-300 ease-in-out bg-light-green h-full text-white z-50`}
      >
        <div className="p-5 flex justify-between items-center">
          {!isOpen && (
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          )}
          {isOpen && (
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none text-2xl"
            >
              &times;
            </button>
          )}
        </div>
        <ul className="mt-4 space-y-4">
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className=""><img src={Fruits} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Gyümölcsök</span>
          </li>
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl"><img src={Vegetables} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Zöldségek</span>
          </li>
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl"><img src={Meats} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Húsfélék</span>
          </li>
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl"><img src={Dairies} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Tejtermékek</span>
          </li>
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl"><img src={Bakeries} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Pékáruk</span>
          </li>
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl"><img src={Seeds} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Magvak</span>
          </li>
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl"><img src={Sweets} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Édességek</span>
          </li>
          <li
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl"><img src={Drinks} alt="" /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Italok</span>
          </li>
          <li onClick={() => window.location.href = "/"}
            className="flex items-center py-2 hover:bg-gray-700 rounded-md px-4 cursor-pointer"
          >
            <span className="text-xl pl-2"><FontAwesomeIcon icon={faAngleLeft} /></span>
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>Vissza a főoldalra</span>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}

export default Sidebar
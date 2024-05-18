import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-600 hover:text-red-700 hover:border-b-2 transition duration-250 ease-in-out hover:cursor-pointer">Allomonpsy</Link>

        <ul className="hidden md:flex">
          <li className="ml-4">
            <Link to="/team" className="text-gray-600 hover:text-red-700 hover:border-b-2 transition duration-250 ease-in-out hover:cursor-pointer">Besoin d'orde?</Link>
          </li>
          <li className="ml-4">
            <Link to="/admin" className="text-gray-600 hover:text-gray-600 hover:text-red-700 hover:border-b-2 transition duration-250 ease-in-out hover:cursor-pointer">Admin</Link>
          </li>
          <li className="ml-4">
            <Link to="/offres-entreprise" className="text-gray-600 hover:text-gray-600 hover:text-red-700 hover:border-b-2 transition duration-250 ease-in-out hover:cursor-pointer">Offres entreprise</Link>
          </li>
          <li className="ml-4">
            <Link to="/medio" className="text-gray-600 hover:text-gray-600 hover:text-red-700 hover:border-b-2 transition duration-250 ease-in-out hover:cursor-pointer">Medio</Link>
          </li>
        </ul>

        <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
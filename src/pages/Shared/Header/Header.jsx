import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav className="bg-gray-800 p-4">
               <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-xl font-bold">
                         <Link to="/">RestNest</Link>
                    </div>
                    <div className="space-x-4">
                         <Link to="/" className="text-gray-300 hover:text-white">
                              Home
                         </Link>
                         <Link to="/login" className="text-gray-300 hover:text-white">
                              Login
                         </Link>
                         <Link to="/signup" className="text-gray-300 hover:text-white">
                              Sign Up
                         </Link>
                         <Link to="/book" className="text-gray-300 hover:text-white">
                              Book
                         </Link>
                    </div>
               </div>
          </nav>
     );
};

export default Header;

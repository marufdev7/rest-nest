import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../routes/AuthProviders';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
     const { user, logOut } = useContext(AuthContext);
     const [menuOpen, setMenuOpen] = useState(false);

     const handleLogout = () => {
          logOut()
               .then(() => { })
               .catch(error => console.error(error));
     };

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <nav className="bg-gray-700 p-4">
               <div className="container mx-auto flex items-center justify-between">
                    <div className="text-white text-xl font-bold">
                         <Link to="/">RestNest</Link>
                    </div>

                    <div className="lg:hidden text-white cursor-pointer" onClick={toggleMenu}>
                         {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>

                    <div className="hidden lg:flex gap-16 items-center">
                         <div className='space-x-4'>
                              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                              <Link to="/book" className="text-gray-300 hover:text-white">Book</Link>
                              {user ?
                                   <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
                                   :
                                   <>
                                        <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                                        <Link to="/signup" className="text-gray-300 hover:text-white">Sign Up</Link>
                                   </>
                              }
                         </div>

                         <div className='flex items-center'>
                              {user ?
                                   <>
                                        <span className='text-white font-semibold pr-3'>
                                             {user.displayName ? user.displayName : user.email}
                                        </span>
                                        <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                             Log Out
                                        </button>
                                   </>
                                   :
                                   <Link to='/login'>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                             Login
                                        </button>
                                   </Link>
                              }
                         </div>
                    </div>

                    {menuOpen && (
                         <div className="lg:hidden flex flex-col items-center gap-4 mt-4">
                              <Link to="/" className="text-gray-300 hover:text-white" onClick={toggleMenu}>Home</Link>
                              <Link to="/book" className="text-gray-300 hover:text-white" onClick={toggleMenu}>Book</Link>
                              {user ?
                                   <Link to="/profile" className="text-gray-300 hover:text-white" onClick={toggleMenu}>Profile</Link>
                                   :
                                   <>
                                        <Link to="/login" className="text-gray-300 hover:text-white" onClick={toggleMenu}>Login</Link>
                                        <Link to="/signup" className="text-gray-300 hover:text-white" onClick={toggleMenu}>Sign Up</Link>
                                   </>
                              }
                              <div>
                                   {user &&
                                        <>
                                             <span className='text-white font-semibold pr-3'>
                                                  {user.displayName ? user.displayName : user.email}
                                             </span>
                                             <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                  Log Out
                                             </button>
                                        </>
                                   }
                              </div>
                         </div>
                    )}
               </div>
          </nav>
     );
};

export default Header;

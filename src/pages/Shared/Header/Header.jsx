import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../routes/AuthProviders';


const Header = () => {

     const { user, logOut } = useContext(AuthContext);

     const handleLogout = () => {
          logOut()
               .then(() => { })
               .catch(error => console.error(error));
     };

     return (
          <nav className="bg-gray-700 p-4">
               <div className="container flex items-center justify-between">
                    <div className="text-white text-xl font-bold">
                         <Link to="/">RestNest</Link>
                    </div>
                    <div className="flex gap-16 items-center">
                         <div className='space-x-4'>
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
                         <div>
                              {
                                   user ?
                                        <> <span className='text-white font-semibold'>{user.email}</span> <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                             Sign Out
                                        </button>
                                        </>
                                        : <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                             <Link to='/login'>Login</Link>
                                        </button>
                              }
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default Header;

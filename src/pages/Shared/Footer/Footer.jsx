import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
     return (
          <footer className="bg-gray-800 text-gray-300 py-8 pl-4">
               <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                         <h4 className="text-white text-xl font-bold mb-4">About RestNest</h4>
                         <p className="text-gray-400">
                              RestNest is your ultimate destination for comfortable and luxurious stays. Whether you’re traveling for business or leisure, we provide the best accommodations tailored to your needs.
                         </p>
                    </div>

                    <div>
                         <h4 className="text-white text-xl font-bold mb-4">Quick Links</h4>
                         <ul>
                              <li>
                                   <Link to="/" className="hover:underline">Home</Link>
                              </li>
                              <li>
                                   <Link to="/login" className="hover:underline">Login</Link>
                              </li>
                              <li>
                                   <Link to="/signup" className="hover:underline">Signup</Link>
                              </li>
                              <li>
                                   <Link to="/book" className="hover:underline">Book</Link>
                              </li>
                         </ul>
                    </div>

                    <div>
                         <h4 className="text-white text-xl font-bold mb-4">Follow Us</h4>
                         <div className="flex space-x-4">
                              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                   <FaFacebookF size={24} />
                              </a>
                              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                   <FaTwitter size={24} />
                              </a>
                              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                   <FaInstagram size={24} />
                              </a>
                         </div>
                    </div>
               </div>

               <div className="text-center text-gray-500 mt-8">
                    &copy; {new Date().getFullYear()} RestNest. All rights reserved.
               </div>
          </footer>
     );
};

export default Footer;

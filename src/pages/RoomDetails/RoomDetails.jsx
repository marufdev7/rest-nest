import React from 'react';
import { FaBed, FaDollarSign, FaMale } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RoomDetails = ({ name, image, description, bed, people, price }) => {
     return (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover"
               />
               <div className="p-4">
                    <h2 className="text-gray-800 text-2xl font-semibold mb-2">
                         {name}
                    </h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className='flex justify-between items-center'>
                         <p className='flex items-center'><FaBed/>:{bed}</p>
                         <p className='flex items-center'><FaMale/>:{people}</p>
                         <p className='flex items-center'><FaDollarSign/>:{price}</p>
                         <Link to="/book">
                              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                   Book
                              </button>
                         </Link>
                    </div>

               </div>
          </div>
     );
};

export default RoomDetails;

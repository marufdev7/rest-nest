// src/components/RoomDetails.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const RoomDetails = ({ name, image, description }) => {
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
                    <Link to="/book">
                         <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                              Book
                         </button>
                    </Link>
               </div>
          </div>
     );
};

export default RoomDetails;

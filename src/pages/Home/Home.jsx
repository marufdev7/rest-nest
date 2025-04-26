import React from 'react';
import hotelView from '../../assets/hotel-view.jpg';
import singleRoom from '../../assets/single-room.jpeg';
import coupleRoom from '../../assets/couple-room.jpg';
import familyRoom from '../../assets/family-room.jpg';
import RoomDetails from '../RoomDetails/RoomDetails';
import { Helmet } from 'react-helmet-async';

const Home = () => {

     const rooms = [
          {
               name: 'Single Room',
               image: singleRoom,
               description: 'A cozy room perfect for solo travelers.',
               bed: 1,
               people: 1,
               price: 119,
          },
          {
               name: 'Couple Room',
               image: coupleRoom,
               description: 'A comfortable space ideal for couples.',
               bed: 1,
               people: 2,
               price: 149,
          },
          {
               name: 'Family Room',
               image: familyRoom,
               description: 'Spacious room for a perfect family stay.',
               bed: 2,
               people: 4,
               price: 199,
          },
     ];


     return (
          <>
               <Helmet>
                    <title>RestNest | Home</title>
                    <meta name="description" content="Welcome to RestNest, your global icon of luxury. Explore our exquisite rooms and experience unparalleled comfort." />
               </Helmet>
               <div className="relative">
                    <img
                         src={hotelView}
                         alt="Hotel RestNest"
                         className="w-full h-[60vh] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                         <h1 className="text-white text-5xl font-bold mb-2">Hotel Rest Nest <br /> Global Icon of Luxury</h1>
                    </div>
               </div>
               <div className="grid grid-cols-1 mt-8 sm:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
                    {rooms.map((room) => (
                         <RoomDetails
                              key={room.name}
                              name={room.name}
                              image={room.image}
                              description={room.description}
                              bed={room.bed}
                              people={room.people}
                              price={room.price}
                         />
                    ))}
               </div>
          </>
     );
};

export default Home;

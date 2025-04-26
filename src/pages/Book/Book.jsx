import React from 'react';
import { Helmet } from 'react-helmet-async';

const Book = () => {
     return (
          <div>
               <Helmet>
                    <title>Book</title>
                    <meta name="description" content="Book your favorite place" />
               </Helmet>
               <h2>welcome to booking section. </h2>
          </div>
     );
};

export default Book;
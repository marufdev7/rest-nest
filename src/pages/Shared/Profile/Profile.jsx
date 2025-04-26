import React, { useContext } from 'react';
import { AuthContext } from '../../../routes/AuthProviders';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
     const { user } = useContext(AuthContext);
     // console.log(user.displayName);
     return (
          <div>
               <Helmet>
               <title>Profile</title>
               <meta name="description" content="Profile page" />
               </Helmet>
               <h2 className='text-lg font-bold'>Welcome to your Profile...  Mr. {user.displayName}</h2>
          </div>
     );
};

export default Profile;
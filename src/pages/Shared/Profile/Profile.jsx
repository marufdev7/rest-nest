import React, { useContext } from 'react';
import { AuthContext } from '../../../routes/AuthProviders';

const Profile = () => {
     const { user } = useContext(AuthContext);
     // console.log(user.displayName);
     return (
          <div>
               <h2 className='text-lg font-bold'>Welcome to your Profile...  Mr. {user.displayName}</h2>
          </div>
     );
};

export default Profile;
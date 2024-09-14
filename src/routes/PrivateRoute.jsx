import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

     const { user, loading } = useContext(AuthContext);
     const location = useLocation();
     // console.log(location);

     if (loading) {
          return <div className="flex justify-center items-center h-screen">
               <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
     };

     if (user) {
          return children;
     }
     return (
          <Navigate to="/login" state={{from: location}} replace></Navigate>
     );
};

export default PrivateRoute;
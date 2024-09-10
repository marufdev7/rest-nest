import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

     const { user, loading } = useContext(AuthContext);

     if (loading) {
          return <div className="flex justify-center items-center h-screen">
               <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
     };

     if (user) {
          return children;
     }
     return (
          <Navigate to="/login" replace={true}></Navigate>
     );
};

export default PrivateRoute;
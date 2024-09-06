// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../routes/AuthProviders';

// const Login = () => {
//      const [email, setEmail] = useState('');
//      const [password, setPassword] = useState('');
//      const [showPassword, setShowPassword] = useState(false);

//      const { signIn, signInWithGoogle } = useContext(AuthContext);

//      const navigate = useNavigate();
//      const location = useLocation();
//      const from = location.state?.from?.pathname || '/';

//      const handleLogin = (event) => {
//           event.preventDefault();
//           signIn(email, password)
//                .then((result) => {
//                     const loggedUser = result.user;
//                     console.log('Logged in:', loggedUser);
//                     navigate(from, { replace: true });
//                })
//                .catch((error) => {
//                     console.error('Login failed:', error);
//                });
//      };

//      const handleGoogleLogin = () => {
//           signInWithGoogle()
//                .then((result) => {
//                     const loggedUser = result.user;
//                     console.log('Logged in with Google:', loggedUser);
//                     navigate(from, { replace: true });
//                })
//                .catch((error) => {
//                     console.error('Google login failed:', error);
//                });
//      };

//      return (
//           <div className="flex justify-center items-center h-screen bg-gray-100">
//                <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
//                     <h2 className="text-2xl font-semibold text-center mb-6">Login to Rest Nest</h2>

//                     <form onSubmit={handleLogin}>
//                          <div className="mb-4">
//                               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                    Email
//                               </label>
//                               <input
//                                    type="email"
//                                    id="email"
//                                    value={email}
//                                    onChange={(e) => setEmail(e.target.value)}
//                                    required
//                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                               />
//                          </div>
//                          <div className="mb-6">
//                               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                                    Password
//                               </label>
//                               <input
//                                    type={showPassword ? "text" : "password"}
//                                    id="password"
//                                    value={password}
//                                    onChange={(e) => setPassword(e.target.value)}
//                                    required
//                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                               />
//                               <p className="text-sm text-gray-600 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
//                                    {showPassword ? 'Hide Password' : 'Show Password'}
//                               </p>
//                          </div>
//                          <div className="flex items-center justify-between">
//                               <button
//                                    type="submit"
//                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                               >
//                                    Login
//                               </button>
//                          </div>
//                     </form>

//                     <div className="mt-4 text-center">
//                          <button
//                               onClick={handleGoogleLogin}
//                               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
//                          >
//                               Login with Google
//                          </button>
//                     </div>

//                     <div className="mt-6 text-center">
//                          <p className="text-gray-600">
//                               New to Rest Nest?{' '}
//                               <Link to="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">
//                                    Create an Account
//                               </Link>
//                          </p>
//                     </div>
//                </div>
//           </div>
//      );
// };

// export default Login;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../routes/AuthProviders';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

     const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

     const handleLogin = event => {
          event.preventDefault();

          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(email, password);

          signIn(email, password)
               .then(result => {
                    const loggedUser = result.user;
                    // console.log(loggedUser);
                    toast.success('Account login successfully');
                    form.reset();
               })
               .catch(error => {
                    console.error(error);
                    toast.error('Error login account');
               })
     };

     const handleGoogleLogin = () => {
          signInWithGoogle()
               .then(result => {
                    const loggedUser = result.user;
                    // console.log(loggedUser);
                    toast.success('Signed in with Google successfully!');
               })
               .catch(error => {
                    console.log(error);
                    toast.error('Error signing in with Google');
               })
     };

     const handleGithubLogin = () => {
          signInWithGithub()
               .then(result => {
                    const loggedUser = result.user;
                    // console.log(loggedUser);
                    toast.success('Signed in with Github successfully');
               })
               .catch(error => {
                    console.log(error);
                    toast.error('Error signing in with Github')
               })
     };

     return (
          <div className="flex justify-center items-center pt-8 pb-8 bg-gray-100">
               <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Login to RestNest</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                         <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   name='email'
                                   id="email"
                                   placeholder='Email'
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   required
                              />
                         </div>
                         <div>
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                   Password
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   name='password'
                                   placeholder='Password'
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   required
                              />
                         </div>
                         <div className="flex items-center justify-between">
                              <button
                                   type="submit"
                                   className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                              >
                                   Login
                              </button>
                         </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                         <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                              Forgot Password?
                         </Link>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGoogleLogin}
                              className="w-full py-2 text-white bg-sky-400 rounded-md hover:bg-sky-600"
                         >
                              Login with Google
                         </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGithubLogin}
                              className="w-full py-2 mt-2 text-white bg-gray-700 rounded-md hover:bg-gray-800"
                         >
                              Login with GitHub
                         </button>
                    </div>
                    <ToastContainer/>
                    <div className="text-center">
                         <p className="text-sm text-gray-700">
                              New to RestNest?
                              <Link to="/signup" className="text-blue-500 hover:underline">
                                   Create an account
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Login;

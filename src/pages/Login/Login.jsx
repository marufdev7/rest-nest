import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../routes/AuthProviders';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Login = () => {

     const { signIn, signInWithGoogle, signInWithGithub, auth } = useContext(AuthContext);
     const emailRef = useRef();
     const [show, setShow] = useState(false);
     const navigate = useNavigate();
     const location = useLocation();
     // console.log(locaton);
     const from = location.state?.from?.pathname || "/";

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

                    if (!loggedUser.emailVerified) {
                         toast.warning('Your email is not verified, Please verify your email');
                         return;
                    }

                    toast.success('Account login successfully');
                    form.reset();
                    navigate(from, { replace: true });
               })
               .catch(error => {
                    console.error(error);
                    toast.error('Error login account');
               })
     };

     const handleResetPassword = () => {
          const email = emailRef.current.value;
          if (!email) {
               toast.warning('Please enter your email for reset password');
               return;
          }

          sendPasswordResetEmail(auth, email)
               .then(() => {
                    toast.success('Please check your email');
               })
               .catch(error => {
                    console.log(error.message);
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
               <Helmet>
                    <title>RestNest | Login</title>
                    <meta name="description" content="Login to your RestNest account and enjoy a world of luxury and comfort." />
               </Helmet>
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
                                   ref={emailRef}
                                   placeholder='Email'
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   required
                              />
                         </div>
                         <div className="relative">
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                   Password
                              </label>
                              <input
                                   type={show ? "text" : "password"}
                                   id="password"
                                   name='password'
                                   placeholder='Password'
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 pr-10"
                                   required
                              />
                              <span
                                   className="absolute top-[25px] bottom-0 right-3 flex items-center cursor-pointer"
                                   onClick={() => setShow(!show)}
                              >
                                   {show ? <FaEyeSlash /> : <FaEye />}
                              </span>
                         </div>
                         <div className="flex items-center justify-between">
                              <button
                                   type="submit"
                                   className="w-full mt-2 border py-2 rounded-md border-gray-700 bg-gray-100 hover:bg-gray-600 hover:text-white flex items-center justify-center"
                              >
                                   Login
                              </button>
                         </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                         <button onClick={handleResetPassword} className="text-sm text-blue-500 hover:underline">
                              Forgot Password?
                         </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGoogleLogin}
                              className="w-full mt-2 border rounded-md py-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white flex items-center justify-center"
                         >
                              <FaGoogle className="mr-2" /> Login with Google
                         </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGithubLogin}
                              className="w-full mt-2 border rounded-md py-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white flex items-center justify-center"
                         >
                              <FaGithub className="mr-2" /> Login with GitHub
                         </button>
                    </div>
                    <ToastContainer />
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

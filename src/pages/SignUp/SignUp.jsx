import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../routes/AuthProviders';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
     // const [name, setName] = useState('');
     // const [email, setEmail] = useState('');
     // const [password, setPassword] = useState('');
     // const [confirmPassword, setConfirmPassword] = useState('');

     const { createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

     const handleSignUp = event => {
          event.preventDefault();

          const form = event.target;
          // const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const confirmPassword = form.confirmPassword.value;
          // console.log(name, email, password);

          if (password !== confirmPassword) {
               toast.error('Passwords do not match');
               return;
          }
          else if (!/[A-Za-z]/.test(password)) {
               toast.error('Password must contain at least one uppercase or lowercase letter.');
               return;
          }
          else if (!/\d/.test(password)) {
               toast.error('Password must contain at least one number.');
               return;
          }
          else if (!/[@$!%*?&]/.test(password)) {
               toast.error('Password must contain at least one special character.');
               return;
          }
          else if (/\s/.test(password)) {
               toast.error('Password must not contain spaces.');
               return;
          }
          else if (password.length < 8 || password.length > 16) {
               toast.error('Password length should be between 8 and 16 characters.');
               return;
          }

          createUser(email, password)
               .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    toast.success('Account created successfully');
                    form.reset();
                    verifyEmail(loggedUser);
               })
               .catch(error => {
                    console.log(error);
                    toast.error('Error creating account');
               })
     };

     const verifyEmail = user => {
          sendEmailVerification(user)
               .then((result) => {
                    // console.log(result);
                    toast.warn("Please varify your email");
                })
     };

     // const handleNameChange = (e) => {
     //      setName(e.target.value);
     // };

     // const handleEmailChange = (e) => {
     //      setEmail(e.target.value);
     // };

     // const handlePasswordChange = (e) => {
     //      setPassword(e.target.value);
     // };

     // const handleConfirmPasswordChange = (e) => {
     //      setConfirmPassword(e.target.value);
     // };

     const handleGoogleSignUp = () => {
          signInWithGoogle()
               .then(result => {
                    const loggedUser = result.user;
                    // console.log(loggedUser);
                    toast.success('Signed up with Google successfully!');
               })
               .catch(error => {
                    console.log(error);
                    toast.error('Error signing up with Google');
               })
     };

     const handleGithubSignUp = () => {
          signInWithGithub()
               .then(result => {
                    const loggedUser = result.user;
                    // console.log(loggedUser);
                    toast.success('Signed up with GitHub successfully!');
               })
               .catch(error => {
                    console.log(error);
                    toast.error('Error signing up with GitHub');
               })
     };

     return (
          <div className="flex justify-center items-center pt-8 pb-8 bg-gray-100">
               <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up for RestNest</h2>
                    <form onSubmit={handleSignUp} className="space-y-4">
                         <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                   Name
                              </label>
                              <input
                                   type="text"
                                   id="name"
                                   name='name'
                                   placeholder='Name'
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   // value={name}
                                   // onChange={handleNameChange}
                                   required
                              />
                         </div>
                         <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   name='email'
                                   placeholder='Email'
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   // value={email}
                                   // onChange={handleEmailChange}
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
                                   // value={password}
                                   // onChange={handlePasswordChange}
                                   required
                              />
                         </div>
                         <div>
                              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                   Confirm Password
                              </label>
                              <input
                                   type="password"
                                   id="confirmPassword"
                                   name='confirmPassword'
                                   placeholder='Confirm Password'
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   // value={confirmPassword}
                                   // onChange={handleConfirmPasswordChange}
                                   required
                              />
                         </div>
                         <button
                              type="submit"
                              className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                         >
                              Sign Up
                         </button>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGoogleSignUp}
                              className="w-full py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
                         >
                              Sign Up with Google
                         </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGithubSignUp}
                              className="w-full py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800"
                         >
                              Sign Up with GitHub
                         </button>
                    </div>
                    <ToastContainer />
                    <div className="text-center">
                         <p className="text-sm text-gray-700">
                              Already have an account?{' '}
                              <Link to="/login" className="text-blue-500 hover:underline">
                                   Login
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;

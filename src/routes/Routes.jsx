import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Book from "../pages/Book/Book";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home />
               },
               {
                    path: 'login',
                    element: <Login />
               },
               {
                    path: 'signup',
                    element: <SignUp />
               },
               {
                    path: 'book',
                    element: <PrivateRoute>
                         <Book />
                    </PrivateRoute>
               },//assistant marketing officer
          ]
     }

])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Membership from "../pages/Membership/Membership";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: 
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/membership",
                element: <PrivateRoute><Membership></Membership></PrivateRoute>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    }
]);

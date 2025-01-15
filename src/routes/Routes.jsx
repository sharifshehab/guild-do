import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Membership from "../pages/Membership/Membership";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AddPost from "../pages/Dashboard/AddPost/AddPost";

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
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "add-post",
                element: <AddPost></AddPost>
            }
        ]
    }
]);

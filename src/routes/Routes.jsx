import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Membership from "../pages/Membership/Membership";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddPost from "../pages/Dashboard/AddPost/AddPost";
import MyPosts from "../pages/Dashboard/MyPosts/MyPosts";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import PostDetails from "../pages/PostDetails/PostDetails";

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
                path: "post/:postId",
                element: <PostDetails></PostDetails>
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
                path: "add-post",
                element: <AddPost></AddPost>
            },
            {
                path: "my-posts",
                element: <MyPosts></MyPosts>
            },
            {
                path: "my-profile",
                element: <MyProfile></MyProfile>
            }
        ]
    }
]);

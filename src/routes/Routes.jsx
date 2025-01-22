import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddPost from "../pages/Dashboard/AddPost/AddPost";
import MyPosts from "../pages/Dashboard/MyPosts/MyPosts";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import PostDetails from "../pages/PostDetails/PostDetails";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import MakeAnnouncement from "../pages/Dashboard/MakeAnnouncement/MakeAnnouncement";
import PostComments from "../pages/Dashboard/MyPosts/PostComments/PostComments";
import ReportedActivities from "../pages/Dashboard/ReportedActivities/ReportedActivities";
import Payment from "../pages/Dashboard/Payment/Payment";
import Error from "../pages/Error/Error";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import AdminRoute from "./adminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "post/:postId",
                element: <PostDetails></PostDetails>
            }
        ]
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // admin routes
            {
                path: "admin-profile",
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: "manage-users",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "reports",
                element: <AdminRoute><ReportedActivities></ReportedActivities></AdminRoute>
            },
            {
                path: "announcement",
                element: <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>
            },
            /* user routes */
            {
                path: "add-post",
                element: <AddPost></AddPost>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "my-posts",
                element: <MyPosts></MyPosts>
            },
            {
                path: "comments/:postId",
                element: <PostComments></PostComments>
            },
            {
                path: "my-profile",
                element: <MyProfile></MyProfile>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

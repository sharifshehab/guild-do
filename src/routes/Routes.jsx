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
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import AllAnnouncements from "../pages/AllAnnouncements/AllAnnouncements";
import AllMembers from "../pages/AllMembers/AllMembers";
import MyFriends from "../pages/Dashboard/MyFriends/MyFriends";
import CreateGroup from "../pages/Dashboard/CreateGroup/CreateGroup";
import AllGroups from "../pages/AllGroups/AllGroups";
import MyGroups from "../pages/Dashboard/MyGroups/MyGroups";
import GroupRequests from "../pages/Dashboard/MyGroups/GroupRequests/GroupRequests";

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
                element: <PostDetails />
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "announcements",
                element: <AllAnnouncements />
            },
            {
                path: "members",
                element: <PrivateRoute><AllMembers /></PrivateRoute>,
            },
            {
                path: "groups",
                element: <PrivateRoute><AllGroups /></PrivateRoute>,
            },
            {
                path: "contact",
                element: <Contact />
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
                path: "admin-dashboard",
                element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
            },
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
                path: "my-profile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "add-post",
                element: <AddPost></AddPost>
            },
            {
                path: "my-posts",
                element: <MyPosts></MyPosts>
            },
            {
                path: "create-group",
                element: <CreateGroup />
            },
            {
                path: "group-requests",
                element: <GroupRequests />
            },
            {
                path: "my-friends",
                element: <MyFriends />
            },
            {
                path: "my-groups",
                element: <MyGroups />
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "comments/:postId",
                element: <PostComments></PostComments>
            }

        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

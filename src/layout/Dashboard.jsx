import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* dashboard sidebar */}
            <div className="w-full lg:w-64 min-h-screen bg-primaryColor">
                <ul className="menu p-4">

                    {/* admin dashboard */}
                    <li><NavLink to={"/dashboard/user-home"}>Admin Profile</NavLink></li>
                    <li><NavLink to={"/dashboard/manage-users"}>Manage Users</NavLink></li>
                    <li><NavLink to={"/dashboard/user-home"}>Reported Comments</NavLink></li>
                    <li><NavLink to={"/dashboard/user-home"}>Make Announcement
                    </NavLink></li>

                    {/* user dashboard */}
                    <li><NavLink to={"/dashboard/my-profile"}>My Profile</NavLink></li>
                    <li><NavLink to={"/dashboard/add-post"}>Add Post</NavLink></li>
                    <li><NavLink to={"/dashboard/my-posts"}>My Posts</NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="w-full lg:flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
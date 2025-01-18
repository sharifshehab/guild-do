import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* dashboard sidebar */}
            <div className="w-full lg:w-64 min-h-screen bg-yellow-400">
                <ul className="menu">
                    {/* admin dashboard */}
                    <li><NavLink to={"/dashboard/user-home"}>Admin Profile</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/manage-users"}>Manage Users</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/reports"}>Reported Activities</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/announcement"}>Make Announcement
                    </NavLink></li>
                    {/* user dashboard */}
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/my-profile"}>My Profile</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/add-post"}>Add Post</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/my-posts"}>My Posts</NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="w-full lg:flex-1 p-8 bg-secondaryColor min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
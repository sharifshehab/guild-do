import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../API/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            {/* dashboard sidebar */}
            <div className="w-full lg:w-64 bg-yellow-400 min-h-screen">
                <ul className="menu">
                    {isAdmin ?
                        (
                            <>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/admin-profile"}>Admin Profile</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/manage-users"}>Manage Users</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/reports"}>Reported Activities</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/announcement"}>Make Announcement
                                </NavLink></li>
                            </>
                        ) :
                        (
                            <>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/my-profile"}>My Profile</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/add-post"}>Add Post</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-secondaryColor font-semibold rounded-none text-white focus:bg-secondaryColor focus:text-white' : 'hover:bg-white text-darkColor rounded-none'} to={"/dashboard/my-posts"}>My Posts</NavLink></li>
                            </>
                        )
                    }
                </ul>


                <div className="text-center h-full">
                    <Link to={'/'} className="bg-secondaryColor text-yellow-400 block py-3 hover:opacity-95">Home Page</Link>
                </div>
            </div >

            {/* dashboard content */}
            <div div className="w-full lg:flex-1 bg-secondaryColor" >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
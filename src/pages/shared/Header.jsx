import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineNotifications } from "react-icons/md";
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import useAnnouncements from "../../API/useAnnouncements";
import useAdmin from "../../API/useAdmin";

const Header = () => {
    const { user, handleLogOut } = useAuth();
    const [announcements] = useAnnouncements();
    const [isAdmin] = useAdmin();
    
    const menuItems =
        <>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-base text-primaryColor font-semibold' : 'hover:text-yellow-300 text-base text-white font-semibold'} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-base text-primaryColor font-semibold' : 'hover:text-yellow-300 text-base text-white font-semibold'} to='/dashboard/payment'>Membership</NavLink>
            </li>
        </>
    return (
        <header className="bg-secondaryColor">
            <Container>
                <nav className="navbar p-0 items-stretch">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <HiBars3BottomLeft size={25} color="#fff10f" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {menuItems}
                            </ul>
                        </div>
                        <a className="text-xl ">GuildDo</a>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.uid ? (<div className="flex items-center">
                                {/* icon */}
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <MdOutlineNotifications size={23} className="text-yellow-400" />
                                            <span className="badge badge-sm indicator-item">{announcements.length}</span>
                                        </div>
                                    </div>

                                    <div
                                        tabIndex={0}
                                        className="card card-compact dropdown-content bg-yellow-400 rounded-none z-10 mt-2 w-52 shadow">
                                        <div className="card-body space-y-1">
                                            {
                                                announcements?.map(announcement => <span className="text-sm font-semibold text-darkColor border-b border-white pb-1" key={announcement._id}>{announcement.announcementTitle.slice(0, 20)}...</span>)
                                            }
                                            <div className="card-actions self-center">
                                                <a href="#announcements">
                                                    <button className="mt-3 btn rounded-none btn-block bg-secondaryColor text-yellow-400 hover:bg-darkColor duration-500">{announcements.length > 0 ? "See Announcements" : "No Announcements"}</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* profile */}
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt={user?.displayName}
                                                src={user?.photoURL}
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-yellow-400 text-base z-10 mt-2 w-52 p-2 shadow">
                                        <li>
                                            <span className="text-white font-medium rounded-none bg-secondaryColor py-2 hover:bg-secondaryColor">{user?.displayName}</span>
                                        </li>
                                        {
                                            user && isAdmin && <li><NavLink to={"/dashboard/admin-profile"} className={`hover:rounded-none hover:bg-transparent hover:font-semibold`}>Dashboard</NavLink></li>
                                        }

                                        {
                                            user && !isAdmin && <li><NavLink to={"/dashboard/my-profile"} className={`hover:rounded-none hover:bg-transparent hover:font-semibold`}>Dashboard</NavLink></li>
                                        }
                                        <li className="border-t-2 decoration-white"><button onClick={handleLogOut} className="hover:rounded-none hover:bg-transparent hover:font-semibold">Log Out</button></li>
                                    </ul>
                                </div>
                            </div>) :
                                <Link to={"/login"} className="btn bg-primaryColor">Join US</Link>
                        }
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineNotifications } from "react-icons/md";
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import useAnnouncements from "../../API/useAnnouncements";

const Header = () => {
    const { user, handleLogOut } = useAuth();
    const [announcements] = useAnnouncements();

    const menuItems =
        <>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-base text-primaryColor font-semibold' : 'hover:text-yellow-300 text-base text-white font-semibold'} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'text-base text-primaryColor font-semibold' : 'hover:text-yellow-300 text-base text-white font-semibold'} to='/membership'>Membership</NavLink>
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
                                        className="menu menu-sm dropdown-content bg-secondaryColor z-[1] mt-2 w-52 p-2 shadow">
                                        <li>
                                            <span className="text-lg text-primaryColor">{user?.displayName}</span>
                                        </li>
                                        <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                                        <li><button onClick={handleLogOut}>Log Out</button></li>
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
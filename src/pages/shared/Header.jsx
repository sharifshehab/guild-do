import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineNotifications } from "react-icons/md";
import Sticky from 'react-stickynode';
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import useAnnouncements from "../../API/useAnnouncements";
import useAdmin from "../../API/useAdmin";
import logo from "../../assets/images/logo.png";
import Loading from "../../components/Loading";

const Header = () => {
    const { user, handleLogOut } = useAuth();
    const [announcements] = useAnnouncements();
    const [isAdmin, isAdminPending, isAdminLoading] = useAdmin();

    // if (isAdminPending || isAdminLoading) {
    //     return <Loading></Loading>
    // }

    const menuItems = (
      <>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-base text-yellow-400 font-semibold focus:bg-transparent focus:text-yellow-400"
                : "hover:text-yellow-400 text-base text-white font-semibold"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-base text-yellow-400 font-semibold"
                : "hover:text-yellow-400 text-base text-white font-semibold focus:bg-transparent focus:text-yellow-400"
            }
            to="/dashboard/payment"
          >
            Membership
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-base text-yellow-400 font-semibold"
                  : "hover:text-yellow-400 text-base text-white font-semibold focus:bg-transparent focus:text-yellow-400"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-base text-yellow-400 font-semibold"
                : "hover:text-yellow-400 text-base text-white font-semibold focus:bg-transparent focus:text-yellow-400"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </>
    );
    return (
        <Sticky enabled={true} innerZ={20}>
            <header className="bg-secondaryColor border-b border-slate-300">
                <Container>
                    <nav className="navbar p-0">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <HiBars3BottomLeft size={30} color="#facc15" />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-darkColor z-10 mt-3 w-52 p-2 shadow">
                                    {menuItems}
                                </ul>
                            </div>
                            <a className="text-xl"><img src={logo} alt="guildDo website logo" /></a>
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
                                            className="card card-compact dropdown-content bg-yellow-400 rounded-none z-10 mt-3 w-52 shadow">
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
                                            <div className="w-10 rounded-full border-2 border-yellow-400">
                                                <img
                                                    alt={user?.displayName}
                                                    src={user?.photoURL}
                                                    referrerPolicy="no-referrer"
                                                />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-yellow-400 text-base z-10 mt-3 w-52 p-1 shadow space-y-1">
                                            <li className="text-white font-medium rounded-none bg-secondaryColor hover:bg-secondaryColor cursor-not-allowed" style={{ pointerEvents: "none" }}>
                                                <h4 className="block text-center text-base">{user?.displayName}</h4>
                                            </li>
                                            {user && isAdmin &&
                                                <li>
                                                    <NavLink
                                                        to={"/dashboard/admin-profile"}
                                                        className="hover:rounded-none hover:bg-transparent hover:font-semibold"
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                            }
                                            {user && !isAdmin &&
                                                <li>
                                                    <NavLink
                                                        to={"/dashboard/my-profile"}
                                                        className="hover:rounded-none hover:bg-transparent hover:font-semibold"
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                            }
                                            <li className="border-t-2 decoration-white"><button onClick={handleLogOut} className="hover:rounded-none hover:bg-transparent hover:font-semibold">Log Out</button></li>
                                        </ul>
                                    </div>
                                </div>) :
                                    <Link to={"/login"} className="p-3 text-secondaryColor bg-yellow-400 border-l-4 font-medium rounded-none next-cut hover:bg-yellow-500 transition-all duration-300">Join US</Link>
                            }
                        </div>
                    </nav>
                </Container>
            </header>
        </Sticky>
    );
};

export default Header;
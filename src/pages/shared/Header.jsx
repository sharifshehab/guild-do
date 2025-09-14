import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineNotifications } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import Sticky from 'react-stickynode';
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import useAnnouncements from "../../API/useAnnouncements";
import useAdmin from "../../API/useAdmin";
import logo from "../../assets/images/logo.png";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";

const Header = () => {
    const { user, handleLogOut } = useAuth();
    const [isAdmin, isAdminPending, isAdminLoading] = useAdmin();
    const [announcements] = useAnnouncements();
    const [announcementCounts, setAnnouncementCounts] = useState(0);


    useEffect(() => {
        const viewed = localStorage.getItem("viewedAnnouncements");

        if (viewed === "true") {
            setAnnouncementCounts(0);
        } else {
            setAnnouncementCounts(announcements.length);
        }
    }, [announcements]);

    const handleAnnouncementCounts = () => {
        setAnnouncementCounts(0);
        localStorage.setItem("viewedAnnouncements", "true");
    };

    const menuItems = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "active text-base font-semibold"
                            : "not-active hover:text-white text-base text-white font-semibold"
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
                            ? "active text-base font-semibold"
                            : "not-active hover:text-white text-base text-white font-semibold"
                    }
                    to="/about"
                >
                    About
                </NavLink>
            </li>
            {
                !isAdmin &&
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "active text-base font-semibold"
                                : "not-active hover:text-white text-base text-white font-semibold"
                        }
                        to="/dashboard/payment"
                    >
                        Membership
                    </NavLink>
                </li>
            }
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "active text-base font-semibold"
                            : "not-active hover:text-white text-base text-white font-semibold"
                    }
                    to="/announcements"
                >
                    Announcements
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "active text-base font-semibold"
                            : "not-active hover:text-white text-base text-white font-semibold"
                    }
                    to="/members"
                >
                    Community
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "active text-base font-semibold"
                            : "not-active hover:text-white text-base text-white font-semibold"
                    }
                    to="/groups"
                >
                    Groups
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "active text-base font-semibold"
                            : "not-active hover:text-white text-base text-white font-semibold"
                    }
                    to="/contact"
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    if (isAdminLoading || isAdminPending) {
        <Loading />
    }
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
                            <Link to={"/"}><img src={logo} alt="guildDo website logo" /></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="main-menu menu menu-horizontal px-1 space-x-1">
                                {menuItems}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            {
                                user?.uid ? (<div className="flex items-center" onClick={handleAnnouncementCounts}>
                                    {/* icon */}
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <MdOutlineNotifications size={23} className="text-yellow-400" />
                                                <span className="badge badge-sm indicator-item">{announcementCounts}</span>
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
                                                        to={"/dashboard/admin-dashboard"}
                                                        className="hover:rounded-none hover:bg-transparent hover:font-semibold text-secondaryColor"
                                                    >
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                            }
                                            {user && !isAdmin &&
                                                <li>
                                                    <NavLink
                                                        to={"/dashboard/my-profile"}
                                                        className="hover:rounded-none hover:bg-transparent hover:font-semibold text-secondaryColor"
                                                    >
                                                        My Profile
                                                    </NavLink>
                                                </li>
                                            }
                                            <li className="border-t-2 decoration-white"><button onClick={handleLogOut} className="text-base font-semibold pt-2 hover:rounded-none hover:bg-transparent hover:opacity-80 text-secondaryColor ">
                                                <MdLogout size={22} />Log Out

                                            </button></li>
                                        </ul>
                                    </div>
                                </div>) :
                                    <Link to={"/login"} className="px-3 py-2 text-secondaryColor hover:text-slate-600 bg-yellow-400 font-medium rounded-none next-cut border-r-8 border-white hover:border-r-0 hover:border-l-8 transition-all duration-200">Join US</Link>
                            }
                        </div>
                    </nav>
                </Container>
            </header>
        </Sticky>
    );
};

export default Header;
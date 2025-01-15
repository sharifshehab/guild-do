import { HiBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineNotifications } from "react-icons/md";
import Container from "../../components/Container";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const { user, handleLogOut } = useAuth();
    const menuItems =
        <>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'active-menu' : 'hover:text-yellow-300'} to='/membership'>Membership</NavLink>
            </li>

        </>
    return (
        <Container>
            <div className="navbar bg-secondaryColor">
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
                    <a className="btn btn-ghost text-xl">GuildDo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? (<div className="flex-none">
                            {/* icon */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <MdOutlineNotifications size={23} color="#fff10f" />
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
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
                                    className="menu menu-sm dropdown-content bg-secondaryColor z-[1] mt-3 w-52 p-2 shadow">
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
            </div>
        </Container>
    );
};

export default Header;
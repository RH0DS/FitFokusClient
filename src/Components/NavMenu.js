import { Outlet, Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./NavMenu.css";

const NavMenu = ({ isAuthenticated }) => {
  return (
    <>
      <nav>
        <div>
        <ul>
                    <li className="dropdown">
                        <a href="#">Menu</a>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="History">History</Link>
                            <Link to="Profile">Profile</Link>
                            <Link to="RegisterResult">Register result</Link>
                        </div>
                    </li>
        </ul>
        </div>
        <div className="login-button-container">
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default NavMenu;

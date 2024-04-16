import { Outlet, Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "../NavMenu.css";

const NavMenu = ({ isAuthenticated }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="History">History</Link>
          </li>
          <li>
            <Link to="Profile">Profile</Link>
          </li>
          <li>
            <Link to="RegisterResult">Register result</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="login-button-container">
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default NavMenu;

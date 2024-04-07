import { Outlet, Link } from "react-router-dom";
import LoginButton from "./LoginButton";



const NavMenu = () => {
  return (
    <>
      <nav>
        <LoginButton/>

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
            <Link to="/contact">Contact ska visa no page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavMenu;
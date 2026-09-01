import React from "react";
import { NavLink, Link } from "react-router";

const NavMenu = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/application">
            Application
          </NavLink>
        </li>

        {/* <li><Link className="link" to =""></Link></li> */}
      </ul>
    </nav>
  );
};

export default NavMenu;

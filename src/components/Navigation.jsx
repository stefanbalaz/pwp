import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="activeLink">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="activeLink">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className="activeLink">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/career" className="activeLink">
            Career
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="activeLink">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="activeLink">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

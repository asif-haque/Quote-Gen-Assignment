import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[60px] bg-neutral-100 backdrop-blur-xl flex items-center px-10">
      <ul className="flex gap-10 ml-auto">
        <li>
          <NavLink to="/">Generate</NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks">Bookmarks</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

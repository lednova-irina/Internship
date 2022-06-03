import { Link, Outlet } from "react-router-dom";
import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="navLink" to="/add-wish">Add wish</Link>
        </div>
        <div>
          <Link className="navLink" to="/wish-list">Wish list</Link>
        </div>
        <div>
          <Link className="navLink" to="/archive">Archive</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

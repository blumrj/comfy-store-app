import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="bg-base-100 py-2">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex gap-x-6">
          <NavLink to="/login" className="link link-hover text-xs sm:text-sm">
            Sign In / Guest
          </NavLink>
          <NavLink to="/register" className="link link-hover text-xs sm:text-sm">Create Account</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

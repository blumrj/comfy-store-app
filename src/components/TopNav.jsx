import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

const TopNav = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("user");
  };

  return (
    <nav className="bg-base-100 py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-6">
            <p>{user?.username ? `Hello, ${user.username}` : "Hello"}</p>
            <button
              className="btn btn-neutral btn-sm text-xs"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6">
            <NavLink to="/login" className="link link-hover text-xs sm:text-sm">
              Sign In / Guest
            </NavLink>
            <NavLink
              to="/register"
              className="link link-hover text-xs sm:text-sm"
            >
              Create Account
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;

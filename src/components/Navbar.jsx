import React from "react";
import { routes } from "../routes";
import Navlink from "./Navlink";
import { BsCart3} from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  //getting the first route object to render in the main navbar
  const navLinks = routes[0].children;

  return (
    <nav className=" bg-base-200 shadow-sm">
      <div className="navbar align-element">
        <div className="navbar-start ">
          {/* logo */}
          <a className="hidden lg:flex btn btn-primary text-3xl items-center ">
            C
          </a>
          {/* this is a dropdown for responsive layout */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* burger icon */}
              <FaBarsStaggered className="h-6 w-6" />
            </div>
            {/* nav links to display in responsive layout */}
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Navlink {...link} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Navlink {...link} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeToggle />
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

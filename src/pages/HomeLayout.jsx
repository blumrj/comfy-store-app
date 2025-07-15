import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";

const HomeLayout = () => {
  return (
    <div>
      <TopNav/>
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;

import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="relative">
      {/* loading bar */}
      {state === "loading" && (
        <span className="loading loading-ring loading-xl fixed top-4 right-4 z-50"></span>
      )}
      <TopNav />
      <Navbar />

      <section className="align-element py-20 ">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;

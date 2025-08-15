import React, { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";

const HomeLayout = () => {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  //overflow hidden should be added to prevent scrolling when the content is loading. we have to add this class programmatically so we have to use useeffect when the state changes
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isLoading]);


  return (
    <div className="relative">
      {/* loading bar */}
      {isLoading && (
        <>
          <div className="bg-primary absolute top-0 bottom-0 w-[100vw] min-h-screen z-30 opacity-30"></div>
          <span className="loading loading-ring loading-xl fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50"></span>
        </>
      )}
      <TopNav />
      <Navbar />

      <section className="container mx-auto py-20 px-4">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;

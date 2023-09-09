import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import HeaderAlert from "../Components/Navbar/HeaderAlert";

function Home() {
  return (
    <div>
      <HeaderAlert />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;

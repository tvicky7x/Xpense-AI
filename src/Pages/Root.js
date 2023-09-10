import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SecondNav from "../Components/Navbar/SecondNav";

function Home() {
  return (
    <div>
      <Navbar />
      <SecondNav />
      <Outlet />
    </div>
  );
}

export default Home;

import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Outlet />
    </div>
  );
}

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";

function SecondNavItem({ title, icon = "", div, path = "" }) {
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive
            ? "flex flex-col sm:flex-row items-center text-lime-500"
            : "flex flex-col sm:flex-row items-center text-lime-500";
        }}
      >
        <span class="material-symbols-outlined">{icon}</span>
        <h2 className=" -mt-1 newFont ms-0.5 font-semibold">{title}</h2>
      </NavLink>
      {div && <div className=" px-[1.3px] bg-lime-200"></div>}
    </>
  );
}

export default SecondNavItem;

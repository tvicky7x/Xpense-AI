import React from "react";
import { NavLink } from "react-router-dom";

function SecondNavItem({ title, icon = "", div, path = "" }) {
  const style = "flex flex-col sm:flex-row items-center text-sm sm:text-lg ";
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive
            ? style + " text-lime-500"
            : style + " text-slate-400";
        }}
      >
        <span className="material-symbols-outlined text-sm sm:text-xl">
          {icon}
        </span>
        <h2 className=" -mt-1 sm:-mt-0 newFont ms-0.5 font-semibold">
          {title}
        </h2>
      </NavLink>
      {div && <div className=" min-w-[3px] bg-slate-200 rounded"></div>}
    </>
  );
}

export default SecondNavItem;

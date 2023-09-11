import React from "react";
import { NavLink } from "react-router-dom";

function SecondNavItem({ title, icon = "", div, path = "" }) {
  const style = "flex items-center sm:text-lg";
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
        <h2 className="newFont ms-1 font-semibold">{title}</h2>
      </NavLink>
      {div && <div className=" min-w-[3px] bg-slate-200 rounded"></div>}
    </>
  );
}

export default SecondNavItem;

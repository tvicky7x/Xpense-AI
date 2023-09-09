import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Context from "../../Context/Context";

function Navbar() {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-lime-500 py-2 px-3 sm:py-3">
        <div className=" max-w-3xl mx-auto flex justify-end items-center">
          <NavLink to={"/"} className="me-auto">
            <h1
              className=" font-semibold text-2xl sm:text-3xl text-lime-50"
              style={{ fontFamily: "'Cabin', sans-serif" }}
            >
              Xpense AI{" "}
            </h1>
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => {
              return isActive
                ? " flex text-lime-100"
                : " flex text-lime-200 hover:text-lime-100";
            }}
          >
            <span className="material-symbols-outlined sm:text-3xl">
              account_circle
            </span>
          </NavLink>
          <button
            className=" font-medium bg-lime-200 py-0.5 px-2 sm:py-1 sm:px-3 rounded text-lime-600 ms-2 hover:bg-lime-100"
            onClick={() => {
              navigate("/");
              ctx.LogOutHandler();
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

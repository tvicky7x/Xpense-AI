import React from "react";

function HeaderTitle({ icon = "", title }) {
  return (
    <div className="text-lime-500 mb-2 sm:text-2xl text-lg font-semibold flex justify-center items-center space-x-1">
      <h2 style={{ fontFamily: "'Cabin', sans-serif" }}>{title}</h2>
      <span className="material-symbols-outlined sm:text-3xl text-2xl">
        {icon}
      </span>
    </div>
  );
}

export default HeaderTitle;

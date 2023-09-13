import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Empty() {
  const location = useLocation();
  const showExpense = useSelector((states) => states.analysis.showExpense);

  if (location.pathname === "/analysis") {
    return (
      <div className=" bg-lime-100 mt-4 rounded h-40 p-2 flex flex-col justify-center items-center text-sm text-lime-800 sm:text-base">
        <span className="material-symbols-outlined">quick_reference</span>
        <p className=" text-center">
          No {showExpense ? "expense" : "income"} in this month. Tap{" "}
          <span className=" font-black">+</span> to add new{" "}
          {showExpense ? "expense" : "income"}.
        </p>
      </div>
    );
  }

  return (
    <div className=" bg-lime-100 mt-4 rounded h-40 p-2 flex flex-col justify-center items-center text-sm text-lime-800 sm:text-base">
      <span className="material-symbols-outlined">quick_reference</span>
      <p className=" text-center">
        No record in this month. Tap <span className=" font-black">+</span> to
        add new expense or income.
      </p>
    </div>
  );
}

export default Empty;

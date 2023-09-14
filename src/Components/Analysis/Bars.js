import React from "react";
import { useSelector } from "react-redux";

function Bars({ category, data }) {
  const showExpense = useSelector((states) => states.analysis.showExpense);

  return (
    <li className="py-3">
      <div className="text-slate-500 font-medium sm:text-lg flex newFont justify-between items-center">
        <span class="material-symbols-outlined text-lime-500">
          {category[0].HTMLname}
        </span>
        <div className=" w-full me-2 ms-1">
          <div className="flex justify-between px-1">
            <p className="newFont ">{data.title}</p>
            <p className={showExpense ? "text-red-500" : "text-green-600"}>
              {`₹${data.value}`}
            </p>
          </div>
          <div className=" h-3 rounded border overflow-hidden border-slate-200">
            <div
              className=" h-full rounded-s bg-lime-500"
              style={{
                width: `${data.percentage}%`,
              }}
            ></div>
          </div>
        </div>
        <p className=" text-slate-600">{`${data.percentage}%`}</p>
      </div>
    </li>
  );
}

export default Bars;

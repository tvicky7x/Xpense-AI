import React from "react";

function PieLabel({ data }) {
  return (
    <li className="py-0.5 sm:py-2 flex items-center">
      <div
        className=" w-3 h-3 rounded sm:w-5 sm:h-5 "
        style={{ backgroundColor: `${data.color}` }}
      ></div>
      <p className="font-medium text-sm text-slate-600 sm:text-lg ms-2">
        {data.title}
      </p>
    </li>
  );
}

export default PieLabel;

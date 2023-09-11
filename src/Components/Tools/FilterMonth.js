import React, { useContext } from "react";
import Context from "../../Context/Context";

function FilterMonth() {
  const ctx = useContext(Context);
  return (
    <>
      <div className=" flex justify-center items-center text-slate-400">
        <button className="flex hover:text-lime-500">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              ctx.changeCurrent(-1, "month");
            }}
          >
            arrow_back_ios_new
          </span>
        </button>
        <p className=" mx-3 text-lg newFont text-slate-500 w-36 text-center">
          {ctx.current.month}, {ctx.current.year}
        </p>
        <button className="flex hover:text-lime-500">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              ctx.changeCurrent(1, "month");
            }}
          >
            arrow_forward_ios
          </span>
        </button>
      </div>
    </>
  );
}

export default FilterMonth;

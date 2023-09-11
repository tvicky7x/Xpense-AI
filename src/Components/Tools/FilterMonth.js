import React, { useContext } from "react";
import Context from "../../Context/Context";

function FilterMonth() {
  const ctx = useContext(Context);
  return (
    <>
      <div className="pb-2 border-b-2 border-slate-400">
        <div className=" flex justify-center items-center text-slate-400 relative">
          <div className="flex items-center">
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
            <p className="sm:text-lg newFont text-slate-500 sm:w-40 w-32 text-center">
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
          <button
            className="flex items-center -ms-5 absolute right-0"
            onClick={() => {
              ctx.changeCurrent(null, "reset");
            }}
          >
            <span className="material-symbols-outlined hover:text-lime-500">
              cached
            </span>
          </button>
        </div>
        <div className=" flex justify-around items-center mt-2 newFont text-slate-600 sm:text-lg">
          <div className=" flex flex-col items-center">
            <p>Expense</p>
            <p className=" text-red-500">
              ₹{ctx.currentExpenseBalance.expenseBalance}
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <p>Income</p>
            <p className=" text-green-600">
              ₹{ctx.currentExpenseBalance.incomeBalance}
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <p>Total</p>
            <p
              className={
                Number(ctx.currentExpenseBalance.totalBalance) >= 0
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              {Number(ctx.currentExpenseBalance.totalBalance) >= 0
                ? `₹${ctx.currentExpenseBalance.totalBalance}`
                : `-₹${ctx.currentExpenseBalance.totalBalance
                    .toString()
                    .slice(1)}`}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="min-h-[1.5px] bg-slate-400"></div> */}
    </>
  );
}

export default FilterMonth;

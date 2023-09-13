import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseAction } from "../../Store/expenseSlice";

function FilterMonth() {
  // Redux
  const dispatch = useDispatch();
  const current = useSelector((states) => states.expense.current);
  const currentExpenseBalance = useSelector(
    (states) => states.expense.currentExpenseBalance
  );

  return (
    <>
      <div className="pb-2 border-b-2 border-slate-400">
        <div className=" flex justify-center items-center text-slate-400 relative">
          <div className="flex items-center">
            <button className="flex hover:text-lime-500 ">
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  dispatch(
                    expenseAction.changeCurrent({ type: "change", value: -1 })
                  );
                }}
              >
                arrow_back_ios_new
              </span>
            </button>
            <p className="sm:text-lg newFont text-slate-500 sm:w-40 w-32 text-center">
              {current.month}, {current.year}
            </p>
            <button className="flex hover:text-lime-500">
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  dispatch(
                    expenseAction.changeCurrent({ type: "change", value: 1 })
                  );
                }}
              >
                arrow_forward_ios
              </span>
            </button>
          </div>
          <button
            className="flex items-center -ms-5 absolute right-0 hover:text-lime-500 hover:rotate-45 duration-500"
            onClick={() => {
              dispatch(expenseAction.changeCurrent({ type: "reset" }));
            }}
          >
            <span className="material-symbols-outlined">cached</span>
          </button>
        </div>
        <div className=" flex justify-around items-center mt-2  text-slate-600 sm:text-lg font-medium">
          <div className=" flex flex-col items-center">
            <p className="newFont">Expense</p>
            <p className=" text-red-500">
              ₹{currentExpenseBalance.expenseBalance}
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <p className="newFont">Income</p>
            <p className=" text-green-600">
              ₹{currentExpenseBalance.incomeBalance}
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <p className="newFont">Total</p>
            <p
              className={
                Number(currentExpenseBalance.totalBalance) >= 0
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              {Number(currentExpenseBalance.totalBalance) >= 0
                ? `₹${currentExpenseBalance.totalBalance}`
                : `-₹${currentExpenseBalance.totalBalance.toString().slice(1)}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterMonth;

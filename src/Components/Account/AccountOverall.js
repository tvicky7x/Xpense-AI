import React from "react";
import Container from "../Containers/Container";
import NormalCard from "../Containers/NormalCard";
import { useSelector } from "react-redux";

function AccountOverall() {
  const allExpenseBalance = useSelector(
    (states) => states.expense.allExpenseBalance
  );
  return (
    <>
      <Container>
        <NormalCard>
          <h2 className="text-slate-500 mb-1 sm:text-2xl text-lg font-semibold text-center newFont">
            Overall
          </h2>
          <div className=" text-slate-600 font-medium text-sm sm:text-base">
            <div className="flex justify-evenly">
              <div className="text-center py-3">
                <p className="newFont">EXPENSE SO FAR</p>
                <p className=" text-red-500">
                  {`₹${allExpenseBalance.expenseBalance}`}
                </p>
              </div>
              <div className="w-[2.5px] sm:w-[2.4px] bg-slate-300 rounded-t"></div>
              <div className="text-center py-3">
                <p className="newFont">INCOME SO FAR</p>
                <p className=" text-green-600">
                  {`₹${allExpenseBalance.incomeBalance}`}
                </p>
              </div>
            </div>
            <div className=" h-[2px] bg-slate-300 w-[80%] mx-auto rounded"></div>
            <div className="text-center py-3">
              <p className="newFont">TOTAL BALANCE</p>
              <p
                className={
                  Number(allExpenseBalance.totalBalance) >= 0
                    ? "text-green-600"
                    : "text-red-500"
                }
              >
                {Number(allExpenseBalance.totalBalance) >= 0
                  ? `₹${allExpenseBalance.totalBalance}`
                  : `-₹${allExpenseBalance.totalBalance.toString().slice(1)}`}
              </p>
            </div>
          </div>
        </NormalCard>
      </Container>
    </>
  );
}

export default AccountOverall;

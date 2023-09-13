import React from "react";
import { useSelector } from "react-redux";
import Bars from "./Bars";

function BarProgress({ data }) {
  const showExpense = useSelector((states) => states.analysis.showExpense);
  const expenseCategories = useSelector(
    (states) => states.addModal.expenseCategories
  );
  const incomeCategories = useSelector(
    (states) => states.addModal.incomeCategories
  );
  return (
    <div className="">
      <ul className=" divide-y divide-slate-300">
        {data.map((item) => {
          return (
            <Bars
              data={item}
              category={
                showExpense
                  ? expenseCategories.filter((category) => {
                      return category.name === item.title;
                    })
                  : incomeCategories.filter((category) => {
                      return category.name === item.title;
                    })
              }
            />
          );
        })}
      </ul>
    </div>
  );
}

export default BarProgress;

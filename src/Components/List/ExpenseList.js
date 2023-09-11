import React, { useContext } from "react";
import Context from "../../Context/Context";
import DateList from "./DateList";
import Empty from "./Empty";

function ExpenseList() {
  const ctx = useContext(Context);
  const set = new Set();
  ctx.currentExpenseList.forEach((item) => {
    set.add(item.date);
  });
  const dateArray = Array.from(set);

  return (
    <>
      {dateArray.length === 0 && <Empty />}
      {dateArray.map((date) => {
        return (
          <DateList
            date={date}
            key={date}
            list={ctx.currentExpenseList.filter((item) => {
              return new Date(item.date).getDate() === new Date(date).getDate();
            })}
          />
        );
      })}
    </>
  );
}

export default ExpenseList;

import React from "react";
import ListItem from "./ListItem";

function DateList({ date, list }) {
  return (
    <>
      <div className=" border-b-2 px-1 sm:px-2 pb-1 text-slate-500 mt-1.5 border-slate-300 newFont sm:text-lg">
        <p>{`${new Date(date).toLocaleDateString(undefined, {
          weekday: "long",
          month: "short",
          day: "numeric",
        })}`}</p>
      </div>
      <ul className=" divide-y divide-slate-200">
        {list.map((expense) => {
          return <ListItem expense={expense} key={expense.id} />;
        })}
      </ul>
    </>
  );
}

export default DateList;

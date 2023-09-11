import React, { useContext } from "react";
import Context from "../../Context/Context";

function ListItem({ expense }) {
  const ctx = useContext(Context);
  return (
    <>
      <li
        className="flex items-center py-2 px-3 sm:px-4 text-slate-600 hover:bg-lime-100 sm:text-lg"
        onClick={() => {
          ctx.editingAddModal(expense);
        }}
      >
        <span className="material-symbols-outlined text-lime-500">
          {expense.category.HTMLname}
        </span>
        <p className="font-medium ms-1">{expense.category.name}</p>
        <p
          className={
            expense.type
              ? "ms-auto font-semibold text-red-500"
              : "ms-auto font-semibold text-green-600"
          }
        >{`₹${expense.amount}`}</p>
      </li>
    </>
  );
}

export default ListItem;

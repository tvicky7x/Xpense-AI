import React from "react";
import { useDispatch } from "react-redux";
import { addModalAction } from "../../Store/addModalSlice";

function DropItem({ category, changeDefault }) {
  // redux
  const dispatch = useDispatch();
  return (
    <li
      className="px-1  font-medium py-2 hover:bg-lime-300 flex items-center justify-start space-x-1"
      onClick={() => {
        dispatch(addModalAction.changeCategory({ category }));
      }}
    >
      <span className="material-symbols-outlined">{category.HTMLname}</span>
      <p>{category.name}</p>
    </li>
  );
}

export default DropItem;

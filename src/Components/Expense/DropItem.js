import React from "react";

function DropItem({ data, changeDefault }) {
  return (
    <li
      className="px-1  font-medium py-2 hover:bg-lime-300 flex items-center justify-start space-x-1"
      onClick={() => {
        changeDefault(data);
      }}
    >
      <span className="material-symbols-outlined">{data.HTMLname}</span>
      <p>{data.name}</p>
    </li>
  );
}

export default DropItem;

import React from "react";

function ButtonPrimary({ type = "button", className, onClick = () => {}, children }) {
  const classStyle =
    " bg-lime-400 py-1.5 px-4 rounded hover:bg-lime-500 font-semibold text-lime-950 " +
    className;
  return (
    <button type={type} className={classStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonPrimary;

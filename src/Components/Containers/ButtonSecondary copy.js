import React from "react";

function ButtonSecondary({
  type = "",
  className,
  onClick = () => {},
  children,
}) {
  const classStyle =
    " py-1.5 px-4 rounded font-semibold bg-slate-300 text-slate-600 hover:bg-lime-200 hover:text-lime-700" +
    className;
  return (
    <button type={type} className={classStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonSecondary;

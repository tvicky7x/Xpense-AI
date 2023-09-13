import React from "react";

function ButtonSecondary({
  type = "button",
  className = "",
  onClick = () => {},
  children,
}) {
  const classStyle = " py-1.5 px-4 rounded font-semibold " + className;
  return (
    <button type={type} className={classStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonSecondary;

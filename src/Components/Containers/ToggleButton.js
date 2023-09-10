import React from "react";

function ToggleButton({
  type = "",
  className,
  onClick = () => {},
  children,
  isActive,
}) {
  const classStyle = " py-1.5 px-4 rounded font-semibold " + className;
  return (
    <button
      type={type}
      className={
        isActive
          ? classStyle + " text-lime-500 bg-lime-100"
          : classStyle + "  text-slate-400 hover:bg-slate-100"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ToggleButton;

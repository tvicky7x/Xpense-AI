import React from "react";

function PulseButton({ onClick = () => {}, className = "" }) {
  const classStyle =
    "bg-lime-500 rounded-full w-16 h-16 drop-shadow-lg " + className;
  return (
    <button onClick={onClick} className={classStyle}>
      <span className=" absolute -translate-x-1/2 -translate-y-1/2 material-symbols-outlined text-5xl text-lime-50">
        add
      </span>
    </button>
  );
}

export default PulseButton;

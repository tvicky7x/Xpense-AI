import React from "react";

function Modal({ children, onClick = () => {} }) {
  return (
    <>
      <div
        className=" bg-lime-950 opacity-40 fixed w-full h-full z-[100]"
        onClick={onClick}
      ></div>
      <div className=" z-[101] fixed start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
        {children}
      </div>
    </>
  );
}

export default Modal;

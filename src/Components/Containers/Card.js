import React from "react";

function Card({ children }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className=" bg-white mx-3 drop-shadow-lg rounded p-4"
        style={{ width: "400px" }}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;

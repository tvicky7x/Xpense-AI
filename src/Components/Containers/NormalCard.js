import React from "react";

function NormalCard({ children }) {
  return (
    <div className=" bg-white rounded p-3 sm:p-4 border mx-auto">
      {children}
    </div>
  );
}

export default NormalCard;

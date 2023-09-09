import React from "react";

function NormalCard({ children }) {
  return (
    <div className=" bg-white rounded p-4 border max-w-2xl mx-auto">
      {children}
    </div>
  );
}

export default NormalCard;

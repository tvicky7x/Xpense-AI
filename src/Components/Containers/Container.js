import React from "react";

function Container({ children }) {
  return (
    <div className="mt-4 px-3 sm:mt-6">
      <div className=" max-w-3xl mx-auto">{children}</div>
    </div>
  );
}

export default Container;

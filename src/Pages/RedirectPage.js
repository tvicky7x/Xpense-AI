import React, { useContext } from "react";
import Context from "../Context/Context";
import { Navigate } from "react-router-dom";

function RedirectPage({ children }) {
  const ctx = useContext(Context);
  if (ctx.token) {
    return <Navigate to={"/"} />;
  }
  return <div>{children}</div>;
}

export default RedirectPage;

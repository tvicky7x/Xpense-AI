import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../Context/Context";

function ProtectPage({ children }) {
  const ctx = useContext(Context);
  if (!ctx.token) {
    return <Navigate to={"/auth"} />;
  } else if (!ctx.userInfo.emailVerified) {
    return <Navigate to={"/verify"} />;
  }
  return <div>{children}</div>;
}

export default ProtectPage;

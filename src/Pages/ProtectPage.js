import React, { useContext } from "react";
import Context from "../Context/Context";
import LoginForm from "../Components/Auth/LoginForm";
import VerifyForm from "../Components/Auth/VerifyForm";

function ProtectPage({ children }) {
  const ctx = useContext(Context);
  if (!ctx.token) {
    return <LoginForm />;
  } else if (!ctx.userInfo.emailVerified) {
    return <VerifyForm />;
  }
  return <div>{children}</div>;
}

export default ProtectPage;

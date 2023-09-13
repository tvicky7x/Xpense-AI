import React, { useContext } from "react";
import Context from "../Context/Context";
import LoginForm from "../Components/Auth/LoginForm";
import VerifyForm from "../Components/Auth/VerifyForm";
import { useSelector } from "react-redux";

function ProtectPage({ children }) {
  // Redux
  const token = useSelector((states) => states.auth.token);
  const userInfo = useSelector((states) => states.auth.userInfo);

  if (!token) {
    return <LoginForm />;
  } else if (!userInfo.emailVerified) {
    return <VerifyForm />;
  }
  return <div>{children}</div>;
}

export default ProtectPage;

import React, { useContext, useState } from "react";
import Card from "../Containers/Card";
import Context from "../../Context/Context";
import ButtonPrimary from "../Containers/ButtonPrimary";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VerifyForm() {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  // useState
  const [isVerifying, setVerifying] = useState(true);

  // verify handler
  async function verifyEmail() {
    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
        { requestType: "VERIFY_EMAIL", idToken: ctx.token }
      );
      setVerifying(false);
    } catch (error) {
      alert("Verification Error");
    }
  }

  // check verification
  async function checkVerification() {
    ctx.getUserInfo(ctx.token);
  }
  return (
    <>
      <Card>
        <h2
          className=" text-lime-500 font-semibold text-2xl text-center mb-3"
          style={{ fontFamily: "'Cabin', sans-serif" }}
        >
          Verify Email
        </h2>
        {isVerifying ? (
          <p className=" text-slate-600">
            We'll send you a verification link via email. To verify, click here.
          </p>
        ) : (
          <>
            <p className=" text-slate-600">
              A verification link has been sent to{" "}
              <span className=" text-lime-600 font-medium">
                {ctx.userInfo.email}
              </span>
              . Please check your email.
            </p>
            <p className=" text-slate-600 mt-2">
              Click here if verification is complete.
            </p>
          </>
        )}
        {isVerifying ? (
          <div className=" flex justify-between items-center mt-2">
            <p>
              Email -{" "}
              <span className=" text-lime-600 font-medium">
                {ctx.userInfo.email}
              </span>
            </p>
            <ButtonPrimary onClick={verifyEmail}>Verify</ButtonPrimary>
          </div>
        ) : (
          <div className=" text-center mt-4">
            <ButtonPrimary onClick={checkVerification}>
              Verification Done
            </ButtonPrimary>
          </div>
        )}
      </Card>
    </>
  );
}

export default VerifyForm;

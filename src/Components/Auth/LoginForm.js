import React, { useRef } from "react";
import Card from "../Containers/Card";
import axios from "axios";
import ButtonPrimary from "../Containers/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { logInHandler } from "../../Store/authAction";
import { authAction } from "../../Store/authSlice";

function LoginForm() {
  //  Redux
  const dispatch = useDispatch();
  const isLogging = useSelector((states) => states.auth.isLogging);
  const isForgot = useSelector((states) => states.auth.isForgot);

  // Ref
  const inputRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  // functions
  function alternateMode() {
    dispatch(authAction.alternateLogging());
  }

  function forgotMode() {
    dispatch(authAction.alternateForgot());
  }

  async function authHandler(e) {
    e.preventDefault();
    const email = inputRef.current.value;
    const password = passwordRef.current.value;
    if (isLogging) {
      try {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
          { email: email, password: password, returnSecureToken: true }
        );
        dispatch(logInHandler(response.data.idToken));
        e.target.reset();
      } catch (error) {
        alert("Authentication Error!");
      }
    } else {
      const confirm = confirmRef.current.value;
      if (password === confirm) {
        try {
          await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
            { email: email, password: password, returnSecureToken: false }
          );
          alternateMode();
          e.target.reset();
        } catch (error) {
          alert("Sign Up Error!");
        }
      } else {
        alert("Incorrect Confirm Password!");
      }
    }
  }

  async function forgotPasswordHandler(e) {
    e.preventDefault();
    const email = inputRef.current.value;
    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
        { requestType: "PASSWORD_RESET", email: email }
      );
      forgotMode();
      e.target.reset();
    } catch (error) {
      alert(error.massage);
    }
  }

  return (
    <>
      {!isForgot && (
        <Card>
          <h2
            className=" newFont text-lime-500 font-semibold text-2xl text-center"
            style={{ fontFamily: "'Cabin', sans-serif" }}
          >
            {isLogging ? "Log In" : "Sign Up"}
          </h2>
          <div className=" my-3 text-slate-800">
            <form action="" onSubmit={authHandler}>
              <div className=" space-y-1 mb-1">
                <label htmlFor="" className=" text-lg">
                  Email
                </label>
                <input
                  type="text"
                  style={{ outline: "none" }}
                  required
                  ref={inputRef}
                  className=" w-full border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                />
              </div>
              <div className=" space-y-1 mb-1">
                <label htmlFor="" className=" text-lg">
                  Password
                </label>
                <input
                  type="password"
                  style={{ outline: "none" }}
                  required
                  minLength={6}
                  ref={passwordRef}
                  className=" w-full border rounded border-lime-300 h-9 p-2  focus:ring-2 focus:ring-lime-400 focus:border-0"
                />
              </div>
              {!isLogging && (
                <div className=" space-y-1 mb-1">
                  <label htmlFor="" className=" text-lg">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    style={{ outline: "none" }}
                    required
                    minLength={6}
                    ref={confirmRef}
                    className=" w-full border rounded border-lime-300 h-9 p-2  focus:ring-2 focus:ring-lime-400 focus:border-0"
                  />
                </div>
              )}

              <div className=" mt-5">
                <ButtonPrimary type="submit" className="w-full">
                  {isLogging ? "Log In" : "Sign Up"}
                </ButtonPrimary>
              </div>
            </form>
            {isLogging && (
              <div className=" text-center text-lime-900 hover:text-lime-700 font-medium">
                <button className=" p-1" onClick={forgotMode}>
                  Forgot password?
                </button>
              </div>
            )}
          </div>
          <button
            className=" text-center w-full p-2 bg-lime-200 hover:bg-lime-300 rounded"
            onClick={alternateMode}
          >
            {isLogging
              ? "Don't have an account? Sign up"
              : "Have an account? Log In"}
          </button>
        </Card>
      )}

      {isForgot && (
        <Card>
          <h2 className=" newFont text-lime-500 font-semibold text-2xl text-center">
            Forgot Password
          </h2>

          <div className=" my-3 text-slate-800">
            <p className=" text-slate-600 mb-1">
              Password reset emails will be sent to your provided email address.{" "}
            </p>
            <form action="" onSubmit={forgotPasswordHandler}>
              <div className=" space-y-1 mb-1">
                <label htmlFor="" className=" text-lg">
                  Email
                </label>
                <input
                  type="text"
                  style={{ outline: "none" }}
                  required
                  ref={inputRef}
                  className=" w-full border rounded border-lime-300 h-9 p-2  focus:ring-2 focus:ring-lime-400 focus:border-0"
                />
              </div>
              <div className=" mt-5">
                <ButtonPrimary type="submit" className="w-full">
                  Reset Password
                </ButtonPrimary>
              </div>
            </form>
            <div className=" text-center text-lime-900 hover:text-lime-700 font-medium">
              <button className=" p-1" onClick={forgotMode}>
                Back
              </button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}

export default LoginForm;

import React, { useState } from "react";
import Card from "../Containers/Card";

function LoginForm() {
  const [isLogging, setLogging] = useState(true);
  function alternateMode() {
    setLogging(!isLogging);
  }

  return (
    <>
      <Card>
        <h2 className=" text-lime-950 font-semibold text-2xl text-center">
          {isLogging ? "Log In" : "Sign Up"}
        </h2>
        <div className=" my-4">
          <form action="">
            <div className=" space-y-1 mb-1">
              <label htmlFor="" className=" text-lg">
                Email
              </label>
              <input
                type="text"
                style={{ outline: "none" }}
                required
                className=" w-full border rounded border-lime-300 h-9 p-2 text-lime-900 focus:ring-2 focus:ring-lime-400 focus:border-0"
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
                min={6}
                className=" w-full border rounded border-lime-300 h-9 p-2 text-lime-900 focus:ring-2 focus:ring-lime-400 focus:border-0"
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
                  min={6}
                  className=" w-full border rounded border-lime-300 h-9 p-2 text-lime-900 focus:ring-2 focus:ring-lime-400 focus:border-0"
                />
              </div>
            )}

            <div className=" mt-5">
              <button
                type="submit"
                className=" bg-lime-500 w-full p-1.5 rounded hover:bg-lime-600 font-semibold text-lime-950"
              >
                {isLogging ? "Log In" : "Sign Up"}
              </button>
            </div>
          </form>
          {isLogging && (
            <div className=" text-center text-lime-900 hover:text-lime-700 font-medium">
              <button className=" p-1">Forgot password?</button>
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
    </>
  );
}

export default LoginForm;

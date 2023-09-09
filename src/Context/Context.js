import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";

const Context = createContext({
  token: null,
  LoginHandler: (id) => {},
  userInfo: {
    email: null,
    name: null,
    emailVerified: null,
    photoUrl: null,
  },
  getUserInfo: (id) => {},
  LogOutHandler: () => {},
});

export function ContextProvider({ children }) {
  // states
  const [token, setToken] = useState(null);
  const [userInfo, setInfo] = useState({
    email: null,
    name: null,
    emailVerified: null,
    photoUrl: null,
  });

  // Get UserInfo
  const getUserInfo = useCallback(async (id) => {
    const response = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
      { idToken: id }
    );
    const data = response.data.users[0];
    setInfo((oldInfo) => {
      if (data.displayName) {
        return {
          emailVerified: data.emailVerified,
          email: data.email,
          name: data.displayName,
          photoUrl: data.photoUrl,
        };
      }
      return {
        ...oldInfo,
        emailVerified: data.emailVerified,
        email: data.email,
      };
    });
    setToken(id);
  }, []);

  // Login Function
  function LoginHandler(id) {
    localStorage.setItem("token", id);
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 1000 * 60 * 5);
    getUserInfo(id);
  }

  // LogOut Function
  function LogOutHandler() {
    localStorage.removeItem("token");
    setInfo({
      email: null,
      name: null,
      emailVerified: null,
      photoUrl: null,
    });
    setToken(null);
  }

  // useEffect;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const id = localStorage.getItem("token");
      getUserInfo(id);
    }
  }, [getUserInfo]);

  return (
    <Context.Provider
      value={{
        token: token,
        LoginHandler: LoginHandler,
        userInfo: userInfo,
        getUserInfo: getUserInfo,
        LogOutHandler: LogOutHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;

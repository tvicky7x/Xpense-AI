import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { categoriesExpense, categoriesIncome } from "./Categories";

const Context = createContext({
  token: null,
  LoginHandler: (id) => {},
  userInfo: {
    email: null,
    networkEmail: null,
    name: null,
    emailVerified: null,
    photoUrl: null,
    uniqueId: null,
  },
  fireBaseUrl: "",
  getUserInfo: (id) => {},
  LogOutHandler: () => {},
  expenseCategories: [],
  incomeCategories: [],
  allExpenseList: [],
  getExpenseList: () => {},
  addingExpenseInContext: () => {},
});

export function ContextProvider({ children }) {
  const fireBaseUrl =
    "https://xpense-ai-default-rtdb.asia-southeast1.firebasedatabase.app";
  // states
  const [token, setToken] = useState(null);
  const [userInfo, setInfo] = useState({
    email: null,
    networkEmail: null,
    name: null,
    emailVerified: null,
    photoUrl: null,
    uniqueId: null,
  });
  const [expenseCategories, setExpenseCategories] = useState(categoriesExpense);
  const [incomeCategories, setIncomeCategories] = useState(categoriesIncome);
  const [allExpenseList, setExpenseList] = useState([]);

  // Get UserInfo
  const getUserInfo = useCallback(async (id) => {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyALpXBSjeiujbqD3fRd705go3ToNOgfuyA",
        { idToken: id }
      );
      const data = response.data.users[0];
      setInfo((oldInfo) => {
        if (data.displayName) {
          return {
            ...oldInfo,
            emailVerified: data.emailVerified,
            email: data.email,
            networkEmail: data.email.replace(/[^a-z0-9A-Z]/g, ""),
            name: data.displayName,
            photoUrl: data.photoUrl,
          };
        }
        return {
          ...oldInfo,
          emailVerified: data.emailVerified,
          email: data.email,
          networkEmail: data.email.replace(/[^a-z0-9A-Z]/g, ""),
        };
      });
      setToken(id);
    } catch (error) {
      LogOutHandler();
    }
  }, []);

  // Get User Unique Id
  const getUserUniqueId = useCallback(async () => {
    try {
      if (userInfo.networkEmail) {
        const response = await axios.get(
          `${fireBaseUrl}/${userInfo.networkEmail}.json`
        );
        if (!response.data) {
          const recall = await axios.post(
            `${fireBaseUrl}/${userInfo.networkEmail}.json`,
            { allExpenseList: "NIL" }
          );
          getExpenseList(recall.data.name);
          setInfo((oldInfo) => {
            return { ...oldInfo, uniqueId: recall.data.name };
          });
        } else {
          getExpenseList(Object.keys(response.data)[0]);
          setInfo((oldInfo) => {
            return { ...oldInfo, uniqueId: Object.keys(response.data)[0] };
          });
        }
      }
    } catch (error) {
      alert(error.massage);
    }
  }, [userInfo.networkEmail]);

  // Getting Expense Details from Backend
  async function getExpenseList(id) {
    try {
      const response = await axios.get(
        `${fireBaseUrl}/${userInfo.networkEmail}/${id}.json`
      );
      if (response.data.allExpenseList !== "NIL") {
        setExpenseList(response.data.allExpenseList);
      }
    } catch (error) {
      alert(error.massage);
    }
  }

  // Login Function
  function LoginHandler(id) {
    localStorage.setItem("token", id);
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 1000 * 60 * 5);
    getUserInfo(id);
    getUserUniqueId();
  }

  // LogOut Function
  function LogOutHandler() {
    localStorage.removeItem("token");
    setInfo({
      email: null,
      name: null,
      networkEmail: null,
      emailVerified: null,
      photoUrl: null,
      uniqueId: null,
    });
    setExpenseList([]);
    setToken(null);
  }

  // Adding Expense to Context
  function addingExpenseInContext(expense) {
    setExpenseList((oldExpense) => {
      return [...oldExpense, expense];
    });
  }

  // useEffect;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const id = localStorage.getItem("token");
      getUserInfo(id);
      getUserUniqueId();
    }
  }, [getUserInfo, getUserUniqueId]);


  return (
    <Context.Provider
      value={{
        token: token,
        LoginHandler: LoginHandler,
        userInfo: userInfo,
        fireBaseUrl: fireBaseUrl,
        getUserInfo: getUserInfo,
        LogOutHandler: LogOutHandler,
        expenseCategories: expenseCategories,
        incomeCategories: incomeCategories,
        allExpenseList: allExpenseList,
        getExpenseList: getExpenseList,
        addingExpenseInContext: addingExpenseInContext,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;

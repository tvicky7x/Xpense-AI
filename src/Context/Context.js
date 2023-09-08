import React, { createContext } from "react";

const Context = createContext({ test: "testpass" });

export function ContextProvider({ children }) {
  return (
    <Context.Provider value={{ test: "testpass" }}>{children}</Context.Provider>
  );
}

export default Context;

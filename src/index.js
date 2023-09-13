import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

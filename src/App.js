import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectPage from "./Pages/ProtectPage";
import Root from "./Pages/Root";
import Profile from "./Pages/Profile";
import Records from "./Pages/Records";
import Account from "./Pages/Account";
import Analysis from "./Pages/Analysis";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentExpenseList } from "./Store/expenseAction";
import { logInHandler } from "./Store/authAction";

function App() {
  // Redux
  const dispatch = useDispatch();
  const current = useSelector((states) => states.expense.current);
  const allExpenseList = useSelector((states) => states.expense.allExpenseList);

  useEffect(() => {
    dispatch(getCurrentExpenseList(allExpenseList, current));
  }, [dispatch, allExpenseList, current]);

  useEffect(() => {
    const idToken = localStorage.getItem("token");
    if (idToken) {
      dispatch(logInHandler(idToken));
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectPage>
              <Root />
            </ProtectPage>
          }
        >
          <Route index element={<Records />} />
          <Route path="profile" element={<Profile />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;

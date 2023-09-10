import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectPage from "./Pages/ProtectPage";
import Root from "./Pages/Root";
import Profile from "./Pages/Profile";
import Records from "./Pages/Records";
import Account from "./Pages/Account";
import Categories from "./Pages/Categories";
import Analysis from "./Pages/Analysis";

function App() {
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
          <Route path="categories" element={<Categories />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;

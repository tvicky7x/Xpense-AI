import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectPage from "./Pages/ProtectPage";
import Home from "./Pages/Home";
import Verify from "./Pages/Verify";
import Auth from "./Pages/Auth";
import RedirectPage from "./Pages/RedirectPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectPage>
              <Home />
            </ProtectPage>
          }
        />
        <Route
          path="/auth"
          element={
            <RedirectPage>
              <Auth />
            </RedirectPage>
          }
        />
        <Route
          path="/verify"
          element={
            <RedirectPage>
              <Verify />
            </RedirectPage>
          }
        />
      </Routes>
    </>
  );
}

export default App;

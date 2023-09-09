import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectPage from "./Pages/ProtectPage";
import Root from "./Pages/Root";

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
        ></Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;

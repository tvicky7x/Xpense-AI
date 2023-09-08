import { useContext } from "react";
import "./App.css";
import Context from "./Context/Context";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Auth/LoginForm";

function App() {
  const ctx = useContext(Context);
  return (
    <>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;

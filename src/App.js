import { useContext } from "react";
import "./App.css";
import Context from "./Context/Context";
import { Route, Routes } from "react-router-dom";

function App() {
  const ctx = useContext(Context);
  return (
    <div>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route
          path="/test"
          element={
            <h1
              className=" text-4xl font-bold"
              style={{ fontFamily: "Orbitron" }}
            >
              Xpense AI
            </h1>
          }
        />
      </Routes>

      <p>this is a test paragraph what should i do</p>
    </div>
  );
}

export default App;

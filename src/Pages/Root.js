import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SecondNav from "../Components/Navbar/SecondNav";
import AddExpense from "../Components/Expense/AddExpense";
import PulseButton from "../Components/Containers/PulseButton";

function Home() {
  const [addingExpense, setAdding] = useState(false);

  // function
  function alternatingAdding() {
    setAdding(!addingExpense);
  }
  return (
    <div>
      {addingExpense && <AddExpense alternatingAdding={alternatingAdding} />}
      <Navbar />
      <SecondNav />
      <Outlet />
      <PulseButton
        onClick={alternatingAdding}
        className=" fixed right-6 bottom-6"
      />
    </div>
  );
}

export default Home;

import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SecondNav from "../Components/Navbar/SecondNav";
import AddExpense from "../Components/Expense/AddExpense";
import PulseButton from "../Components/Containers/PulseButton";
import Context from "../Context/Context";

function Home() {
  const ctx = useContext(Context);

  return (
    <div>
      {ctx.addingModal && <AddExpense />}
      <Navbar />
      <SecondNav />
      <Outlet />
      <PulseButton
        onClick={ctx.showAddingModal}
        className=" fixed right-6 bottom-6"
      />
    </div>
  );
}

export default Home;

import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SecondNav from "../Components/Navbar/SecondNav";
import AddExpense from "../Components/Expense/AddExpense";
import PulseButton from "../Components/Containers/PulseButton";
import Context from "../Context/Context";

function Home() {
  const ctx = useContext(Context);
  const [scrollState, setScrollState] = useState({ value: 0, state: true });

  function updateScrollState(value) {
    if (value > scrollState.value) {
      setScrollState({ value: value, state: false });
    } else {
      setScrollState({ value: value, state: true });
    }
  }

  return (
    <div
      className=" h-screen overflow-y-scroll pb-4"
      onScroll={(e) => {
        updateScrollState(Math.trunc(e.target.scrollTop));
      }}
    >
      {ctx.addingModal && <AddExpense />}
      <Navbar />
      <SecondNav />
      <Outlet />
      {scrollState.state && (
        <PulseButton
          onClick={ctx.editingAddModal}
          className=" fixed right-6 bottom-6"
        />
      )}
    </div>
  );
}

export default Home;

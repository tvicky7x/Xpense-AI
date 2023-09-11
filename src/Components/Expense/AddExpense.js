import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "../Containers/Modal";
import HeaderTitle from "../Containers/HeaderTitle";
import ToggleButton from "../Containers/ToggleButton";
import Context from "../../Context/Context";
import ButtonPrimary from "../Containers/ButtonPrimary";
import DropDown from "./DropDown";
import axios from "axios";

function AddExpense({
  alternatingAdding,
  expenseItem = {
    type: true,
    amount: "",
    category: {
      id: "categories",
      name: "Categories",
      HTMLname: "label",
    },
    date: `${new Date().toISOString().slice(0, 10)}`,
    time: `${new Date().toTimeString().slice(0, 5)}`,
    note: "",
  },
}) {
  const ctx = useContext(Context);
  // Ref
  const amountRef = useRef();
  const dataRef = useRef();
  const timeRef = useRef();
  const noteRef = useRef();
  // states
  const [isExpense, setExpense] = useState(expenseItem.type);
  const [defaultCategory, setCategory] = useState(expenseItem.category);

  // Functions
  function toggleExpense() {
    setExpense(!isExpense);
  }
  function changeDefault(data) {
    setCategory(data);
  }

  // sorting function
  function sortExpenseByTime(list) {
    return list.sort((a, b) => {
      return (
        new Date(`${b.date},${b.time}`).getTime() -
        new Date(`${a.date},${a.time}`).getTime()
      );
    });
  }

  // Adding Expense Function
  async function addingExpense(e) {
    e.preventDefault();
    const type = isExpense;
    const amount = amountRef.current.value;
    const date = dataRef.current.value;
    const time = timeRef.current.value;
    const note = noteRef.current.value;
    const category = defaultCategory;
    if (category.id !== "categories") {
      const expense = {
        type: type,
        amount: amount,
        category: category,
        date: date,
        time: time,
        note: note,
      };
      await axios.put(
        `${ctx.fireBaseUrl}/${ctx.userInfo.networkEmail}/${ctx.userInfo.uniqueId}.json`,
        { allExpenseList: sortExpenseByTime([expense, ...ctx.allExpenseList]) }
      );
      ctx.addingExpenseInContext(
        sortExpenseByTime([expense, ...ctx.allExpenseList])
      );
      e.target.reset();
    }
  }

  useEffect(() => {
    setCategory({ id: "categories", name: "Categories", HTMLname: "label" });
  }, [isExpense]);

  return (
    <>
      <Modal onClick={alternatingAdding}>
        <div className=" bg-white drop-shadow-lg rounded p-4 w-80 sm:w-96">
          <HeaderTitle
            title={isExpense ? "Add Expense" : "Add Income"}
            icon={isExpense ? "currency_rupee" : "account_balance_wallet"}
          />
          <div className=" grid grid-cols-2 gap-2">
            <ToggleButton isActive={isExpense} onClick={toggleExpense}>
              Expense
            </ToggleButton>
            <ToggleButton isActive={!isExpense} onClick={toggleExpense}>
              Income
            </ToggleButton>
          </div>
          <div className=" my-3 text-slate-800">
            <form action="" onSubmit={addingExpense}>
              <div className="mb-1 mt-2">
                {isExpense ? (
                  <DropDown
                    itemList={ctx.expenseCategories}
                    changeDefault={changeDefault}
                    defaultCategory={defaultCategory}
                  />
                ) : (
                  <DropDown
                    itemList={ctx.incomeCategories}
                    changeDefault={changeDefault}
                    defaultCategory={defaultCategory}
                  />
                )}
              </div>
              <div className=" space-y-1 mb-1">
                <label htmlFor="" className="text-lg">
                  Amount
                </label>
                <input
                  type="number"
                  style={{ outline: "none" }}
                  required
                  min={1}
                  defaultValue={expenseItem.amount}
                  ref={amountRef}
                  className=" w-full border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                />
              </div>
              <div className=" space-y-1 mb-1">
                <div className=" grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="" className="text-lg">
                      Date
                    </label>
                    <input
                      type="date"
                      style={{ outline: "none" }}
                      required
                      ref={dataRef}
                      defaultValue={expenseItem.date}
                      className=" w-full border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="text-lg">
                      Time
                    </label>
                    <input
                      type="time"
                      style={{ outline: "none" }}
                      required
                      ref={timeRef}
                      defaultValue={expenseItem.time}
                      className=" w-full border rounded border-lime-300 h-9 p-2 focus:ring-2 focus:ring-lime-400 focus:border-0"
                    />
                  </div>
                </div>
              </div>
              <div className=" space-y-1 mb-1">
                <label htmlFor="" className=" text-lg">
                  Add notes <span className=" text-slate-300">(optional)</span>
                </label>
                <textarea
                  className=" w-full border rounded border-lime-300 p-2  focus:ring-2 focus:ring-lime-400 focus:border-0"
                  name=""
                  id=""
                  rows="2"
                  ref={noteRef}
                  defaultValue={expenseItem.note}
                  style={{ outline: "none" }}
                />
              </div>
              <div className=" mt-5">
                <ButtonPrimary type="submit" className="w-full">
                  {isExpense ? "Add Expense" : "Add Income"}
                </ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddExpense;

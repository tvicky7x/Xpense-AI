import React, { useRef } from "react";
import Modal from "../Containers/Modal";
import HeaderTitle from "../Containers/HeaderTitle";
import ToggleButton from "../Containers/ToggleButton";
import ButtonPrimary from "../Containers/ButtonPrimary";
import DropDown from "./DropDown";
import axios from "axios";
import ButtonSecondary from "../Containers/ButtonSecondary copy";
import { useDispatch, useSelector } from "react-redux";
import { addExpenseList } from "../../Store/expenseAction";
import { addModalAction } from "../../Store/addModalSlice";

function AddExpense() {
  // Redux
  const dispatch = useDispatch();
  const modalData = useSelector((states) => states.addModal.modalData);
  const isExpense = useSelector((states) => states.addModal.modalData.type);
  const expenseCategories = useSelector(
    (states) => states.addModal.expenseCategories
  );
  const incomeCategories = useSelector(
    (states) => states.addModal.incomeCategories
  );
  const fireBaseUrl = useSelector((states) => states.expense.fireBaseUrl);
  const userInfo = useSelector((states) => states.auth.userInfo);
  const allExpenseList = useSelector((states) => states.expense.allExpenseList);
  const categoryNow = useSelector(
    (states) => states.addModal.modalData.category
  );

  // Ref
  const amountRef = useRef();
  const dataRef = useRef();
  const timeRef = useRef();
  const noteRef = useRef();

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
    const category = categoryNow;
    if (category.id !== "categories") {
      const expense = {
        id: Math.trunc(Math.random() * 10000).toString(36),
        type: type,
        amount: amount,
        category: category,
        date: date,
        time: time,
        note: note,
      };
      if (modalData.amount) {
        deleteExpense(modalData.id, true);
        const newList = sortExpenseByTime(
          allExpenseList.filter((item) => {
            return item.id !== modalData.id;
          })
        );
        await axios.put(
          `${fireBaseUrl}/${userInfo.networkEmail}/${userInfo.uniqueId}.json`,
          {
            allExpenseList: sortExpenseByTime([expense, ...newList]),
          }
        );
        dispatch(addExpenseList(sortExpenseByTime([expense, ...newList])));
      } else {
        await axios.put(
          `${fireBaseUrl}/${userInfo.networkEmail}/${userInfo.uniqueId}.json`,
          {
            allExpenseList: sortExpenseByTime([expense, ...allExpenseList]),
          }
        );
        dispatch(
          addExpenseList(sortExpenseByTime([expense, ...allExpenseList]))
        );
      }
      dispatch(addModalAction.closeModal());
      e.target.reset();
    }
  }

  // Deleting Edit Function
  async function deleteExpense(id, stay = false) {
    const newList = sortExpenseByTime(
      allExpenseList.filter((item) => {
        return item.id !== id;
      })
    );
    await axios.put(
      `${fireBaseUrl}/${userInfo.networkEmail}/${userInfo.uniqueId}.json`,
      { allExpenseList: newList }
    );
    dispatch(addExpenseList(newList));
    if (!stay) {
      dispatch(addModalAction.closeModal());
    }
  }

  //

  return (
    <>
      <Modal
        onClick={() => {
          dispatch(addModalAction.closeModal());
        }}
      >
        <div className=" bg-white drop-shadow-lg rounded p-4 w-80 sm:w-96">
          <div className=" relative">
            <button
              className=" absolute right-0 flex text-slate-400"
              onClick={() => {
                dispatch(addModalAction.closeModal());
              }}
            >
              <span className="text-3xl material-symbols-outlined">close</span>
            </button>
            <HeaderTitle
              title={isExpense ? "Add Expense" : "Add Income"}
              icon={isExpense ? "currency_rupee" : "account_balance_wallet"}
            />
          </div>

          <div className=" grid grid-cols-2 gap-2">
            <ToggleButton
              isActive={isExpense}
              onClick={() => {
                dispatch(addModalAction.changeExpenseType());
              }}
            >
              Expense
            </ToggleButton>
            <ToggleButton
              isActive={!isExpense}
              onClick={() => {
                dispatch(addModalAction.changeExpenseType());
              }}
            >
              Income
            </ToggleButton>
          </div>
          <div className=" my-3 text-slate-800">
            <form action="" onSubmit={addingExpense}>
              <div className="mb-1 mt-2">
                <DropDown
                  itemList={isExpense ? expenseCategories : incomeCategories}
                />
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
                  defaultValue={modalData.amount}
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
                      defaultValue={modalData.date}
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
                      defaultValue={modalData.time}
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
                  defaultValue={modalData.note}
                  style={{ outline: "none" }}
                />
              </div>
              {!modalData.amount && (
                <div className=" mt-5">
                  <ButtonPrimary type="submit" className="w-full">
                    {isExpense ? "Add Expense" : "Add Income"}
                  </ButtonPrimary>
                </div>
              )}

              {modalData.amount && (
                <div className=" mt-5 grid grid-cols-3 gap-x-2">
                  <ButtonSecondary
                    type="button"
                    className=" bg-red-500 text-red-50 hover:bg-red-600"
                    onClick={() => {
                      deleteExpense(modalData.id);
                    }}
                  >
                    Delete
                  </ButtonSecondary>
                  <ButtonPrimary type="submit" className="w-full col-span-2">
                    {isExpense ? "Save Expense" : "Save Income"}
                  </ButtonPrimary>
                </div>
              )}
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddExpense;

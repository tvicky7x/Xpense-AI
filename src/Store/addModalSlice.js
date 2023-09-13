import { createSlice } from "@reduxjs/toolkit";
import { expenseCategories, incomeCategories } from "./generalData";

const initialState = {
  modalState: false,
  modalData: {
    id: "",
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
  expenseCategories,
  incomeCategories,
  dropDown: false,
};

const addModalSlice = createSlice({
  name: "addModalSlice",
  initialState,
  reducers: {
    openModal(states, actions) {
      states.modalState = true;
      if (actions.payload.expense) {
        states.modalData = actions.payload.expense;
      }
    },
    closeModal(states) {
      states.modalState = false;
      states.modalData = {
        id: "",
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
      };

      states.dropDown = false;
    },
    changeCategory(states, accounts) {
      states.modalData.category = accounts.payload.category;
    },
    changeExpenseType(states) {
      states.modalData.type = !states.modalData.type;
      states.modalData.category = {
        id: "categories",
        name: "Categories",
        HTMLname: "label",
      };
    },
    alternateDropDown(states) {
      states.dropDown = !states.dropDown;
    },
  },
});

export const addModalAction = addModalSlice.actions;

export default addModalSlice.reducer;

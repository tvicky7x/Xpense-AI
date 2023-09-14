import { createSlice } from "@reduxjs/toolkit";
import { fireBaseUrl } from "./generalData";

const initialState = {
  allExpenseList: [],
  allExpenseBalance: {
    incomeBalance: 0,
    expenseBalance: 0,
    totalBalance: 0,
  },
  currentExpenseList: [],
  currentExpenseBalance: {
    incomeBalance: 0,
    expenseBalance: 0,
    totalBalance: 0,
  },
  current: {
    dateString: new Date().toLocaleDateString("en", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    day: new Date().toLocaleString("en", {
      weekday: "long",
    }),
    date: new Date().getDate(),
    month: new Date().toLocaleString("en", {
      month: "long",
    }),
    year: new Date().getFullYear(),
  },
  fireBaseUrl,
};

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState,
  reducers: {
    allExpenseList(states, actions) {
      states.allExpenseList = actions.payload.allExpenseList;
      states.allExpenseBalance = actions.payload.allExpenseBalance;
    },
    currentExpenseList(states, actions) {
      states.currentExpenseList = actions.payload.currentExpenseList;
      states.currentExpenseBalance = actions.payload.currentExpenseBalance;
    },
    changeCurrent(states, actions) {
      if (actions.payload.type === "change") {
        const newDate = new Date(
          new Date(states.current.dateString).setMonth(
            new Date(states.current.dateString).getMonth() +
              actions.payload.value
          )
        );
        states.current.dateString = new Date(newDate).toLocaleDateString("en", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        states.current.day = new Date(newDate).toLocaleString("en", {
          weekday: "long",
        });
        states.current.date = new Date(newDate).getDate();
        states.current.month = new Date(newDate).toLocaleString("en", {
          month: "long",
        });
        states.current.year = new Date(newDate).getFullYear();
      } else if (actions.payload.type === "reset") {
        states.current = {
          dateString: new Date().toLocaleDateString("en", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          day: new Date().toLocaleString("en", {
            weekday: "long",
          }),
          date: new Date().getDate(),
          month: new Date().toLocaleString("en", {
            month: "long",
          }),
          year: new Date().getFullYear(),
        };
      }
    },
  },
});

export const expenseAction = expenseSlice.actions;

export default expenseSlice.reducer;

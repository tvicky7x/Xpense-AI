import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showExpense: true,
};

const analysisSlice = createSlice({
  name: "analysisSlice",
  initialState,
  reducers: {
    toggleExpense(states) {
      states.showExpense = !states.showExpense;
    },
  },
});

export const analysisAction = analysisSlice.actions;

export default analysisSlice.reducer;

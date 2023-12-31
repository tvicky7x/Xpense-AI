import addModalSlice from "./addModalSlice";
import analysisSlice from "./analysisSlice";
import authSlice from "./authSlice";
import expenseSlice from "./expenseSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    auth: authSlice,
    expense: expenseSlice,
    addModal: addModalSlice,
    analysis: analysisSlice,
  },
});
export default store;

import axios from "axios";
import { fireBaseUrl } from "./generalData";
import { expenseAction } from "./expenseSlice";

export function getExpenseList(uniqueId, networkEmail) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${fireBaseUrl}/${networkEmail}/${uniqueId}.json`
      );
      if (response.data.allExpenseList !== "NIL") {
        const allExpenseList = response.data.allExpenseList;
        const allExpenseBalance = makeBalance(response.data.allExpenseList);
        dispatch(
          expenseAction.allExpenseList({ allExpenseList, allExpenseBalance })
        );
      }
    } catch (error) {
      alert(error);
    }
  };
}

export function getCurrentExpenseList(allExpenseList, current) {
  return (dispatch) => {
    const currentExpenseList = allExpenseList.filter((item) => {
      return (
        new Date(item.date).getMonth() ===
          new Date(current.dateString).getMonth() &&
        new Date(item.date).getFullYear() === current.year
      );
    });
    const currentExpenseBalance = makeBalance(currentExpenseList);
    dispatch(
      expenseAction.currentExpenseList({
        currentExpenseList,
        currentExpenseBalance,
      })
    );
  };
}

export function addExpenseList(list) {
  return (dispatch) => {
    const allExpenseList = list;
    const allExpenseBalance = makeBalance(list);
    dispatch(
      expenseAction.allExpenseList({ allExpenseList, allExpenseBalance })
    );
  };
}

// makeBalance Function;
function makeBalance(list) {
  const expenseBalance = list
    .filter((item) => item.type === true)
    .reduce((sum, item) => {
      return sum + Number(item.amount);
    }, 0);

  const incomeBalance = list
    .filter((item) => item.type !== true)
    .reduce((sum, item) => {
      return sum + Number(item.amount);
    }, 0);

  const totalBalance = incomeBalance - expenseBalance;

  return {
    incomeBalance: incomeBalance,
    expenseBalance: expenseBalance,
    totalBalance: totalBalance,
  };
}

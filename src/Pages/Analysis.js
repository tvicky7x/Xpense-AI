import React from "react";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";
import FilterMonth from "../Components/Tools/FilterMonth";
import { allColors } from "../Store/generalData";
import { useSelector } from "react-redux";
import ToggleExpense from "../Components/Analysis/ToggleExpense";
import PieExpense from "../Components/Analysis/PieExpense";
import Empty from "../Components/List/Empty";
import BarProgress from "../Components/Analysis/BarProgress";

function Analysis() {
  const currentExpenseList = useSelector(
    (states) => states.expense.currentExpenseList
  );
  const currentExpenseBalance = useSelector(
    (states) => states.expense.currentExpenseBalance
  );
  const showExpense = useSelector((states) => states.analysis.showExpense);

  const map = new Map();
  currentExpenseList
    .filter((item) => {
      return item.type === showExpense;
    })
    .forEach((item) => {
      map.has(item.category.name)
        ? map.set(
            item.category.name,
            Number(map.get(item.category.name)) + Number(item.amount)
          )
        : map.set(item.category.name, Number(item.amount));
    });

  const pieData = Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .map((item, index) => {
      return {
        key: item[0],
        title: item[0],
        value: item[1],
        color: `${allColors[index]}`,
        percentage: showExpense
          ? ((item[1] / currentExpenseBalance.expenseBalance) * 100).toFixed(2)
          : ((item[1] / currentExpenseBalance.incomeBalance) * 100).toFixed(2),
      };
    });


  return (
    <>
      <Container>
        <NormalCard>
          <FilterMonth />
          <ToggleExpense />
          {pieData.length > 0 ? (
            <>
              <PieExpense pieData={pieData} />
              <BarProgress data={pieData} />
            </>
          ) : (
            <Empty />
          )}
        </NormalCard>
      </Container>
    </>
  );
}

export default Analysis;

import React from "react";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";
import FilterMonth from "../Components/Tools/FilterMonth";
import { PieChart } from "react-minimal-pie-chart";
import { allColors } from "../Store/generalData";
import { useDispatch, useSelector } from "react-redux";
import ButtonSecondary from "../Components/Containers/ButtonSecondary copy";
import { analysisAction } from "../Store/analysisSlice";
import ToggleExpense from "../Components/Analysis/ToggleExpense";
import PieExpense from "../Components/Analysis/PieExpense";

function Analysis() {
  const dispatch = useDispatch();
  const currentExpenseList = useSelector(
    (states) => states.expense.currentExpenseList
  );
  const showExpense = useSelector((states) => states.analysis.showExpense);

  const pieData = currentExpenseList
    .filter((item) => {
      return item.type === showExpense;
    })
    .sort((a, b) => b.amount - a.amount)
    .map((item, index) => {
      return {
        key: item.category.name,
        title: item.category.name,
        value: Number(item.amount),
        color: `${allColors[index]}`,
      };
    });

  return (
    <>
      <Container>
        <NormalCard>
          <FilterMonth />
          <ToggleExpense />
          <PieExpense pieData={pieData} />
        </NormalCard>
      </Container>
    </>
  );
}

export default Analysis;

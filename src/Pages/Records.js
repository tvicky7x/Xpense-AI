import React from "react";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";
import FilterMonth from "../Components/Tools/FilterMonth";
import ExpenseList from "../Components/List/ExpenseList";

function Records() {
  return (
    <>
      <Container>
        <NormalCard>
          <FilterMonth />
          <ExpenseList />
        </NormalCard>
      </Container>
    </>
  );
}

export default Records;

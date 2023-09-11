import React from "react";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";
import FilterMonth from "../Components/Tools/FilterMonth";

function Records() {
  return (
    <>
      <Container>
        <NormalCard>
          <FilterMonth />
        </NormalCard>
      </Container>
    </>
  );
}

export default Records;

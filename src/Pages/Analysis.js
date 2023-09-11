import React from "react";
import Container from "../Components/Containers/Container";
import NormalCard from "../Components/Containers/NormalCard";
import FilterMonth from "../Components/Tools/FilterMonth";

function Analysis() {
  return (
    <>
      <Container>
        <NormalCard>
          <FilterMonth />
          <div>analysis</div>
        </NormalCard>
      </Container>
    </>
  );
}

export default Analysis;

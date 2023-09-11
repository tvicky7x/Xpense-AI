import React from "react";
import NormalCard from "../Containers/NormalCard";
import Container from "../Containers/Container";
import { useLocation } from "react-router-dom";
import SecondNavItem from "./SecondNavItem";

function SecondNav() {
  const location = useLocation();

  if (location.pathname === "/profile") {
    return null;
  }
  return (
    <>
      <Container>
        <NormalCard>
          <div className=" flex justify-evenly">
            <SecondNavItem title="Records" icon="receipt_long" div={true} />
            <SecondNavItem
              title="Analysis"
              icon="data_usage"
              div={true}
              path="analysis"
            />
            <SecondNavItem
              title="Account"
              icon="account_balance_wallet"
              path="account"
            />
          </div>
        </NormalCard>
      </Container>
    </>
  );
}

export default SecondNav;

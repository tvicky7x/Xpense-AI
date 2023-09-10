import React from "react";
import NormalCard from "../Containers/NormalCard";
import Container from "../Containers/Container";
import { NavLink, useLocation } from "react-router-dom";
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
          <div className=" flex justify-around">
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
              div={true}
              path="account"
            />
            <SecondNavItem title="Categories" icon="label" path="categories" />
          </div>
        </NormalCard>
      </Container>
    </>
  );
}

export default SecondNav;

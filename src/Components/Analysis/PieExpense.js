import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import PieLabel from "./PieLabel";

function PieExpense({ pieData }) {
  return (
    <>
      <div className=" mt-3 flex space-x-3 justify-evenly border-b-2  border-slate-300 py-3">
        <PieChart
          data={pieData}
          startAngle={270}
          lineWidth={40}
          animate
          animationDuration={500}
          className=" max-w-xs"
        />

        <div className=" shrink-0 w-[114px] sm:w-[150px]">
          <ul>
            {pieData.map((item) => {
              return <PieLabel key={item.title} data={item} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default PieExpense;

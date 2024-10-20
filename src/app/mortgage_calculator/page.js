import React from "react";
import Header from "../_components/Header";
import CalculatorFunctionality from "./CalculatorFunctionality";

const page = () => {
  return (
    <div>
      <Header bgcolor="white" text="black" />
      <CalculatorFunctionality />
    </div>
  );
};

export default page;

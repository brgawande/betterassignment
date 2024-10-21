import React from "react";
import Header from "../_components/Header";
import CalculatorFunctionality from "./CalculatorFunctionality";
import { Footer } from "../_components/Footer";

const page = () => {
  return (
    <div>
      <Header bgcolor="white" text="black" />
      <CalculatorFunctionality />
      <Footer />
    </div>
  );
};

export default page;

"use client";

import React, { useState } from "react";

const CalculatorFunctionality = () => {
  const [homePrice, setHomePrice] = useState(50000);
  const [zipCode, setZipCode] = useState(400017);
  const [downPayment, setDownPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(3); // Assuming a default interest rate
  const [loanLength, setLoanLength] = useState(30); // Assuming a default loan length

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setProgress(e.target.value);
  };

  return (
    <div className="pt-[170px] bg-primary h-[100vh]">
      <div className="w-[85%] m-auto">
        <h1 className="text-5xl pb-5 font-bold">Mortgage Calculator</h1>
        <p className="pt-4 text-gray w-[60%] pb-10">
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        {/* Home Price and Monthly Payments */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5 w-[25%]">
            <label htmlFor="homePrice" className="font-semibold">
              Home Price
            </label>
            <div className="relative">
              <p className="text-6xl font-semibold pl-4 absolute top-3">$</p>
              <input
                id="homePrice"
                className="border-[2px] border-[#9f9f9f] rounded-lg text-6xl font-semibold pl-[50px] w-full"
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold">Monthly Payments</h2>
            <h1 className="font-semibold text-6xl">$882/mo</h1>
          </div>
          <div className="pt-5 w-[17%]">
            <button className="bg-[#017848] text-white py-4 w-full rounded-md font-semibold">
              Get Pre-Approved
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center pt-10">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            style={{ accentColor: "#4A90E2" }} // Customize the color if needed
          />
          <span className="ml-4">{progress}%</span>
        </div>

        {/* Input Elements */}
        <div className="pt-[50px] flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="relative">
              <label
                htmlFor="zipCode"
                className="absolute pl-4 top-1 text-gray text-[15px]"
              >
                ZIP CODE
              </label>
              <input
                id="zipCode"
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(Number(e.target.value))}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="downPayment"
                className="absolute pl-4 top-1 text-gray text-[15px]"
              >
                Down Payment
              </label>
              <input
                id="downPayment"
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <label
                htmlFor="interestRate"
                className="absolute pl-4 top-1 text-gray text-[15px]"
              >
                Interest Rate
              </label>
              <input
                id="interestRate"
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="loanLength"
                className="absolute pl-4 top-1 text-gray text-[15px]"
              >
                Length of Loan
              </label>
              <input
                id="loanLength"
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                value={loanLength}
                onChange={(e) => setLoanLength(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorFunctionality;

"use client";

import React, { useState } from "react";

const CalculatorFunctionality = () => {
  const [homeprice, setHomePrice] = useState(50000);
  const [zipcode, setZipCode] = useState(400017);
  const [downPayment, setDownPayment] = useState(10000);
  return (
    <div className="pt-[170px] bg-primary h-[100vh]">
      <div className=" w-[85%] m-auto">
        <div>
          <h1 className="text-5xl pb-5 font-bold">Mortgage calculator</h1>
          <p className="pt-4 text-gray w-[60%] pb-10">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get the whole picture and calculate your total monthly
            payment.
          </p>
        </div>
        {/* part2 */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-5  w-[25%]">
            <h2 className="font-semibold">Home Price</h2>
            <div className="relative">
              <p className="text-6xl font-semibold pl-4 absolute top-3">$</p>
              <input
                className="border-[2px] border-[#9f9f9f] rounded-lg text-6xl font-semibold pl-[50px] w-full"
                type="number"
                name=""
                id=""
                value={homeprice}
                onChange={(e) => setHomePrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold">Monthly Payments</h2>
            <div>
              <h1 className="font-semibold text-6xl">$882/mo</h1>
            </div>
          </div>
          <div className="pt-5  w-[17%]">
            <button className="bg-[#017848] text-white py-4 w-full rounded-md font-semibold">
              Get pre-approved
            </button>
          </div>
        </div>
        {/* progress bar */}
        {/* input elements */}
        <div className="pt-[100px] flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <p className="absolute pl-4 top-1 text-gray text-[15px]">
                ZIP CODE
              </p>
              <input
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                name=""
                id=""
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div className="relative">
              <p className="absolute pl-4 top-1 text-gray text-[15px]">
                Down Payment
              </p>
              <input
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                name=""
                id=""
                value={zipcode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <p className="absolute pl-4 top-1 text-gray text-[15px]">
                Interest Rate
              </p>
              <input
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                name=""
                id=""
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </div>
            <div className="relative">
              <p className="absolute pl-4 top-1 text-gray text-[15px]">
                Length of Loan
              </p>
              <input
                className="border-[2px] border-gray-400 pt-6 px-4 font-semibold text-xl pb-2 rounded-md"
                type="number"
                name=""
                id=""
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorFunctionality;

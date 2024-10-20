import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const Start1 = () => {
  return (
    <div className="pt-[170px] pb-[20vh]">
      <div>
        <h1 className="text-center font-semibold text-5xl">
          Hi, I'm Betsy! <br /> What can I help you with?
        </h1>
        <div className=" dflex flex-col gap-5 pt-10">
          <div className="rounded-md py-3 pl-10 w-[40%] flex items-center gap-4 border-[1px] border-[#808080] hover:border-[5px] hover:border-[darkgreen]">
            <div>
              <img src="\images\homelogo.svg" alt="" />
            </div>
            <h1 className="text-xl font-semibold pl-2">Buying a home</h1>
          </div>
          <div className="rounded-md py-3 pl-10 w-[40%] flex items-center gap-4 border-[1px] border-[#808080] hover:border-[5px] hover:border-[darkgreen]">
            <div>
              <img src="\images\homedollor2.svg" alt="" />
            </div>
            <h1 className="text-xl font-semibold pl-2">
              Refinance my mortgage
            </h1>
          </div>
          <div className="rounded-md py-3 pl-10 w-[40%] flex items-center gap-4 border-[1px] border-[#808080] hover:border-[5px] hover:border-[darkgreen]">
            <div>
              <img src="\images\homedollor1.svg" alt="" />
            </div>
            <h1 className="text-xl font-semibold pl-2">
              Get cash from my home
            </h1>
          </div>
        </div>
      </div>
      {/* part2 */}
      <div className="dflex my-10 pt-10">
        <div className="flex justify-between items-center  w-[40%] m-auto">
          <div className="dflex flex-col">
            <h1 className="text-4xl font-semibold">$100B</h1>
            <p className="text-[14px]">home loans funded entirely online</p>
          </div>
          <div className="dflex flex-col">
            <h1 className="text-4xl font-semibold">400K</h1>
            <p className="text-[14px]">Customers who chose a Better Mortgage</p>
          </div>
        </div>
      </div>

      {/* part3 */}
      <div className="dflex mt-20">
        <div className="w-[40%] m-auto py-5 bg-[#f0f7f1] shadow-md">
          <h2 className="text-center">After a few questions, you'll unlock:</h2>
          <div className=" w-[40%] m-auto mt-5">
            <div className=" flex items-center my-2 justify-start gap-2">
              <IoMdCloseCircleOutline />
              <p>Custom mortgage rates</p>
            </div>
            <div className=" flex items-center my-2 gap-2">
              <CiDollar />
              <p>Exclusive offers</p>
            </div>
            <div className=" flex items-center my-2 gap-2">
              <IoPhonePortraitSharp />
              <p>A personalized dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start1;

import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import Image from "next/image";
import { Footer } from "../_components/Footer";

const Start1 = () => {
  return (
    <div className="pt-[170px] pb-[20vh]">
      <h1 className="text-center font-semibold text-5xl">
        Hi, I&apos;m Betsy! <br /> What can I help you with?
      </h1>
      <div className="dflex flex-col gap-5 pt-10">
        {/* Buying a home card */}
        <div className="rounded-md py-3 pl-10 w-[40%] flex items-center gap-4 border-[1px] border-[#808080] hover:border-[5px] hover:border-[darkgreen]">
          <Image
            src="/images/homelogo.svg"
            alt="Buying a home"
            width={20}
            height={20}
          />
          <h1 className="text-xl font-semibold pl-2">Buying a home</h1>
        </div>

        {/* Refinance mortgage card */}
        <div className="rounded-md py-3 pl-10 w-[40%] flex items-center gap-4 border-[1px] border-[#808080] hover:border-[5px] hover:border-[darkgreen]">
          <Image
            src="/images/homedollor2.svg"
            width={20}
            height={20}
            alt="Refinance my mortgage"
          />
          <h1 className="text-xl font-semibold pl-2">Refinance my mortgage</h1>
        </div>

        {/* Get cash card */}
        <div className="rounded-md py-3 pl-10 w-[40%] flex items-center gap-4 border-[1px] border-[#808080] hover:border-[5px] hover:border-[darkgreen]">
          <Image
            src="/images/homedollor1.svg"
            width={20}
            height={20}
            alt="Get cash from my home"
          />
          <h1 className="text-xl font-semibold pl-2">Get cash from my home</h1>
        </div>
      </div>
      {/* Part 2: Statistics */}
      <div className="flex my-10 pt-10">
        <div className="flex justify-between items-center w-[40%] m-auto">
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
      {/* Part 3: Benefits */}
      <div className="flex mt-20">
        <div className="w-[40%] m-auto py-5 bg-[#f0f7f1] shadow-md">
          <h2 className="text-center">
            After a few questions, you&apos;ll unlock:
          </h2>
          <div className="w-[40%] m-auto mt-5">
            <div className="flex items-center my-2 justify-start gap-2">
              <IoMdCloseCircleOutline />
              <p>Custom mortgage rates</p>
            </div>
            <div className="flex items-center my-2 gap-2">
              <CiDollar />
              <p>Exclusive offers</p>
            </div>
            <div className="flex items-center my-2 gap-2">
              <IoPhonePortraitSharp />
              <p>A personalized dashboard</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Start1;

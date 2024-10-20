import React from "react";
import Image from "next/image";

const Aout1 = () => {
  return (
    <div>
      {/* 1st part */}
      <div className=" h-[120vh] pt-10 dflex flex-col">
        <h2 className="text-[#017848] pb-8 text-4xl font-semibold">
          Our mission
        </h2>
        <h1 className="text-5xl text-center font-semibold">
          We’re making homeownership simpler, faster — <br /> and most
          importantly, more accessible for all <br /> Americans.
        </h1>
      </div>
      {/* 2nd part */}
      <div className="flex items-center justify-around gap-5 pb-10">
        {/* text part */}
        <div className=" pl-[250px] pr-[80px] w-[50%] flex flex-col items-start justify-center">
          <h1 className="text-bold text-4xl pb-8">The status quo is broken</h1>
          <p className="text-[15px] text-[#3c3c3c] pb-5">
            "The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that."
          </p>
          <button className="bg-[#017848] px-10 py-[20px] rounded-md text-white">
            Read Vishal's Story
          </button>
        </div>
        {/* image part */}
        <div className="w-[40%] flex items-start justify-start ">
          <div className="h-[300px] w-[400px]">
            <Image
              className="h-[100%] w-[100%] object-contain"
              src="https://media.better.com/video/vishal-mission.jpg"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      {/* 3rd part */}
      <div className="bg-[#017848] py-20 my-20">
        <div className=" text-white  flex flex-col w-[70%] m-auto">
          <h1 className="text-4xl font-bold pb-8">How we’re changing things</h1>
          <p>
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers’.
          </p>
          <p className="pt-5">
            That’s why Better.com is redefining the homeownership process from
            the ground up. We’re using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </div>
      {/* 4th part */}
      <div className="dflex pb-10">
        <div className="dflex flex-col gap-5">
          <h1 className="text-3xl font-bold">Backed by</h1>
          <div className="flex justify-evenly gap-8 pt-10">
            <div>
              <Image src="/images/company1.svg" alt="" fill />
            </div>
            <div>
              <Image src="/images/company2.svg" alt="" fill />
            </div>
            <div>
              <Image src="/images/company3.svg" alt="" fill />
            </div>
            <div>
              <Image src="/images/company4.svg" alt="" fill />
            </div>
            <div>
              <Image src="/images/company5.svg" alt="" />
            </div>
            <div>
              <Image src="/images/company6.svg" alt="" fill />
            </div>
            <div>
              <Image src="/images/company7.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aout1;

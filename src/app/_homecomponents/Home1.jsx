import React from "react";
import Image from "next/image";

const Home1 = () => {
  return (
    <div>
      <div className="flex pt-[120px]">
        {/* image div */}
        <div className="w-[50%] ">
          <div className="h-[600px] dflex w-auto rounded-[20px]">
            <Image
              src="/images/home1pic.webp"
              className="h-[100%] w-auto objet-contain rounded-[20px]"
              alt=""
              fill
            />
          </div>
          <div className="dflex pt-5 gap-5">
            <button className="btn border-[1px] border-[#434343]">Arian</button>
            <button className="btn border-[1px] border-[#434343]">
              Amanda
            </button>
            <button className="btn border-[1px] border-[#434343]">Paul</button>
          </div>
        </div>
        {/* test div */}
        <div className="w-[50%]   flex flex-col justify-center items-start">
          <h1 className="text-8xl font-semibold pb-[30px]">
            Find out why <br /> we’re better.
          </h1>
          <button className="bg-[#004733]  text-white py-5 px-[60px] rounded-full">
            See all our stories
          </button>
          <p className="pt-2">Trustpilot Excellent 4.4 out of 5</p>
        </div>
      </div>
    </div>
  );
};

export default Home1;

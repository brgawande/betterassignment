import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../_components/Footer";

const Home1 = () => {
  return (
    <div>
      <div className="flex pt-[120px]">
        {/* Image div */}
        <div className="w-[50%]">
          <div className="h-[600px] relative w-auto rounded-[20px] overflow-hidden">
            {" "}
            {/* Add overflow-hidden to prevent any overflow issues */}
            <Image
              src="/images/home1pic.webp"
              className="h-[100%] w-auto object-contain" // Fixed typo: 'objet' to 'object'
              alt="Description of the image" // Added a meaningful alt text
              layout="fill" // Use layout fill for responsiveness
              objectFit="contain" // Ensure the image fits well in its container
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
        {/* Text div */}
        <div className="w-[50%] flex flex-col justify-center items-start">
          <h1 className="text-8xl font-semibold pb-[30px]">
            Find out why <br /> we’re better.
          </h1>
          <button className="bg-[#004733] text-white py-5 px-[60px] rounded-full">
            See all our stories
          </button>
          <p className="pt-2">Trustpilot Excellent 4.4 out of 5</p>
        </div>
      </div>
      {/* navigations */}
      <Footer />
    </div>
  );
};

export default Home1;

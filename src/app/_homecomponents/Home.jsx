import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-[#004733] pt-[80px] h-[140vh] text-white relative">
      <div className="dflex  gap-5 pt-10 items-center justify-centert">
        <div className="h-10 w-10 rounded-full      ">
          {" "}
          {/* Add relative positioning for Image */}
          <Image
            className="h-[100%] w-[100%]"
            src="/images/ratedrop.svg"
            alt="Rate drop icon"
            width={50}
            height={50}
            objectFit="contain"
          />
        </div>
        <h2 className="text-4xl">Rate drop alert</h2>
      </div>

      <div className="pt-10 flex justify-center">
        <h2 className="text-[100px] font-bold text-center leading-[1.08] z-10">
          The rate drop you&apos;ve <br /> been waiting for
        </h2>
      </div>

      <div className="pt-[190px] flex justify-evenly gap-[150px]">
        {/* Left-hand content */}
        <div className="flex flex-col items-center">
          <button className="px-[50px] py-5 rounded-full bg-[#1ee07f] text-black font-semibold">
            Start my approval
          </button>
          <div className="flex items-center gap-1">
            <MdOutlineTimer />
            <p>3 min | No credit impact</p>
          </div>
        </div>
        {/* Right-hand side content */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 items-center">
            <Image
              src="/images/googlelogo.svg"
              alt="Google logo"
              width={20}
              height={20}
              objectFit="contain"
            />
            <Image
              src="/images/star.svg"
              alt="Star"
              width={20}
              height={20}
              objectFit="contain"
            />
            <Image
              src="/images/star.svg"
              alt="Star"
              width={20}
              height={20}
              objectFit="contain"
            />
            <Image
              src="/images/star.svg"
              alt="Star"
              width={20}
              height={20}
              objectFit="contain"
            />
            <Image
              src="/images/star.svg"
              alt="Star"
              width={20}
              height={20}
              objectFit="contain"
            />
            <Image
              src="/images/halfstar.svg"
              alt="Half star"
              width={20}
              height={20}
              objectFit="contain"
            />
          </div>
          <div className="flex items-center gap-1">
            <p>4.6 Stars | 3177 Google reviews</p>
          </div>
        </div>
      </div>

      <div className="flex h-[610px] w-[400px] bottom-0 absolute left-1/2 transform -translate-x-1/2">
        <Image
          className="z-0 object-cover"
          src="/images/homebg.webp"
          alt="Background image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Home;

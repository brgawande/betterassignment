import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-[#004733] pt-[80px] h-[140vh] text-white relative">
      <div className="dflex gap-5 pt-10">
        <div className="h-10 w-10 rounded-full">
          <Image
            className="h-[100%] w-[100%]"
            src="/images/ratedrop.svg"
            alt=""
            fill
          />
        </div>
        <h2 className="text-4xl">Rate drop alert</h2>
      </div>

      <div className="pt-10 dflex ">
        <h2 className="text-[100px] font-bold text-center leading-[1.08] z-10">
          The rate drop you’ve <br /> been waiting for
        </h2>
      </div>
      <div className="pt-[190px] flex justify-evenly gap-[150px]">
        {/* left hand content */}
        <div className="dflex flex-col">
          <button className="px-[50px] py-5 rounded-full bg-[#1ee07f] text-black font-semibold">
            Start my approval
          </button>
          <div className="flex items-center gap-1">
            <MdOutlineTimer />
            <p> 3 min | No credit impact</p>
          </div>
        </div>
        {/* right hannd side content */}
        <div className="dflex flex-col gap-3">
          <div className="dflex gap-1">
            <Image src="/images/googlelogo.svg" alt="" fill />
            <Image src="/images/star.svg" alt="" fill />
            <Image src="/images/star.svg" alt="" fill />
            <Image src="/images/star.svg" alt="" fill />
            <Image src="/images/star.svg" alt="" fill />
            <Image src="/images/halfstar.svg" alt="" fill />
          </div>
          <div className="flex items-center gap-1">
            <p>4.6 Stars | 3177 Google reviews</p>
          </div>
        </div>
      </div>
      <div className="dflex h-[610px] w-full bottom-0 absolute">
        <Image
          className="h-[100%] z-0 w-[100%] object-contain"
          src="/images/homebg.webp"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { MdCall } from "react-icons/md";
import Image from "next/image";

const StartHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <div className="h-[15vh] dflex">
        <div className="relative w-[80%] h-[15vh] z-10 border-b-[4px] border-[#dcd9d4] m-auto flex items-center justify-between">
          <div className="relative h-16 w-16">
            {" "}
            {/* Set relative position for logo */}
            <Image
              src="/images/bettermortagagelogo1.svg"
              alt="Better Mortgage Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="dflex gap-4 items-center">
            <MdCall className="text-xl" />
            <p>Need help? Call (415) 523 8837</p>
          </div>
          <div className="absolute h-12 w-12 rounded-full -bottom-7 left-1/2 transform -translate-x-1/2">
            <Image
              className="h-[100%] w-[100%] rounded-full"
              src="/images/betty1.jpeg"
              alt="Betty"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHeader;

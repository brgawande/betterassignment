import React from "react";
import Image from "next/image";

const Aout1 = () => {
  return (
    <div>
      {/* 1st part */}
      <div className="h-[120vh] pt-10 dflex flex-col">
        <h2 className="text-[#017848] pb-8 text-4xl font-semibold">
          Our mission
        </h2>
        <h1 className="text-5xl text-center font-semibold">
          We&apos;re making homeownership simpler, faster — <br /> and most
          importantly, more accessible for all <br /> Americans.
        </h1>
      </div>
      {/* 2nd part */}
      <div className="flex items-center justify-around gap-5 pb-10">
        {/* text part */}
        <div className="pl-[250px] pr-[80px] w-[50%] flex flex-col items-start justify-center">
          <h1 className="font-bold text-4xl pb-8">The status quo is broken</h1>
          <p className="text-[15px] text-[#3c3c3c] pb-5">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren&apos;t transparent and some are simply
            outrageous in size. Traditional mortgage lending is rife with
            unnecessary fees and slow, painful processes. It&apos;s a system set
            up to benefit insiders — not you. Better.com CEO, Vishal Garg, set
            out to change that.
          </p>
          <button className="bg-[#017848] px-10 py-[20px] rounded-md text-white">
            Read Vishal&apos;s Story
          </button>
        </div>
        {/* image part */}
        <div className="w-[40%] flex items-start justify-start">
          <div className="relative h-[300px] w-[400px]">
            <Image
              src="https://media.better.com/video/vishal-mission.jpg"
              alt="Vishal Garg"
              layout="fill" // Makes the image responsive
              objectFit="contain" // Adjusts the image to fit within the container
            />
          </div>
        </div>
      </div>
      {/* 3rd part */}
      <div className="bg-[#017848] py-20 my-20">
        <div className="text-white flex flex-col w-[70%] m-auto">
          <h1 className="text-4xl font-bold pb-8">
            How we&apos;re changing things
          </h1>
          <p>
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers&apos;.
          </p>
          <p className="pt-5">
            That&apos;s why Better.com is redefining the homeownership process
            from the ground up. We&apos;re using technology to make it faster
            and more efficient, and humans to help make it friendly and
            enjoyable.
          </p>
        </div>
      </div>
      {/* 4th part */}
      <div className="dflex pb-10">
        <div className="dflex flex-col gap-5">
          <h1 className="text-3xl font-bold">Backed by</h1>
          <div className="flex justify-evenly gap-8 pt-10">
            <div className="relative h-20 w-20">
              <Image
                src="/images/company1.svg"
                alt="Company 1"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-20 w-20">
              <Image
                src="/images/company2.svg"
                alt="Company 2"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-20 w-20">
              <Image
                src="/images/company3.svg"
                alt="Company 3"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-20 w-20">
              <Image
                src="/images/company4.svg"
                alt="Company 4"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-20 w-20">
              <Image
                src="/images/company5.svg"
                alt="Company 5"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-20 w-20">
              <Image
                src="/images/company6.svg"
                alt="Company 6"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative h-20 w-20">
              <Image
                src="/images/company7.svg"
                alt="Company 7"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aout1;

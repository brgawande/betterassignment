import React from "react";
import logo from "next/image";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import Image from "next/image";

const Header = ({ bgcolor, text }) => {
  return (
    <div
      className={`bg-${bgcolor} flex text-${text} items-center justify-between px-[60px] py-4 fixed top-0 left-0 right-0 z-10`}
    >
      {/* left half starts */}
      <div className="dflex gap-10">
        <div className="logo">
          {bgcolor === "white" ? (
            <Image src="/images/logo1.svg" />
          ) : (
            <Image src="/images/logo1.svg" className="filter invert" />
          )}
        </div>
        <div className="dflex gap-[70px]">
          <Link href={"/aboutus"}>Buy</Link>
          <Link href={"/aboutus"}>Refinance</Link>
          <Link href={"/aboutus"}>HELOC</Link>
          <Link href={"/aboutus"}>Rates</Link>
          <Link href={"/aboutus"}>Better+</Link>
        </div>
      </div>
      {/* right half starts */}
      <div className="dflex gap-[50px] pr-10">
        {bgcolor === "white" ? (
          <div className="border-[0.5px] border-black hover:bg-[white] h-12 w-12 dflex rounded-full">
            {" "}
            <MdCall className="text-2xl" />
          </div>
        ) : (
          <div className="border-[0.5px] border-white hover:bg-[black] h-12 w-12 dflex rounded-full">
            {" "}
            <MdCall className="text-2xl" />
          </div>
        )}

        <button>Sign in</button>
        {bgcolor === "white" ? (
          <button className="btn bg-darkgreen text-white">Continue</button>
        ) : (
          <button className="btn bg-[#1ee07f] text-black">Continue</button>
        )}
      </div>
    </div>
  );
};

export default Header;

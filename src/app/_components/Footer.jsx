import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="dflex gap-10 py-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/aboutus"}>About Us</Link>
        <Link href={"/start"}>Start</Link>
        <Link href={"/mortgage_calculator"}>Martgage Calculator</Link>
      </div>
    </div>
  );
};

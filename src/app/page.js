import React from "react";
import Home from "./_homecomponents/Home";
import Home1 from "./_homecomponents/Home1";
import Header from "./_components/Header";

const page = () => {
  return (
    <div>
      <Header bgcolor="darkgreen" text="white" />
      <Home />
      <Home1 />
    </div>
  );
};

export default page;

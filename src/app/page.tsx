import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import React from "react";

const page = () => {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
};

export default page;

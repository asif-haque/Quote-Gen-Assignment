import React from "react";
import Card from "../components/Card";

const Generate = () => {
  return (
    <div className="pt-[150px]">
      <div className="flex flex-col items-center space-y-5">
        <button className="bg-neutral-100 border rounded-full px-5 py-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          Generate
        </button>
        <Card />
      </div>
    </div>
  );
};

export default Generate;

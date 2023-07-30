import { paraArr } from "@/constants";
import React from "react";

const ParaFour = () => {
  return (
    <>
      {paraArr?.map((para) => {
        return (
          <div className=" " key={para?.id}>
            <h2 className=" sm:text-[24px] text-[20px]  font-bold my-3">
            {para?.title}
            </h2>
            <div className=" sm:space-y-5  space-y-3">
              <p className="   sm:text-[20px] text-[18px]  sm:text-left text-justify text-h_600 dark:text-[#BABABF]">
              {para?.para}
              </p>
           
            </div>
          </div>
        );
      })}

      {/* para3 */}
    </>
  );
};

export default ParaFour;

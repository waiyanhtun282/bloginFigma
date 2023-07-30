import { ImageTwo, ParaFour, ParaOne, ParaTwoThree } from "@/components";
import { Single1 } from "@/public";
import Image from "next/image";
import { IoMdContact } from "react-icons/io";

const singlePost = () => {
  return (
    <div className="  ">
      <div className=" container mx-auto  flex justify-center">
        <div className="sm:w-[800px] sm:my-10 my-8">
          <div className=" sm:space-y-10 space-y-7">
            {/* blog title */}
            <div className="  space-y-3 sm:text-left text-center ">
              <p className=" bg-p_blue w-[100px] sm:mx-0 mx-auto  rounded-md text-center text-white">
                Technology
              </p>
              <h3 className=" sm:text-[36px] text-[20px]  font-extrabold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h3>

              <div className=" flex  items-center justify-center sm:justify-start sm:gap-5 gap-3">
                <IoMdContact className=" sm:text-[36px] text-[22px] text-h_400" />
                <h4 className=" text-h_400  font-psemibold">Tracey Wilson</h4>
                <p className=" text-h_400  font-psemibold">August 20, 2022</p>
              </div>
            </div>

            {/* imageOne */}
            <div className=" sm:h-[462px] ">
              <Image
                src={Single1}
                className=" w-[100%] object-cover h-[100%] "
                alt="single1"
              />
            </div>

            {/* para one*/}
            <ParaOne />

            {/*  para2 + para3*/}
           <ParaTwoThree />

           {/*trravel  */}
           <div className=" sm:my-5  ">
            <p className="bg-h_100 rounded-md sm:p-6 p-3 font-[400] italic sm:text-[24px] text-[20px] dark:bg-dar dark:text-[#ffffff]">
            “ Traveling can expose you to new environments and potential health risks, so it s crucial to take precautions to stay safe and healthy. ”
            </p>
           </div>

           {/* imgae2 */}
            <ImageTwo />

            {/* para four */}
             <ParaFour />
          </div>
        </div>
      </div>
    </div>
  );
};

export default singlePost;

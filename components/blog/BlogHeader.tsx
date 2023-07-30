import { HeaderImg, Man2 } from "@/public";
import Image from "next/image";
import { IoMdContact } from "react-icons/io";
const BlogHeader = () => {
  return (
    <div className=" relative">
      <Image src={HeaderImg} className="w-[100%] lg:h-[470px] object-cover rounded-md" alt="headerImg" />
      <div className=" absolute lg:bottom-12 lg:left-8 md:bottom-6 md:left-4 bottom-5 left-4">
        <div className=" sm:space-y-3 space-y-2">
          <p className=" bg-p_blue w-[100px] sm:h-[28px] text-white text-center  rounded-sm">
            Technology
          </p>
          <h3 className=" lg:text-[36px] text-white lg:w-[720px] md:max-w-xl md:text-[28px] text-[18px]">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h3>
          <div className=" flex  items-center sm:gap-5 gap-3">
            <IoMdContact className=" sm:text-[36px] text-[22px] text-white" />
            <h4 className=" text-white">Tracey Wilson</h4>
            <p className=" text-white">August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;

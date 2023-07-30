"use client";
import Image from "next/image";
import { HeaderImg, ManImg } from "@/public";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="lg:h-[664px] md:my-8 my-5">
      <div className=" container mx-auto ">
        <motion.div className="  relative "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        >
          <Image
            src={HeaderImg}
            alt=" headerImg"
            className="w-[100%] lg:h-[600px] "
          />
          <motion.div className=" absolute lg:-bottom-12  lg:left-10  md:-bottom-20  md:left-[17%] -bottom-16 left-[9%] "
           initial={{ opacity: 0, scale: 0.3 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           whileInView={{ opacity: 1 }}>
            <div className=" lg:w-[518px] lg:h-[304px] md:w-[80%] w-[90%] p-2 bg-white   rounded-lg  shadow-lg dark:bg-_dark">
              <div
                className=" lg:p-8 md:p-4 sm:space-y-3 space-y-2 "
               
              >
                <p className=" bg-p_blue  text-white  sm:w-[100px]  w-[85px] text-center rounded-lg">
                  Technology
                </p>
                <h2 className=" lg:text-[36px]  md:text-[18px] font-pnormal">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </h2>
                <div className=" flex  items-center sm:gap-3 gap-2">
                  <Image
                    src={ManImg}
                    className=" w-[25px] sm:w-auto"
                    alt="manimg"
                  />
                  <h4 className=" text-h_400">Jason Francisco</h4>
                  <p className=" text-h_400">August 20, 2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;

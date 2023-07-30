"use client";
import { cardArr } from "@/constants";
import { Card1, ManImg } from "@/public";
import Image from "next/image";
import Card from "./Card";
import Link from "next/link";
import  { motion } from "framer-motion";
const HomeCard = () => {
  // const arr = Array(9).fill("");
  return (
    <motion.div className="  lg:my-12   mt-24"
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <div className="hidden lg:block container mx-auto">
        {/*  */}
        <div className=" bg-h_100 p-5 w-[750px] h-[100px] rounded-md mx-auto text-center  py-3 dark:bg-dar">
          <p className=" text-h_500">Advertisement</p>
          <h3 className=" text-[20px] text-h_500 ">You can place ads</h3>
          <p className=" text-h_500">750x100</p>
        </div>
      </div>

      {/* card */}
      <div className=" container mx-auto">
        <div className=" ">
          <h3 className=" text-h_800 lg:text-[24px] md:text-[20px] font-psemibold lg:my-10 md:my-8 my-5 dark:text-white">
            Latest Post
          </h3>
          <div className="  grid  lg:grid-cols-3  lg:gap-5 md:grid-cols-2 md:gap-4 gap-3">
            {cardArr?.map((item) => {
              return <Card item={item} key={item?.id} />;
            })}
          </div>
        </div>
      </div>

      <div className=" container mx-auto lg:my-12 md:my-6 my-3">
        <div className="  flex justify-center  items-center flex-col lg:space-y-10  ">
          <Link href={'/blog'}>
          <p className=" cursor-pointer text-h_500 sm:w-[142px] sm:h-[48px] w-[100px] h-[30px] border border-h_100  flex items-center justify-center sm:text-[16px] text-[14px]  rounded-md shadow-sm sm:my-5 my-3 dark:border-h_600">
            View All Post
          </p>
          </Link>

          <div className=" bg-h_100 sm:p-5 lg:w-[750px] w-[80%] sm:h-[100px]  rounded-md  text-center sm:py-3 dark:bg-dar">
            <p className=" text-h_500">Advertisement</p>
            <h3 className=" sm:text-[20px] text-[16px] text-h_500 ">You can place ads</h3>
            <p className=" text-h_500">750x100</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeCard;

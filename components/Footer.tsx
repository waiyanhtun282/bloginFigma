import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { Logo2, NavLogo } from "@/public";
const Footer = () => {
  return (
    <div className=" lg:h-[500px]  lg:py-0 bg-h_100  lg:flex lg:items-center  md:py-10  py-5  dark:bg-h_900 dark:border-[#242535] ">
      <div className=" container mx-auto">
        <div className=" grid lg:grid-cols-3  lg:gap-0 md:grid-cols-2 gap-5  ">
          <div className=" space-y-3  ">
            <h2 className=" font-psemibold sm:text-[18px] sm:text-left text-[17px]  text-center ">About</h2>
            <p className=" text-h_500 max-w-xs md:text-left text-justify dark:text-h_400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="">
              <h3>
                <span className=" font-psemibold">Email</span> :{" "}
                <span className=" text-h_600 dark:text-h_400">info@jstemplate.net</span>
              </h3>
              <h3>
                <span className=" font-psemibold">Phone</span>{" "}
                <span className=" text-h_600 dark:text-h_400">880 123 456 789</span>
              </h3>
            </div>
          </div>

          <div className=" grid grid-cols-2 ">
            <div className=" lg:space-y-3 space-y-2 ">
              <h4 className=" text-[18px] ">Quick Link</h4>
              <ul className=" text-h_600 space-y-2 dark:text-h_400">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li> Archived</li>
                <li>Author</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className=" lg:space-y-3 space-y-2 ">
              <h4 className=" text-[18px]">Category</h4>
              <ul className=" text-h_600 space-y-2 dark:text-h_400">
                <li>Lifestyle</li>
                <li>Technology</li>
                <li>Travel</li>
                <li> Business</li>
                <li>Economy</li>
                <li>Sports</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-[400px] lg:p-5 md:p-3 lg:col-auto   md:w-[80%] md:col-span-2 p-2  w-[100%] mx-auto bg-white rounded-md dark:bg-dar">
            <div className=" text-center space-y-3">
              <h3 className=" sm:text-[20px] text-[18px]">Weekly Newsletter</h3>
              <p className=" text-h_500">
                Get blog articles and offers via email
              </p>
              <div className=" relative ">
                <input
                  type="email"
                  className=" outline-none bg-transparent p-2  border  border-h_100 rounded-md w-[100%] dark:bg-h_800 dark:border-h_600"
                  placeholder="Email"
                />
                <AiOutlineMail
                  size={18}
                  className=" absolute top-3 right-2 text-h_400"
                />
              </div>
              <button className=" bg-p_blue w-[100%] p-2 rounded-md text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className=" h-[0.7px] bg-[#DCDDDF] lg:my-12 md:my-6 my-3 dark:bg-h_800"></div>

        <div className=" flex justify-between items-center">
          {/* logo */}
          <div className=" flex items-center sm:gap-3 gap-2">
            <Image src={Logo2}  alt="navlogo" className="  sm:w-[48px] w-[32px]" />
            <div className="">
              <h2 className=" hidden sm:block">
                Meta
                <span className=" font-semibold ">Blog</span>
              </h2>
              <p className=" text-h_500 lg:max-w-none md:max-w-[200px] md:block hidden dark:text-[#BABABF]">
              © JS Template 2023. All Rights Reserved.
              </p>
            </div>
          </div>

          {/*  */}
          <div className="   ">
            <ul className="  grid grid-cols-3 lg:gap-5 md:gap-3  gap-2 ">
              <li className="text-h_500  sm:text-[16px] text-[14px]  ">Terms of Use</li>
              <li className="text-h_500 sm:text-[16px]  text-[14px] ">Privacy Policy</li>
              <li className="text-h_500 sm:text-[16px]  text-[14px] ">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

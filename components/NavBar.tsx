'use client';
import { Logo2, NavLogo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FC, useEffect, useRef, useState } from "react";
import { nav } from "@/constants";
import ThemeButton from "./ThemeButton";
import { useScroll } from "framer-motion";



const NavBar: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);


  const handleMobileMenu = () => {
    setMenu(!menu);
    
  };

  return (
    <div className={` container mx-auto `}  >
      <div className="   grid lg:grid-cols-3 grid-cols-2  sm:py-5 py-3 items-center">
        {/* navlogo */}
        <div className=" sm:text-[18px] text-[16px] flex  items-center gap-2 dark:text-white">
          <Image
            src={NavLogo}
            className=" md:w-[36px]  w-[28px] sm:block hidden "
            alt="navlogo"
          />
          <Image
            src={Logo2}
            className=" md:w-[36px]  w-[28px] block sm:hidden "
            alt="navlogo"
          />
          
          <h2 className="sm:flex hidden">
            Meta
            <span className=" font-semibold ">Blog</span>
          </h2>
        </div>
        {/* pagelink */}
        <ul className="lg:flex lg:justify-between lg:items-center  hidden">
          {nav?.map((n) => {
            return (
              <Link href={n.pageLink} key={n.id}>
                <li className=" cursor-pointer">{n.name}</li>
              </Link>
            );
          })}
        </ul>

        {/* input */}

        <div className=" flex items-center lg:gap-3 sm:gap-5 gap-2 justify-end">
          <div className="relative">
            <input
              type="text"
              className=" outline-none bg-h_100 sm:p-2 p-1 sm:w-auto w-[195px] rounded-md dark:bg-dar "
              placeholder="Search"
            />
            <BsSearch className="sm:w-[18px] absolute sm:top-3 top-2 right-2" />
          </div>
          <div
            className=" cursor-pointer"
           
          >
            <ThemeButton />
          </div>

          <div className={` lg:hidden z-[100]`} onClick={handleMobileMenu}>
            {
              !menu ?
            (  <HiMenuAlt1 className=" w-[24px] h-6  cursor-pointer z-50  bg-h_600 rounded-full text-white dark:bg-dar " /> ):
            (  <RxCross2
              className="w-[24px] h-6 fixed md:top-7 md:right-14 top-4 right-4 cursor-pointer z-50  bg-h_600 rounded-full  text-white dark:bg-_dark "
             
            />)
            }
         
          
          </div>
        </div>
      </div>

      {/* for mobile menu  */}
      <div className={`min-h-screen   w-full   lg:hidden  fixed  top-0 bottom-0 duration-300   transition-all    z-50 ${menu  ? "left-0" :" -left-[100%]"} `}>
        <div className=" h-screen bg-[#eaeaea]  flex justify-center items-center   dark:bg-dar">
          <ul className="  grid md:gap-16 gap-12  text-center">
            {nav?.map((n) => {
              return (
                <Link href={n?.pageLink} key={n.id}>
                  <li className=" cursor-pointer md:text-[20px] text-[18px]" onClick={ () =>setMenu(false)}>{n.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

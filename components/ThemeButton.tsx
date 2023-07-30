'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted,setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true) 
  
     
},[]);


  if(!mounted) {
    return null
  }
  return (
    <button className="cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (<RiMoonClearLine    className=" text-p_blue lg:text-[24px] md:text-[20px] text-[18px]"/>) : ( <MdOutlineLightMode className=" lg:text-[24px] md:text-[20px] text-[18px]"/>)}
    </button>
  );
};

export default ThemeButton;

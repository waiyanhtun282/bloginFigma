import React from 'react'
import Image from 'next/image';
import { Single2 } from '@/public';
const ImageTwo = () => {
  return (
    <div className=" sm:space-y-5 space-y-3">

    <div className=" sm:h-[462px] ">
      <Image
        src={Single2}
        className=" w-[100%] object-cover h-[100%] "
        alt="single1"
      />
    </div>
    <div className=" bg-h_100 sm:p-5 lg:w-[700px] w-[80%] sm:h-[100px]  rounded-md  text-center sm:py-3 mx-auto dark:bg-dar">
    <p className=" text-h_500">Advertisement</p>
    <h3 className=" sm:text-[20px] text-[16px] text-h_500 ">You can place ads</h3>
    <p className=" text-h_500">750x100</p>
  </div>
    </div>
  )
}

export default ImageTwo

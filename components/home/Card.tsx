import Image from "next/image";

const Card = ({item}:any) => {
  return (
    <div
      className=" flex flex-col  items-center  bg-[#fffefe]  lg:p-3 p-2   rounded-md shadow-sm border border-[#E8E8EA] dark:bg-_dark dark:shadow-sm dark:border-h_600 "
      key={item?.id}
    >
      <Image src={item?.image}  width={300} height={200} className="w-[100%]" alt="Card1" />
      <div className=" ">
        <p className="my-5 bg-h_100 text-[14px] w-[80px]  text-center   text-p_blue rounded-md dark:bg-dar">
          Technology
        </p>

        <h3 className=" text-h_800 lg:text-[24px] md:text-[20px]  sm:my-5 my-3 dark:text-white">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
        <div className=" flex  items-center sm:gap-5 gap-3">
          <Image src={item?.man} className=" "  width={40} height={40} alt="manimg" />
          <h4 className=" text-h_400">Tracey Wilson</h4>
          <p className=" text-h_400">August 20, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

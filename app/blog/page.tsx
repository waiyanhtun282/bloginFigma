import { BlogHeader, Card } from "@/components";
import { cardArr } from "@/constants";
import Link from "next/link";
const blog = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className=" text-center lg:my-10 my-5 space-y-2">
          <h2 className=" lg:text-[30px]  md:text-[25px] font-psemibold">Page Title</h2>
          <h1 className=" flex gap-2 justify-center">
          <Link href={'/'}>
          <span className=" text-h_600 cursor-pointer">Home</span>
          </Link>
            <span className=" text-h_500 cursor-pointer">Link One</span>
          </h1>
        </div>
      </div>

      {/* headeBlog */}
      <div className=" container mx-auto">
        <BlogHeader />
      </div>

      {/* blogpagecard */}
       <div className=" container mx-auto my-10">
       <h3 className=" hidden text-h_800 lg:text-[24px] md:text-[20px] font-psemibold lg:my-10 md:my-8 my-5 dark:text-white dark:block">
            Latest Post
          </h3>
       <div className="  grid  lg:grid-cols-3  lg:gap-5 md:grid-cols-2 md:gap-4 gap-3">
            {cardArr?.map((item) => {
              return <Card item={item} key={item?.id} />;
            })}
          </div>
       </div>

       {/* end blog */}
       <div className=" container mx-auto lg:my-12 md:my-6 my-3">
        <div className="  flex justify-center  items-center flex-col lg:space-y-10  ">
         <Link href={'/'}>
         <p className=" cursor-pointer text-h_500 sm:w-[142px] sm:h-[48px] w-[100px] h-[30px] border border-h_100  flex items-center justify-center sm:text-[16px] text-[14px]  rounded-md shadow-sm sm:my-5 my-3 dark:border-h_600">
            LoadMore
          </p>
         </Link>

          <div className=" bg-h_100 sm:p-5 lg:w-[750px] w-[80%] sm:h-[100px]  rounded-md  text-center sm:py-3 dark:bg-dar">
            <p className=" text-h_500">Advertisement</p>
            <h3 className=" sm:text-[20px] text-[16px] text-h_500 ">You can place ads</h3>
            <p className=" text-h_500">750x100</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default blog;

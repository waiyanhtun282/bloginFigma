import { Card } from "@/components";
import { cardArr } from "@/constants";
import { Author } from "@/public";
import Image from "next/image";
import  { AiFillFacebook ,AiFillTwitterSquare , AiOutlineInstagram ,AiFillYoutube} from 'react-icons/ai';
const AuthorPage = () => {
  return (
    <div className="container mx-auto">
      <div className=" bg-h_100 rounded-md sm:p-8 sm:my-10 p-5  my-6 dark:bg-[#242535]">
       <div className="  sm:text-center sm:space-y-5 space-y-3 text-justify">
         {/* author */}
         <div className=" flex items-center justify-center gap-3">
          <Image src={Author} className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]  object-cover" alt="authorimage" />
          <div className=" text-left">
            <h4 className=" text-h_800 dark:text-white ">Jonathan Doe</h4>
            <p className=" text-h_500 dark:text-[#BABABF]">Collaborator & Editor</p>
          </div>
        </div>

        <div className=" flex justify-center  ">
       <p className=" max-w-lg text-h_600 dark:text-[#BABABF]">
       Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.
       </p>
        </div>
        {/* icon */}
        <div className=" flex gap-3 justify-center">
          <AiFillFacebook className=" text-[20px] text-h_500"/>
          <AiFillTwitterSquare className=" text-[20px] text-h_500"/>
          <AiOutlineInstagram className=" text-[20px] text-h_500"/>
          <AiFillYoutube className=" text-[20px] text-h_500"/>
        </div>
       </div>
      </div>

      {/* card */}
      <div className=" lg:my-14 my-8">
          <h3 className=" text-h_800 lg:text-[24px] md:text-[20px] font-psemibold lg:my-10 md:my-8 my-5">
            Latest Post
          </h3>
          <div className="  grid  lg:grid-cols-3  lg:gap-5 md:grid-cols-2 md:gap-4 gap-3">
            {cardArr?.map((item) => {
              return <Card item={item} key={item?.id} />;
            })}
          </div>
        </div>
    </div>
  );
};

export default AuthorPage;

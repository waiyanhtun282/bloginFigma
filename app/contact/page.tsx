import { TextArea } from '@/components'
import Input from '@/components/contact/Input';
import { InputTypProps } from '@/types/type';

import React, { FC } from 'react'
type ContactPageProps = {};
type InputTypPropsWithOptionalValue = InputTypProps & { value?: string };

const ContactPage:FC<ContactPageProps> = () => {
  return (
    <div>
    <div className="container mx-auto my-[60px] lg:my-[128px]">
      <div className="" data-aos="zoom-in">
        <h3 className=" text-[35px] text-center">Contact Us</h3>
        <p className="text-center mt-[16px] text-h_600 dark:text-h_400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <br />
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className=" max-w-[1060px] mt-[40px] md:mt-[60px] mx-auto" data-aos="zoom-in">
        <div className="p-[20px] md:p-[50px] bg-c_gray">
          <form action="">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[30px]">
              <div className="">
                <Input type={"text"} label={"Name"} />
              </div>
              <div className="">
                <Input type={"email"} label={"Email"} />
              </div>
              <div className="">
                <Input type={"text"} label={"Address"} />
              </div>
              <div className="">
                <Input type={"text"} label={"Subject"} />
              </div>
              <div className=" md:col-span-2">
                <TextArea label={"Message"} />
              </div>
            </div>
            <button className="rounded-full bg-p_blue sm:p-5 p-3 text-white mt-[32px]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactPage;

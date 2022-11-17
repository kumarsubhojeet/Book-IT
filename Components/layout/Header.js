import React, { useState } from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import { Button, Drawer, Tooltip } from "antd";
import { AiOutlineMenu } from "react-icons/ai";

export default function header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <div>
          <div className="light_shadow pc_nav sm:hidden lg:block px-10 rounded-b-lg w-[80%] mx-auto   ">
            <div className=" flex justify-between items-center ">
              <div>
                <Image src={Logo} alt="BookIT" />
              </div>
              <div className="cursor-pointer pt-[19px] ">
                <Tooltip placement="rightTop" title='Click to Login'> 
                  <p className="dark_shadow transition ease-in-out delay-150 bg-primeBlue rounded-lg  duration-300 ... py-1 px-10 hover:bg-Secoundary_voilet  text-white text-lg ">
                    Login
                  </p>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="Mobile_nav sm:block lg:hidden   ">
            <div className="light_shadow py-5 px-7 flex justify-between items-center ">
              <Image src={Logo} alt="BookIT" />
              <AiOutlineMenu onClick={showDrawer} className=" text-2xl " />
            </div>
          </div>
        </div>

        <Drawer
          width="300"
          title="BOOK-IT MENU"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    </>
  );
}

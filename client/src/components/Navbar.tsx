import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuAudioLines } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import Ellise from "../assets/Ellipse 1.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar: React.FC = () => {
  return (
    <nav>
      {/*Mobile view*/}
      <div className="flex flex-row items-center justify-between h-17.945 py-4.5 px-6 bg-[#101010] border-b-0.5 border-b-[#7D7D7D] mx-auto w-full md:hidden">
        <GiHamburgerMenu className="text-[#FFFFFF] text-[24px]" />

        <div className="flex flex-row gap-3 items-center justify-center">
          <LuAudioLines className="text-[30px] text-[#FFFFFF]" />
          <p className="font-[Mina] font-bold text-[12px] leading-4.66 tracking-0.37 text-[#FFFFFF]">
            AUDIOPHILE
          </p>
        </div>

        <MdOutlineShoppingCart className=" text-[#FFFFFF] text-[24px]" />
      </div>
      {/*Desktop view*/}

      <div className="w-full h-24.5 bg-[#101010] text-white md:flex flex-row px-40 justify-between hidden">
        <div className="flex flex-row gap-3 items-center">
          <LuAudioLines className="w-11 h-11" />

          <p className="text-[15px] font-bold leading-6.25 tracking-[2px]">
            AUDIOPHILE
          </p>
        </div>
        <div className="flex flex-row gap-8.5 items-center">
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            HOME
          </p>
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            HEADPHOENES
          </p>
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            SPEAKERS
          </p>
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            EARPHONES
          </p>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row items-center gap-2">
            <MdOutlineShoppingCart className="w-6 h-6" />
            <p className="font-bold text-4 leading-6.25 tracking-[2px]">CART</p>
          </div>
          <button className="w-23 h-[48] border border-[]1px] border-[#FFFFFF] p-2.5 text-white ">
            LOG IN
          </button>
          <button className="w-26.5 h-12 bg-[#D87D4A]">SIGN UP</button>
        </div>
      </div>

      <div className="w-full h-24.5 bg-[#101010] text-white md:flex flex-row px-40 justify-between hidden">
        <div className="flex flex-row gap-3 items-center">
          <LuAudioLines className="w-11 h-11" />

          <p className="text-[15px] font-bold leading-6.25 tracking-[2px]">
            AUDIOPHILE
          </p>
        </div>
        <div className="flex flex-row gap-8.5 items-center">
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            HOME
          </p>
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            HEADPHOENES
          </p>
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            SPEAKERS
          </p>
          <p className="text-[16px] font-bold leading-100% tracking-[2px]">
            EARPHONES
          </p>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row items-center gap-4">
            <MdOutlineShoppingCart className="w-6 h-6" />
            <p className="font-bold text-4 leading-6.25 tracking-[2px]">CART</p>
            <div className="flex flex-row items-center gap-2">
              <img src={Ellise} alt="" />
              <p className="text-[13px] font-bold tracking-[2px]">JANE DEO</p>
              <div>
                <IoIosArrowDown className="text-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

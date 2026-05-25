import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="mx-auto bg-black bg-[url('/public/bg-mobile.png')] md:bg-[url('/public/bg-desktop.png')] w-93.75  md:w-360 h-180 bg-center bg-cover flex items-center justify-center md:justify-start md:ps-30 ">
      <div className="flex flex-col gap-6 items-center md:items-start md:w-99 ">
        <p className="text-[14px] tracking-[10px] text-[#FFFFFF] font-normal">
          NEW PRODUCT
        </p>
        <h1 className="text-[36px] text-[#FFFFFF] font-bold leading-10 tracking-[1.29px] font-[Manrope] uppercase md:text-[56px] md:text-left md:leading-14.5">
          XX99 Mark II HeadphoneS
        </h1>
        <p className="text-[15px] text-[#FFFFFF] font-normal leading-6.25 px-10 md:px-0 md:text-left">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="md:flex gap-4">
          <button className="bg-[#D87D4A] w-40 flex items-center justify-center py-3 text-[13px] text-[#FFFFFF] font-bold md:text-[16px] md:w-37.75 uppercase tracking-[1px]">
            See Product
          </button>

          <button className="bg-transparent border border-[#FFFFFF] w-26.5 items-center justify-center py-3 text-[16px] text-[#FFFFFF] font-bold  uppercase tracking-[1px] hidden md:flex">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

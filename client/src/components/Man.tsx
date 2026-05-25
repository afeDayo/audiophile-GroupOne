import React from "react";
import man from "../assets/Bitmap.png";
import desktop from "../assets/Bitmap (1).png";

const Man: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto max-w-93.75 items-center md:flex-row-reverse md:max-w-277.5 md:justify-between md:gap-5">
      <div className="">
        <img src={man} alt="" className="md:hidden" />
        <img src={desktop} alt="" className="hidden md:block md:h-147" />
      </div>

      <div className="md:flex md:flex-col md:gap-900">
        <div className="py-5 px-6.25 md:w-111 md:items-center  md:flex md:flex-col md:gap-7 ">
          <h2 className="text-center font-Manrope text-[#000000] text-[28px] leading-100% font-bold items-center md:text-left md:leading-11 md:px-0 md:pe-30">
            BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO
            GEAR
          </h2>
          <div className="">
            <p className="font-normal text-[15px] leading-6.25 px-8 md:text-left md:leading-6.25 md:px-0 md:pr-8.5 md:content-center-safe">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Man;

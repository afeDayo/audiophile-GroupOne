import React from "react";
import mobileSpeaker from "../assets/m-mobile.png";
import mobileSpeak from "../assets/m-mobile-1.png";
import mobileHphone from "../assets/h-mobile.png";
import mobileEphone from "../assets/e-mobile.png";
import right from "../assets/right.png";

const EarphonesPage: React.FC = () => {
  return (
    <div className="max-w-[420px] md:max-w-full md:m-auto mb-10 md:mb-20">
      <section className="text-[#FFFFFF] bg-[#000000] w-full h-35 text-[48px] font-normal mt-20 pt-12">
        EARPHONES
      </section>
      <section className="md:grid md:grid-cols-2 md:m-auto md:max-w-[1180px] md:gap-20 md:mt-15">
        <div className="w-80 md:w-120 md:h-110 md:ps-28 md:pt-28 h-85 bg-[#F1F1F1] m-auto mt-15 pt-15 ps-12 rounded-md">
          <img src={mobileEphone} alt="" className="w-55 md:w-60" />
        </div>
        <div className="mt-15 pb-10 flex flex-col items-center gap-5 md:gap-2 md:items-start md:mt-25">
          <h3 className="text-[#D87D4A] text-[16px] font-light tracking-[10px]">
            NEW PRODUCT
          </h3>
          <div className="md:flex md:flex-col md:items-start">
            <h2 className="text-[#000000] text-[35px] font-semibold">
              YX1 WIRELESS
            </h2>
            <h2 className="text-[#000000] text-[35px] font-semibold">
              EARPHONES
            </h2>
          </div>
          <p className="text-[#000000]/50 text-[18px] font-normal ps-5 pe-5 md:ps-0 md:pe-25 md:text-start">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button className="mt-5 h-15 md:h-12 w-45 text-[17px] font-medium tracking-[1px] text-[#FFFFFF] bg-[#D87D4A]">
            SEE PRODUCT
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-25 md:flex-row md:mt-30 md:w-[1110px] md:m-auto">
        <div className="relative bg-[#F1F1F1] m-auto mt-30 w-80 md:mt-0 md:h-45 md:gap-2 h-50 pt-25 flex flex-col items-center gap-5 rounded-md">
          <img src={mobileHphone} alt="" className="absolute -top-12" />
          <h3 className="font-medium text-[#000000] text-[18px] tracking-[1px]">
            HEADPHONES
          </h3>
          <div className="flex items-center gap-4">
            <p className="font-medium text-[#000000]/50 text-[17px]">SHOP</p>
            <img src={right} alt="" className="h-3 w-2" />
          </div>
        </div>
        <div className="relative bg-[#F1F1F1] m-auto w-80 md:h-45 md:gap-2 h-50 pt-25 flex flex-col items-center gap-5 rounded-md">
          <img
            src={mobileSpeaker}
            alt=""
            className="absolute -top-12 w-22 h-28"
          />
          <h3 className="font-medium text-[#000000] text-[18px] tracking-[1px]">
            SPEAKERS
          </h3>
          <div className="flex items-center gap-4">
            <p className="font-medium text-[#000000]/50 text-[17px]">SHOP</p>
            <img src={right} alt="" className="h-3 w-2" />
          </div>
        </div>
        <div className="relative bg-[#F1F1F1] m-auto w-80 md:h-45 md:gap-2 h-50 pt-25 flex flex-col items-center gap-5 rounded-md">
          <img src={mobileEphone} alt="" className="absolute -top-12 w-30" />
          <h3 className="font-medium text-[#000000] text-[18px] tracking-[1px]">
            EARPHONES
          </h3>
          <div className="flex items-center gap-4">
            <p className="font-medium text-[#000000]/50 text-[17px]">SHOP</p>
            <img src={right} alt="" className="h-3 w-2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarphonesPage;

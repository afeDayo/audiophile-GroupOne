import React from "react";
import Man from "../components/Man";
import Cart from "../components/Cart";
import HeroSection from "../components/HeroSection";
import Headphones from "../assets/headset.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Speaker from "../assets/speaker.png";
import Earphones from "../assets/earphones.png";
import SpeakerMob from "../assets/speaker mob big.png";
import Earpiece from "../assets/earfone.png";
import HeadPhonedesk from "../assets/headset desk.png";
import SpeakerDesk from "../assets/speaker desk.png";
import EarPhoneDesk from "../assets/earphones desk.png";
import SpeakerBig from "../assets/speaker desk big.png";
import BigEarphone from "../assets/earfone desk.png";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-12 mx-auto md:gap-24">
      <HeroSection />

      <div className="mt-12 flex flex-col items-center gap-9 md:gap-18">
        <div className="flex flex-col gap-20 md:flex-row md:gap-7">
          <div className="w-93 h-41.25 md:w-87.5 md:h-51 bg-[#F1F1F1] relative flex flex-col gap-3 items-center pt-20 md:pt-30">
            <img
              src={Headphones}
              alt=""
              className="absolute md:hidden -top-15 z-20"
            />
            <img
              src={HeadPhonedesk}
              alt=""
              className="absolute -top-15 md:block hidden z-20"
            />
            <span className="bg-black/50 w-40 h-5 blur-xl absolute bottom-25 z-10" />

            <p className="text-[16px] md:text-[18px] text-[#000000] font-bold z-20">
              HEADPHONES
            </p>
            <div className="flex items-center gap-3 z-20">
              <p className="text-[13px]  text-[#00000050] font-bold uppercase">
                Shop
              </p>
              <MdOutlineArrowForwardIos className="text-[#D87D4A]" />
            </div>
          </div>

          <div className="w-93 h-41.25 md:w-87.5 md:h-51 bg-[#F1F1F1] relative flex flex-col gap-3 items-center pt-20 md:pt-30">
            <img
              src={Speaker}
              alt=""
              className="absolute -top-15 md:hidden z-20"
            />
            <img
              src={SpeakerDesk}
              alt=""
              className="absolute -top-15 hidden md:block z-20"
            />
            <span className="bg-black/50 w-40 h-5 blur-xl absolute bottom-25 z-10" />
            <p className="text-[16px] md:text-[18px] text-[#000000] font-bold z-20">
              SPEAKERS
            </p>
            <div className="flex items-center gap-3 z-20">
              <p className="text-[13px] text-[#00000050] font-bold uppercase">
                Shop
              </p>
              <MdOutlineArrowForwardIos className="text-[#D87D4A]" />
            </div>
          </div>

          <div className="w-93 h-41.25 md:w-87.5 md:h-51 bg-[#F1F1F1] relative flex flex-col gap-3 items-center pt-20 md:pt-30">
            <img
              src={Earphones}
              alt=""
              className="absolute -top-10 md:hidden z-20"
            />
            <img
              src={EarPhoneDesk}
              alt=""
              className="absolute -top-10 hidden md:block z-20"
            />
            <span className="bg-black/50 w-40 h-5 blur-xl absolute bottom-25 z-10" />
            <p className="text-[16px] md:text-[18px] text-[#000000] font-bold z-20">
              EARPHONES
            </p>
            <div className="flex items-center gap-3 z-20">
              <p className="text-[13px] text-[#00000050] font-bold uppercase">
                Shop
              </p>
              <MdOutlineArrowForwardIos className="text-[#D87D4A]" />
            </div>
          </div>
        </div>

        <div className="bg-[url('/ring.png')] bg-center bg-cover bg-no-repeat w-93 h-150 rounded-lg flex flex-col items-center justify-center gap-6 bg-[#D87D4A] md:bg-[url('/ring2.png')] md:w-277.5 md:bg-bottom-left md:bg-contain md:flex-row md:gap-34.5">
          <img src={SpeakerMob} alt="" className="md:hidden" />
          <img src={SpeakerBig} alt="" className="hidden md:block" />

          <div className="flex flex-col w-93 gap-6 items-center md:items-start">
            <h1 className="text-[36px] md:text-[56px] text-[#FFFFFF] font-bold leading-10 tracking-[1.29px] font-[Manrope] uppercase px-30 md:px-0 md:text-left md:leading-14.5 ">
              ZX9 SPEAKER
            </h1>
            <p className="text-[15px] text-[#FFFFFF] font-normal leading-6.25 px-10 md:px-0 md:pe-15 md:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="bg-[#000000] w-40 flex items-center justify-center py-3 text-[13px] md:text-[16px] text-[#FFFFFF] font-bold uppercase tracking-[1px] md:w-47.5">
              See Product
            </button>
          </div>
        </div>

        <div className="bg-[url('/BgZ.png')] md:bg-[url('/121a64b35a4a2edd39b77f4e4cc131acd8c3bd24.png')] bg-center bg-cover bg-no-repeat w-93 md:w-277.5 h-80 flex flex-col items-start gap-3 justify-center ps-6 rounded-lg md:ps-16 md:gap-6">
          <p className="text-[28px] text-[#000000] font-bold tracking-[2px]">
            ZX7 SPEAKER
          </p>

          <button className="bg-transparent border border-black w-40 flex items-center justify-center py-3 text-[13px] text-[#000000] md:text-[16px] md:w-47.5 font-bold uppercase tracking-[1px]">
            See Product
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-9">
          <img src={Earpiece} alt="" className="w-93 md:hidden" />
          <img src={BigEarphone} alt="" className="hidden md:block" />

          <div className="bg-[#F1F1F1] w-93 h-50 flex flex-col items-start justify-center ps-10 gap-6 md:w-135 md:h-79.5 md:ps-24">
            <p className="text-[28px] text-[#000000] font-bold tracking-[2px]">
              YX1 EARPHONES
            </p>

            <button className="bg-transparent border border-black w-40 md:w-47.5 flex items-center justify-center py-3 text-[13px] md:text-[16px] text-[#000000] font-bold uppercase tracking-[1px]">
              See Product
            </button>
          </div>
        </div>
        <Cart />
      </div>

      <Man />
    </div>
  );
};

export default HomePage;

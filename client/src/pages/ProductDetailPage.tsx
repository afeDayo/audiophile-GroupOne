import React from "react";
import headphone from "../assets/headphone11.png";
import person from "../assets/new person.png";
import headSet from "../assets/headset pic.png";
import lastHeadset from "../assets/heasd.png";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import whiteHeadSet from "../assets/white headset.png";
import blackHeadSet from "../assets/headset small.png";
import blackSpeaker from "../assets/speaker small.png";
import Headphones from "../assets/headset.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Speaker from "../assets/speaker.png";
import Earphones from "../assets/earphones.png";
import HeadPhonedesk from "../assets/headset desk.png";
import SpeakerDesk from "../assets/speaker desk.png";
import EarPhoneDesk from "../assets/earphones desk.png";
import headphoneBig from "../assets/headphonenewbig.png";
import { MdArrowBackIosNew } from "react-icons/md";
import personBig from "../assets/new person big.png";
import headsetBig from "../assets/headset pic big.png";
import lastHeadsetBig from "../assets/heasd big.png";
import whiteHeadSetBig from "../assets/white headset big.png";
import blackHeadSetBig from "../assets/headset big.png";
import blackSpeakerBig from "../assets/speaker desk bigg.png";

const ProductDetailPage: React.FC = () => {
  return (
    <div className="w-94.5 md:w-278 flex flex-col gap-3 md:gap-15 items-start mx-auto md:px-10 pt-3">
      <p className="text-[#00000050] text-[15px] font-normal md:hidden">
        Go Back
      </p>
      <div className="hidden md:flex items-center gap-1">
        <p className="text-[#00000050] text-[15px] font-normal">Headphones</p>
        <MdArrowBackIosNew className="text-[#00000050] text-[15px]" />
        <p className="text-[#D87D4A] text-[15px] font-normal">
          XX99 Mark II Headphones
        </p>
      </div>
      <div className="flex flex-col gap-30 items-center md:items-start">
        <div className="flex flex-col gap-9 md:flex-row md:justify-between md:items-center md:w-277.5">
          <div className="w-81.75 h-81.75 md:w-135 md:h-135  bg-[#F1F1F1] flex items-center justify-center">
            <img src={headphone} alt="" className="md:hidden" />
            <img src={headphoneBig} alt="" className="hidden md:flex" />
          </div>

          <div className="flex flex-col items-start gap-6 md:w-111.5">
            <p className="text-[14px] tracking-[10px] text-[#D87D4A] font-normal">
              NEW PRODUCT
            </p>
            <p className="text-[36px] md:text-[40px] text-[#000000] font-bold leading-10 text-left font-[Manrope] uppercase ">
              XX99 Mark II Headphones
            </p>
            <p className="text-[15px] text-[#00000050] leading-6.25 font-normal text-left">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>

            <p className="text-[15px] md:text-[18px] text-[#000000] font-bold text-left">
              $ 29,999
            </p>

            <div className="flex gap-4">
              <button className="bg-[#F1F1F1] w-30 md:w-26.5 flex items-center justify-center gap-7 py-3">
                <AiOutlineMinus className="text-[#00000050] text-[6px]" />
                <p className="text-[13px] text-[#000000] font-bold uppercase tracking-[1px]">
                  1
                </p>
                <IoMdAdd className="text-[#00000050] text-[6px]" />
              </button>

              <button className="bg-[#D87D4A] w-40 md:w-47.5 items-center justify-center py-3 text-[13px] md:text-[16px] text-[#FFFFFF] font-bold  uppercase tracking-[1px]">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9 items-start md:flex-row md:justify-between md:w-277.5">
          <div className="flex flex-col items-start gap-4 md:w-158.75">
            <p className="text-[24px] text-[#000000] font-bold">FEATURES</p>
            <div className="flex flex-col gap-6">
              <p className="text-[15px] text-[#00000050] leading-6.25 font-normal text-left">
                Featuring a genuine leather head strap and premium earcups,
                these headphones deliver superior comfort for those who like to
                enjoy endless listening. It includes intuitive controls designed
                for any situation. Whether you’re taking a business call or just
                in your own personal space, the auto on/off and pause features
                ensure that you’ll never miss a beat.
              </p>
              <p className="text-[15px] text-[#00000050] leading-6.25 font-normal text-left">
                The advanced Active Noise Cancellation with built-in equalizer
                allow you to experience your audio world on your terms. It lets
                you enjoy your audio in peace, but quickly interact with your
                surroundings when you need to. Combined with Bluetooth 5. 0
                compliant connectivity and 17 hour battery life, the XX99 Mark
                II headphones gives you superior sound, cutting-edge technology,
                and a modern design aesthetic.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 md:w-87.5">
            <h3 className="text-[24px] text-[#000000] font-bold uppercase">
              in the box
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-[15px] text-[#00000050] font-normal text-left flex gap-8">
                <span className="text-[#D87D4A] font-bold">1x</span>Headphone
                Unit
              </p>
              <p className="text-[15px] text-[#00000050] font-normal text-left flex gap-8">
                <span className="text-[#D87D4A] font-bold">2x</span>Replacement
                Earcups
              </p>
              <p className="text-[15px] text-[#00000050] font-normal text-left flex gap-8">
                <span className="text-[#D87D4A] font-bold">1x</span>User Manual
              </p>
              <p className="text-[15px] text-[#00000050] font-normal text-left flex gap-8">
                <span className="text-[#D87D4A] font-bold">1x</span>3.5mm 5m
                Audio Cable
              </p>
              <p className="text-[15px] text-[#00000050] font-normal text-left flex gap-8">
                <span className="text-[#D87D4A] font-bold">1x</span>Travel Bag
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex flex-col gap-6">
            <img src={person} alt="" className="md:hidden" />
            <img src={personBig} alt="" className="hidden md:block" />
            <img src={headSet} alt="" className="md:hidden" />
            <img src={headsetBig} alt="" className="hidden md:block" />
          </div>
          <img src={lastHeadset} alt="" className="rounded-lg md:hidden" />
          <img src={lastHeadsetBig} alt="" className="hidden md:block" />
        </div>

        <div className="flex flex-col gap-40">
          <div className="flex flex-col gap-9">
            <h3 className="text-[24px] md:text-[32px] text-[#000000] font-bold uppercase">
              you may also like
            </h3>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex flex-col gap-9 items-center">
                <div className="bg-[#F1F1F1] w-94 md:w-87.5 md:h-79.5 rounded-lg flex items-center justify-center h-31.75">
                  <img src={blackHeadSet} alt="" className="md:hidden" />
                  <img
                    src={blackHeadSetBig}
                    alt=""
                    className="hidden md:block"
                  />
                </div>
                <p className="text-[24px] text-[#000000] font-bold">
                  XX99 MARK I
                </p>
                <button className="bg-[#D87D4A] w-40 md:w-87.5 items-center justify-center py-3 md:text-[16px] text-[13px] text-[#FFFFFF] font-bold  uppercase tracking-[1px]">
                  See Product
                </button>
              </div>

              <div className="flex flex-col gap-9 items-center">
                <div className="bg-[#F1F1F1] w-94 md:w-87.5 md:h-79.5  rounded-lg flex items-center justify-center h-31.75">
                  <img src={whiteHeadSet} alt="" className="md:hidden" />
                  <img
                    src={whiteHeadSetBig}
                    alt=""
                    className="hidden md:block"
                  />
                </div>
                <p className="text-[24px] text-[#000000] font-bold">XX59</p>
                <button className="bg-[#D87D4A] w-40 md:w-87.5 items-center justify-center py-3 md:text-[16px] text-[13px] text-[#FFFFFF] font-bold  uppercase tracking-[1px]">
                  See Product
                </button>
              </div>

              <div className="flex flex-col gap-9 items-center">
                <div className="bg-[#F1F1F1] w-94 md:w-87.5 md:h-79.5  rounded-lg flex items-center justify-center h-31.75">
                  <img src={blackSpeaker} alt="" className="md:hidden" />
                  <img
                    src={blackSpeakerBig}
                    alt=""
                    className="hidden md:block"
                  />
                </div>
                <p className="text-[24px] text-[#000000] font-bold">
                  ZX9 SPEAKER
                </p>
                <button className="bg-[#D87D4A] w-40 md:w-87.5 items-center justify-center py-3 text-[13px] md:text-[16px] text-[#FFFFFF] font-bold  uppercase tracking-[1px]">
                  See Product
                </button>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

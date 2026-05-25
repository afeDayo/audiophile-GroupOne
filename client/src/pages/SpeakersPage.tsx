import React from "react";
import mobileSpeaker from "../assets/m-mobile.png";
import mobileSpeak from "../assets/m-mobile-1.png";
import mobileHphone from "../assets/h-mobile.png";
import mobileEphone from "../assets/e-mobile.png";
import right from "../assets/right.png";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMiniH3, HiMinusSmall } from "react-icons/hi2";
import { FaDollarSign } from "react-icons/fa6";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import we from "../assets/we.png";
import { PiLessThanBold } from "react-icons/pi";

const SpeakersPage: React.FC = () => {
  return (
    <div className="mx-w-[420px] md:w-full md:m-auto mb-10 md:mb-20">
      <section className="text-[#FFFFFF] bg-[#000000] w-full h-35 text-[48px] font-normal mt-20 pt-12">
        SPEAKERS
      </section>
      <section className="md:grid md:grid-cols-2 md:m-auto md:max-w-[14400px] md:gap-20 md:mt-15">
        <div className="w-80 md:w-120 md:h-110 md:ps-28 md:pt-20 h-85 bg-[#F1F1F1] m-auto mt-15 pt-10 ps-15 rounded-md">
          <img src={mobileSpeaker} alt="" className="md:w-55" />
        </div>
        <div className="mt-15 pb-10 flex flex-col items-center gap-5 md:gap-2 md:items-start md:mt-25">
          <h3 className="text-[#D87D4A] text-[20px] font-normal tracking-[10px]">
            NEW PRODUCT
          </h3>
          <div className="md:flex md:flex-col md:items-start">
            <h2 className="text-[#000000] text-[38px] font-semibold">ZX9</h2>
            <h2 className="text-[#000000] text-[38px] font-semibold">
              SPEAKER
            </h2>
          </div>
          <p className="text-[#000000]/50 text-[18px] font-normal ps-5 pe-5 md:ps-0 md:pe-25 md:text-start">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <button className="mt-5 h-15 md:h-12 w-45 text-[17px] font-medium tracking-[1px] text-[#FFFFFF] bg-[#D87D4A]">
            SEE PRODUCT
          </button>
        </div>
      </section>
      <section className="md:grid md:grid-cols-2 md:m-auto md:max-w-[1100px] md:gap-5 md:mt-15">
        <div className="w-80 h-85 bg-[#F1F1F1] m-auto mt-15 pt-10 ps-20 md:w-120  md:h-110 md:ps-35 md:pt-20 md:order-2 rounded-md">
          <img src={mobileSpeak} alt="" className="md:w-55" />
        </div>
        <div className="mt-15 pb-10 flex flex-col items-center gap-5 md:gap-2 md:items-start md:order-1 md:mt-25">
          <div className="md:flex md:flex-col md:items-start">
            <h2 className="text-[#000000] text-[38px] font-semibold tracking-[3px]">
              ZX7
            </h2>
            <h2 className="text-[#000000] text-[38px] font-semibold tracking-[1px]">
              SPEAKER
            </h2>
          </div>
          <p className="text-[#000000]/50 text-[18px] font-normal ps-5 pe-5 md:ps-0 md:pe-8 md:text-start">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
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

      {/* ============================= */}

      {/* <p className="mt-20 ms-5 text-[#000000]/60 font-normal text-start text-[18px] md:hidden">
        Go Back
      </p>
      <div className="hidden mt-30 ms-25 md:flex items-center ">
        <p className="text-[#000000]/60 text-[20px] font-normal tracking-[1px]">
          Speakers
        </p>
        <PiLessThanBold />
        <p className="text-[#D87D4A] text-[20px] font-normal tracking-[1px]">
          ZX9 SPEAKER
        </p>
      </div>

      <div className="w-85 md:w-120 md:h-110 md:ps-28 md:pt-20 h-85 bg-[#F1F1F1] m-auto mt-8 pt-10 ps-15 rounded-md">
        <img src={mobileSpeaker} alt="" className="md:w-55" />
      </div>
      <section className="mt-15 text-start ms-5 flex flex-col gap-5">
        <h3 className="text-[#D87D4A] text-[16px] font-light tracking-[10px]">
          NEW PRODUCT
        </h3>
        <div className="md:flex md:flex-col md:items-start">
          <h2 className="text-[#000000] text-[38px] font-semibold">ZX9</h2>
          <h2 className="text-[#000000] text-[38px] font-semibold">SPEAKER</h2>
        </div>
        <p className="text-[#000000]/50 text-[18px] font-normal ps-0 pe-4 md:ps-0 md:pe-25 md:text-start">
          Upgrade your sound system with the all new ZX9 active speaker. It’s a
          bookshelf speaker system that offers truly wireless connectivity
          creating new possibilities for more pleasing and practical audio
          setups.
        </p>
        <div className="flex items-center gap-1">
          <FaDollarSign />
          <p className="text-[#000000] font-semibold text-[18px]">4,500</p>
        </div>
        <div className="flex gap-5">
          <button className="mt-5 h-13 md:h-12 w-33 text-[17px] font-medium tracking-[1px] text-[#000000] bg-[#F1F1F1] flex items-center justify-between px-4">
            <HiMinusSmall className="text-[#000000]/30 w-3" />
            1
            <AiOutlinePlus className="text-[#000000]/25 w-3" />
          </button>

          <button className="mt-5 h-13 md:h-12 w-45 text-[17px] font-medium tracking-[1px] text-[#FFFFFF] bg-[#D87D4A]">
            ADD TO CART
          </button>
        </div>
      </section>
      <div className="mt-20 ms-5 flex flex-col gap-6">
        <h2 className="text-[#000000] text-[28px] font-semibold text-start">
          FEATURES
        </h2>
        <p className="text-[#000000]/50 text-[18px] font-normal ps-0 pe-4 md:ps-0 md:pe-25 text-start">
          Connect via Bluetooth or nearly any wired source. This speaker
          features optical, digital coaxial, USB Type-B, stereo RCA, and stereo
          XLR inputs, allowing you to have up to five wired source devices
          connected for easy switching. Improved bluetooth technology offers
          near lossless audio quality at up to 328ft (100m).
        </p>
        <p className="text-[#000000]/50 text-[18px] font-normal ps-0 pe-4 md:ps-0 md:pe-25 text-start">
          Discover clear, more natural sounding highs than the competition with
          ZX9’s signature planar diaphragm tweeter. Equally important is its
          powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
          unit. You’ll be able to enjoy equal sound quality whether in a large
          room or small den. Furthermore, you will experience new sensations
          from old songs since it can respond to even the subtle waveforms.
        </p>
      </div>
      <div className="mt-20 ms-5 flex flex-col gap-8 ">
        <h2 className="text-[#000000] text-[28px] font-semibold text-start">
          IN THE BOX
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <p className="text-[#D87D4A] font-medium text-[20px]">2x</p>
            <p className="text-[#000000]/50 font-normal text-[20px]">
              Speaker Unit
            </p>
          </div>
          <div className="flex gap-5">
            <p className="text-[#D87D4A] font-medium text-[20px]">2x</p>
            <p className="text-[#000000]/50 font-normal text-[20px]">
              Speaker Cloth Panel
            </p>
          </div>
          <div className="flex gap-5">
            <p className="text-[#D87D4A] font-medium text-[20px]">1x</p>
            <p className="text-[#000000]/50 font-normal text-[20px]">
              User Manual
            </p>
          </div>
          <div className="flex gap-5">
            <p className="text-[#D87D4A] font-medium text-[20px]">1x</p>
            <p className="text-[#000000]/50 font-normal text-[20px]">
              3.5mm 10m Audio Cable
            </p>
          </div>
          <div className="flex gap-5">
            <p className="text-[#D87D4A] font-medium text-[20px]">1x</p>
            <p className="text-[#000000]/50 font-normal text-[20px]">
              10m Optical Cable
            </p>
          </div>
        </div>
      </div>
      <div className="mt-25 flex flex-col items-center gap-6">
        <img src={a} alt="" className="rounded-lg w-86" />
        <img src={b} alt="" className="rounded-lg w-86" />
        <img src={c} alt="" className="rounded-lg w-86" />
      </div>
      <h2 className="text-[#000000] text-[26px] font-semibold mt-25">
        YOU MAY ALSO LIKE
      </h2>
      <div className="mt-12 flex flex-col gap-20">
        <div className="flex flex-col items-center gap-8">
          <div className="w-85 h-35 bg-[#F1F1F1] m-auto pt-4.5 ps-35 md:w-120  md:h-110 md:ps-35 md:pt-20 md:order-2 rounded-lg">
            <img src={mobileSpeak} alt="" className="md:w-55 w-17 h-26" />
          </div>
          <h2 className="text-[#000000] text-[29px] font-semibold tracking-[2px]">
            ZX7 SPEAKER
          </h2>
          <button className="h-14 md:h-12 w-45 text-[16px] font-medium tracking-[1px] text-[#FFFFFF] bg-[#D87D4A]">
            SEE PRODUCT
          </button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-85 h-35 bg-[#F1F1F1] m-auto pt-4.5 ps-34 md:w-120  md:h-110 md:ps-35 md:pt-20 md:order-2 rounded-lg">
            <img src={mobileHphone} alt="" className="md:w-55 w-20 h-26" />
          </div>
          <h2 className="text-[#000000] text-[29px] font-semibold tracking-[2px]">
            XX99 MARK I
          </h2>
          <button className="h-14 md:h-12 w-45 text-[16px] font-medium tracking-[1px] text-[#FFFFFF] bg-[#D87D4A]">
            SEE PRODUCT
          </button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-85 h-35 bg-[#F1F1F1] m-auto pt-6 ps-34 md:w-120  md:h-110 md:ps-35 md:pt-20 md:order-2 rounded-lg">
            <img src={we} alt="" className="md:w-55 w-20 h-22" />
          </div>
          <h2 className="text-[#000000] text-[29px] font-semibold tracking-[2px]">
            XX59
          </h2>
          <button className="h-14 md:h-12 w-45 text-[16px] font-medium tracking-[1px] text-[#FFFFFF] bg-[#D87D4A]">
            SEE PRODUCT
          </button>
        </div>
      </div>
      <section className="flex flex-col gap-25 md:flex-row md:mt-30 md:w-[1110px] md:m-auto">
        <div className="relative bg-[#F1F1F1] m-auto mt-30 w-80 md:mt-0 md:h-45 md:gap-2 h-40 pt-20 flex flex-col items-center gap-3 rounded-md">
          <img
            src={mobileHphone}
            alt=""
            className="absolute -top-10 h-24 w-17"
          />
          <h3 className="font-medium text-[#000000] text-[18px] tracking-[1px]">
            HEADPHONES
          </h3>
          <div className="flex items-center gap-4">
            <p className="font-medium text-[#000000]/50 text-[17px]">SHOP</p>
            <img src={right} alt="" className="h-3 w-2" />
          </div>
        </div>
        <div className="relative bg-[#F1F1F1] m-auto w-80 md:h-45 md:gap-2 h-40 pt-20 flex flex-col items-center gap-3 rounded-md">
          <img
            src={mobileSpeaker}
            alt=""
            className="absolute -top-12 w-19 h-25"
          />
          <h3 className="font-medium text-[#000000] text-[18px] tracking-[1px]">
            SPEAKERS
          </h3>
          <div className="flex items-center gap-4">
            <p className="font-medium text-[#000000]/50 text-[17px]">SHOP</p>
            <img src={right} alt="" className="h-3 w-2" />
          </div>
        </div>
        <div className="relative bg-[#F1F1F1] m-auto w-80 md:h-45 md:gap-2 h-40 pt-20 flex flex-col items-center gap-3 rounded-md">
          <img src={mobileEphone} alt="" className="absolute -top-12 w-25" />
          <h3 className="font-medium text-[#000000] text-[18px] tracking-[1px]">
            EARPHONES
          </h3>
          <div className="flex items-center gap-4">
            <p className="font-medium text-[#000000]/50 text-[17px]">SHOP</p>
            <img src={right} alt="" className="h-3 w-2" />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SpeakersPage;

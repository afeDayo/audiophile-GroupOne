import React from "react";
import sms from "../assets/sms.png";
import lock from "../assets/lock.png";
import eyes from "../assets/eye.png";
import audio from "../assets/audio-ui-svgrepo-com 1.png";
import { Link } from "react-router-dom";
import bitmap from "../assets/Bitmap (2).png";
import headphone from "../assets/Group 13.png";
import speaker from "../assets/Bitmap (3).png";
import white from "../assets/Bitmap (5).png";
import bitmap4 from "../assets/Bitmap (4).png";
import whiteheadphone from "../assets/image-removebg-preview(48).png";

const LoginPage: React.FC = () => {
  return   <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="w-full max-w-350 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="flex items-center justify-center px-6 py-12 md:px-14">
            <div className="w-full max-w-125">
  
              <div className="flex items-center justify-center gap-3 mb-16">
  
                <div className="flex gap-1">
                  <img src={audio} alt="" />
                </div>
  
                <h1 className="text-sm tracking-[4px] font-semibold">
                  AUDIOPHILE
                </h1>
              </div>
  
              <h2 className="text-[28px]  font-bold text-[#1b1b1b] leading-100% text-start">
               Welcome Back
              </h2>
  
              <p className="text-gray-400 mt-4 text-sm md:text-base text-start font-normal text-[18px]">
             Your sound. Your space. Pick up right where you left off.
              </p>
  
              <form className="mt-10 space-y-6">
                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-start text-[18px]">
                    Email
                  </label>
  
                  <div className="flex items-center border border-gray-200 px-4 py-4 rounded-sm">
                    <img src={sms} alt="" className="text-gray-400" />
  
                    <input
                      type="email"
                      placeholder="Olawale@email.com"
                      className="w-full outline-none ml-3 text-gray-500"
                    />
                  </div>
                </div>
  
                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-start text-[18px]">
                    Password
                  </label>
  
                  <div className="flex items-center border border-gray-200 px-4 py-4 rounded-sm">
                    <img src={lock} alt="" className="text-gray-400" />
  
                    <input
                      type="password"
                      placeholder="*************"
                      className="w-full outline-none ml-3 text-gray-500"
                    />
  
                    <img
                      src={eyes}
                      alt=""
                      className="text-gray-400 cursor-pointer"
                    />
                  </div>
                </div>
  
                <div className="text-start">
                  <p>Forgot Password?</p>
                </div>
  
                <button className="w-full bg-[#D87D4A] hover:bg-[#c9783d] transition text-white font-semibold py-4 mt-2">
                  Sign In
                </button>
              </form>
  
              <p className="text-sm text-gray-400 mt-6 leading-6 text-start font-normal text-[14px]">
                By signing up, you agree to our
                <Link to="/" className="text-[#D87D4A] cursor-pointer">
                  Terms Of Service
                </Link>
                and
                <Link to="" className="text-[#D87D4A] cursor-pointer">
                  Privacy Policy
                </Link>
                .
              </p>
  
              <p className="mt-8 text-gray-600 text-start">
                New to the sound?
                <Link
                  to="/register"
                  className="text-[#D87D4A] font-normal text-[18px]"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
  
          <div className="bg-[#101010] p-7 hidden lg:grid grid-cols-2 gap-7">
            <div className="space-y-7">
              <img src={bitmap} alt="" className=" object-cover" />
  
              <img src={speaker} alt="" className=" object-cover" />
  
              <img src={white} alt="" className=" object-cover" />
            </div>
  
            <div className="space-y-9 pt-6">
              <img src={headphone} alt="" className="  object-cover" />
  
              <img src={bitmap4} alt="" className="  " />
  
              <img
                src={whiteheadphone}
                alt=""
                className="h-65.5 object-cover bg-[#F1F1F1]"
              />
            </div>
          </div>
        </div>
      </div>;
};

export default LoginPage;

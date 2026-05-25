import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { ImTwitter } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";

const Footer: React.FC = () => {
  return;
  <footer className=" bg-[#101010] py-12 px-6">
    <div>
      <h2>audiophile</h2>
      HOME HEADPHONES SPEAKERS EARPHONES
      <p></p>
      <p></p>
      <div className="text-[#FFFFFF] flex flex-row gap-6">
        <IoLogoFacebook />
        <ImTwitter />
        <IoLogoInstagram />
      </div>
    </div>
  </footer>;
};

export default Footer;

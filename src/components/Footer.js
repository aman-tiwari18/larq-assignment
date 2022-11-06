import React from "react";
import "./Footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
import whatsapp from "../assets/whatsapp.png";
const Footer = () => {
  return (
    <div className="bg-white  ">
      <hr className = "bg-blue-900 h-[2px]"/>
      <div className="font-semibold justify-evenly flex py-10">
        <div className="">
          <ul className="font-bold text-[18px]">Help</ul>
          <ul>FAQ</ul>
          <ul>Review</ul>
          <ul>My Account</ul>
          <ul>Corporate</ul>
          <ul>Contact Us</ul>
        </div>
        <div>
          <ul className="font-bold text-[18px]">Shop</ul>
          <ul>LARQ Purevis</ul>
          <ul>Gifts</ul>
          <ul>Travel sst</ul>
          <ul>Accessories</ul>
        </div>
        <div>
          <ul className="font-bold text-[18px]">About</ul>
          <ul>Magazine</ul>
          <ul>Press</ul>
          <ul>Our story</ul>
          <ul>Tech</ul>
        </div>
        <div>
          <div className="text-[20px] font-semibold">
            Sign up for the newsletter
          </div>
          <div className="flex justify-between flex items-center justify-center w-[500px] rounded-3xl px-1 pl-8 border-black  text-center py-1 mt-4 border-2">
            <input type="email" placeholder="Enter your email"
            className = "outline-0" />
            <div className="btcolor rounded-3xl text-center items-center flex justify-center border-1 border-gray-100 h-[40px] w-[100px]">
              <button className=" flex items-center justify-center text-white">
                  
                  SIGN UP
                  
                 
                  </button>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between btcolor text-white bottom-0 py-8  font-semibold flex px-10 ">
        <div>Copyright LARQ 2022</div>
        <div className="flex justify-between items-center  gap-4">
          <div className="h-[24px] w-[24px] flex justify-center items-center bg-white rounded-full">
            <img src={LinkedIn} alt="ll" width="12px" />
          </div>
          <div className="h-[24px] w-[24px] flex justify-center items-center bg-white rounded-full">
            <img src={facebook} alt="cap" width=" 8px" />
          </div>
          <div className="h-[24px] w-[24px] flex justify-center items-center bg-white rounded-full">
            <img src={twitter} alt="cap" width="12px" />
          </div>
          <div className="h-[24px] w-[24px] flex justify-center items-center bg-white rounded-full">
            <img src={whatsapp} alt="cap" width="12px" />
          </div>
        </div>
        <div className="flex  gap-12  justify-evenly">
          <div>T&C</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

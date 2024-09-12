import React, { useState } from "react";
import logo from "../assets/logo.png";

export const Navbar = () => {
 const [isNavOpen, setIsNavOpen] = useState(false);

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

 return (
  <div className="right-0 left-0 top-0 fixed">
   <div className="top-0 sticky backdrop-blur-sm z-[100] h-[100px] w-full flex items-center justify-center font-bold border-solid border-b-2 border-white">
    <div className="h-full w-[80vw] flex items-center justify-between xl:justify-between">
     <img
      src={logo}
      alt="Logo"
      onClick={() => {
       scrollToTop();
      }}
      className="w-[120px] md:w-[180px] delay-100 duration-300 "
     />
     <div className="hidden lg:flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between">
      <div className=" lg:block text-white">
       <a className="scrol-smooth" href="section2">
        <label className="mx-2 xl:mx-2 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
         ABOUT
        </label>
       </a>
       <a className="scrol-smooth" href="section3">
        <label className="mx-2 xl:mx-2 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
         COMMUNİCATİON
        </label>
       </a>
       <a className="scrol-smooth" href="section4">
        <label className="mx-2 xl:mx-2 text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
         ACCOUNTS
        </label>
       </a>
      </div>
     </div>
     {/* Mobile ekran için özellikler */}
     <div className="flex items-center mr-4 lg:hidden">
      <div className="block" onClick={() => setIsNavOpen(true)}>
       <img src={logo} alt="Logo" className="h-6 sm:h-7" />
      </div>
     </div>

     <div className="absolute  top-0 right-0 ">
      {isNavOpen === true ? (
       <div
        className=" h-screen w-screen bg-[#191970]/90 backdrop-blur lg:hidden"
        onClick={() => setIsNavOpen(false)}
       >
        <div className="flex h-screen flex-col items-center justify-center text-xl text-white">
         <>
          <a
           href="#section1"
           className="p-7  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 scroll-smooth"
          >
           ABOUT
          </a>
          <a
           href="#section2"
           className="p-7  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 scroll-smooth"
          >
           COMMUNİCATİON
          </a>
          <a
           href="#section3"
           className="p-7  drop-shadow-xl duration-200 hover:text-white/100 border-b-2 scroll-smooth"
          >
           ACCOUNTS
          </a>
         </>
        </div>
       </div>
      ) : (
       ""
      )}
     </div>
    </div>
   </div>
  </div>
 );
};
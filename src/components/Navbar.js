import React, { useState } from "react";
import menu from "../assets/menu.svg"


export const Navbar = () => {
 const [isNavOpen, setIsNavOpen] = useState(false);

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };

 return (
  <div className="fixed  right-0 left-0 top-0 ">
   <div className="bg-white/30 top-0 sticky z-[100] h-[100px] w-full flex items-center justify-center font-bold border-solid border-b-2 border-white">
    <div className="h-full w-[80vw] flex items-center justify-between xl:justify-between">
     {/* <img
      src={logo}
      alt="Logo"
      onClick={() => {
       scrollToTop();
      }}
      className="w-[130px] md:w-[200px] hover:scale-[1.1] delay-100 duration-300 "
     /> */}
     <h1 className="text-[#B6410F]">Gamze</h1>
     {/* Büyük ekran navgasyonlar */}
     <div className=" hidden lg:flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between">
      <div className=" lg:block ">
       <a className="scrol-smooth" href="#section2">
        <label className="mx-2 xl:mx-3 text-[#B6410F] text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
         ABOUT ME
        </label>
       </a>
       <a className="scrol-smooth" href="#section3">
        <label className="mx-2 xl:mx-2 text-[#B6410F] text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
         MY EXPRERİENCES
        </label>
       </a>
       <a className="scrol-smooth" href="#section4">
        <label className="mx-2 xl:mx-2 text-[#B6410F] text-[15px] xl:text-[16px] 2xl:text-[18px] inline-block hover:scale-[1.07] delay-100 duration-300">
        TECHNOLOGIES I USE
        </label>
       </a>
      </div>
     </div>
     {/* Mobile ekran için menu iconu */}
     <div className="flex items-center mr-4 lg:hidden">
      <div className="block" onClick={() => setIsNavOpen(true)}>
       <img src={menu} alt="Logo" className="h-6 sm:h-7 cursor-pointer" />
      </div>
     </div>

{/* Mobil ekran için açılan menu */}
     <div className="absolute  top-0 right-0 ">
      {isNavOpen === true ? (
       <div
        className=" h-screen w-screen bg-[#B6410F]/90 backdrop-blur lg:hidden"
        onClick={() => setIsNavOpen(false)}
       >
        <div className="text-[#ADBC9F] flex h-screen flex-col items-center justify-center text-xl ">
         <>
          <a
           href="#section2"
           className="p-7  drop-shadow-xl duration-200 hover:/100 border-b-2 scroll-smooth"
          >
           ABOUT ME
          </a>
          <a
           href="#section3"
           className="p-7  drop-shadow-xl duration-200 hover:/100 border-b-2 scroll-smooth"
          >
          MY EXPRERİENCES
          </a>
          <a
           href="#section4"
           className="p-7  drop-shadow-xl duration-200 hover:/100 border-b-2 scroll-smooth"
          >
        TECHNOLOGIES I USE
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
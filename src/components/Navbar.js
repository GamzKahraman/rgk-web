import React, { useState } from "react";

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        });
    };
}

// Hakkımda ve İletişim Kısmı

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
className= "w-[120px] md:w-[180px] delay-100 duration-300 "
/>
            </div>
        </div>
    </div>

)
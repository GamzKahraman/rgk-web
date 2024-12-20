import React from "react";  
import reactjs_logo from "../assets/react.svg"
import css_logo from "../assets/css.svg"
import html_logo from "../assets/html.svg"
import javascript_logo from "../assets/javascript.svg"

export const Section4 = () => {  
    const labelClass =  
        "text-justify my-2 mx-2 text-[1.5vh] sm:text-[2vh] md:w-[40vw] xl:text-[2.5vh] p-2 text-center";  

    return (  
        <section className=" bg-[#12372A] text-white flex flex-col" id="section4">  
            {/* Arka Plan */}  
            <div className="w-full h-[100px] bg-[#12372A]"></div>  
            <div className="w-full h-[90vh] flex flex-col justify-start sm:justify-center mx-4">  
                <div className="flex flex-col items-center h-full justify-center">  
                    {/* Metinlerin CSS Özellikleri */}  
                    <label className="text-center text-white bg-[#ADBC9F] shadow-2xl font-extrabold text-[3vh] sm:text-[3.5vh] lg:text-[4.3vh] h-fit xl:mb-5 px-2">  
                        {`TECHNOLOGIES I USE`}  
                    </label>  

                    <div className="flex flex-col md:flex-row md:justify-around">  
                         
                    </div>  

                    {/* Teknolojilerin İkonları */}  
                    <div className="flex flex-col md:flex-row md:justify-around mt-4">  
                        <img src={reactjs_logo} alt="React" className="tech-icon" />  
                        <img src={css_logo} alt="CSS" className="tech-icon" />  
                        <img src={html_logo} alt="HTML" className="tech-icon" />  
                        <img src={javascript_logo} alt="JavaScript" className="tech-icon" />  
                    </div>  
                </div>  
            </div>  
        </section>  
    );  
};  

// CSS (örneğin TechIcons.css dosyasında kullanılan)  
const techIconStyle = {  
    width: '50px',  // İkonların genişliği  
    height: '50px'  // İkonların yüksekliği  
};  

// Daha fazla stil uygulanabilir
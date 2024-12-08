import React from "react";
import kapsulImage from "../assets/kapsul.png";


export const Section3 = () => {
    const labelClass =
        "text-justify my-2 mx-2 text-[1.5vh] sm:text-[2vh] md:w-[40vw] xl:text-[2.5vh] p-4 text-center max-w-[600px] mx-auto bg-[#ADBC9F]";

    return (
        <section className="bg-[#12372A] text-white flex flex-col" id="section3">
            {/*Arka Plan*/}
            <div classsName="w-full h-[100px] bg-[#12372A]"></div>
            <div className="w-full h-[90vh] flex flex-col justify-start sm:justify-center mx-4">
                <div className="flex flex-col items-center h-full justify-center">



                    {/*Metinlerin CSS Özellikleri*/}
                    <label className="text-center text-white bg-[#ADBC9F] shadow-2xl font-extrabold text-[3vh] sm:text-[3.5vh] lg:text-[4.3vh] h-fit xl:mb-5 px-2" >
                        {'MY EXPRERİENCES'}
                    </label>

                    <div className="flex flex-col md:flex-row md:justify-around items-start">

                        {/* Logo ve Metin için Flex Container */}
                        <div className="flex items-start">
                            <img
                                src={kapsulImage}
                                alt="Kapsül Resmi"
                                className="w-[50px] h-auto mr-4"

                            />


                            <label className={labelClass}>
                                Hello, I am Gamze, I am a 3rd year high school student.
                                Since I started high school, I have decided that I am a
                                versatile person because I like to gain knowledge by
                                doing research in all kinds of fields. One of these areas
                                was web software. After my 10-week training on web software,
                                which I received through the private teaching institution
                                of the city I live in, my instructor noticed me and I voluntarily
                                entered the Capsule technology platform to improve myself, and
                                I am still learning new things here as a volunteer.

                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )


}
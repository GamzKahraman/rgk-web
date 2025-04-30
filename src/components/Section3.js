import React from "react";
import kapsulImage from "../assets/kapsul.png";


export const Section3 = () => {
    const labelClass =
        "text-justify my-2 mx-2 text-[1.5vh] sm:text-[2vh] md:w-[40vw] xl:text-[2.5vh] p-4 text-center max-w-[600px] mx-auto";

    return (
        <section className="bg-[#000000] text-white flex flex-col" id="section3">
            {/*Arka Plan*/}
            <div classsName="w-full h-[100px] bg-[#12372A]"></div>
            <div className="w-full h-[90vh] flex flex-col justify-start sm:justify-center mx-4">
                <div className="flex flex-col items-center h-full justify-center">



                    {/*Metinlerin CSS Özellikleri*/}
                    <label className="text-center text-white shadow-2xl font-extrabold text-[3vh] sm:text-[3.5vh] lg:text-[4.3vh] h-fit xl:mb-5 px-2" >
                        {'MY EXPRERİENCES'}
                    </label>

                    <div className="flex flex-col md:flex-row md:justify-around items-start">

                        {/* Logo ve Metin için Flex Container */}
                        <div className="flex items-start">
                            <img
                                src={kapsulImage}
                                alt="Kapsül Resmi"
                                className="w-[100px] h-auto mr-3"

                            />


                            <label className={labelClass}>
                                One of the areas that caught the attention of my versatile personality was web software. After the 10-week web training I received through the private tutoring center in the city I lived in, my teacher noticed my interest and suggested that I work voluntarily on the Capsule Technology platform to improve myself. I accepted this offer and joined the Capsule Technology Platform. I am currently volunteering here to improve myself in the frontend department and learning new things from the software developers on the staff.

                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )


}
import React from "react";



export const Section2 = () => {

    const labelClass =
        "text-justify my-2 mx-2 text-[1.5vh] sm:text-[2vh] md:w-[40vw] xl:text-[2.5vh] p-4 text-center max-w-[600px] mx-auto";

    return (
        <section className="bg-[#000000] text-white flex flex-col" id="section2">
            {/*Arka Plan*/}
            <div classsName="w-full h-[100px] bg-[#12372A]"></div>
            <div className="w-full h-[90vh] flex flex-col justify-start sm:justify-center mx-4">
                <div className="flex flex-col items-center h-full justify-center">
                    {/*Metinlerin CSS Özellikleri*/}
                    <label className="text-center text-white shadow-2xl font-extrabold text-[3vh] sm:text-[3.5vh] lg:text-[4.3vh] h-fit xl:mb-5 px-2" >
                        {`ABOUT ME`}
                    </label>

                    <div className="flex flex-col md:flex-row md:justify-end md:items-start">
                        <label className={labelClass}>
                            Hello, I am Gamze, a 3rd year high school student. From the moment I started high school, I decided that I was a versatile person because I have an adventurous personality that likes to research and gain knowledge in various fields. At the same time, I stand out with my talents such as public speaking, managing a group and organizing a plan and project. Naturally, I have a busy life. Some of the various branches that are in my area of ​​interest are: Cinematography, Web Software, Photography, Philosophy, Theater, Politics, Literature... etc. While I take professional steps for some of these fields, I continue to keep some of them in my life as a hobby that I like to research or do.
                            I can say that the fields that I am constantly working on and trying to become professional are literature, photography, software and politics.

                        </label>
                    </div>
                </div>

            </div>
        </section>
    )


}
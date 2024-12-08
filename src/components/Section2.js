import React from "react";



export const Section2 = () => {

    const labelClass =
        "text-justify my-2 mx-2 text-[1.5vh] sm:text-[2vh] md:w-[40vw] xl:text-[2.5vh] p-4 text-center max-w-[600px] mx-auto bg-[#ADBC9F]";

    return (
        <section className="bg-[#12372A] text-white flex flex-col" id="section2">
            {/*Arka Plan*/}
            <div classsName="w-full h-[100px] bg-[#12372A]"></div>
            <div className="w-full h-[90vh] flex flex-col justify-start sm:justify-center mx-4">
                <div className="flex flex-col items-center h-full justify-center">
                    {/*Metinlerin CSS Özellikleri*/}
                    <label className="text-center text-white bg-[#ADBC9F] shadow-2xl font-extrabold text-[3vh] sm:text-[3.5vh] lg:text-[4.3vh] h-fit xl:mb-5 px-2" >
                        {`ABOUT ME`}
                    </label>

                    <div className="flex flex-col md:flex-row md:justify-around">
                        <label className={labelClass}>
                            Hello, I am Gamze, I am a 3rd year high school student.
                            From the time I started high school, I decided that I was
                            a versatile person, because I like to gain knowledge by doing
                            research on all kinds of fields. One of these areas was web
                            software. After my teacher noticed me after the 10-week training
                            I received through the private teaching institution of the city
                            I live in, I entered the Capsule technology platform voluntarily
                            to improve myself, and I am still learning new things here as a volunteer.

                        </label>
                    </div>
                </div>

            </div>
        </section>
    )


}
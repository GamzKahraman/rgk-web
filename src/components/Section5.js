import React from "react";



export const Section5 = () => {

    const labelClass =
        "text-justify my-2 mx-2 text-[1.5vh] sm:text-[2vh] md:w-[40vw] xl:text-[2.5vh] p-4 text-center max-w-[600px] mx-auto";

    return (
        <section className="bg-[#000000] text-white flex flex-col" id="section5">
            {/*Arka Plan*/}
            <div classsName="w-full h-[100px] bg-[#12372A]"></div>
            <div className="w-full h-[90vh] flex flex-col justify-start sm:justify-center mx-4">
                <div className="flex flex-col items-center h-full justify-center">
                    {/*Metinlerin CSS Özellikleri*/}
                    <label className="text-center text-white shadow-2xl font-extrabold text-[3vh] sm:text-[3.5vh] lg:text-[4.3vh] h-fit xl:mb-5 px-2" >
                        {` ETC `}
                    </label>

                    <div className="flex flex-col md:flex-row md:justify-end md:items-start">
                        <label className={labelClass}>
                            BLA BLA BLA ...

                        </label>
                    </div>
                </div>

            </div>
        </section>
    )


}
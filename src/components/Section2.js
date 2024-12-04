import React from "react";


export const Section2 = () => {
    const labelClass =
        "text-justify my-2 mx-2 text-[1.5vh] sm:text-[2vh] md::w-[40vw] xl:text-[2.5vh] bg-[#06141B] p-2 text-center";

    return (
        <section className="bg-white text-white flex flex-col" id="section2">
            {/*Arka Plan*/}
            <div classsName="w-full h-[100px] bg-[#06141B]"></div>
            <div className="w-full h-[90vh] flex flex-col justify-start sm:justify-center mx-4">
            <div className="flex flex-col items-center h-full justify-center">
                {/*Metinlerin CSS Özellikleri*/}
                <label className="text-center text-white bg-[#06141B] shadow-2xl font-extrabold text-[3vh] sm:text-[3.5vh] lg:text-[4.3vh] h-fit xl:mb-5 px-2" >
                    {`ABOUT ME`}
                    </label>

                    <div className="flex flex-col md:flex-row md:justify-around">
                    <label className={labelClass}>
                    LOADİNG...

                    </label>
                    </div>
                </div>

            </div>
        </section>
    )


}
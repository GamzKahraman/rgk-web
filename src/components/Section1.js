import React, { useState } from "react";
export const Section1 = () => {
    const [isContunue, setIscontunue] = useState(false);

    const Section1 = () => {
        return (
            <section className="linear-gradient">
                <div className="flex flex-col items-center justify-center h-full w-full first-section-background bg-center bg-cover">
                    

                <TypeAnimation  
        sequence={[  
          "<Welcome My />\n<Portolio/>",  
          0,  
          () => {  
            setIsContinue(true);  
          },  
        ]}  
        speed={50} 
        deletionspeed={60} 
        repeat={0}   
      />  
</div>
            </section>
        );
    };
}




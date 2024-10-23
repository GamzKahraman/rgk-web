
import React, { useState } from "react";  
import { TypeAnimation } from 'react-type-animation';  

export const Section1 = () => {  
  const [isContinue, setIsContinue] = useState(false);  

  return (  
    <section className="linear-gradient">  
      <div className={'flex flex-col items-center justify-center h-full w-full first-section-background bg-center bg-cover'}>  
        <TypeAnimation  
          sequence={[  
            "<Welcome My />\n<Portfolio/>",   
            2000,   
            () => {  
              setIsContinue(true);  
            },  
          ]}  
         className="section-1  my-2 mx-4 text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] bg-[#9BA8AB] text-white text-center"
          speed={50}   
          deletionSpeed={60} 
          repeat={0}  
          cursor={false}
        />  
      </div>  
    </section>  
  );  
};






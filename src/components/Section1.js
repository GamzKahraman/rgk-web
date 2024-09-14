
import React, { useState } from "react";  
import { TypeAnimation } from 'react-type-animation';  

export const Section1 = () => {  
  const [isContinue, setIsContinue] = useState(false);  

  return (  
    <section className="linear-gradient">  
      <div className="flex flex-col items-center justify-center h-full w-full first-section-background bg-center bg-cover">  
        <TypeAnimation  
          sequence={[  
            "<Welcome My />\n<Portfolio/>",   
            2000,   
            () => {  
              setIsContinue(true);  
            },  
          ]}  
          speed={50}   
          deletionSpeed={60} 
          repeat={0}  
        />  
      </div>  
    </section>  
  );  
};






import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';  
import { IoMdCall } from 'react-icons/io'; 

const Footer = () => {  
    const phoneNumber = "+90 552 662 6442";   
    const email = "rumeysagamze42@gmail.com";

    return (
        <footer className="bg-[#12372A] text-white py-4">  
        <div className="container mx-auto text-center">  
            <div className="flex justify-center space-x-4 mb-4">  
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">  
                    <FaFacebookF size={24} />  
                </a>  
                <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">  
                    <FaTwitter size={24} />  
                </a>  
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">  
                    <FaLinkedinIn size={24} />  
                </a>  
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">  
                    <FaInstagram size={24} />  
                </a>  
            </div>  

            <div className="flex justify-center space-x-6">  
                <div className="flex items-center">  
                    <IoMdCall className="mr-2" size={20} />  
                    <span>{phoneNumber}</span>  
                </div>  
                <div className="flex items-center">  
                    <FiMail className="mr-2" size={20} />  
                    <span>{email}</span>  
                </div>  
            </div>  
        </div>  
    </footer>  




    );
};
 export default Footer;
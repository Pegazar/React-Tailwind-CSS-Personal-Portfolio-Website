import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='bg-[#1F242D] w-full py-10 px-4'>
      <div className='container'>
        <div className='flex items-center justify-center'>
          <div className='flex-1'>
            <p className='text-white'>Copyright 2025 All Rights Reserved By How To Dev.</p>
          </div>
          <div className='flex-1'>
            <div className='flex items-center justify-end'>
              <span 
                className='text-white border-2 border-[#00eeff] rounded-md cursor-pointer p-3 text-xl duration-300 hover:bg-[#00eeff]' 
                onClick={scrollToTop} // Tıklanınca fonksiyonu çağır
              >
                <FaArrowUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react'
import AboutImage from '../assets/about.png';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='bg-[#323946] w-full py-16'>
      <div className='container'>
        <div className='flex items-center xl:flex-row flex-col'>
          <div className='flex-1 xl:pb-0 pb-12'>
            <img className='xl:h-[520px] lg:h-[480px] md:h-[450px] h-[350px]' src={AboutImage} alt="" />
          </div>
          <div className='flex-1 px-4'>
            <h2 className='text-3xl font-semibold text-white mb-2'>About <span className='text-[#00eeff]'>Me</span></h2>
            <h3 className='text-xl font-semibold text-white mb-2'>Front-End Developer</h3>
            <p className='mb-5 xl:text-sm text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iste similique, sequi porro enim accusamus? Libero quod esse dolores sint quia repudiandae dignissimos, id dolore. Nostrum mollitia enim libero nobis quae aliquam rerum cumque impedit.</p>
            <Link className='bg-[#00eeff] rounded-full text-sm font-medium px-5 py-1.5 border-2 duration-300 border-[#00eeff] hover:text-white hover:bg-transparent hover:border-white' to="/">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
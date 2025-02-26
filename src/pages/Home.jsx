import React from 'react'
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from '../assets/portfolio.png';

const Home = () => {
  return (
    <div className='relative bg-cover bg-center min-h-screen'
      style={{ backgroundImage: 'url(./src/assets/bg.png)' }}>
      <div className="absolute top-0 left-0 w-full h-full bg-[#1F242D]/70 z-10"></div>
      <div className="container p-4 flex items-center justify-center min-h-screen xl:flex-row flex-col-reverse">
        <div className='flex-1 z-20 xl:pt-0 xl:pb-0 pb-16 px-4'>
          <h1 className='xl:text-[52px] text-[32px] font-medium text-white'>Lucas Reed</h1>
          <h2 className='xl:text-3xl text-xl font-medium text-white'>And I'm a <span className='text-[#00EEFF]'>Frontend Developer</span></h2>
          <p className='xl:text-sm text-xs pr-20 py-2 text-white'>I'm professional web developer with strong skill in HTML,
            CSS, JavaScript, Tailwind, React etc. I have working in this
            field almost 4 years and all projects are complited successfully
            with 100% client satisfiction.
          </p>
          <div className='flex items-center gap-5 pt-3'>
            <span className='social-icons'><FacebookOutlinedIcon /></span>
            <span className='social-icons'><LinkedInIcon /></span>
            <span className='social-icons'><EmailIcon /></span>
            <span className='social-icons'><GitHubIcon /></span>
          </div>
          <div className='flex items-center gap-7 pt-6'>
            <Link className='bg-[#00eeff] rounded-full text-sm font-medium px-5 py-1.5 border-2 duration-300 border-[#00eeff] hover:text-white hover:bg-transparent hover:border-white' to="/">Download CV</Link>
            <Link className='bg-[#00eeff] rounded-full text-sm font-medium px-5 py-1.5 border-2 duration-300 border-[#00eeff] hover:text-white hover:bg-transparent hover:border-white' to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <div className='flex-1 z-20 flex items-center justify-center xl:pt-0 pt-32'>
          <img className='xl:h-[520px] lg:h-[480px] md:h-[450px] h-[350px]' src={Image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
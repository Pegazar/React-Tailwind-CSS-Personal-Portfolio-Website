
import { Link } from "react-router-dom";
import { IoCodeSlash } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { BiSolidPaintRoll } from "react-icons/bi";

const Services = () => {
  return (
    <div className='bg-[#323946] w-full pt-16 pb-40'>
      <div className='container'>
        <h2 className='text-center text-3xl font-semibold text-white mb-16'>My <span className='text-[#00eeff]'>Services</span></h2>
        <div className='flex justify-center items-center flex-wrap gap-10'>
          <div className='w-[360px] flex items-center flex-col gap-6 px-6 py-10 text-center bg-[#1F242D] border-2 border-[#1F242D] rounded-xl hover:border-[#00eeff] duration-300'>
            <IoGlobeOutline style={{ color: "#00eeff", fontSize: "72px" }} />
            <h3 className='text-xl text-[#00eeff]'>Web Design</h3>
            <span className="text-sm text-white">I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction </span>
            <Link className='rounded-full text-sm font-medium px-5 py-1.5 border-2 border-[#00eeff] duration-300 text-[#00eeff] hover:border-white hover:text-white' to="/">Read More</Link>
          </div>
          <div className='w-[360px] flex items-center flex-col gap-6 px-6 py-10 text-center bg-[#1F242D] border-2 border-[#1F242D] rounded-xl hover:border-[#00eeff] duration-300'>
            <IoCodeSlash style={{ color: "#00eeff", fontSize: "72px" }} />
            <h3 className='text-xl text-[#00eeff]'>Web Development</h3>
            <span className="text-sm text-white">I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction </span>
            <Link className='rounded-full text-sm font-medium px-5 py-1.5 border-2 border-[#00eeff] duration-300 text-[#00eeff] hover:border-white hover:text-white' to="/">Read More</Link>
          </div>
          <div className='w-[360px] flex items-center flex-col gap-6 px-6 py-10 text-center bg-[#1F242D] border-2 border-[#1F242D] rounded-xl hover:border-[#00eeff] duration-300'>
            <BiSolidPaintRoll style={{ color: "#00eeff", fontSize: "72px" }} />
            <h3 className='text-xl text-[#00eeff]'>Graphic Design</h3>
            <span className="text-sm text-white">I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction </span>
            <Link className='rounded-full text-sm font-medium px-5 py-1.5 border-2 border-[#00eeff] duration-300 text-[#00eeff] hover:border-white hover:text-white' to="/">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";


const Contact = () => {
    return (
        <div className='bg-[#323946] w-full pt-16 pb-40'>
            <div className='container'>
                <h2 className='text-center text-3xl font-semibold text-white mb-16'>Contact <span className='text-[#00eeff]'>Me</span></h2>
                <div className="flex items-center xl:flex-row flex-col-reverse">
                    <div className="flex-1 xl:block flex flex-col xl:flex-row mt-20 xl:mt-0 px-10 xl:px-0">
                        <h1 className="text-white text-2xl font-medium z-50 mb-6">
                            <Link to="/">
                                Lucas <span className="text-[#00EEFF]">Reed</span>
                            </Link>
                        </h1>
                        <p className="text-sm text-white mb-10 xl:w-[80%] w-full">
                            I am professional Web designer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfiction
                        </p>
                        <div className="social flex items-center gap-12">
                            <Link className="text-[22px] text-white" to="/">
                                <BiSolidPhoneCall />
                            </Link>
                            <Link className="text-[22px] text-white" to="/">
                                <IoMail />
                            </Link>
                            <Link className="text-[22px] text-white" to="/">
                                <FaLinkedinIn />
                            </Link>
                            <Link className="text-[22px] text-white" to="/">
                                <IoLocationSharp />
                            </Link>
                            <Link className="text-[22px] text-white" to="/">
                                <RiFacebookFill />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <form className="flex flex-col gap-5">
                            <div className="flex items-center gap-5">
                                <input className="w-full h-[53px] text-white outline-none border-none bg-[#1F242D] rounded-xl px-5 placeholder:text-white" type="text" placeholder="First Name" />
                                <input className="w-full h-[53px] text-white outline-none border-none bg-[#1F242D] rounded-xl px-5 placeholder:text-white" type="text" placeholder="Last Name" />
                            </div>
                            <div className="flex items-center gap-5">
                                <input className="w-full h-[53px] text-white outline-none border-none bg-[#1F242D] rounded-xl px-5 placeholder:text-white" type="tel" placeholder="Phone" />
                                <input className="w-full h-[53px] text-white outline-none border-none bg-[#1F242D] rounded-xl px-5 placeholder:text-white" type="text" placeholder="Subject" />
                            </div>
                            <input className="h-[53px] text-white outline-none border-none bg-[#1F242D] rounded-xl px-5 placeholder:text-white" type="email" placeholder="Email" />
                            <textarea placeholder="Message" className="h-[117px] text-white outline-none border-none bg-[#1F242D] rounded-xl resize-none px-5 py-3 placeholder:text-white"></textarea>
                            <input className="h-[53px] text-white outline-none border-none cursor-pointer bg-[#1F242D] rounded-xl resize-none px-5 duration-300 hover:bg-[#00EEFF]" type="submit" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
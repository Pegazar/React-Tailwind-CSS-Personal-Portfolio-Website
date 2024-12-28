import React from 'react'
import htmlpng from '../assets/html.png';
import tailwindpng from '../assets/tailwind.png';
import reactpng from '../assets/react.png';
import photoshoppng from '../assets/photoshop.png';
import csspng from '../assets/css.png';
import javascriptpng from '../assets/javascript.png';
import figmapng from '../assets/figma.png';
import illustrator from '../assets/illustrator.png';

const Skills = () => {

    return (
        <div className='bg-[#1F242D] w-full pt-16 pb-40'>
            <div className='container'>
                <h2 className='text-center text-3xl font-semibold text-white mb-16'>My <span className='text-[#00eeff]'>Skills</span></h2>
                <div className='flex items-center xl:flex-row flex-col'>
                    <div className='flex-1 flex justify-center items-center flex-col gap-10 xl:mb-0 mb-10'>
                        <div className='flex items-center gap-5 xl:flex-row flex-col'>
                            <img src={htmlpng} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>HTML - 5</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[85%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>85%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 xl:flex-row flex-col'>
                            <img src={tailwindpng} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>Tailwind CSS</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[70%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>70%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center  gap-5 xl:flex-row flex-col'>
                            <img src={reactpng} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>React</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[55%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>55%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 xl:flex-row flex-col'>
                            <img src={photoshoppng} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>Adobe Photoshop</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[60%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>60%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center flex-col gap-10'>
                        <div className='flex items-center gap-5 xl:flex-row flex-col'>
                            <img src={csspng} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>CSS - 3</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[80%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>80%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 xl:flex-row flex-col'>
                            <img src={javascriptpng} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>Java Script</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[55%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>55%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 xl:flex-row flex-col'>
                            <img src={figmapng} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>Figma</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[80%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>80%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 xl:flex-row flex-col'>
                            <img src={illustrator} alt="" />
                            <div className='flex flex-col gap-2'>
                                <span className='text-white font-semibold text-md'>Adobe Illustrator</span>
                                <div className='bg-[#b4b6bb]/20 h-5 rounded-full flex xs:w-96 w-80 relative'>
                                    <div className='bg-[#00eeff] w-[65%] h-full rounded-full text-xs flex justify-end items-center text-white font-bold '><span className='absolute right-2'>65%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
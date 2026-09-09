


import { NavLink } from 'react-router-dom';
import banner from '../../../assets/ban7.png';
import { GoDownload } from "react-icons/go";
import { FaChevronCircleRight } from "react-icons/fa";

import resume from "../../../assets/Soheb Hossen_Software Developer.pdf"

const Banner = () => {


    return (
        <div className="lg:h-[570px]" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='md:flex justify-between'>
                <div className='w-[60%] lg:w-[50%] px-3 md:p-8 lg:p-20 pt-4 md:pt-10 lg:mt-16 '>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold pb-2 text-black'>
                        I'm <span className='text-[#548AA3]'>Md. Soheb Hossen</span>
                    </h1>
                    <p className='text-[#548AA3] text-[16px] md:text-xl pb-4 font-medium'>Full Stack Web Developer</p>
                    <p className='pb-4 text-white text-[10px] md:text-[16px]'>
                         Computer Science & Engineering graduate with hands-on experience in full-stack web development using React, Node.js, Express.js, and MongoDB. Experienced in developing responsive web applications, RESTful APIs, authentication systems, role-based access control, and database-driven applications. Currently working in IT & Support Services with practical experience in business software, system configuration, troubleshooting, and ERP workflows.

                    <div className='lg:flex gap-8'>
                        <a href={resume} download="Resume">
                            <button className='text-[12px] md:text-[16px] px-4 md:py-1 lg:py-2 border-2 border-[#548AA3] text-[#548AA3] bg-white font-medium hover:bg-[#548AA3] hover:text-white flex items-center mb-2 gap-2'>
                                Download Resume <GoDownload />
                            </button>
                        </a>

                        {/* <NavLink>
                            onClick={handleFileDownload}
                            <button className='text-[12px] md:text-[16px] px-4 md:py-1 lg:py-2 border-2 border-[#548AA3] text-[#548AA3] bg-white font-medium hover:bg-[#548AA3] hover:text-white flex items-center mb-2 gap-2' >
                                Download Resume <GoDownload />
                            </button>
                        </NavLink> */}
                        <NavLink to='/about'>
                            <button className='text-[12px] md:text-[16px] px-4 md:py-1 lg:py-2 border-2 border-[#548AA3] bg-[#548AA3] text-white font-medium hover:text-[#548AA3] hover:bg-white mb-2 flex items-center gap-2'>
                                More About Me <FaChevronCircleRight />
                            </button>
                        </NavLink>
                    </div>

                    {/* <div className='mt-4'>
                        <input type="file" onChange={handleFileChange} />
                        <button className='mt-2 text-[12px] md:text-[16px] px-4 md:py-1 lg:py-2 border-2 border-[#548AA3] text-[#548AA3] bg-white font-medium hover:bg-[#548AA3] hover:text-white' onClick={handleFileUpload}>
                            Upload File
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
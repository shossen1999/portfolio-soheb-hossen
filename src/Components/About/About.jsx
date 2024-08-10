
import { LuCornerDownRight } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { PiGraduationCap } from "react-icons/pi";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AOS from "aos";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className=" py-4 bg-white" >
            <Helmet>
                <title>About | Soheb Hossen</title>
            </Helmet>
            
            <div className='App '>
                <h1 className="mb-10 py-6 text-4xl font-medium text-center text-[#38657a]" >
                    {'___'}
                    <span>
                        <Typewriter
                            words={['About___']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
            {/* <h1 className="mb-16 text-4xl font-medium text-center text-[#548AA3]">___About Me___</h1> */}
            <div className="container mx-auto text-black bg-white md:flex md:gap-8 lg:gap-20 px-4 md:px-10 lg:px-20" data-aos="zoom-in-up">
                <div className="md:w-[60%]">
                    <h1 className="text-2xl font-semibold pb-8">Personal Information</h1>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Name: Soheb Hossen</p>

                    </div>
                    <div className="flex items-center gap-4 ">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl py-2">Address: Barishal, Bangladesh</p>
                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Email: <span className="text-blue-700 hover:underline">shossen1999@gmail.com</span> </p>

                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Mobile: +880 1609197055</p>

                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Nationality: Bangladeshi </p>
                    </div>
                    <div className="flex items-center gap-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Technical Experience: N/A </p>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                    <LuCornerDownRight className='text-[#548AA3] text-2xl'/>
                    <p className="text-xl  py-2">Language: Bangla, English, Hindi </p>
                    </div>
 
                </div>
                <div className="md:w-[40%]">
                    <h1 className="text-2xl font-semibold">Education</h1>
                        <ul className="steps steps-vertical">
                        <li>
                            <div className="flex">
                            <PiGraduationCap className="text-5xl" />
                            <p>___________________</p>
                            </div>
                            <p className="pl-16 text-[#548AA3]">2020-Present</p>
                            <p className="pl-16">Computer Science & Engineering:  University of Barishal</p>
                            <p className="pl-16">Expected Graduation: 2025</p>
                            <p className="pl-16">Current CGPA- 3.43</p>
                            </li>
                        <li>
                            <div className="flex">
                            <FaGraduationCap className="text-5xl text-[#548AA3]" />
                            <p>___________________</p>
                            </div>
                            <p className="pl-16 text-[#548AA3]">2019</p>
                            <p className="pl-16">Higher Secondary:  BCIC College</p>
                            <p className="pl-16">GPA- 4.81</p>
                            </li>
                            <li>
                            <div className="flex">
                            <FaGraduationCap className="text-5xl text-[#548AA3]" />
                            <p>___________________</p>
                            </div>
                            <p className="pl-16 text-[#548AA3]">2017</p>
                            <p className="pl-16">Secondary:  Kalir Bazar MR High School</p>
                            <p className="pl-16">GPA- 5.00</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
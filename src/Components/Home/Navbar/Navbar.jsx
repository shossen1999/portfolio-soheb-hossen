
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { GoProjectSymlink } from 'react-icons/go';
import { TfiEmail } from 'react-icons/tfi';
import { RiContactsLine } from 'react-icons/ri';

const Navbar = () => {
    const [tooltipText, setTooltipText] = useState('');
    const location = useLocation();

    const handleMouseEnter = (text) => {
        setTooltipText(text);
    };

    const handleMouseLeave = () => {
        setTooltipText('');
    };

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-10">
            <NavLink 
                to='/' 
                exact
                className={`relative flex justify-center items-center w-12 h-12 md:w-16 md:h-16 border border-black shadow-2xl transition-all ease-in-out duration-500 text-2xl 
                            ${location.pathname === '/' ? 'bg-[#548AA3] text-white' : 'bg-white hover:bg-[#548AA3] hover:text-white'}`}
                onMouseEnter={() => handleMouseEnter('Home')}
                onMouseLeave={handleMouseLeave}
            >
                <IoHomeOutline />
                {tooltipText === 'Home' && (
                    <div className="absolute right-full bg-[#548AA3] text-white px-3 py-2 md:py-4 shadow-lg z-10">
                        {tooltipText}
                    </div>
                )}
            </NavLink>
            <NavLink 
                to='/about' 
                className={`relative flex justify-center items-center w-12 h-12 md:w-16 md:h-16 border border-black shadow-2xl transition-all ease-in-out duration-500 text-2xl 
                            ${location.pathname === '/about' ? 'bg-[#548AA3] text-white' : 'bg-white hover:bg-[#548AA3] hover:text-white'}`}
                onMouseEnter={() => handleMouseEnter('About')}
                onMouseLeave={handleMouseLeave}
            >
                <RiContactsLine />
                {tooltipText === 'About' && (
                    <div className="absolute right-full  bg-[#548AA3] text-white px-3 py-2 md:py-4 shadow-lg z-10">
                        {tooltipText}
                    </div>
                )}
            </NavLink>
            <NavLink 
                to='/projects' 
                className={`relative flex justify-center items-center w-12 h-12 md:w-16 md:h-16 border border-black shadow-2xl transition-all ease-in-out duration-500 text-2xl 
                            ${location.pathname === '/projects' ? 'bg-[#548AA3] text-white' : 'bg-white hover:bg-[#548AA3] hover:text-white'}`}
                onMouseEnter={() => handleMouseEnter('Projects')}
                onMouseLeave={handleMouseLeave}
            >
                <GoProjectSymlink />
                {tooltipText === 'Projects' && (
                    <div className="absolute right-full bg-[#548AA3] text-white px-3 py-2 md:py-4 shadow-lg z-10">
                        {tooltipText}
                    </div>
                )}
            </NavLink>
            <NavLink 
                to='/contact' 
                className={`relative flex justify-center items-center w-12 h-12 md:w-16 md:h-16 border border-black shadow-2xl transition-all ease-in-out duration-500 text-2xl 
                            ${location.pathname === '/contact' ? 'bg-[#548AA3] text-white' : 'bg-white hover:bg-[#548AA3] hover:text-white'}`}
                onMouseEnter={() => handleMouseEnter('Contact')}
                onMouseLeave={handleMouseLeave}
            >
                <TfiEmail />
                {tooltipText === 'Contact' && (
                    <div className="absolute right-full bg-[#548AA3] text-white px-3 py-2 md:py-4 shadow-lg z-10">
                        {tooltipText}
                    </div>
                )}
            </NavLink>
        </div>
    );
};

export default Navbar;
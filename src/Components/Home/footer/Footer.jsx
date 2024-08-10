import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/soheb-hossen/', '_blank');
    };

    const openGitHub = () => {
        window.open('https://github.com/shossen1999', '_blank');
    };

    return (
        <footer className="footer footer-center bg-[#D9EDED] rounded px-10 py-6 text-black">
  <nav className="grid grid-flow-col gap-4">
    <NavLink to='about' className="link link-hover">About Me</NavLink>
    <NavLink to='contact' className="link link-hover">Contact</NavLink>
    
    
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      
      <div className=" flex justify-center space-x-4">
        {/*  onClick={openLinkedIn} */}
                    <button onClick={openLinkedIn}>
                        <FaLinkedin className="w-8 h-8 cursor-pointer text-[#3168df]" />
                    </button>
                    {/* onClick={openGitHub} */}
                    <button  onClick={openGitHub}>
                        <FaGithub className="w-8 h-8 cursor-pointer" />
                    </button>
                </div>
    </div>
  </nav>
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Hafsa Rashid</p>
  </aside>
</footer>
    );
};

export default Footer;
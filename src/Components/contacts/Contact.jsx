
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AOS from "aos";

const Contact = () => {
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/soheb-hossen/', '_blank');
    };

    const openGitHub = () => {
        window.open('https://github.com/shossen1999', '_blank');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            subject: event.target.subject.value,
            message: event.target.message.value,
        };
        
        try {
            const response = await fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Message sent successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });

                
                event.target.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to send message. Please try again later.",
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again later.",
            });
        }
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="bg-white  py-8 px-4 md:px-16">
            <Helmet>
                <title>Contact | Soheb Hossen</title>
            </Helmet>

            <div className='App '>
                <h1 className="mb-8 text-4xl font-medium text-center text-[#38657a]" >
                    {'___'}
                    <span>
                        <Typewriter
                            words={['Get In Touch___']}
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
            {/* <h1 className="mb-8 text-4xl font-medium text-center text-[#548AA3]">___Get In Touch___</h1> */}
            
            <div className=" container mx-auto lg:flex flex-col md:flex-row  items-center">
                {/* Contact Form */}
                <div className="w-full lg:w-1/2 p-6" data-aos="fade-right">
                {/*  */}
                    <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
                                id="name" 
                                name="name"
                                type="text" 
                                placeholder="Your name" 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                name="email"
                                type="email" 
                                placeholder="Your email" 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
                                id="subject" 
                                name="subject"
                                type="text" 
                                placeholder="Subject" 
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
                                id="message" 
                                name="message"
                                rows="5" 
                                placeholder="Your message"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                className="bg-[#548AA3] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                <div className="" data-aos="fade-left">
                    <p className="text-xl font-semibold">
                        Have questions or feedback?
                    </p>
                    <p className="text-xl font-semibold"> Feel free to get in touch with me. I'd love to hear from you!</p>
                    <p className="text-lg mt-4">
                    <div className='flex items-center gap-2'>
                    <AiOutlineMail />
                     <p className="text-blue-700">shossen1999@gmail.com</p><br />
                    </div>
                    <div className='flex items-center gap-2'>
                    <LuPhone />
                    <p> +880 1609197055</p>
                    </div>
                    </p>
                    <div className="mt-6 flex  space-x-4">
                        {/* onClick={openLinkedIn} */}
                        <button  onClick={openLinkedIn}>
                            <FaLinkedin className="w-8 h-8 cursor-pointer text-[#3168df]" />
                        </button>
                        {/* onClick={openGitHub} */}
                        <button onClick={openGitHub}>
                            <FaGithub className="w-8 h-8 cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
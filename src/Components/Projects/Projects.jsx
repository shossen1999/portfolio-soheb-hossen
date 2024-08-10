
import APIS from '../../assets/Alternative Product.png';
import journeyjunction from '../../assets/journeyjunction.png';
import nestopia from '../../assets/nestopia.png';
import banner from '../../assets/bg.jpg'
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import AOS from "aos";

const Projects = () => {
    const openModal = (id) => {
        document.getElementById(id).showModal();
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (


        <div className='md:h-[550px] pb-10' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Helmet>
                <title>Projects | Soheb Hossen</title>
            </Helmet>
            <div className=" container mx-auto">
                <div className='App '>
                    <h1 className="mb-16 py-8 text-4xl font-medium text-center text-[#38657a]" >
                        {'___'}
                        <span>
                            <Typewriter
                                words={['Projects___']}
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
                {/* <h1 className="mb-16 py-8 text-4xl font-medium text-center text-[#548AA3]">___My Projects___</h1> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10" data-aos="fade-left">
                    <div
                        className="relative  h-60 shadow-2xl bg-cover bg-center cursor-pointer"
                        style={{ backgroundImage: `url(${APIS})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        onClick={() => openModal('modal_APIS')}
                    >
                        <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                            <div className="text-white text-2xl font-bold">Alternative Product Information System</div>
                        </div>
                    </div>
                    <div
                        className="relative  h-60 shadow-2xl bg-cover bg-center cursor-pointer"
                        style={{ backgroundImage: `url(${journeyjunction})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        onClick={() => openModal('modal_journeyjunction')}
                    >
                        <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                            <div className="text-white text-2xl font-bold">Journey Junction</div>
                        </div>
                    </div>
                    <div
                        className="relative  h-60 shadow-2xl bg-cover bg-center cursor-pointer"
                        style={{ backgroundImage: `url(${nestopia})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        onClick={() => openModal('modal_nestopia')}
                    >
                        <div className="absolute inset-0 bg-[#548AA3] bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                            <div className="text-white text-2xl font-bold">Nestopia</div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center mt-8">
                
            </div> */}

                {/* Modals */}
                <dialog id="modal_APIS" className="modal">
                    <div className="modal-box w-full max-w-4xl">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Alternative Product Information System</h3>
                        <ul className="list-disc list-inside py-2">
                            <li><a href="https://alternative-product-5036a.web.app/" target="_blank" className="text-blue-500">Live URL</a></li>
                            <li><a href="https://github.com/shossen1999/Alternative-Product-Information-System-Client" target="_blank" className="text-blue-500">Client Code</a></li>
                            <li><a href="https://github.com/shossen1999/Alternative-Product-Information-System-Server" target="_blank" className="text-blue-500">Server Code</a></li>
                        </ul>
                        <p className="py-4">
                            Alternative Product Information System is  an interactive platform where users can manage and engage with queries and recommendations about alternative products, all while ensuring a visually appealing and user-friendly experience.
                        </p>
                        <h4 className="font-bold text-md">Key Concepts</h4>
                        <p className="py-2">
                            The key concept of the site is to create a visually appealing and interactive Alternative Product Information System, where users can add, update, delete, and view queries about products, as well as provide and manage recommendations, all while ensuring responsive design, proper alignment, and a focus on user experience.
                        </p>
                        <h4 className="font-bold text-md">Major Features</h4>
                        <ul className="list-disc list-inside py-2">
                            <li>Main role of Alternative Product Information System:The best aspect of the Alternative Product Information System is its ability to provide personalized and community-driven recommendations. Users can easily find alternatives to products they are interested in by viewing and contributing to queries, making it a valuable resource for discovering new options based on real user experiences and insights. This collaborative approach ensures that the information is up-to-date, diverse, and tailored to individual needs, enhancing the overall shopping experience.</li>
                            <li>User-Generated Queries and Recommendations: Users can add, update, delete, and view product-related queries, as well as provide and manage recommendations for alternative products.</li>
                            <li>Secure Authentication and Authorization: The site implements JWT-based authentication for secure login, including email/password and Google sign-in options, ensuring that private routes are protected and user sessions are maintained even after reloading.</li>
                        </ul>
                        <h4 className="font-bold text-md">Technologies Used</h4>
                        <ul className="list-disc list-inside py-2">
                            <li>Frontend: HTML, Tailwind CSS, React.js, JavaScript,Tanstack Query, JWT implementation</li>
                            <li>Backend: Node.js with Express.js, MongoDB, and middleware </li>
                            <li>Integration: Social login integration using Google and GitHub OAuth for seamless user authentication.</li>
                        </ul>
                    </div>
                </dialog>

                <dialog id="modal_journeyjunction" className="modal">
                    <div className="modal-box w-full max-w-4xl">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Journey Junction</h3>
                        <ul className="list-disc list-inside py-2">
                            <li><a href=" https://journey-junction-b03c2.web.app/" target="_blank" className="text-blue-500">Live URL</a></li>
                            <li><a href="https://github.com/shossen1999/Journey-Junction-client" target="_blank" className="text-blue-500">Client Code</a></li>
                            <li><a href="https://github.com/shossen1999/Journey-Junction-server" target="_blank" className="text-blue-500">Server Code</a></li>
                        </ul>
                        <p className="py-4">
                            The main motive of the site described  is to create a specialized tourism management website focused on a specific geographical region. The user must choose one category (such as Southeast Asia, Europe, etc.) and build a website that showcases various tourist spots within the countries of that selected region.
                        </p>
                        <h4 className="font-bold text-md">Key and Concepts</h4>
                        <p className="py-2">
                            The key concept of the site is to create a specialized tourism management platform that allows users to explore, manage, and interact with detailed information about tourist spots within a selected geographical region. The site focuses on providing a comprehensive and personalized experience, where users can Explore Tourist Spots,User Management,Responsive and Interactive Design
                            ,Data Specificity.The concept revolves around creating an organized, user-friendly platform for managing and showcasing tourism-related information within a focused regional context.
                        </p>
                        <h4 className="font-bold text-md">Key Features</h4>
                        <ul className="list-disc list-inside py-2">
                            <li>User Authentication and Interaction: It offers a seamless user experience with authentication features like login, register, and personalized profiles, allowing users to add, update, and delete tourist spots based on their preferences.</li>
                            <li>Dynamic Content Presentation: It presents dynamic content such as sliders showcasing tourist attractions, cards displaying tourist spots, and dropdown menus for sorting based on average cost, enhancing user engagement and navigation.</li>
                            <li>Add Tourist Spot : In this section i kept a route where user can add spot if he/she login to the site.</li>
                            <li>CRUD Operations and Database Integration: It integrates CRUD operations to manage tourist spot data efficiently, allowing users to add, view, update, and delete tourist spots while ensuring data integrity and security through database integration.</li>
                            <li>Review Section : In this section , we kept all the review been published by the user .</li>
                        </ul>
                        <h4 className="font-bold text-md">Technologies Used</h4>
                        <ul className="list-disc list-inside py-2">
                            <li>Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
                            <li>Backend: Node.js, Express.js, MongoDB</li>
                            <li>Authentication: Firebase, JWT</li>
                            <li>react-tooltip</li>
                        </ul>
                    </div>
                </dialog>

                <dialog id="modal_nestopia" className="modal">
                    <div className="modal-box w-full max-w-4xl">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Nestopia</h3>
                        <ul className="list-disc list-inside py-2">
                            <li><a href="https://nestopia-auth.web.app/" target="_blank" className="text-blue-500">Live URL</a></li>
                            <li><a href="https://github.com/programming-hero-web-course-4/b9a9-real-estate-shossen1999" target="_blank" className="text-blue-500">Source Code</a></li>
                           
                        </ul>
                        <p className="py-4">
                        The main motive of the site is to create a specialized real estate website that focuses exclusively on one property category, providing a tailored experience for users interested in that specific type of property.
                        </p>
                        <h4 className="font-bold text-md">Key Features</h4>
                        <ul className="list-disc list-inside py-2">
                            <li>User Authentication: The site provides a login and registration system with email/password and social media logins, enforcing password complexity and offering clear error messages for failed attempts.</li>
                            <li>Estate Listings and Details: It features a categorized estate section with detailed property listings, including images, descriptions, prices, and a "View Property" button that directs users to a protected estate details page.</li>
                            <li>Responsive Design: Cross-Device Compatibility: Ensures a seamless and consistent user experience across mobile, tablet, and desktop devices. Enhanced Accessibility: Adapts to various screen sizes and resolutions, making the platform accessible to a wider audience.</li>
                        </ul>
                        <h4 className="font-bold text-md">Technologies Used</h4>
                        <ul className="list-disc list-inside py-2">
                            <li>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js</li>
                            
                        </ul>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Projects;
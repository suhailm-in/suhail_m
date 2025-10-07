import React, { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ menu0pen, setMenuOpen}) => {

    useEffect(()=>{
        document.body.style.overflow = menu0pen ? "hidden" : "";
    }, [menu0pen]);

    return (
        <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
            <div className='max-w-5xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <a href="#home" className='font-poppins text-[22px] font-bold text-white'>
                        Suhail<span className='text-blue-500 font-poppins text-[22px] font-bold'>.m</span>
                    </a>

                    <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen((prev)=>!prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <HashLink to="/#home" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </HashLink>
                        <HashLink to="/#about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </HashLink>
                        {/* <HashLink to="/#experience" className="text-gray-300 hover:text-white transition-colors">
                            Experience
                        </HashLink> */}
                        <HashLink to="/#projects" className="text-gray-300 hover:text-white transition-colors">
                            Project
                        </HashLink>
                        {/* <HashLink to="/allarticles#articlespage" smooth className="text-gray-300 hover:text-white transition-colors">
                            Article
                        </HashLink> */}
                        <HashLink to="/#contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </HashLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
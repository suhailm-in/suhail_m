import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <footer className="relative">
            {/* Gradient Divider */}
            <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

            <div className="backdrop-blur-md bg-black/40">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left - Copy */}
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Suhail M. All Rights
                        Reserved.
                    </p>

                    {/* Middle - Quick Links */}
                    <ul className="flex gap-6 text-sm text-gray-400">
                        <li>
                            <HashLink
                                smooth
                                to="/#about"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                About
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/#experience"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Experience
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                smooth
                                to="/allprojects#projectspage"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                All Projects
                            </HashLink>
                        </li>
                        {/* <li>
                            <HashLink
                                smooth
                                to="/allarticles#articlespage"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                All Articles
                            </HashLink>
                        </li> */}
                    </ul>

                    {/* Right - Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/suhailm-in"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                        >
                            <FiGithub size={18} className="text-cyan-400" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/suhailm-in/"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                        >
                            <FiLinkedin size={18} className="text-cyan-400" />
                        </a>
                        <a
                            href="https://x.com/suhailm_in"
                            target="_blank"
                            className="p-2 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                        >
                            <FiTwitter size={18} className="text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

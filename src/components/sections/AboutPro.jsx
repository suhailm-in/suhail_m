import React, { useState } from "react";
import { ShieldCheck, Cpu, Rocket, Download } from "lucide-react";
// import profileImg from "../../assets/images/projects/ai_image01.jpg";
import profileImg from "../../assets/images/IMG_80237.JPG";
import PasswordModal from "../includes/PasswordModal";

const AboutPro = () => {

    const [showModal, setShowModal] = useState(false);
    const PASSWORD_KEY = import.meta.env.VITE_PASSWORD_KEY;

    const handleDownloadSuccess = () => {
        setShowModal(false);
        // Trigger CV download
        const link = document.createElement("a");
        link.href = "/suhailm_cv.pdf";
        link.download = "suhailm_cv.pdf";
        link.click();
    };
    
    return (
        <section
            id="aboutme"
            className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 overflow-hidden"
        >
            {/* Background Elements */}
            {/* <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div> */}

            <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Profile Image */}
                <div className="relative group">
                    <div className="relative w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-500">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    {/* Decorative Glow Ring */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/20 blur-xl animate-pulse"></div>
                </div>

                {/* Right - Content */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        About{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        I’m a{" "}
                        <span className="text-cyan-400 font-medium">
                            Cybersecurity Professional
                        </span>
                        ,
                        <span className="text-cyan-400 font-medium">
                            {" "}
                            Software Engineer
                        </span>
                        , and
                        <span className="text-cyan-400 font-medium">
                            {" "}
                            AI Enthusiast
                        </span>
                        , passionate about building secure, intelligent, and
                        innovative solutions that empower businesses and protect
                        the digital world.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        My focus is on{" "}
                        <span className="text-cyan-400">
                            offensive & defensive security
                        </span>
                        , scalable{" "}
                        <span className="text-cyan-400">
                            software architecture
                        </span>
                        , and leveraging{" "}
                        <span className="text-cyan-400">
                            AI-driven insights
                        </span>{" "}
                        to stay ahead in the ever-evolving tech landscape.
                    </p>
                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition text-center">
                            <ShieldCheck
                                className="mx-auto text-cyan-400 mb-2"
                                size={24}
                            />
                            <p className="text-2xl font-bold text-white">5+</p>
                            <span className="text-sm text-gray-400">
                                Years in Security
                            </span>
                        </div>
                        <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition text-center">
                            <Cpu
                                className="mx-auto text-cyan-400 mb-2"
                                size={24}
                            />
                            <p className="text-2xl font-bold text-white">50+</p>
                            <span className="text-sm text-gray-400">
                                Projects Built
                            </span>
                        </div>
                        <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition text-center">
                            <Rocket
                                className="mx-auto text-cyan-400 mb-2"
                                size={24}
                            />
                            <p className="text-2xl font-bold text-white">12+</p>
                            <span className="text-sm text-gray-400">
                                AI Experiments
                            </span>
                        </div>
                    </div>
                    {/* CV Button */}
                    <a
                        onClick={() => setShowModal(true)}
                        className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
                    >
                        <Download size={18} /> Download CV
                    </a>
                </div>
            </div>
            {/* Modal */}
            <PasswordModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSuccess={handleDownloadSuccess}
                correctPassword={PASSWORD_KEY}
            />
        </section>
    );
};

export default AboutPro;

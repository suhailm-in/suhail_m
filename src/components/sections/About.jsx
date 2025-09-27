import React, { useState } from "react";
import { ShieldCheck, Cpu, Rocket, Download } from "lucide-react";
import PasswordModal from "../includes/PasswordModal";

const AboutMe = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDownloadSuccess = () => {
        setShowModal(false);
        // Trigger CV download
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "resume.pdf";
        link.click();
    };

    return (
        <section
            id="about"
            className="relative bg-transparent py-20"
        >
            {/* Background Elements */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div> */}

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* --- Centered Title --- */}
                <h2 className="text-4xl font-bold mb-16 text-center">
                    About{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>

                {/* --- Main Grid --- */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT SIDE - CONTENT */}
                    <div>
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
                            innovative solutions that empower businesses and
                            protect the digital world.
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
                                <p className="text-2xl font-bold text-white">
                                    5+
                                </p>
                                <span className="text-sm text-gray-400">
                                    Years in Security
                                </span>
                            </div>
                            <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition text-center">
                                <Cpu
                                    className="mx-auto text-cyan-400 mb-2"
                                    size={24}
                                />
                                <p className="text-2xl font-bold text-white">
                                    50+
                                </p>
                                <span className="text-sm text-gray-400">
                                    Projects Built
                                </span>
                            </div>
                            <div className="p-4 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition text-center">
                                <Rocket
                                    className="mx-auto text-cyan-400 mb-2"
                                    size={24}
                                />
                                <p className="text-2xl font-bold text-white">
                                    12+
                                </p>
                                <span className="text-sm text-gray-400">
                                    AI Experiments
                                </span>
                            </div>
                        </div>

                        {/* CV Button */}
                        <button
                            onClick={() => setShowModal(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
                        >
                            <Download size={18} /> Download CV
                        </button>
                    </div>

                    {/* RIGHT SIDE - SKILLS GRID */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition">
                            <div className="flex items-start gap-4">
                                <div className="p-4 rounded-full bg-cyan-500/10">
                                    <ShieldCheck className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Cybersecurity Professional
                                    </h4>
                                    <p className="text-gray-400 text-sm mt-2">
                                        Expertise in offensive & defensive
                                        security, threat detection, and network
                                        hardening to protect modern
                                        infrastructures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition">
                            <div className="flex items-start gap-4">
                                <div className="p-4 rounded-full bg-cyan-500/10">
                                    <Cpu className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Software Engineer
                                    </h4>
                                    <p className="text-gray-400 text-sm mt-2">
                                        Building scalable, high-performance
                                        applications with modern architectures
                                        and secure coding practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition">
                            <div className="flex items-start gap-4">
                                <div className="p-4 rounded-full bg-cyan-500/10">
                                    <Rocket className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        AI Enthusiast
                                    </h4>
                                    <p className="text-gray-400 text-sm mt-2">
                                        Applying machine learning and AI-driven
                                        insights to enhance security solutions
                                        and develop innovative technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <PasswordModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSuccess={handleDownloadSuccess}
                correctPassword="secure123"
            />
        </section>
    );
};

export default AboutMe;

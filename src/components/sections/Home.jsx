import React from "react";
import { ArrowRight, ArrowRightCircle, Download } from "lucide-react";

const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-transparent py-20"
        >
            {/* Decorative Background */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div> */}

            <div className="relative z-10 text-center max-w-3xl px-6">
                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Suhail
                    </span>
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                    A{" "}
                    <span className="text-cyan-400 font-medium">
                        Cybersecurity Professional
                    </span>
                    ,{" "}
                    <span className="text-cyan-400 font-medium">
                        Software Engineer
                    </span>
                    , and{" "}
                    <span className="text-cyan-400 font-medium">
                        AI Enthusiast
                    </span>{" "}
                    building secure, intelligent, and modern web solutions for
                    the digital world.
                </p>

                {/* Buttons */}
                <div className="flex justify-center flex-wrap gap-4">
                    {/* <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:scale-105 transition-transform duration-300"
          >
            Explore Projects <ArrowRight size={18} />
          </a> */}
                    <a
                        href="#projects"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
                    >
                        Explore Projects <ArrowRightCircle size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;

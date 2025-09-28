import React from "react";
import { ArrowDownCircle } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
const Home = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-transparent py-20"
        >
            {/* Decorative Background */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div> */}

            <div className="relative z-10 text-center max-w-sm sm:max-w-lg px-6 md:max-w-3xl">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Hello, I'm{" "}
                    <span className="font-poppins bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Suhail
                    </span>
                </h1>

                {/* Description */}
                {/* <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                    A
                    <span className="text-cyan-400 font-medium">
                        Cybersecurity Professional
                    </span>
                    ,
                    <span className="text-cyan-400 font-medium">
                        Software Engineer
                    </span>
                    , and
                    <span className="text-cyan-400 font-medium">
                        AI Enthusiast
                    </span>
                    building secure, intelligent, and modern web solutions for
                    the digital world.
                </p> */}
                <p className="text-gray-300 text-lg font-medium md:text-xl mb-8 leading-relaxed">
                    <span className="inline-block align-top text-xl mr-1">
                        <RiDoubleQuotesL />
                    </span>
                    Turning complex challenges into elegant solutions. where
                    <span className="text-cyan-400 font-medium">
                        {" "}
                        creativity
                    </span>
                    ,
                    <span className="text-cyan-400 font-medium">
                        {" "}
                        security
                    </span>{" "}
                    and
                    <span className="text-cyan-400 font-medium">
                        {" "}
                        innovation
                    </span>{" "}
                    converge to shape the future.
                    <span className="inline-block align-top text-xl ml-1">
                        <RiDoubleQuotesR />
                    </span>
                </p>

                {/* Buttons */}
                <div className="flex justify-center flex-wrap gap-4">
                    <HashLink
                        to="#about"
                        smooth
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
                    >
                        Explore More <ArrowDownCircle size={18} />
                    </HashLink>
                </div>
            </div>
        </section>
    );
};

export default Home;

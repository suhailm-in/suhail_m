import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import projects from "../../assets/data/projectsData.json";
import { HashLink } from "react-router-hash-link";

const Project = () => {
    return (
        <section
            id="projects"
            className="relative min-h-screen py-24 bg-transparent"
            //   className="relative min-h-screen py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Creative Works
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        {/* A showcase of selected projects that blend security,
                        innovation, and performance crafted to deliver
                        premium user experiences. */}
                        {/* A curated collection of projects demonstrating
                        innovation, security, and high-performance solutions
                        designed for exceptional user experiences.  */}
                        Experience is not just what you know, but how effectively you turn knowledge into results.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="break-inside-avoid p-4 rounded-2xl bg-gradient-to-br from-gray-800/70 via-gray-900/60 to-black/60 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="pt-5">
                                <h3 className="text-xl font-semibold mb-2 text-white/90">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 transition"
                                        >
                                            <ExternalLink
                                                size={18}
                                                className="text-cyan-400"
                                            />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 transition"
                                        >
                                            <Github
                                                size={18}
                                                className="text-cyan-400"
                                            />
                                        </a>
                                    </div>

                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all duration-300"
                                    >
                                        View <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center mt-16">
                    <HashLink
                        to="/allprojects#projectspage"
                        smooth
                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10 hover:gap-4 transition-all duration-300"
                    >
                        Explore All Projects <ArrowRight size={18} />
                    </HashLink>
                </div>
            </div>
        </section>
    );
};

export default Project;

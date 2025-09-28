import React, { useState } from "react";
import projects from "../../assets/data/projectsData.json";
import { ExternalLink, Github } from "lucide-react";

const ProjectPage = () => {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Web", "AI", "Cybersecurity"];

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((p) => p.category === filter);
    const featuredProject = filteredProjects[0];
    const otherProjects = filteredProjects.slice(1);

    return (
        <section id="projectspage" className="relative bg-transparent py-20">
            <div className="max-w-6xl mx-auto px-4 pt-14">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Projects Showcase
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                        {/* A curated selection of my best work blending innovation,
                        performance, and user-focused design. */}
						A curated collection of projects demonstrating
                        innovation, security, and high-performance solutions
                        designed for exceptional user experiences. 
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full border transition-colors ${
                                filter === cat
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent"
                                    : "border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={project.id}
                            className={`relative rounded-xl overflow-hidden group shadow-lg backdrop-blur-sm border border-cyan-500/10 bg-gradient-to-br from-gray-800/70 via-gray-900/60 to-black/60 transition hover:scale-105 duration-300 ${
                                idx === 0 ? "md:col-span-2" : ""
                            }`}
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-72 object-cover rounded-t-xl"
                            />

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Tags (Optional) */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-cyan-400 hover:text-cyan-200 transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-cyan-400 hover:text-cyan-200 transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;

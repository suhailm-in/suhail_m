import React from "react";
import { CheckCircle2, Layers, Server, Terminal } from "lucide-react";

const skills = [
    {
        category: "Frontend Development",
        icon: <Layers size={28} />,
        items: [
            { name: "HTML", level: "Experienced" },
            { name: "CSS / SASS", level: "Experienced" },
            { name: "JavaScript (ES6+)", level: "Advanced" },
            { name: "TypeScript", level: "Intermediate" },
            { name: "React / Next.js", level: "Advanced" },
            { name: "Material UI / Tailwind", level: "Intermediate" },
        ],
    },
    {
        category: "Backend & Tools",
        icon: <Server size={28} />,
        items: [
            { name: "Node.js", level: "Advanced" },
            { name: "Express.js", level: "Intermediate" },
            { name: "PostgreSQL / MongoDB", level: "Intermediate" },
            { name: "REST API & GraphQL", level: "Intermediate" },
            { name: "Git / GitHub", level: "Advanced" },
            { name: "CI/CD & Docker", level: "Basic" },
        ],
    },
    {
        category: "Cybersecurity & AI",
        icon: <Terminal size={28} />,
        items: [
            { name: "Penetration Testing", level: "Advanced" },
            { name: "Threat Detection & SOC", level: "Experienced" },
            { name: "Secure Coding Practices", level: "Experienced" },
            { name: "AI-driven Security Models", level: "Intermediate" },
            { name: "ML for Threat Analysis", level: "Intermediate" },
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="relative bg-transparent py-20">
            {/* Decorative Background */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div> */}

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="uppercase tracking-widest text-cyan-400 text-sm">
                        Explore My
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Experience
                    </h2>
                    <p className="mt-4 text-gray-400 text-base max-w-xl mx-auto">
                        A blend of skills in frontend, backend, cybersecurity,
                        and AI to build secure and innovative solutions.
                    </p>
                </div>

                {/* Experience Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition duration-300 group hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-cyan-400">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    {skill.category}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <ul className="space-y-4">
                                {skill.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                                    >
                                        <CheckCircle2
                                            className="text-cyan-400"
                                            size={20}
                                        />
                                        <div>
                                            <p className="font-medium">
                                                {item.name}
                                            </p>
                                            <span className="text-sm text-gray-400">
                                                {item.level}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Arrow to Projects */}
                {/* <div className="flex justify-center mt-16">
                    <a
                        href="#projects"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:scale-110 transition-transform"
                    >
                        ↓
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Experience;

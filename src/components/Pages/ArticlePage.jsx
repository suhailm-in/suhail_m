import React from "react";
import { ArrowRight } from "lucide-react";
import articles from "../../assets/data/articlesData.json";

const ArticlePage = () => {
    const featured = articles.find((item) => item.featured);
    const others = articles.filter((item) => !item.featured);

    return (
        <section id="articles" className="bg-transparent py-20">
            <div className="max-w-6xl mx-auto px-4 pt-14">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {/* Insights & Articles */} Knowledge Hub
                </h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
                    Explore in-depth articles, insights, and trends in
                    cybersecurity, software development, and AI innovations.
                </p>

                {/* Featured Article */}
                {featured && (
                    <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl group hover:shadow-cyan-500/30 transition duration-500 bg-gradient-to-br from-gray-800/70 via-gray-900/60 to-black/60 backdrop-blur-md">
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-96 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-8">
                            <span className="text-sm text-cyan-300 opacity-80">
                                {featured.date} • by {featured.author}
                            </span>
                            <h3 className="text-3xl font-bold text-white mt-2">
                                {featured.title}
                            </h3>
                            <p className="text-gray-300 mt-4 max-w-2xl">
                                {featured.description}
                            </p>
                            <a
                                href={featured.readMoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-200 font-medium transition"
                            >
                                Read Full Article <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                )}

                {/* Other Articles Grid - 2 Columns */}
                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                    {others.map((article) => (
                        <div
                            key={article.id}
                            className="break-inside-avoid rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/70 via-gray-900/60 to-black/60 backdrop-blur-md border border-cyan-500/10 shadow-lg group hover:shadow-cyan-500/20 hover:-translate-y-2 transition duration-300"
                        >
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-5">
                                <div className="flex items-center text-sm text-cyan-300 mb-2">
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{article.author}</span>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {article.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                    {article.description}
                                </p>

                                <a
                                    href={article.readMoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-200 font-medium transition-colors duration-300"
                                >
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticlePage;

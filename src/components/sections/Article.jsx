import React from "react";
import { ArrowRight } from "lucide-react";
import articles from "../../assets/data/articlesData.json";

const Article = () => {
  const featured = articles.find((item) => item.featured);
  const others = articles.filter((item) => !item.featured);

  return (
    <section id="articles" className="bg-transparent py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Insights & Articles
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14">
          Fresh perspectives on cybersecurity, software engineering, and the evolving role of AI in shaping the future.
        </p>

        {/* Featured Article */}
        {featured && (
          <div className="relative rounded-xl overflow-hidden shadow-xl mb-16 group">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-[400px] object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-sm opacity-80">{featured.date} • by {featured.author}</span>
              <h3 className="text-3xl font-semibold mt-2">{featured.title}</h3>
              <p className="text-gray-200 max-w-2xl mt-2">{featured.description}</p>
              <a
                href={featured.readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-cyan-300 hover:text-cyan-200 font-medium"
              >
                Read Full Article <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}

        {/* Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((article) => (
            <div
              key={article.id}
              className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>by {article.author}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {article.description}
                </p>

                <a
                  href={article.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 border border-blue-400 text-blue-500 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300"
            href="#articles"
          >
            View All Articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Article;

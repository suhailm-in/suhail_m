import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

      <div className="backdrop-blur-md bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left - Copy */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Suhail M. All Rights Reserved.
          </p>

          {/* Middle - Quick Links */}
          <ul className="flex gap-6 text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Right - Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="p-2 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
            >
              <Github size={18} className="text-cyan-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
            >
              <Linkedin size={18} className="text-cyan-400" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
            >
              <Twitter size={18} className="text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 overflow-hidden"
    >
      {/* Floating Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      {/* <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-ping"></div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let’s Connect
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I’d love to hear from you. 
            Drop a message and I’ll get back to you soon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <Mail className="text-cyan-400" size={20} />
                  hello@yourdomain.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-cyan-400" size={20} />
                  +1 234 567 890
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={20} />
                  Dubai, UAE
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                >
                  <Github className="text-cyan-400" size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                >
                  <Linkedin className="text-cyan-400" size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                >
                  <Twitter className="text-cyan-400" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

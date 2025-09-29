import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaDev, FaMediumM } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import {
    FiLinkedin,
    FiMapPin,
    FiPhone,
    FiSend,
    FiTwitter,
} from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import AlertBox from "../includes/AlertBox";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [alert, setAlert] = useState({
        show: false,
        type: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((response) => {
                setAlert({
                    show: true,
                    type: "success",
                    message: "Message Sent Successfully!",
                });
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setAlert({ show: false }), 4000);
            })
            .catch(() => {
                setAlert({
                    show: true,
                    type: "error",
                    message: "Something went wrong. Please try again.",
                });
                setTimeout(() => setAlert({ show: false }), 4000);
            });
    };

    return (
        <section
            id="contact"
            className="relative py-24 bg-transparent"
            // className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 overflow-hidden"
        >
            {/* AlertBox */}
            <AlertBox
                show={alert.show}
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert({ show: false })}
            />

            {/* Floating Gradient Blobs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Let’s Connect
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I’d love
                        to hear from you. Drop a message and I’ll get back to
                        you soon.
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
                                    <MdOutlineMail
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                    suhailm.online@gmail.com
                                </li>
                                <li className="flex items-center gap-3">
                                    <FiPhone
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                    +91 123 456 7890
                                </li>
                                <li className="flex items-center gap-3">
                                    <FiMapPin
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                    kerala, India
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10 hover:border-cyan-500/30 transition">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Follow Me
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/suhailm-in"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                                >
                                    <LuGithub
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/suhailm-in/"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                                >
                                    <FiLinkedin
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                </a>
                                {/* <a
                                    href="https://x.com/suhailm_in"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                                >
                                    <FiTwitter
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                </a> */}
                                <a
                                    href="https://medium.com/@suhail-m"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                                >
                                    <FaMediumM
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                </a>
                                <a
                                    href="https://leetcode.com/u/suhailm-in/"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                                >
                                    <SiLeetcode
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                </a>
                                <a
                                    href="https://dev.to/suhailm"
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition"
                                >
                                    <FaDev
                                        className="text-cyan-400"
                                        size={20}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="p-6 rounded-xl backdrop-blur-md bg-white/5 border border-cyan-500/10">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                placeholder="Your Name"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                placeholder="Your Email"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                            />
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows="5"
                                placeholder="Your Message"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-cyan-500/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition"
                            >
                                Send Message <FiSend size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
